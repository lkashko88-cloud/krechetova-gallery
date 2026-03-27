/* ==========================================
   ADMIN PANEL — Галерея Ирины Кречетовой
   ========================================== */

const API = '/api/admin';
let products = { paintings: [], lampwork: [] };
let editingId = null;
let editingType = null;
let currentModalType = 'painting'; // 'painting' or 'lampwork'
let uploadedImageUrl = null;

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

const DEFAULT_PAINTING_CATEGORIES = [
  { value: 'landscapes', label: 'Пейзажи' },
  { value: 'still-life', label: 'Натюрморты' },
  { value: 'flowers', label: 'Цветы' },
  { value: 'portraits', label: 'Портреты' },
  { value: 'animals', label: 'Животные' },
  { value: 'large-format', label: 'Большой формат' },
];

const DEFAULT_LAMPWORK_CATEGORIES = [
  { value: 'bracelets', label: 'Браслеты' },
  { value: 'brooches', label: 'Броши' },
  { value: 'necklaces', label: 'Колье' },
  { value: 'pendants', label: 'Кулоны' },
  { value: 'rings', label: 'Кольца' },
  { value: 'sets', label: 'Комплекты' },
  { value: 'christmas', label: 'Ёлочные игрушки' },
];

// Build category list: defaults + any custom ones found in products
function getCategories(type) {
  const defaults = type === 'painting' ? DEFAULT_PAINTING_CATEGORIES : DEFAULT_LAMPWORK_CATEGORIES;
  const items = type === 'painting' ? products.paintings : products.lampwork;
  const knownValues = new Set(defaults.map(c => c.value));
  const extra = [];

  items.forEach(item => {
    if (item.category && !knownValues.has(item.category)) {
      knownValues.add(item.category);
      extra.push({ value: item.category, label: item.categoryLabel || item.category });
    }
  });

  return [...defaults, ...extra];
}

// ==================== HELPERS ====================
function slugify(text) {
  const ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const en = 'abvgdeejzijklmnoprstufhcchshshy_eua';
  let result = text.toLowerCase();
  for (let i = 0; i < ru.length; i++) {
    result = result.split(ru[i]).join(en[i] || '');
  }
  return result.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

// ==================== AUTH ====================
async function checkAuth() {
  try {
    const res = await fetch(`${API}/check`, { credentials: 'include' });
    if (res.ok) {
      showAdmin();
      return true;
    }
  } catch (e) {}
  showLogin();
  return false;
}

function showLogin() {
  $('#loginScreen').style.display = '';
  $('#adminPanel').style.display = 'none';
}

function showAdmin() {
  $('#loginScreen').style.display = 'none';
  $('#adminPanel').style.display = '';
  loadProducts();
  loadSettings();
  loadOrders();
}

$('#loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = $('#loginPassword').value;
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
    credentials: 'include'
  });

  if (res.ok) {
    showAdmin();
  } else {
    $('#loginError').textContent = 'Неверный пароль';
    $('#loginPassword').value = '';
    $('#loginPassword').focus();
  }
});

$('#logoutBtn').addEventListener('click', async () => {
  await fetch(`${API}/logout`, { method: 'POST', credentials: 'include' });
  showLogin();
  $('#loginPassword').value = '';
});

// ==================== LOAD & RENDER ====================
async function loadProducts() {
  try {
    const res = await fetch(`${API}/products`, { credentials: 'include' });
    if (!res.ok) { showLogin(); return; }
    products = await res.json();
    renderAll();
  } catch (e) {
    showToast('Ошибка загрузки данных');
  }
}

function renderAll() {
  renderGrid('paintings');
  renderGrid('lampwork');
  updateStats();
}

function renderGrid(type) {
  const grid = $(`#${type === 'paintings' ? 'paintingsGrid' : 'lampworkGrid'}`);
  const items = type === 'paintings' ? products.paintings : products.lampwork;

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>
        <p>Пока ничего нет</p>
      </div>`;
    return;
  }

  grid.innerHTML = items.map(item => {
    const title = typeof item.title === 'object' ? item.title.ru : item.title;
    const safeTitle = title.replace(/"/g, '&quot;');
    const price = new Intl.NumberFormat('ru-RU').format(item.price) + ' ₽';
    const imgHTML = item.image
      ? `<img class="product-card-image" src="/${item.image}" alt="${safeTitle}" loading="lazy">`
      : `<div class="product-card-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div>`;

    return `
      <div class="product-card" data-id="${item.id}" data-type="${type}">
        ${imgHTML}
        <div class="product-card-body">
          <div class="product-card-title">${safeTitle}</div>
          <div class="product-card-meta">${item.size}${item.sold ? '<span class="product-card-sold">Продано</span>' : ''}</div>
          <div class="product-card-price">${price}</div>
          <div class="product-card-actions">
            <button class="btn btn-outline btn-sm" data-action="edit">Изменить</button>
            <button class="btn btn-ghost btn-sm" data-action="delete" style="color:var(--danger)">Удалить</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function updateStats() {
  $('#statPaintings').textContent = products.paintings.length;
  $('#statLampwork').textContent = products.lampwork.length;
  const sold = [...products.paintings, ...products.lampwork].filter(i => i.sold).length;
  $('#statSold').textContent = sold;
}

// ==================== MODAL ====================
function openModal(type, item = null) {
  currentModalType = type;
  editingId = item ? item.id : null;
  editingType = type;

  // Title
  if (item) {
    $('#modalTitle').textContent = type === 'painting' ? 'Редактировать картину' : 'Редактировать украшение';
  } else {
    $('#modalTitle').textContent = type === 'painting' ? 'Добавить картину' : 'Добавить украшение';
  }

  // Show/hide type-specific fields
  $('#paintingFields').style.display = type === 'painting' ? '' : 'none';
  $('#lampworkFields').style.display = type === 'lampwork' ? '' : 'none';

  // Categories
  const cats = getCategories(type);
  $('#fieldCategory').innerHTML = cats.map(c =>
    `<option value="${c.value}">${c.label}</option>`
  ).join('') + '<option value="__new__">+ Новая категория</option>';
  $('#customCategoryGroup').style.display = 'none';
  $('#fieldCustomCategory').value = '';

  // Fill form if editing
  if (item) {
    const title = typeof item.title === 'object' ? item.title : { ru: item.title, en: '', cn: '' };
    $('#fieldTitleRu').value = title.ru || '';
    $('#fieldTitleEn').value = title.en || '';
    $('#fieldTitleCn').value = title.cn || '';
    $('#fieldSize').value = item.size || '';
    $('#fieldPrice').value = item.price || '';
    $('#fieldCategory').value = item.category || '';
    $('#fieldSold').checked = !!item.sold;

    if (type === 'painting') {
      $('#fieldYear').value = item.year || '';
      $('#fieldTechnique').value = (item.technique && item.technique.ru) || '';
    } else {
      $('#fieldMaterial').value = (item.material && item.material.ru) || '';
    }

    if (item.image) {
      uploadedImageUrl = item.image;
      $('#uploadPreview').src = '/' + item.image;
      $('#uploadPreview').style.display = '';
      $('#uploadPlaceholder').style.display = 'none';
    } else {
      resetUpload();
    }
  } else {
    resetForm();
  }

  $('#productModal').classList.add('open');
}

function closeModal() {
  $('#productModal').classList.remove('open');
  editingId = null;
  editingType = null;
  resetForm();
}

function resetForm() {
  $('#productForm').reset();
  resetUpload();
  $('#fieldTitleEn').dataset.manual = '';
  $('#fieldTitleCn').dataset.manual = '';
}

function resetUpload() {
  uploadedImageUrl = null;
  $('#uploadPreview').style.display = 'none';
  $('#uploadPlaceholder').style.display = '';
  $('#imageInput').value = '';
}

// ==================== IMAGE UPLOAD ====================
const uploadArea = $('#uploadArea');
const imageInput = $('#imageInput');

uploadArea.addEventListener('click', () => imageInput.click());

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) uploadFile(file);
});

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) uploadFile(file);
});

async function uploadFile(file) {
  // Show preview immediately
  const reader = new FileReader();
  reader.onload = (e) => {
    $('#uploadPreview').src = e.target.result;
    $('#uploadPreview').style.display = '';
    $('#uploadPlaceholder').style.display = 'none';
  };
  reader.readAsDataURL(file);

  // Upload to server
  const formData = new FormData();
  formData.append('image', file);

  try {
    const res = await fetch(`${API}/upload`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    uploadedImageUrl = data.url;
    showToast('Фото загружено');
  } catch (e) {
    showToast('Ошибка загрузки фото');
    resetUpload();
  }
}

// ==================== AUTO TRANSLATE ====================
let translateTimer = null;

$('#fieldTitleRu').addEventListener('input', () => {
  clearTimeout(translateTimer);
  translateTimer = setTimeout(autoTranslate, 800);
});

async function autoTranslate() {
  const text = $('#fieldTitleRu').value.trim();
  if (!text) return;

  // Don't overwrite if user already typed something manually
  const enField = $('#fieldTitleEn');
  const cnField = $('#fieldTitleCn');

  try {
    // Show loading hint
    if (!enField.value) enField.placeholder = 'Перевожу...';
    if (!cnField.value) cnField.placeholder = 'Перевожу...';

    const res = await fetch(`${API}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
      credentials: 'include'
    });

    if (!res.ok) return;
    const { en, cn } = await res.json();

    // Only fill if user hasn't typed manually
    if (!enField.dataset.manual) enField.value = en;
    if (!cnField.dataset.manual) cnField.value = cn;

    enField.placeholder = 'Spring in the Garden';
    cnField.placeholder = '花园里的春天';
  } catch (e) {
    enField.placeholder = 'Spring in the Garden';
    cnField.placeholder = '花园里的春天';
  }
}

// Mark fields as manually edited
$('#fieldTitleEn').addEventListener('input', function() {
  this.dataset.manual = this.value ? '1' : '';
});
$('#fieldTitleCn').addEventListener('input', function() {
  this.dataset.manual = this.value ? '1' : '';
});

// ==================== CATEGORY SELECT ====================
$('#fieldCategory').addEventListener('change', function() {
  const isNew = this.value === '__new__';
  $('#customCategoryGroup').style.display = isNew ? '' : 'none';
  if (isNew) $('#fieldCustomCategory').focus();
});

// ==================== SAVE PRODUCT ====================
$('#productForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Resolve category
  let category = $('#fieldCategory').value;
  if (category === '__new__') {
    const custom = $('#fieldCustomCategory').value.trim();
    if (!custom) {
      showToast('Введите название категории');
      $('#fieldCustomCategory').focus();
      return;
    }
    // Slug from label: transliterate and lowercase
    category = slugify(custom);
    if (!category) category = 'custom-' + Date.now();
  }

  const customLabel = $('#fieldCategory').value === '__new__' ? $('#fieldCustomCategory').value.trim() : '';

  const type = currentModalType;
  const product = {
    title: {
      ru: $('#fieldTitleRu').value.trim(),
      en: $('#fieldTitleEn').value.trim() || $('#fieldTitleRu').value.trim(),
      cn: $('#fieldTitleCn').value.trim() || $('#fieldTitleRu').value.trim()
    },
    size: $('#fieldSize').value.trim(),
    price: parseInt($('#fieldPrice').value, 10),
    category: category,
    sold: $('#fieldSold').checked,
    image: uploadedImageUrl || ''
  };
  if (customLabel) product.categoryLabel = customLabel;

  if (type === 'painting') {
    product.year = parseInt($('#fieldYear').value, 10) || new Date().getFullYear();
    product.technique = {
      ru: $('#fieldTechnique').value.trim() || 'холст, масло',
      en: '', cn: ''
    };
    product.gradient = '--g1:#c8c8c8;--g2:#d8d8d8;--g3:#b8b8b8;--g4:#e0e0e0;--g5:#c0c0c0';
  } else {
    product.material = {
      ru: $('#fieldMaterial').value.trim() || 'стекло',
      en: '', cn: ''
    };
  }

  try {
    let res;
    if (editingId) {
      // Update
      res = await fetch(`${API}/products/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
        credentials: 'include'
      });
    } else {
      // Create
      res = await fetch(`${API}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, ...product }),
        credentials: 'include'
      });
    }

    if (!res.ok) throw new Error('Save failed');

    closeModal();
    await loadProducts();
    showToast(editingId ? 'Сохранено' : 'Добавлено');
  } catch (e) {
    showToast('Ошибка сохранения');
  }
});

// ==================== EDIT ====================
function editProduct(id, type) {
  const list = type === 'paintings' ? products.paintings : products.lampwork;
  const item = list.find(i => i.id === id);
  if (!item) return;
  const modalType = type === 'paintings' ? 'painting' : 'lampwork';
  openModal(modalType, item);
}

// ==================== DELETE ====================
let deleteTargetId = null;
let deleteTargetType = null;

function confirmDelete(id, type) {
  deleteTargetId = id;
  deleteTargetType = type;
  const list = type === 'paintings' ? products.paintings : products.lampwork;
  const item = list.find(i => i.id === id);
  if (!item) return;
  const title = typeof item.title === 'object' ? item.title.ru : item.title;
  $('#deleteName').textContent = title;
  $('#deleteModal').classList.add('open');
}

$('#deleteConfirmBtn').addEventListener('click', async () => {
  if (!deleteTargetId) return;

  try {
    const res = await fetch(`${API}/products/${deleteTargetId}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    if (!res.ok) throw new Error('Delete failed');

    $('#deleteModal').classList.remove('open');
    await loadProducts();
    showToast('Удалено');
  } catch (e) {
    showToast('Ошибка удаления');
  }

  deleteTargetId = null;
  deleteTargetType = null;
});

// ==================== MODAL CONTROLS ====================
$('#modalClose').addEventListener('click', closeModal);
$('#modalCancel').addEventListener('click', closeModal);
$('#productModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeModal();
});

$('#deleteModalClose').addEventListener('click', () => $('#deleteModal').classList.remove('open'));
$('#deleteCancelBtn').addEventListener('click', () => $('#deleteModal').classList.remove('open'));
$('#deleteModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) $('#deleteModal').classList.remove('open');
});

// ==================== ADD BUTTONS ====================
$('#addPaintingBtn').addEventListener('click', () => openModal('painting'));
$('#addLampworkBtn').addEventListener('click', () => openModal('lampwork'));

// ==================== TOAST ====================
function showToast(message) {
  const toast = $('#toast');
  $('#toastText').textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ==================== CARD ACTIONS (event delegation) ====================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const card = btn.closest('.product-card');
  if (!card) return;
  const id = card.dataset.id;
  const type = card.dataset.type;
  if (!id || !type) return;

  if (btn.dataset.action === 'edit') {
    editProduct(id, type);
  } else if (btn.dataset.action === 'delete') {
    confirmDelete(id, type);
  }
});

// ==================== ORDERS ====================
let ordersData = { orders: [], copyRequests: [] };
let currentOrderId = null;

const STATUS_LABELS = {
  'new': 'Новый', 'in-progress': 'В работе', 'paid': 'Оплачен',
  'shipped': 'Отправлен', 'done': 'Завершён'
};

async function loadOrders() {
  try {
    const res = await fetch(`${API}/orders`, { credentials: 'include' });
    if (!res.ok) return;
    ordersData = await res.json();
    renderOrders();
    renderCopyRequests();
    updateOrderBadges();
  } catch (e) {}
}

function updateOrderBadges() {
  const newOrders = ordersData.orders.filter(o => o.status === 'new').length;
  const newCopy = ordersData.copyRequests.filter(o => o.status === 'new').length;
  const ob = $('#ordersNewBadge');
  const cb = $('#copyNewBadge');
  ob.textContent = newOrders;
  ob.style.display = newOrders ? '' : 'none';
  cb.textContent = newCopy;
  cb.style.display = newCopy ? '' : 'none';
  const statEl = $('#statOrders');
  if (statEl) statEl.textContent = newOrders + newCopy;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU') + ' ' + d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function renderOrders() {
  const list = $('#ordersList');
  const orders = [...ordersData.orders].reverse();

  if (!orders.length) {
    list.innerHTML = '<div class="orders-empty">Заказов пока нет</div>';
    return;
  }

  list.innerHTML = orders.map(o => {
    const itemsText = o.items.map(i => i.title).join(', ');
    const total = o.items.reduce((s, i) => s + (i.price || 0), 0);
    const priceText = total ? new Intl.NumberFormat('ru-RU').format(total) + ' ₽' : '';
    return `
      <div class="order-card ${o.status === 'new' ? 'is-new' : ''}" data-order-id="${o.id}" data-order-type="order">
        <span class="order-status" data-status="${o.status}">${STATUS_LABELS[o.status] || o.status}</span>
        <div class="order-info">
          <div class="order-name">${o.name}</div>
          <div class="order-items">${itemsText}</div>
          <div class="order-meta">${formatDate(o.createdAt)} · ${o.contact}${o.lang !== 'ru' ? ' · 🌐 ' + o.lang.toUpperCase() : ''}</div>
        </div>
        <div class="order-price">${priceText}</div>
      </div>`;
  }).join('');
}

function renderCopyRequests() {
  const list = $('#copyRequestsList');
  const requests = [...ordersData.copyRequests].reverse();

  if (!requests.length) {
    list.innerHTML = '<div class="orders-empty">Заявок на копию пока нет</div>';
    return;
  }

  list.innerHTML = requests.map(o => `
    <div class="order-card ${o.status === 'new' ? 'is-new' : ''}" data-order-id="${o.id}" data-order-type="copy">
      <span class="order-status" data-status="${o.status}">${STATUS_LABELS[o.status] || o.status}</span>
      <div class="order-info">
        <div class="order-name">${o.name}</div>
        <div class="order-items">Копия: ${o.paintingTitle} (${o.paintingSize})</div>
        <div class="order-meta">${formatDate(o.createdAt)} · ${o.contact}${o.lang !== 'ru' ? ' · 🌐 ' + o.lang.toUpperCase() : ''}</div>
      </div>
    </div>
  `).join('');
}

function openOrderModal(id) {
  const order = ordersData.orders.find(o => o.id === id) || ordersData.copyRequests.find(o => o.id === id);
  if (!order) return;
  currentOrderId = id;

  const isOrder = ordersData.orders.some(o => o.id === id);
  $('#orderModalTitle').textContent = isOrder ? 'Заказ' : 'Заявка на копию';

  let html = '';
  const row = (label, value) => value ? `<div class="order-detail-row"><div class="order-detail-label">${label}</div><div class="order-detail-value">${value}</div></div>` : '';

  html += row('Клиент', order.name);
  html += row('Контакт', order.contact);
  html += row('Дата', formatDate(order.createdAt));
  html += row('Язык', order.lang === 'ru' ? 'Русский' : order.lang === 'en' ? 'English' : '中文');

  if (isOrder) {
    const itemsList = order.items.map(i => `${i.title} (${i.size}) — ${new Intl.NumberFormat('ru-RU').format(i.price)} ₽`).join('<br>');
    html += row('Товары', itemsList);
    const total = order.items.reduce((s, i) => s + (i.price || 0), 0);
    html += row('Сумма', new Intl.NumberFormat('ru-RU').format(total) + ' ₽');
  } else {
    html += row('Картина', `${order.paintingTitle} (${order.paintingSize})`);
  }

  if (order.message) html += row('Сообщение', order.message);

  $('#orderDetail').innerHTML = html;
  $('#orderStatus').value = order.status || 'new';
  $('#orderNotes').value = order.notes || '';
  $('#orderModal').classList.add('open');
}

$('#orderModalSave').addEventListener('click', async () => {
  if (!currentOrderId) return;
  try {
    await fetch(`${API}/orders/${currentOrderId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status: $('#orderStatus').value,
        notes: $('#orderNotes').value
      }),
      credentials: 'include'
    });
    $('#orderModal').classList.remove('open');
    await loadOrders();
    showToast('Сохранено');
  } catch (e) {
    showToast('Ошибка');
  }
});

$('#orderModalClose').addEventListener('click', () => $('#orderModal').classList.remove('open'));
$('#orderModalCancel').addEventListener('click', () => $('#orderModal').classList.remove('open'));
$('#orderModal').addEventListener('click', e => { if (e.target === e.currentTarget) $('#orderModal').classList.remove('open'); });

// Order card clicks (event delegation)
document.addEventListener('click', e => {
  const card = e.target.closest('.order-card');
  if (!card) return;
  const id = card.dataset.orderId;
  if (id) openOrderModal(id);
});

// ==================== SETTINGS ====================
let siteSettings = {};

async function loadSettings() {
  try {
    const res = await fetch(`${API}/settings`, { credentials: 'include' });
    if (!res.ok) return;
    siteSettings = await res.json();
    fillSettingsForm();
  } catch (e) {}
}

function fillSettingsForm() {
  const s = siteSettings;

  // About
  if (s.about) {
    if (s.about.photo) {
      $('#aboutPhotoPreview').src = '/' + s.about.photo;
      $('#aboutPhotoPreview').style.display = '';
      $('#aboutPhotoPlaceholder').style.display = 'none';
    }
    $('#aboutText1').value = s.about.text1?.ru || '';
    $('#aboutText2').value = s.about.text2?.ru || '';
    $('#aboutText3').value = s.about.text3?.ru || '';
    $('#aboutStatWorks').value = s.about.stats?.works || '';
    $('#aboutStatYears').value = s.about.stats?.years || '';
    $('#aboutStatContinents').value = s.about.stats?.continents || '';
  }

  // Contacts
  if (s.contacts) {
    $('#contactEmail').value = s.contacts.email || '';
    $('#contactPhone').value = s.contacts.phone || '';
    $('#contactInstagram').value = s.contacts.instagram || '';
    $('#contactTelegram').value = s.contacts.telegram || '';
    $('#contactVk').value = s.contacts.vk || '';
    $('#contactMax').value = s.contacts.max || '';
  }

  // Delivery
  if (s.delivery) {
    $('#deliveryShipping').value = s.delivery.shipping?.ru || '';
    $('#deliveryPayment').value = s.delivery.payment?.ru || '';
    $('#deliveryGuarantee').value = s.delivery.guarantee?.ru || '';
  }
}

async function saveSettings(section, data) {
  try {
    const updated = { ...siteSettings, [section]: { ...siteSettings[section], ...data } };
    const res = await fetch(`${API}/settings`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
      credentials: 'include'
    });
    if (!res.ok) throw new Error();
    siteSettings = updated;
    showToast('Сохранено');
  } catch (e) {
    showToast('Ошибка сохранения');
  }
}

// About photo upload
const aboutPhotoArea = $('#aboutPhotoArea');
const aboutPhotoInput = $('#aboutPhotoInput');

aboutPhotoArea.addEventListener('click', () => aboutPhotoInput.click());
aboutPhotoArea.addEventListener('dragover', (e) => { e.preventDefault(); aboutPhotoArea.classList.add('dragover'); });
aboutPhotoArea.addEventListener('dragleave', () => aboutPhotoArea.classList.remove('dragover'));
aboutPhotoArea.addEventListener('drop', (e) => {
  e.preventDefault();
  aboutPhotoArea.classList.remove('dragover');
  if (e.dataTransfer.files[0]) uploadAboutPhoto(e.dataTransfer.files[0]);
});
aboutPhotoInput.addEventListener('change', () => {
  if (aboutPhotoInput.files[0]) uploadAboutPhoto(aboutPhotoInput.files[0]);
});

async function uploadAboutPhoto(file) {
  // Preview
  const reader = new FileReader();
  reader.onload = (e) => {
    $('#aboutPhotoPreview').src = e.target.result;
    $('#aboutPhotoPreview').style.display = '';
    $('#aboutPhotoPlaceholder').style.display = 'none';
  };
  reader.readAsDataURL(file);

  // Upload
  const formData = new FormData();
  formData.append('image', file);
  try {
    const res = await fetch(`${API}/upload`, { method: 'POST', body: formData, credentials: 'include' });
    if (!res.ok) throw new Error();
    const data = await res.json();
    siteSettings.about = siteSettings.about || {};
    siteSettings.about.photo = data.url;
    showToast('Фото загружено');
  } catch (e) {
    showToast('Ошибка загрузки фото');
  }
}

// Save About
$('#saveAboutBtn').addEventListener('click', async () => {
  const text1ru = $('#aboutText1').value.trim();
  const text2ru = $('#aboutText2').value.trim();
  const text3ru = $('#aboutText3').value.trim();

  // Auto-translate texts
  let text1 = siteSettings.about?.text1 || {};
  let text2 = siteSettings.about?.text2 || {};
  let text3 = siteSettings.about?.text3 || {};

  text1.ru = text1ru;
  text2.ru = text2ru;
  text3.ru = text3ru;

  // Translate in background
  try {
    const [t1, t2, t3] = await Promise.all([
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: text1ru }), credentials: 'include' }).then(r => r.json()),
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: text2ru }), credentials: 'include' }).then(r => r.json()),
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: text3ru }), credentials: 'include' }).then(r => r.json()),
    ]);
    if (t1.en) { text1.en = t1.en; text1.cn = t1.cn; }
    if (t2.en) { text2.en = t2.en; text2.cn = t2.cn; }
    if (t3.en) { text3.en = t3.en; text3.cn = t3.cn; }
  } catch (e) {}

  await saveSettings('about', {
    photo: siteSettings.about?.photo || '',
    text1, text2, text3,
    stats: {
      works: $('#aboutStatWorks').value.trim(),
      years: $('#aboutStatYears').value.trim(),
      continents: $('#aboutStatContinents').value.trim()
    }
  });
});

// Save Contacts
$('#saveContactsBtn').addEventListener('click', () => {
  saveSettings('contacts', {
    email: $('#contactEmail').value.trim(),
    phone: $('#contactPhone').value.trim(),
    instagram: $('#contactInstagram').value.trim(),
    telegram: $('#contactTelegram').value.trim(),
    vk: $('#contactVk').value.trim(),
    max: $('#contactMax').value.trim()
  });
});

// Save Delivery
$('#saveDeliveryBtn').addEventListener('click', async () => {
  const shippingRu = $('#deliveryShipping').value.trim();
  const paymentRu = $('#deliveryPayment').value.trim();
  const guaranteeRu = $('#deliveryGuarantee').value.trim();

  let shipping = siteSettings.delivery?.shipping || {};
  let payment = siteSettings.delivery?.payment || {};
  let guarantee = siteSettings.delivery?.guarantee || {};

  shipping.ru = shippingRu;
  payment.ru = paymentRu;
  guarantee.ru = guaranteeRu;

  // Auto-translate
  try {
    const [t1, t2, t3] = await Promise.all([
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: shippingRu }), credentials: 'include' }).then(r => r.json()),
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: paymentRu }), credentials: 'include' }).then(r => r.json()),
      fetch(`${API}/translate`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: guaranteeRu }), credentials: 'include' }).then(r => r.json()),
    ]);
    if (t1.en) { shipping.en = t1.en; shipping.cn = t1.cn; }
    if (t2.en) { payment.en = t2.en; payment.cn = t2.cn; }
    if (t3.en) { guarantee.en = t3.en; guarantee.cn = t3.cn; }
  } catch (e) {}

  await saveSettings('delivery', { shipping, payment, guarantee });
});

// Change Password
$('#savePasswordBtn').addEventListener('click', async () => {
  const currentPassword = $('#currentPassword').value;
  const newPassword = $('#newPassword').value;

  if (!newPassword || newPassword.length < 4) {
    showToast('Пароль — минимум 4 символа');
    return;
  }

  try {
    const res = await fetch(`${API}/change-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword }),
      credentials: 'include'
    });

    if (!res.ok) {
      const data = await res.json();
      showToast(data.error || 'Ошибка');
      return;
    }

    showToast('Пароль изменён. Войдите заново.');
    $('#currentPassword').value = '';
    $('#newPassword').value = '';
    setTimeout(() => showLogin(), 1500);
  } catch (e) {
    showToast('Ошибка смены пароля');
  }
});

// ==================== INIT ====================
checkAuth();
