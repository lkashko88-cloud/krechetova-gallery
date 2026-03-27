/* ============================================
   IRINA KRECHETOVA — Gallery & Shop App
   ============================================ */

// ==================== i18n ====================
const i18n = {
  ru: {
    artistName: 'Ирина Кречетова',
    artistTitle: 'художник-импрессионист',
    navHome: 'Главная', navPaintings: 'Картины', navLampwork: 'Лэмпворк',
    navAbout: 'О художнике', navContacts: 'Контакты',
    heroEyebrow: 'Галерея авторских работ',
    heroTitle1: 'Ирина', heroTitle2: 'Кречетова',
    heroSubtitle: 'Импрессионизм · Живопись маслом · Лэмпворк',
    heroCta1: 'Смотреть картины', heroCta2: 'Коллекция лэмпворк',
    scrollHint: 'Листайте вниз',
    featuredLabel: 'Избранное', featuredTitle: 'Избранные работы', viewAll: 'Смотреть все работы',
    lampworkLabel: 'Ручная работа', lampworkPreviewTitle: 'Коллекция лэмпворк',
    lampworkDesc: 'Авторские украшения и декор из стекла, созданные в технике лэмпворк',
    viewLampwork: 'Вся коллекция',
    paintingsPageTitle: 'Картины', paintingsPageSubtitle: 'Масло на холсте · Импрессионизм',
    lampworkPageTitle: 'Лэмпворк', lampworkPageSubtitle: 'Авторские украшения и декор из стекла',
    categories: 'Категории',
    filterAll: 'Все', filterLandscapes: 'Пейзажи', filterStillLife: 'Натюрморты',
    filterPortraits: 'Портреты', filterAnimals: 'Животные', filterFlowers: 'Цветы',
    filterLarge: 'Большой формат',
    filterBracelets: 'Браслеты', filterBrooches: 'Броши', filterNecklaces: 'Колье',
    filterPendants: 'Кулоны', filterRings: 'Кольца', filterSets: 'Комплекты',
    filterChristmas: 'Ёлочные игрушки',
    aboutLabel: 'О художнике', aboutTitle: 'Ирина Кречетова',
    aboutText1: 'Художник-импрессионист, работающий в технике масляной живописи. Картины Ирины наполнены светом, воздухом и эмоциями — каждая работа передаёт настроение момента.',
    aboutText2: 'Помимо живописи, Ирина создаёт уникальные украшения и предметы декора в технике лэмпворк — авторские изделия из стекла, каждое из которых неповторимо.',
    aboutText3: 'Работы Ирины находятся в частных коллекциях в России, Европе и Азии. Каждая картина — это приглашение остановиться и почувствовать красоту мгновения.',
    statWorks: 'работ', statYears: 'лет опыта', statCountries: 'континента',
    contactsLabel: 'Связаться', contactsTitle: 'Контакты', phone: 'Телефон',
    writeUs: 'Напишите нам', formName: 'Имя', formLastName: 'Фамилия',
    formMessage: 'Сообщение', formSend: 'Отправить', formAddress: 'Адрес доставки',
    formComment: 'Комментарий', formWishes: 'Пожелания',
    deliveryTitle: 'Доставка и оплата',
    deliveryShipping: 'Доставка',
    deliveryShippingText: 'Стоимость доставки рассчитывается индивидуально. Доставляем по России и всему миру.',
    deliveryPayment: 'Оплата',
    deliveryPaymentText: 'Принимаем оплату банковскими картами Visa, Mastercard, UnionPay. Безопасные платежи.',
    deliveryGuarantee: 'Гарантия',
    deliveryGuaranteeText: 'Каждая работа — оригинал с сертификатом подлинности. Бережная упаковка.',
    cartTitle: 'Корзина', cartEmpty: 'Корзина пуста', cartTotal: 'Итого:',
    cartDeliveryNote: 'Стоимость доставки рассчитывается отдельно',
    cartCheckout: 'Оформить заказ',
    checkoutTitle: 'Оформление заказа', checkoutPay: 'Перейти к оплате',
    authLogin: 'Вход', authRegister: 'Регистрация',
    authPassword: 'Пароль', authLoginBtn: 'Войти', authRegisterBtn: 'Зарегистрироваться',
    copyTitle: 'Заказать копию',
    copyDesc: 'Оставьте заявку, и мы свяжемся с вами для обсуждения деталей и сроков изготовления.',
    copySend: 'Отправить заявку',
    addToCart: 'В корзину', orderCopy: 'Заказать копию',
    sold: 'Продано', remove: 'Удалить',
    toastAdded: 'Добавлено в корзину', toastSent: 'Заявка отправлена',
    footerCopy: '© 2025 Ирина Кречетова. Все права защищены.',
    currency: '₽', currencyRate: 1
  },
  en: {
    artistName: 'Irina Krechetova',
    artistTitle: 'impressionist artist',
    navHome: 'Home', navPaintings: 'Paintings', navLampwork: 'Lampwork',
    navAbout: 'About', navContacts: 'Contacts',
    heroEyebrow: 'Gallery of original artworks',
    heroTitle1: 'Irina', heroTitle2: 'Krechetova',
    heroSubtitle: 'Impressionism · Oil painting · Lampwork',
    heroCta1: 'View paintings', heroCta2: 'Lampwork collection',
    scrollHint: 'Scroll down',
    featuredLabel: 'Featured', featuredTitle: 'Selected Works', viewAll: 'View all works',
    lampworkLabel: 'Handcrafted', lampworkPreviewTitle: 'Lampwork Collection',
    lampworkDesc: 'Unique handmade glass jewelry and home decor',
    viewLampwork: 'Full collection',
    paintingsPageTitle: 'Paintings', paintingsPageSubtitle: 'Oil on canvas · Impressionism',
    lampworkPageTitle: 'Lampwork', lampworkPageSubtitle: 'Handmade glass jewelry & decor',
    categories: 'Categories',
    filterAll: 'All', filterLandscapes: 'Landscapes', filterStillLife: 'Still Life',
    filterPortraits: 'Portraits', filterAnimals: 'Animals', filterFlowers: 'Flowers',
    filterLarge: 'Large Format',
    filterBracelets: 'Bracelets', filterBrooches: 'Brooches', filterNecklaces: 'Necklaces',
    filterPendants: 'Pendants', filterRings: 'Rings', filterSets: 'Sets',
    filterChristmas: 'Christmas Ornaments',
    aboutLabel: 'About the Artist', aboutTitle: 'Irina Krechetova',
    aboutText1: 'An impressionist painter working with oil on canvas. Irina\'s paintings are filled with light, air, and emotion — each work captures the mood of a moment.',
    aboutText2: 'In addition to painting, Irina creates unique jewelry and home decor using the lampwork technique — handmade glass pieces, each one-of-a-kind.',
    aboutText3: 'Irina\'s works are in private collections across Russia, Europe, and Asia. Each painting is an invitation to pause and feel the beauty of an instant.',
    statWorks: 'artworks', statYears: 'years of experience', statCountries: 'continents',
    contactsLabel: 'Get in Touch', contactsTitle: 'Contacts', phone: 'Phone',
    writeUs: 'Write to Us', formName: 'Name', formLastName: 'Last Name',
    formMessage: 'Message', formSend: 'Send', formAddress: 'Delivery Address',
    formComment: 'Comment', formWishes: 'Wishes',
    deliveryTitle: 'Delivery & Payment',
    deliveryShipping: 'Delivery',
    deliveryShippingText: 'Shipping costs are calculated individually. We deliver to Russia and worldwide.',
    deliveryPayment: 'Payment',
    deliveryPaymentText: 'We accept Visa, Mastercard, UnionPay. Secure payments.',
    deliveryGuarantee: 'Guarantee',
    deliveryGuaranteeText: 'Every work is an original with a certificate of authenticity. Careful packaging.',
    cartTitle: 'Cart', cartEmpty: 'Your cart is empty', cartTotal: 'Total:',
    cartDeliveryNote: 'Shipping costs calculated separately',
    cartCheckout: 'Checkout',
    checkoutTitle: 'Checkout', checkoutPay: 'Proceed to payment',
    authLogin: 'Sign In', authRegister: 'Sign Up',
    authPassword: 'Password', authLoginBtn: 'Sign In', authRegisterBtn: 'Create Account',
    copyTitle: 'Order a Copy',
    copyDesc: 'Leave a request and we will contact you to discuss details and production time.',
    copySend: 'Submit Request',
    addToCart: 'Add to Cart', orderCopy: 'Order Copy',
    sold: 'Sold', remove: 'Remove',
    toastAdded: 'Added to cart', toastSent: 'Request submitted',
    footerCopy: '© 2025 Irina Krechetova. All rights reserved.',
    currency: '€', currencyRate: 0.01
  },
  cn: {
    artistName: '伊琳娜·克列切托娃',
    artistTitle: '印象派艺术家',
    navHome: '首页', navPaintings: '画作', navLampwork: '玻璃工艺',
    navAbout: '关于艺术家', navContacts: '联系方式',
    heroEyebrow: '原创艺术作品画廊',
    heroTitle1: '伊琳娜', heroTitle2: '克列切托娃',
    heroSubtitle: '印象主义 · 油画 · 玻璃工艺',
    heroCta1: '查看画作', heroCta2: '玻璃工艺系列',
    scrollHint: '向下滚动',
    featuredLabel: '精选', featuredTitle: '精选作品', viewAll: '查看所有作品',
    lampworkLabel: '手工制作', lampworkPreviewTitle: '玻璃工艺系列',
    lampworkDesc: '独特的手工玻璃首饰和家居装饰品',
    viewLampwork: '全部系列',
    paintingsPageTitle: '画作', paintingsPageSubtitle: '布面油画 · 印象主义',
    lampworkPageTitle: '玻璃工艺', lampworkPageSubtitle: '手工玻璃首饰与装饰品',
    categories: '类别',
    filterAll: '全部', filterLandscapes: '风景', filterStillLife: '静物',
    filterPortraits: '肖像', filterAnimals: '动物', filterFlowers: '花卉',
    filterLarge: '大幅画作',
    filterBracelets: '手链', filterBrooches: '胸针', filterNecklaces: '项链',
    filterPendants: '吊坠', filterRings: '戒指', filterSets: '套装',
    filterChristmas: '圣诞装饰',
    aboutLabel: '关于艺术家', aboutTitle: '伊琳娜·克列切托娃',
    aboutText1: '印象派画家，擅长油画创作。伊琳娜的画作充满光线、空气和情感——每幅作品都捕捉了瞬间的情绪。',
    aboutText2: '除了绘画，伊琳娜还使用玻璃灯工技术创作独特的珠宝和家居装饰品——每件手工玻璃作品都是独一无二的。',
    aboutText3: '伊琳娜的作品被俄罗斯、欧洲和亚洲的私人收藏家收藏。每幅画都是一个邀请，让您停下来感受瞬间之美。',
    statWorks: '件作品', statYears: '年经验', statCountries: '个大洲',
    contactsLabel: '联系我们', contactsTitle: '联系方式', phone: '电话',
    writeUs: '给我们写信', formName: '姓名', formLastName: '姓氏',
    formMessage: '留言', formSend: '发送', formAddress: '配送地址',
    formComment: '备注', formWishes: '要求',
    deliveryTitle: '配送与支付',
    deliveryShipping: '配送',
    deliveryShippingText: '运费根据情况单独计算。我们向俄罗斯及全球配送。',
    deliveryPayment: '支付',
    deliveryPaymentText: '接受Visa、万事达、银联支付。安全支付。',
    deliveryGuarantee: '保证',
    deliveryGuaranteeText: '每件作品均为原创，附带真品证书。精心包装。',
    cartTitle: '购物车', cartEmpty: '购物车为空', cartTotal: '合计：',
    cartDeliveryNote: '运费另行计算',
    cartCheckout: '结算',
    checkoutTitle: '结算', checkoutPay: '前往支付',
    authLogin: '登录', authRegister: '注册',
    authPassword: '密码', authLoginBtn: '登录', authRegisterBtn: '创建账户',
    copyTitle: '订购复制品',
    copyDesc: '请留下您的申请，我们将与您联系讨论细节和制作时间。',
    copySend: '提交申请',
    addToCart: '加入购物车', orderCopy: '订购复制品',
    sold: '已售出', remove: '删除',
    toastAdded: '已添加到购物车', toastSent: '申请已提交',
    footerCopy: '© 2025 伊琳娜·克列切托娃。保留所有权利。',
    currency: '¥', currencyRate: 0.078
  }
};

// ==================== PRODUCT DATA ====================
// Data is loaded from server via /api/products, with hardcoded fallback
let paintings = [
  { id: 'p1', title: { ru: 'Академ. Весна', en: 'Academ. Spring', cn: '学院之春' }, size: '50×40', price: 35000, category: 'landscapes', sold: false, image: 'images/paintings/landscapes/academ-spring.jpg', gradient: '--g1:#6da87a;--g2:#c4d48c;--g3:#8bc4a4;--g4:#e8d5a0;--g5:#7ab888', year: 2021, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p2', title: { ru: 'Берег реки. Гоа', en: 'River Bank. Goa Palolim', cn: '河岸·果阿帕洛莱姆' }, size: '50×40', price: 32000, category: 'landscapes', sold: false, image: 'images/paintings/landscapes/river-bank-goa.jpg', gradient: '--g1:#d4a574;--g2:#7ec8c8;--g3:#e8c48c;--g4:#5ea8a8;--g5:#c4a060', year: 2018, technique: { ru: 'холст на картоне, масло', en: 'oil on cardboard', cn: '纸板油画' } },
  { id: 'p3', title: { ru: 'Весна', en: 'Spring', cn: '春天' }, size: '50×40', price: 38000, category: 'landscapes', sold: false, image: 'images/paintings/landscapes/spring.jpg', gradient: '--g1:#a8d8a8;--g2:#f0e0b0;--g3:#88c0a0;--g4:#d4c490;--g5:#b0dca0', year: 2021, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p4', title: { ru: 'Ветер', en: 'Wind', cn: '风' }, size: '59×40', price: 42000, category: 'landscapes', sold: false, image: 'images/paintings/landscapes/wind.jpg', gradient: '--g1:#8eb8d4;--g2:#c0d8e8;--g3:#a0c8b4;--g4:#d8d0b0;--g5:#90b8c8', year: 2020, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p5', title: { ru: 'Доминикана', en: 'Dominicana', cn: '多米尼加' }, size: '40×30', price: 25000, category: 'landscapes', sold: false, image: 'images/paintings/landscapes/dominicana.jpg', gradient: '--g1:#40b8c8;--g2:#e8d090;--g3:#60c0a0;--g4:#f0e8c0;--g5:#50b0b0', year: 2019, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p6', title: { ru: 'Друзья', en: 'Friends', cn: '朋友们' }, size: '50×40', price: 36000, category: 'landscapes', sold: false, gradient: '--g1:#7ab070;--g2:#d0c888;--g3:#90c098;--g4:#e0d8a8;--g5:#68a870', year: 2025, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p7', title: { ru: 'Лодки. Ковалам', en: 'Boats. Kovalam', cn: '小船·科瓦拉姆' }, size: '50×40', price: 34000, category: 'landscapes', sold: false, gradient: '--g1:#4898b0;--g2:#d8a868;--g3:#68b8c8;--g4:#c8a050;--g5:#58a8b8', year: 2018, technique: { ru: 'холст на картоне, масло', en: 'oil on cardboard', cn: '纸板油画' } },
  { id: 'p8', title: { ru: 'Маяк. Крым. Тарханкут', en: 'Lighthouse. Crimea', cn: '灯塔·克里米亚' }, size: '50×40', price: 40000, category: 'landscapes', sold: false, gradient: '--g1:#e8d8a0;--g2:#88b0c8;--g3:#d0c090;--g4:#70a0b8;--g5:#c8b878', year: 2020, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p9', title: { ru: 'Регата', en: 'Regatta', cn: '帆船赛' }, size: '60×50', price: 55000, category: 'landscapes', sold: false, gradient: '--g1:#3888b0;--g2:#e0e8f0;--g3:#5898c0;--g4:#d0d8e0;--g5:#4890b8', year: 2025, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p10', title: { ru: 'Остров', en: 'Island', cn: '岛屿' }, size: '50×40', price: 33000, category: 'landscapes', sold: false, gradient: '--g1:#40b0a0;--g2:#e8e0b0;--g3:#60c0b0;--g4:#d0c890;--g5:#50b8a8', year: 2019, technique: { ru: 'картон, масло', en: 'oil on cardboard', cn: '纸板油画' } },
  { id: 'p11', title: { ru: 'Натюрморт с тыквой', en: 'Pumpkin Still Life', cn: '南瓜静物' }, size: '50×60', price: 38000, category: 'still-life', sold: false, image: 'images/paintings/still-life/pumpkin.jpg', gradient: '--g1:#d89030;--g2:#886838;--g3:#c88828;--g4:#a87840;--g5:#e8a040', year: 2020, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p12', title: { ru: 'Любовный роман', en: 'Love Romance', cn: '爱情小说' }, size: '60×70', price: 48000, category: 'still-life', sold: true, image: 'images/paintings/still-life/love-romance.jpg', gradient: '--g1:#c86868;--g2:#d8a870;--g3:#b85858;--g4:#e0c090;--g5:#d07878', year: 2019, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p13', title: { ru: 'Ранетки', en: 'Crab Apples', cn: '海棠果' }, size: '50×70', price: 45000, category: 'still-life', sold: false, image: 'images/paintings/still-life/crab-apples.jpg', gradient: '--g1:#c84040;--g2:#78a850;--g3:#d86050;--g4:#90b860;--g5:#a83030', year: 2021, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p14', title: { ru: 'Сочный', en: 'Juicy', cn: '多汁' }, size: '70×50', price: 46000, category: 'still-life', sold: false, image: 'images/paintings/still-life/juicy.jpg', gradient: '--g1:#d8a030;--g2:#a08028;--g3:#e8b840;--g4:#c09830;--g5:#f0c848', year: 2021, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p15', title: { ru: 'Тунисский орнамент', en: 'Tunisian Ornament', cn: '突尼斯装饰' }, size: '50×60', price: 42000, category: 'still-life', sold: true, image: 'images/paintings/still-life/tunisian-ornament.jpg', gradient: '--g1:#c87840;--g2:#40a0a8;--g3:#d89050;--g4:#58b0b0;--g5:#b06830', year: 2018, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p16', title: { ru: 'Стрелиция', en: 'Strelitzia', cn: '鹤望兰' }, size: '40×30', price: 22000, category: 'flowers', sold: false, image: 'images/paintings/flowers/strelitzia.jpg', gradient: '--g1:#e87820;--g2:#48a038;--g3:#f09030;--g4:#68b850;--g5:#d06818', year: 2019, technique: { ru: 'холст на картоне, масло', en: 'oil on cardboard', cn: '纸板油画' } },
  { id: 'p17', title: { ru: 'Снегурочка. Автопортрет', en: 'Snow Maiden. Self-portrait', cn: '雪姑娘·自画像' }, size: '100×100', price: 120000, category: 'portraits', sold: false, image: 'images/paintings/portraits/snow-maiden.jpg', gradient: '--g1:#88b8d8;--g2:#e0e8f0;--g3:#a0c8e0;--g4:#d0d8e8;--g5:#78a8c8', year: 2022, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p22', title: { ru: 'Васильки', en: 'Cornflowers', cn: '矢车菊' }, size: '40×40', price: 28000, category: 'flowers', sold: false, image: 'images/paintings/flowers/cornflowers.jpg', gradient: '--g1:#4060c0;--g2:#80a848;--g3:#5070d0;--g4:#90b858;--g5:#3858b0', year: 2024, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p23', title: { ru: 'Лотосы', en: 'Lotuses', cn: '莲花' }, size: '40×30', price: 22000, category: 'flowers', sold: false, image: 'images/paintings/flowers/lotuses.jpg', gradient: '--g1:#e0a0b0;--g2:#48a860;--g3:#d890a0;--g4:#58b870;--g5:#c88090', year: 2018, technique: { ru: 'картон, масло', en: 'oil on cardboard', cn: '纸板油画' } },
  { id: 'p24', title: { ru: 'Мальвы', en: 'Mallows', cn: '锦葵' }, size: '60×80', price: 52000, category: 'flowers', sold: false, image: 'images/paintings/flowers/mallows.jpg', gradient: '--g1:#d86088;--g2:#68a848;--g3:#e07098;--g4:#78b858;--g5:#c85078', year: 2024, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p25', title: { ru: 'Ландыши. День', en: 'Lilies of the Valley. Day', cn: '铃兰·白天' }, size: '20×40', price: 18000, category: 'flowers', sold: false, image: 'images/paintings/flowers/lilies-day.jpg', gradient: '--g1:#e8e8e0;--g2:#68a848;--g3:#f0f0e8;--g4:#78b858;--g5:#d8d8d0', year: 2025, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p26', title: { ru: 'Девушка на Гоа', en: 'Girl in Goa', cn: '果阿的女孩' }, size: '40×50', price: 45000, category: 'portraits', sold: false, image: 'images/paintings/portraits/girl-goa.jpg', gradient: '--g1:#d4a574;--g2:#e8c4a0;--g3:#c89468;--g4:#d8b490;--g5:#b88458', year: 2018, technique: { ru: 'оргалит, масло', en: 'oil on fiberboard', cn: '纤维板油画' } },
  { id: 'p27', title: { ru: 'Натурщица', en: 'Model', cn: '模特' }, size: '60×80', price: 65000, category: 'portraits', sold: false, image: 'images/paintings/portraits/model.jpg', gradient: '--g1:#e8c8a0;--g2:#c8a078;--g3:#d8b890;--g4:#b89068;--g5:#f0d0a8', year: 2020, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p28', title: { ru: 'Портрет', en: 'Portrait', cn: '肖像' }, size: '50×70', price: 55000, category: 'portraits', sold: false, image: 'images/paintings/portraits/portrait-3.jpg', gradient: '--g1:#c8a878;--g2:#e8d8b8;--g3:#b89868;--g4:#d8c8a8;--g5:#a88858', year: 2024, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p29', title: { ru: 'Портрет в интерьере', en: 'Portrait in Interior', cn: '室内肖像' }, size: '50×70', price: 58000, category: 'portraits', sold: false, image: 'images/paintings/portraits/portrait-4.jpg', gradient: '--g1:#d0b090;--g2:#a08868;--g3:#c0a080;--g4:#907858;--g5:#e0c0a0', year: 2025, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p18', title: { ru: 'Морской проспект', en: 'Sea Avenue', cn: '海滨大道' }, size: '100×100', price: 95000, category: 'large-format', sold: true, gradient: '--g1:#3080a8;--g2:#d0c880;--g3:#4898b8;--g4:#b8b070;--g5:#5898b0', year: 2023, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p19', title: { ru: 'Парад военных кораблей', en: 'Naval Parade', cn: '军舰阅兵' }, size: '100×60', price: 85000, category: 'large-format', sold: false, image: 'images/paintings/large-format/naval-parade.jpg', gradient: '--g1:#405878;--g2:#8898a8;--g3:#506888;--g4:#98a8b8;--g5:#607898', year: 2025, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p20', title: { ru: 'Шри-Ланка', en: 'Sri Lanka', cn: '斯里兰卡' }, size: '194×94', price: 180000, category: 'large-format', sold: false, gradient: '--g1:#30a890;--g2:#e8d880;--g3:#48b8a0;--g4:#d0c070;--g5:#58c0a8', year: 2020, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p30', title: { ru: 'Доброфлот', en: 'Dobroflot', cn: '多布罗弗洛特' }, size: '154×94', price: 160000, category: 'large-format', sold: false, image: 'images/paintings/large-format/dobroflot.jpg', gradient: '--g1:#3878a8;--g2:#c8b878;--g3:#4888b8;--g4:#b8a868;--g5:#5898c0', year: 2024, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p31', title: { ru: 'Оттепель', en: 'Thaw', cn: '解冻' }, size: '100×80', price: 90000, category: 'large-format', sold: false, image: 'images/paintings/large-format/thaw.jpg', gradient: '--g1:#a8c8d8;--g2:#d8d0c0;--g3:#98b8c8;--g4:#c8c0b0;--g5:#b8d0e0', year: 2023, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p32', title: { ru: 'Подружки', en: 'Girlfriends', cn: '女友们' }, size: '120×100', price: 120000, category: 'large-format', sold: false, image: 'images/paintings/large-format/girlfriends.jpg', gradient: '--g1:#d8a880;--g2:#88b8a0;--g3:#c89870;--g4:#78a890;--g5:#e8b890', year: 2022, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p33', title: { ru: 'Рыбаки на шестах', en: 'Stilt Fishermen', cn: '高跷渔夫' }, size: '120×100', price: 125000, category: 'large-format', sold: false, image: 'images/paintings/large-format/fishermen.jpg', gradient: '--g1:#e8c090;--g2:#60a8c0;--g3:#d8b080;--g4:#509890;--g5:#f0c8a0', year: 2019, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
  { id: 'p21', title: { ru: 'Миниатюра. Животное', en: 'Miniature. Animal', cn: '微型画·动物' }, size: '15×15', price: 5000, category: 'animals', sold: false, image: 'images/paintings/animals/animal-painting.jpg', gradient: '--g1:#c8a878;--g2:#e8d8b8;--g3:#b89868;--g4:#d8c8a8;--g5:#a88858', year: 2023, technique: { ru: 'холст, масло', en: 'oil on canvas', cn: '布面油画' } },
];

let lampworkItems = [
  { id: 'l1', title: { ru: 'Браслет «Цветной лёд»', en: 'Bracelet "Colorful Ice"', cn: '手链《彩色冰》' }, size: '18 см', price: 4500, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/colorful-ice-1.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l2', title: { ru: 'Браслет «Цветной лёд» — вид 2', en: 'Bracelet "Colorful Ice" — view 2', cn: '手链《彩色冰》— 视图2' }, size: '18 см', price: 4500, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/colorful-ice-2.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l3', title: { ru: 'Браслет «Цветной лёд» — вид 3', en: 'Bracelet "Colorful Ice" — view 3', cn: '手链《彩色冰》— 视图3' }, size: '18 см', price: 4800, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/colorful-ice-3.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l4', title: { ru: 'Мужской браслет «Глаз дракона»', en: 'Men\'s Bracelet "Dragon Eye"', cn: '男士手链《龙眼》' }, size: '20 см', price: 2700, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/dragon-eye-1.jpg', material: { ru: 'стекло, кожа', en: 'glass, leather', cn: '玻璃, 皮革' } },
  { id: 'l5', title: { ru: 'Браслет «Глаз дракона» — вид 2', en: 'Bracelet "Dragon Eye" — view 2', cn: '手链《龙眼》— 视图2' }, size: '20 см', price: 2700, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/dragon-eye-2.jpg', material: { ru: 'стекло, кожа', en: 'glass, leather', cn: '玻璃, 皮革' } },
  { id: 'l6', title: { ru: 'Браслет «Морская царевна»', en: 'Bracelet "Sea Princess"', cn: '手链《海洋公主》' }, size: '18 см', price: 5200, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/sea-princess-1.jpg', material: { ru: 'стекло, родированная фурнитура', en: 'glass, rhodium-plated hardware', cn: '玻璃, 镀铑配件' } },
  { id: 'l7', title: { ru: 'Браслет авторский', en: 'Designer Bracelet', cn: '设计师手链' }, size: '18 см', price: 3800, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/bracelet-7.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l8', title: { ru: 'Браслет с бусинами лэмпворк', en: 'Lampwork Bead Bracelet', cn: '灯工珠手链' }, size: '18 см', price: 3500, category: 'bracelets', sold: false, image: 'images/lampwork/bracelets/bracelet-8.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l9', title: { ru: 'Аромакулон', en: 'Aroma Pendant', cn: '芳香吊坠' }, size: '3×3 см', price: 2200, category: 'pendants', sold: false, image: 'images/lampwork/pendants/aroma-pendant-1.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l10', title: { ru: 'Аромакулон — набор', en: 'Aroma Pendant — Set', cn: '芳香吊坠套装' }, size: '3×3 см', price: 2500, category: 'pendants', sold: false, image: 'images/lampwork/pendants/aroma-pendant-2.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l11', title: { ru: 'Брошь «Сосульки»', en: 'Brooch "Icicles"', cn: '胸针《冰柱》' }, size: '5×4 см', price: 3200, category: 'brooches', sold: false, image: 'images/lampwork/brooches/icicles.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l12', title: { ru: 'Брошь авторская', en: 'Designer Brooch', cn: '设计师胸针' }, size: '4×4 см', price: 2800, category: 'brooches', sold: false, image: 'images/lampwork/brooches/brooch-2.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l13', title: { ru: 'Брошь с цветком', en: 'Flower Brooch', cn: '花朵胸针' }, size: '5×5 см', price: 3000, category: 'brooches', sold: false, image: 'images/lampwork/brooches/brooch-3.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
  { id: 'l14', title: { ru: 'Брошь «Жук»', en: 'Brooch "Beetle"', cn: '胸针《甲虫》' }, size: '4×3 см', price: 3500, category: 'brooches', sold: false, image: 'images/lampwork/brooches/beetle-1.jpg', material: { ru: 'стекло, медь', en: 'glass, copper', cn: '玻璃, 铜' } },
  { id: 'l15', title: { ru: 'Колье авторское', en: 'Designer Necklace', cn: '设计师项链' }, size: '45 см', price: 6800, category: 'necklaces', sold: false, image: 'images/lampwork/necklaces/necklace-1.jpg', material: { ru: 'стекло', en: 'glass', cn: '玻璃' } },
];

// ==================== STATE ====================
let currentLang = 'ru';
let currentPage = 'home';
let cart = JSON.parse(localStorage.getItem('ik_cart') || '[]');

// ==================== DOM REFS ====================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ==================== SITE SETTINGS ====================
let siteSettings = null;

function applySiteSettings() {
  if (!siteSettings) return;
  const lang = currentLang;

  // About photo
  if (siteSettings.about && siteSettings.about.photo) {
    const aboutImg = $('.about-image');
    if (aboutImg) {
      aboutImg.innerHTML = `<img src="/${siteSettings.about.photo}" alt="Ирина Кречетова" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">`;
    }
  }

  // About texts
  if (siteSettings.about) {
    const a = siteSettings.about;
    const setText = (key, textObj) => {
      if (!textObj) return;
      const el = $(`[data-i18n="${key}"]`);
      if (el && textObj[lang]) el.textContent = textObj[lang];
    };
    setText('aboutText1', a.text1);
    setText('aboutText2', a.text2);
    setText('aboutText3', a.text3);

    // Stats
    if (a.stats) {
      const worksEl = $('[data-i18n="statWorks"]');
      const yearsEl = $('[data-i18n="statYears"]');
      const countriesEl = $('[data-i18n="statCountries"]');
      if (worksEl && worksEl.previousElementSibling && a.stats.works) worksEl.previousElementSibling.textContent = a.stats.works;
      if (yearsEl && yearsEl.previousElementSibling && a.stats.years) yearsEl.previousElementSibling.textContent = a.stats.years;
      if (countriesEl && countriesEl.previousElementSibling && a.stats.continents) countriesEl.previousElementSibling.textContent = a.stats.continents;
    }
  }

  // Contacts
  if (siteSettings.contacts) {
    const c = siteSettings.contacts;
    const emailEl = $('.contact-email');
    const phoneEl = $('.contact-phone');
    if (emailEl && c.email) { emailEl.textContent = c.email; emailEl.href = 'mailto:' + c.email; }
    if (phoneEl && c.phone) { phoneEl.textContent = c.phone; phoneEl.href = 'tel:' + c.phone.replace(/\D/g, ''); }
  }

  // Delivery texts
  if (siteSettings.delivery) {
    const d = siteSettings.delivery;
    const setDelivery = (key, textObj) => {
      if (!textObj) return;
      const el = $(`[data-i18n="${key}"]`);
      if (el && textObj[lang]) el.textContent = textObj[lang];
    };
    setDelivery('deliveryShippingText', d.shipping);
    setDelivery('deliveryPaymentText', d.payment);
    setDelivery('deliveryGuaranteeText', d.guarantee);
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  // Load products and settings in parallel
  const loadProducts = fetch('/api/products')
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data && data.paintings && data.paintings.length) {
        paintings = data.paintings;
        lampworkItems = data.lampwork || lampworkItems;
      }
    })
    .catch(() => {});

  const loadSettings = fetch('/api/settings')
    .then(res => res.ok ? res.json() : null)
    .then(data => { if (data) siteSettings = data; })
    .catch(() => {});

  Promise.all([loadProducts, loadSettings]).finally(() => {
    renderFilters();
    renderFeatured();
    renderLampworkShowcase();
    renderCatalog('paintings');
    renderCatalog('lampwork');
    updateCartUI();
    applyLanguage(currentLang);
    applySiteSettings();
  });

  setupNavigation();
  setupFilters();
  setupCart();
  setupModals();
  setupHeader();
  setupLangSwitcher();
});

// ==================== FILTERS RENDERING ====================
const KNOWN_FILTERS = {
  // Paintings
  landscapes: { i18n: 'filterLandscapes', ru: 'Пейзажи' },
  'still-life': { i18n: 'filterStillLife', ru: 'Натюрморты' },
  flowers: { i18n: 'filterFlowers', ru: 'Цветы' },
  portraits: { i18n: 'filterPortraits', ru: 'Портреты' },
  animals: { i18n: 'filterAnimals', ru: 'Животные' },
  'large-format': { i18n: 'filterLarge', ru: 'Большой формат' },
  // Lampwork
  bracelets: { i18n: 'filterBracelets', ru: 'Браслеты' },
  brooches: { i18n: 'filterBrooches', ru: 'Броши' },
  necklaces: { i18n: 'filterNecklaces', ru: 'Колье' },
  pendants: { i18n: 'filterPendants', ru: 'Кулоны' },
  rings: { i18n: 'filterRings', ru: 'Кольца' },
  sets: { i18n: 'filterSets', ru: 'Комплекты' },
  christmas: { i18n: 'filterChristmas', ru: 'Ёлочные игрушки' },
};

function renderFilters() {
  buildFilterButtons('paintingFilters', paintings);
  buildFilterButtons('lampworkFilters', lampworkItems);
}

function buildFilterButtons(containerId, items) {
  const container = $(`#${containerId}`);
  if (!container) return;

  // Collect unique categories preserving order
  const seen = new Set();
  const categories = [];
  items.forEach(item => {
    if (item.category && !seen.has(item.category)) {
      seen.add(item.category);
      categories.push(item.category);
    }
  });

  // Build HTML: "All" button + one per category
  let html = `<button class="filter-btn active" data-filter="all" data-i18n="filterAll">Все</button>`;
  categories.forEach(cat => {
    const known = KNOWN_FILTERS[cat];
    if (known) {
      html += `<button class="filter-btn" data-filter="${cat}" data-i18n="${known.i18n}">${known.ru}</button>`;
    } else {
      // Custom category — find label from product data
      const item = items.find(i => i.category === cat);
      const label = (item && item.categoryLabel) || cat;
      html += `<button class="filter-btn" data-filter="${cat}">${label}</button>`;
    }
  });

  container.innerHTML = html;
}

// ==================== RENDERING ====================
function createProductCard(item, isPainting = false) {
  const lang = currentLang;
  const t = i18n[lang];
  const title = typeof item.title === 'object' ? item.title[lang] : item.title;
  const priceConverted = formatPrice(item.price);

  const card = document.createElement('div');
  card.className = `product-card${isPainting ? ' is-painting' : ''}`;
  card.dataset.category = item.category;
  card.dataset.id = item.id;

  // Set real aspect ratio for paintings
  if (isPainting && item.size) {
    const dims = item.size.split('×').map(Number);
    if (dims.length === 2 && dims[0] && dims[1]) {
      card.style.setProperty('--card-ratio', `${dims[0]} / ${dims[1]}`);
    }
  }

  let imageHTML;
  if (item.image) {
    imageHTML = `<img src="${item.image}" alt="${title}" loading="lazy">`;
  } else {
    imageHTML = `<div class="painting-placeholder" style="${item.gradient}"></div>`;
  }

  if (isPainting && item.size) {
    const dims = item.size.split('×').map(Number);
    if (dims.length === 2 && dims[0] && dims[1]) {
      card.style.setProperty('--card-ratio', `${dims[0]} / ${dims[1]}`);
    }
  }

  const soldBadge = item.sold ? `<div class="card-sold-badge" data-i18n="sold">${t.sold}</div>` : '';

  const btnHTML = item.sold
    ? `<button class="card-btn sold-btn" data-action="copy" data-id="${item.id}" data-i18n="orderCopy">${t.orderCopy}</button>`
    : `<button class="card-btn" data-action="addToCart" data-id="${item.id}" data-i18n="addToCart">${t.addToCart}</button>`;

  card.innerHTML = `
    <div class="card-image-wrap">
      ${imageHTML}
      ${isPainting ? '<div class="card-frame-effect"></div>' : ''}
      ${soldBadge}
    </div>
    <div class="card-info">
      <div class="card-title">${title}</div>
      <div class="card-size">${item.size}${isPainting ? ' см' : ''}</div>
      <div class="card-bottom">
        <span class="card-price">${priceConverted}</span>
        ${btnHTML}
      </div>
    </div>`;

  return card;
}

function renderFeatured() {
  const grid = $('#featuredGrid');
  const featured = paintings.filter(p => ['p1','p11','p16','p17','p19','p21'].includes(p.id));
  grid.innerHTML = '';
  featured.forEach(p => grid.appendChild(createProductCard(p, true)));
}

function renderLampworkShowcase() {
  const grid = $('#lampworkShowcase');
  const items = lampworkItems.slice(0, 4);
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(createProductCard(item, false)));
}

function renderCatalog(type) {
  const gridId = type === 'paintings' ? 'paintingsGrid' : 'lampworkGrid';
  const grid = $(`#${gridId}`);
  const items = type === 'paintings' ? paintings : lampworkItems;
  grid.innerHTML = '';
  items.forEach(item => grid.appendChild(createProductCard(item, type === 'paintings')));
}

function filterCatalog(type, category) {
  const gridId = type === 'paintings' ? 'paintingsGrid' : 'lampworkGrid';
  const cards = $$('.product-card', $(`#${gridId}`));
  cards.forEach((card, i) => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
    if (show) {
      card.style.animation = 'none';
      card.offsetHeight; // trigger reflow
      card.style.animation = `cardReveal 0.6s var(--ease-out) ${i * 0.05}s forwards`;
    }
  });
}

// ==================== PRICE FORMATTING ====================
function formatPrice(rubles) {
  const lang = currentLang;
  const t = i18n[lang];
  if (lang === 'ru') return new Intl.NumberFormat('ru-RU').format(rubles) + ' ₽';
  if (lang === 'en') return '€' + new Intl.NumberFormat('en-US').format(Math.round(rubles * t.currencyRate));
  if (lang === 'cn') return '¥' + new Intl.NumberFormat('zh-CN').format(Math.round(rubles * t.currencyRate));
  return rubles + ' ₽';
}

// ==================== NAVIGATION ====================
function setupNavigation() {
  document.addEventListener('click', e => {
    const navEl = e.target.closest('[data-navigate]');
    if (!navEl) return;
    e.preventDefault();
    const page = navEl.dataset.navigate;
    navigateTo(page);
  });
}

function navigateTo(page) {
  currentPage = page;
  // Hide all pages
  $$('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = $(`#page-${page}`);
  if (target) {
    target.classList.add('active');
    // Re-trigger card animations
    $$('.product-card', target).forEach((card, i) => {
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = `cardReveal 0.6s var(--ease-out) ${i * 0.05}s forwards`;
    });
  }
  // Update nav
  $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.navigate === page));
  // Close mobile nav
  $('#mobileNav').classList.remove('open');
  $('#burgerBtn').classList.remove('open');
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== FILTERS ====================
function setupFilters() {
  ['paintingFilters', 'lampworkFilters'].forEach(id => {
    const type = id === 'paintingFilters' ? 'paintings' : 'lampwork';
    const container = $(`#${id}`);
    if (!container) return;
    container.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', container).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCatalog(type, btn.dataset.filter);
    });
  });
}

// ==================== CART ====================
function setupCart() {
  // Toggle cart
  $('#cartBtn').addEventListener('click', () => toggleCart(true));
  $('#cartClose').addEventListener('click', () => toggleCart(false));
  $('#cartOverlay').addEventListener('click', () => toggleCart(false));

  // Add to cart / order copy
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === 'addToCart') {
      addToCart(id);
    } else if (action === 'copy') {
      openCopyModal(id);
    } else if (action === 'removeFromCart') {
      removeFromCart(id);
    }
  });

  // Checkout
  $('#checkoutBtn').addEventListener('click', () => {
    toggleCart(false);
    openCheckoutModal();
  });
}

function toggleCart(open) {
  $('#cartSidebar').classList.toggle('open', open);
  $('#cartOverlay').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function addToCart(id) {
  const allItems = [...paintings, ...lampworkItems];
  const item = allItems.find(i => i.id === id);
  if (!item || item.sold) return;
  if (!cart.find(c => c.id === id)) {
    cart.push({ id, qty: 1 });
    saveCart();
    updateCartUI();
    showToast(i18n[currentLang].toastAdded);
  }
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('ik_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.length;
  const countEl = $('#cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const itemsEl = $('#cartItems');
  const footerEl = $('#cartFooter');

  if (count === 0) {
    itemsEl.innerHTML = `<div class="cart-empty" data-i18n="cartEmpty">${i18n[currentLang].cartEmpty}</div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = '';
  const allItems = [...paintings, ...lampworkItems];
  let total = 0;
  let html = '';

  cart.forEach(c => {
    const item = allItems.find(i => i.id === c.id);
    if (!item) return;
    total += item.price;
    const title = typeof item.title === 'object' ? item.title[currentLang] : item.title;
    const imgHTML = item.image
      ? `<img src="${item.image}" alt="${title}">`
      : `<div class="painting-placeholder" style="${item.gradient}"></div>`;

    html += `
      <div class="cart-item">
        <div class="cart-item-img">${imgHTML}</div>
        <div>
          <div class="cart-item-name">${title}</div>
          <div class="cart-item-size">${item.size}</div>
          <div class="cart-item-remove" data-action="removeFromCart" data-id="${item.id}" data-i18n="remove">${i18n[currentLang].remove}</div>
        </div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>`;
  });

  itemsEl.innerHTML = html;
  $('#cartTotalPrice').textContent = formatPrice(total);
}

// ==================== MODALS ====================
function setupModals() {
  // Auth
  $('#userBtn').addEventListener('click', () => toggleModal('authOverlay', true));
  $('#authClose').addEventListener('click', () => toggleModal('authOverlay', false));
  $('#authOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) toggleModal('authOverlay', false); });

  $$('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      $('#loginForm').style.display = tab.dataset.tab === 'login' ? '' : 'none';
      $('#registerForm').style.display = tab.dataset.tab === 'register' ? '' : 'none';
    });
  });

  // Checkout
  $('#checkoutClose').addEventListener('click', () => toggleModal('checkoutOverlay', false));
  $('#checkoutOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) toggleModal('checkoutOverlay', false); });

  // Copy
  $('#copyClose').addEventListener('click', () => toggleModal('copyOverlay', false));
  $('#copyOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) toggleModal('copyOverlay', false); });

  // Form submissions
  $('#contactForm').addEventListener('submit', e => { e.preventDefault(); showToast(i18n[currentLang].toastSent); e.target.reset(); });
  $('#loginForm').addEventListener('submit', e => { e.preventDefault(); toggleModal('authOverlay', false); showToast('OK'); });
  $('#registerForm').addEventListener('submit', e => { e.preventDefault(); toggleModal('authOverlay', false); showToast('OK'); });
  $('#copyForm').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="name"]')?.value || form.querySelector('input[type="text"]')?.value || '';
    const contact = form.querySelector('[name="contact"]')?.value || form.querySelector('input[type="email"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || form.querySelector('textarea')?.value || '';

    try {
      await fetch('/api/copy-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, contact, message,
          paintingId: currentCopyItemId,
          paintingTitle: currentCopyItemTitle,
          paintingSize: currentCopyItemSize,
          lang: currentLang
        })
      });
    } catch (e) {}

    toggleModal('copyOverlay', false);
    showToast(i18n[currentLang].toastSent);
    form.reset();
  });

  $('#checkoutForm').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name="name"]')?.value || form.querySelector('input[type="text"]')?.value || '';
    const contact = form.querySelector('[name="contact"]')?.value || form.querySelector('input[type="email"]')?.value || '';
    const message = form.querySelector('[name="message"]')?.value || form.querySelector('textarea')?.value || '';

    const allItems = [...paintings, ...lampworkItems];
    const orderItems = cart.map(c => {
      const item = allItems.find(i => i.id === c.id);
      if (!item) return null;
      const title = typeof item.title === 'object' ? item.title.ru : item.title;
      return { id: item.id, title, size: item.size, price: item.price };
    }).filter(Boolean);

    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message, items: orderItems, lang: currentLang })
      });
    } catch (e) {}

    toggleModal('checkoutOverlay', false);
    cart = [];
    saveCart();
    updateCartUI();
    showToast(i18n[currentLang].toastSent);
  });
}

function toggleModal(id, open) {
  $(`#${id}`).classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

let currentCopyItemId = '';
let currentCopyItemTitle = '';
let currentCopyItemSize = '';

function openCopyModal(id) {
  const allItems = [...paintings, ...lampworkItems];
  const item = allItems.find(i => i.id === id);
  if (!item) return;
  const title = typeof item.title === 'object' ? item.title[currentLang] : item.title;
  currentCopyItemId = item.id;
  currentCopyItemTitle = typeof item.title === 'object' ? item.title.ru : item.title;
  currentCopyItemSize = item.size;
  $('#copyPaintingName').textContent = `«${title}» — ${item.size}`;
  toggleModal('copyOverlay', true);
}

function openCheckoutModal() {
  const allItems = [...paintings, ...lampworkItems];
  let total = 0;
  let lines = '';
  cart.forEach(c => {
    const item = allItems.find(i => i.id === c.id);
    if (!item) return;
    total += item.price;
    const title = typeof item.title === 'object' ? item.title[currentLang] : item.title;
    lines += `<div style="display:flex;justify-content:space-between;padding:4px 0"><span>${title}</span><span>${formatPrice(item.price)}</span></div>`;
  });
  lines += `<div style="display:flex;justify-content:space-between;padding:8px 0 0;border-top:1px solid var(--gray-lt);margin-top:8px;font-weight:600"><span>${i18n[currentLang].cartTotal}</span><span>${formatPrice(total)}</span></div>`;
  $('#checkoutSummary').innerHTML = lines;
  toggleModal('checkoutOverlay', true);
}

// ==================== TOAST ====================
function showToast(message) {
  const toast = $('#toast');
  $('#toastText').textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 2500);
}

// ==================== HEADER ====================
function setupHeader() {
  const header = $('#siteHeader');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    lastScroll = y;
  }, { passive: true });

  // Burger
  $('#burgerBtn').addEventListener('click', () => {
    const open = !$('#mobileNav').classList.contains('open');
    $('#mobileNav').classList.toggle('open', open);
    $('#burgerBtn').classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.body.style.overflow = '';
    });
  });
}

// ==================== LANGUAGE ====================
function setupLangSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      applyLanguage(lang);
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  const t = i18n[lang];

  // Update all [data-i18n] elements
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Re-render catalogs with new language
  renderFeatured();
  renderLampworkShowcase();
  renderCatalog('paintings');
  renderCatalog('lampwork');
  updateCartUI();

  // Restore filters
  ['paintingFilters', 'lampworkFilters'].forEach(id => {
    const active = $(`.filter-btn.active`, $(`#${id}`));
    if (active && active.dataset.filter !== 'all') {
      const type = id === 'paintingFilters' ? 'paintings' : 'lampwork';
      filterCatalog(type, active.dataset.filter);
    }
  });

  // Re-apply settings texts for new language
  applySiteSettings();
}
