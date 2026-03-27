const express = require('express');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const sharp = require('sharp');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Config ---
// On Amvera, /data is persistent storage that survives redeploys.
// Locally, fall back to project directory.
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || fs.existsSync('/data');
const PERSIST_DIR = IS_PRODUCTION ? '/data' : path.join(__dirname, 'data');
const UPLOAD_DIR = IS_PRODUCTION
  ? '/data/uploads'
  : path.join(__dirname, 'public', 'images', 'uploads');

const DATA_FILE = path.join(PERSIST_DIR, 'products.json');
const SETTINGS_FILE = path.join(PERSIST_DIR, 'settings.json');
const ORDERS_FILE = path.join(PERSIST_DIR, 'orders.json');

// Ensure directories exist
[PERSIST_DIR, UPLOAD_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// On first production deploy, seed persistent storage with bundled data
if (IS_PRODUCTION) {
  const bundledDataDir = path.join(__dirname, 'data');
  if (fs.existsSync(bundledDataDir)) {
    ['products.json', 'settings.json', 'orders.json'].forEach(file => {
      const dest = path.join(PERSIST_DIR, file);
      const src = path.join(bundledDataDir, file);
      if (!fs.existsSync(dest) && fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    });
  }
}

// --- Middleware ---
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// In production, serve uploaded images from persistent storage
if (IS_PRODUCTION) {
  app.use('/images/uploads', express.static(UPLOAD_DIR));
}

// --- Multer (file uploads) ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const name = crypto.randomBytes(8).toString('hex') + ext;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowed.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Допустимы только изображения: JPG, PNG, WebP'));
    }
  }
});

// --- Auth helpers ---
function authMiddleware(req, res, next) {
  const sessionToken = req.cookies?.admin_session;
  if (sessionToken && sessionToken === getSessionToken()) {
    return next();
  }
  return res.status(401).json({ error: 'Необходима авторизация' });
}

let _sessionToken = null;
let _sessionExpiry = 0;

function getSessionToken() {
  if (!_sessionToken || Date.now() > _sessionExpiry) {
    _sessionToken = crypto.randomBytes(32).toString('hex');
    _sessionExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  }
  return _sessionToken;
}

// --- Settings helpers ---
function readSettings() {
  if (!fs.existsSync(SETTINGS_FILE)) return { password: 'gallery2025' };
  return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
}

function writeSettings(settings) {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), 'utf8');
}

function getPassword() {
  return readSettings().password || 'gallery2025';
}

// --- Data helpers ---
function readData() {
  if (!fs.existsSync(DATA_FILE)) return { paintings: [], lampwork: [] };
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function generateId(type) {
  const data = readData();
  const items = type === 'painting' ? data.paintings : data.lampwork;
  const prefix = type === 'painting' ? 'p' : 'l';
  let maxNum = 0;
  items.forEach(item => {
    const num = parseInt(item.id.replace(prefix, ''), 10);
    if (num > maxNum) maxNum = num;
  });
  return prefix + (maxNum + 1);
}

// --- Orders helpers ---
function readOrders() {
  if (!fs.existsSync(ORDERS_FILE)) return { orders: [], copyRequests: [] };
  return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8'));
}

function writeOrders(data) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// --- Auth routes ---
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === getPassword()) {
    const token = getSessionToken();
    res.cookie('admin_session', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict'
    });
    return res.json({ ok: true });
  }
  return res.status(401).json({ error: 'Неверный пароль' });
});

app.post('/api/admin/logout', (req, res) => {
  res.clearCookie('admin_session');
  _sessionToken = null;
  res.json({ ok: true });
});

app.get('/api/admin/check', authMiddleware, (req, res) => {
  res.json({ ok: true });
});

// --- Public data route (for the main site) ---
app.get('/api/products', (req, res) => {
  res.json(readData());
});

// --- Admin CRUD routes ---

// Get all products (admin)
app.get('/api/admin/products', authMiddleware, (req, res) => {
  res.json(readData());
});

// Upload image
app.post('/api/admin/upload', authMiddleware, upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Файл не загружен' });

  const originalPath = req.file.path;
  const ext = path.extname(req.file.filename);
  const baseName = path.basename(req.file.filename, ext);

  // Create optimized version with sharp
  try {
    const optimizedName = baseName + '.jpg';
    const optimizedPath = path.join(UPLOAD_DIR, optimizedName);

    await sharp(originalPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(optimizedPath);

    // Remove original if different from optimized
    if (originalPath !== optimizedPath) {
      fs.unlinkSync(originalPath);
    }

    const imageUrl = 'images/uploads/' + optimizedName;
    res.json({ url: imageUrl });
  } catch (err) {
    // If sharp fails, use original
    const imageUrl = 'images/uploads/' + req.file.filename;
    res.json({ url: imageUrl });
  }
});

// Add product
app.post('/api/admin/products', authMiddleware, (req, res) => {
  const data = readData();
  const { type, ...product } = req.body;

  if (type === 'painting') {
    product.id = generateId('painting');
    data.paintings.push(product);
  } else {
    product.id = generateId('lampwork');
    data.lampwork.push(product);
  }

  writeData(data);
  res.json({ ok: true, id: product.id });
});

// Update product
app.put('/api/admin/products/:id', authMiddleware, (req, res) => {
  const data = readData();
  const { id } = req.params;
  const updates = req.body;

  let found = false;
  ['paintings', 'lampwork'].forEach(list => {
    const idx = data[list].findIndex(p => p.id === id);
    if (idx !== -1) {
      data[list][idx] = { ...data[list][idx], ...updates };
      found = true;
    }
  });

  if (!found) return res.status(404).json({ error: 'Товар не найден' });
  writeData(data);
  res.json({ ok: true });
});

// Delete product
app.delete('/api/admin/products/:id', authMiddleware, (req, res) => {
  const data = readData();
  const { id } = req.params;

  let found = false;
  ['paintings', 'lampwork'].forEach(list => {
    const idx = data[list].findIndex(p => p.id === id);
    if (idx !== -1) {
      // Delete associated image if it's an upload
      const item = data[list][idx];
      if (item.image && item.image.startsWith('images/uploads/')) {
        const imgPath = path.join(__dirname, 'public', item.image);
        if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
      }
      data[list].splice(idx, 1);
      found = true;
    }
  });

  if (!found) return res.status(404).json({ error: 'Товар не найден' });
  writeData(data);
  res.json({ ok: true });
});

// --- Settings API ---

// Get settings (public — for the site to render texts)
app.get('/api/settings', (req, res) => {
  const settings = readSettings();
  // Don't expose password
  const { password, ...publicSettings } = settings;
  res.json(publicSettings);
});

// Get settings (admin — includes everything except password)
app.get('/api/admin/settings', authMiddleware, (req, res) => {
  const settings = readSettings();
  const { password, ...rest } = settings;
  res.json(rest);
});

// Update settings
app.put('/api/admin/settings', authMiddleware, (req, res) => {
  const settings = readSettings();
  const updates = req.body;
  // Merge updates (don't allow password change through this endpoint)
  const { password, ...rest } = updates;
  Object.assign(settings, rest);
  writeSettings(settings);
  res.json({ ok: true });
});

// Change password
app.post('/api/admin/change-password', authMiddleware, (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!newPassword || newPassword.length < 4) {
    return res.status(400).json({ error: 'Пароль должен быть не менее 4 символов' });
  }
  if (currentPassword !== getPassword()) {
    return res.status(401).json({ error: 'Неверный текущий пароль' });
  }
  const settings = readSettings();
  settings.password = newPassword;
  writeSettings(settings);
  // Reset session so user needs to re-login with new password
  _sessionToken = null;
  _sessionExpiry = 0;
  res.json({ ok: true });
});

// --- Orders API (public — anyone can submit) ---
app.post('/api/orders', (req, res) => {
  const { name, contact, message, items, lang } = req.body;
  if (!name || !contact || !items || !items.length) {
    return res.status(400).json({ error: 'Заполните имя, контакт и выберите товар' });
  }
  const data = readOrders();
  const order = {
    id: 'o' + (data.orders.length + 1) + '-' + Date.now().toString(36),
    name, contact, message: message || '',
    items, // [{id, title, size, price}]
    lang: lang || 'ru',
    status: 'new',
    notes: '',
    createdAt: new Date().toISOString()
  };
  data.orders.push(order);
  writeOrders(data);
  res.json({ ok: true, id: order.id });
});

app.post('/api/copy-requests', (req, res) => {
  const { name, contact, message, paintingId, paintingTitle, paintingSize, lang } = req.body;
  if (!name || !contact || !paintingId) {
    return res.status(400).json({ error: 'Заполните имя и контакт' });
  }
  const data = readOrders();
  const request = {
    id: 'cr' + (data.copyRequests.length + 1) + '-' + Date.now().toString(36),
    name, contact, message: message || '',
    paintingId, paintingTitle: paintingTitle || '', paintingSize: paintingSize || '',
    lang: lang || 'ru',
    status: 'new',
    notes: '',
    createdAt: new Date().toISOString()
  };
  data.copyRequests.push(request);
  writeOrders(data);
  res.json({ ok: true, id: request.id });
});

// --- Orders API (admin) ---
app.get('/api/admin/orders', authMiddleware, (req, res) => {
  const data = readOrders();
  res.json(data);
});

app.put('/api/admin/orders/:id', authMiddleware, (req, res) => {
  const data = readOrders();
  const { id } = req.params;
  const updates = req.body;

  // Search in both lists
  let found = false;
  ['orders', 'copyRequests'].forEach(list => {
    const idx = data[list].findIndex(o => o.id === id);
    if (idx !== -1) {
      data[list][idx] = { ...data[list][idx], ...updates };
      found = true;
    }
  });

  if (!found) return res.status(404).json({ error: 'Заказ не найден' });
  writeOrders(data);
  res.json({ ok: true });
});

app.delete('/api/admin/orders/:id', authMiddleware, (req, res) => {
  const data = readOrders();
  const { id } = req.params;

  let found = false;
  ['orders', 'copyRequests'].forEach(list => {
    const idx = data[list].findIndex(o => o.id === id);
    if (idx !== -1) {
      data[list].splice(idx, 1);
      found = true;
    }
  });

  if (!found) return res.status(404).json({ error: 'Заказ не найден' });
  writeOrders(data);
  res.json({ ok: true });
});

// --- Translation ---
app.post('/api/admin/translate', authMiddleware, async (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) return res.json({ en: '', cn: '' });

  try {
    const [en, cn] = await Promise.all([
      translateText(text, 'ru', 'en'),
      translateText(text, 'ru', 'zh-CN')
    ]);
    res.json({ en, cn });
  } catch (e) {
    res.json({ en: '', cn: '' });
  }
});

async function translateText(text, from, to) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  const data = await response.json();
  // Response format: [[["translated","original",...],...],...]
  return data[0].map(s => s[0]).join('');
}

// --- Serve admin SPA ---
app.get('/admin', (req, res) => {
  res.redirect('/admin/');
});

// --- Start ---
// On Vercel, export the app; locally, listen on PORT
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(`\n  🎨 Галерея Ирины Кречетовой`);
    console.log(`  Сайт:    http://localhost:${PORT}`);
    console.log(`  Админка: http://localhost:${PORT}/admin`);
    console.log(`  Пароль:  ${getPassword()}\n`);
  });
}
