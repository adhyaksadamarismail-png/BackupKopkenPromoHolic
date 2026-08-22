import { initialOutlets, searchOutlets } from './data/outlets.js';
import { productCategories, products } from './data/products.js';
import { loadSettings, saveSettings } from './data/settings.js';
import {
  BUNDLE_LARGE2,
  BUNDLE_SERBA50,
  BUNDLE_MIX35_OPTS,
  BUNDLE_MIX35_PRICE,
  BUNDLE_SERBA35,
  BUNDLE_SERBA38_OPTS,
  BUNDLE_SERBA38_PRICE,
  BUNDLE_B3_ITEMS,
  BUNDLE_B3_PRICE,
  BUNDLE_NGEMIL,
  BUNDLE_NONGKRONG,
  BUNDLE_HEMAT_LARGE,
  BUNDLE_HEMAT_3REG_OPTS,
  BUNDLE_HEMAT_3REG_PRICE,
  BUNDLE_HEMAT_2REG_OPTS,
  BUNDLE_HEMAT_2REG_PRICE,
  BUNDLE_LM32,
  BUNDLE_LM35
} from './data/bundling.js';

// --- STATE MANAGEMENT ---
let appState = {
  outlets: [],
  selectedOutlet: null,
  activeCategory: 'kopi',
  menuSearchQuery: '',
  menuSort: 'default',
  cart: [],
  settings: loadSettings(),

  // Bundling state
  activeBundlingSubTab: '2large',
  selectedBundleSelection: null,
  selectedMixPicks: [],
  
  // Current active item in modal
  modalProduct: null,
  modalSelectedOptions: {
    suhu: null,
    ukuran: null,
    es: null,
    gula: null,
    beans: null,
    syrup: [],
    topping: [],
    notes: '',
    quantity: 1
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  appState.outlets = [...initialOutlets];
  
  // Load stored outlet if existing
  const savedOutlet = localStorage.getItem('promoholic_selected_outlet');
  if (savedOutlet) {
    try {
      appState.selectedOutlet = JSON.parse(savedOutlet);
    } catch (e) {
      appState.selectedOutlet = null;
    }
  }

  // Load cart state
  loadCartState();

  // Render Page Components in Final Sequence
  renderBundlesSection();
  initCategories();
  renderProducts();
  setupEventListeners();

  // Initialize Feather Icons
  if (window.feather) {
    window.feather.replace();
  }
}

function loadCartState() {
  const savedCart = localStorage.getItem('promoholic_cart');
  if (savedCart) {
    try {
      appState.cart = JSON.parse(savedCart);
    } catch (e) {
      appState.cart = [];
    }
  }
}

function saveCartState() {
  localStorage.setItem('promoholic_cart', JSON.stringify(appState.cart));
  updateCartUI();
}

function updateCartUI() {
  const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = appState.cart.reduce((sum, item) => sum + item.totalPrice, 0);

  // Badge count in header
  const badge = document.getElementById('cart-badge-count');
  if (badge) badge.textContent = totalItems;

  // Floating Cart Bar
  const floatBar = document.getElementById('floating-cart-bar');
  if (floatBar) {
    if (totalItems > 0) {
      floatBar.style.display = 'flex';
      document.getElementById('floating-cart-count').textContent = `${totalItems} item`;
      document.getElementById('floating-cart-total').textContent = formatRupiah(totalPrice);
    } else {
      floatBar.style.display = 'none';
    }
  }
}

// --- SECTION 1: PAKET BUNDLING KOPI KENANGAN (Placed right after hero) ---
function renderBundlesSection() {
  const container = document.getElementById('bundling-section-container');
  if (!container) return;

  const subTab = appState.activeBundlingSubTab || '2large';

  const subTabs = [
    { id: '2large', label: '2 Large' },
    { id: 'serba50', label: 'Serba 50k' },
    { id: 'mix35', label: 'Mix 35k' },
    { id: 'serba35', label: 'Serba 35k' },
    { id: 'serba38', label: 'Serba 38k' }
  ];

  let html = `
    <!-- Top Navy Header Banner -->
    <div class="bundling-banner-box">
      <h2 class="bundling-banner-title">Paket Bundling Kopi Kenangan</h2>
      <p class="bundling-banner-sub">Hemat lebih banyak dengan paket bundling!</p>
    </div>

    <!-- Horizontal Subnav Pills -->
    <div class="bundling-subnav-wrapper">
      ${subTabs.map(tab => `
        <button class="bundling-subtab-pill ${subTab === tab.id ? 'active' : ''}" data-subtab="${tab.id}">
          ${tab.label}
        </button>
      `).join('')}
    </div>
  `;

  if (subTab === '2large') {
    html += renderSubTab2Large();
  } else if (subTab === 'serba50') {
    html += renderSubTabSerba50();
  } else if (subTab === 'mix35') {
    html += renderSubTabMix(35000, 3, BUNDLE_MIX35_OPTS, "Pilih 3 Minuman Bebas (0/3)", "Bisa pilih produk yang sama lebih dari 1x.");
  } else if (subTab === 'serba35') {
    html += renderSubTabSerba35();
  } else if (subTab === 'serba38') {
    html += renderSubTabMix(38000, 2, BUNDLE_SERBA38_OPTS, "2 Minuman + 2 Roti Coklat — Rp38.000", "Pilih 2 minuman · Bisa pilih produk yang sama lebih dari 1x · 2 Roti Coklat sudah termasuk otomatis.", "+ 2 Roti Coklat Klasik (sudah termasuk)");
  }

  container.innerHTML = html;

  // Bind sub-tab pills click
  container.querySelectorAll('.bundling-subtab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeBundlingSubTab = btn.getAttribute('data-subtab');
      appState.selectedBundleSelection = null;
      appState.selectedMixPicks = [];
      renderBundlesSection();
    });
  });

  // Bind interactive selections inside active tab
  bindBundlingInteractions(container, subTab);
}

function renderSubTab2Large() {
  const notice = `<div class="notice-warning-pill">Rest Area, Mall, dan Outlet Tertentu beda harga +Rp3.000</div>`;

  const cards = BUNDLE_LARGE2.map(b => {
    const origPriceText = `Rp${Math.round(b.origPrice / 1000)}k`;
    const savings = b.origPrice - b.price;
    const savingsText = `Hemat Rp${Math.round(savings / 1000)}k`;
    const isSelected = appState.selectedBundleSelection && appState.selectedBundleSelection.id === b.id;

    return `
      <div class="bundle-large-card ${isSelected ? 'selected' : ''}" data-large-id="${b.id}">
        <h3 class="bundle-large-title">${b.name}</h3>
        <div class="bundle-large-price-row">
          <span class="price-original">${origPriceText}</span>
          <span class="price-pill-navy">${formatRupiah(b.price)}</span>
        </div>
        <div class="savings-green">${savingsText}</div>
      </div>
    `;
  }).join('');

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : `Tambah ke Keranjang (${formatRupiah(appState.selectedBundleSelection.price)})`;

  return `
    ${notice}
    <div class="bundle-large-grid">
      ${cards}
    </div>
    <button class="btn-cta-sticky" id="btn-add-bundling-cta" ${ctaDisabled ? 'disabled' : ''}>
      ${ctaText}
    </button>
  `;
}

function renderSubTabSerba50() {
  const cards = BUNDLE_SERBA50.map(b => {
    const isSelected = appState.selectedBundleSelection && appState.selectedBundleSelection.code === b.code;

    return `
      <div class="bundle-list-card ${isSelected ? 'selected' : ''}" data-serba50-code="${b.code}">
        <div class="bundle-card-header">
          <span class="bundle-code-badge">Paket ${b.code}</span>
          <span class="bundle-card-price">${formatRupiah(b.price)}</span>
        </div>
        <ul class="bundle-items-list">
          ${b.items.map(item => `<li>• ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : 'Tambah ke Keranjang (Rp 50.000)';

  return `
    <div class="bundle-list-container">
      ${cards}
    </div>
    <button class="btn-cta-sticky" id="btn-add-bundling-cta" ${ctaDisabled ? 'disabled' : ''}>
      ${ctaText}
    </button>
  `;
}

function renderSubTabSerba35() {
  const cards = BUNDLE_SERBA35.map(b => {
    const isSelected = appState.selectedBundleSelection && appState.selectedBundleSelection.code === b.code;

    return `
      <div class="bundle-list-card ${isSelected ? 'selected' : ''}" data-serba35-code="${b.code}">
        <div class="bundle-card-header">
          <span class="bundle-code-badge">${b.name || ('Paket ' + b.code)}</span>
          <span class="bundle-card-price">${formatRupiah(b.price)}</span>
        </div>
        <ul class="bundle-items-list">
          ${b.items.map(item => `<li>• ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : 'Tambah ke Keranjang (Rp 35.000)';

  return `
    <div class="bundle-list-container">
      ${cards}
    </div>
    <button class="btn-cta-sticky" id="btn-add-bundling-cta" ${ctaDisabled ? 'disabled' : ''}>
      ${ctaText}
    </button>
  `;
}

function renderSubTabMix(price, maxPicks, optionsList, titleText, subTextInfo = '', subTextExtra = '') {
  const currentCount = appState.selectedMixPicks.length;
  const ctaDisabled = currentCount < maxPicks;

  const pickCounts = {};
  appState.selectedMixPicks.forEach(name => {
    pickCounts[name] = (pickCounts[name] || 0) + 1;
  });

  const pills = optionsList.map(name => {
    const count = pickCounts[name] || 0;
    const isSelected = count > 0;

    return `
      <button class="mix-pill-btn ${isSelected ? 'selected' : ''}" data-mix-name="${name}">
        <span>${name}</span>
        ${count > 0 ? `<span class="mix-pill-badge">${count}</span>` : ''}
      </button>
    `;
  }).join('');

  const remaining = maxPicks - currentCount;
  const ctaText = ctaDisabled
    ? `Pilih ${remaining} minuman lagi...`
    : `Tambah ke Keranjang (${formatRupiah(price)})`;

  return `
    <div class="mix-box-header">
      <div class="mix-box-title">${titleText}</div>
      ${subTextInfo ? `<div class="mix-box-sub">${subTextInfo}</div>` : ''}
    </div>

    <div style="font-size: 13px; font-weight: 800; color: var(--text-main); margin-bottom: 8px;">
      Pilih ${maxPicks} Minuman (${currentCount}/${maxPicks}):
    </div>

    <div class="mix-grid-pills">
      ${pills}
    </div>

    ${subTextExtra ? `<div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 14px; text-align: center;">${subTextExtra}</div>` : ''}

    <button class="btn-cta-sticky" id="btn-add-mix-cta" ${ctaDisabled ? 'disabled' : ''}>
      ${ctaText}
    </button>
  `;
}

function bindBundlingInteractions(container, subTab) {
  if (subTab === '2large') {
    container.querySelectorAll('.bundle-large-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-large-id');
        appState.selectedBundleSelection = BUNDLE_LARGE2.find(b => b.id === id);
        renderBundlesSection();
      });
    });
  } else if (subTab === 'serba50') {
    container.querySelectorAll('.bundle-list-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-serba50-code');
        appState.selectedBundleSelection = BUNDLE_SERBA50.find(b => b.code === code);
        renderBundlesSection();
      });
    });
  } else if (subTab === 'serba35') {
    container.querySelectorAll('.bundle-list-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-serba35-code');
        appState.selectedBundleSelection = BUNDLE_SERBA35.find(b => b.code === code);
        renderBundlesSection();
      });
    });
  } else if (subTab === 'mix35' || subTab === 'serba38') {
    const maxPicks = subTab === 'mix35' ? 3 : 2;
    container.querySelectorAll('.mix-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-mix-name');
        if (appState.selectedMixPicks.length < maxPicks) {
          appState.selectedMixPicks.push(name);
        } else {
          appState.selectedMixPicks.shift();
          appState.selectedMixPicks.push(name);
        }
        renderBundlesSection();
      });
    });
  }

  // CTA Click handlers
  const btnCta = container.querySelector('#btn-add-bundling-cta');
  if (btnCta) {
    btnCta.addEventListener('click', () => {
      if (!appState.selectedBundleSelection) return;
      const b = appState.selectedBundleSelection;
      
      const cartItem = {
        id: 'cart-bundle-' + Date.now(),
        productId: `bundle-${b.id || b.code}`,
        productName: `[PROMO BUNDLE] ${b.name || ('Paket ' + b.code)}`,
        quantity: 1,
        unitPrice: b.price,
        totalPrice: b.price,
        options: {
          details: b.items ? b.items.join(', ') : '2 Cup Large'
        }
      };

      appState.cart.push(cartItem);
      saveCartState();
      updateCartUI();
      appState.selectedBundleSelection = null;
      renderBundlesSection();
    });
  }

  const btnMixCta = container.querySelector('#btn-add-mix-cta');
  if (btnMixCta) {
    btnMixCta.addEventListener('click', () => {
      const maxPicks = subTab === 'mix35' ? 3 : 2;
      if (appState.selectedMixPicks.length < maxPicks) return;

      const price = subTab === 'mix35' ? 35000 : 38000;
      const title = subTab === 'mix35' ? 'Paket Mix 35k (3 Minuman)' : 'Paket Serba 38k (2 Minuman + 2 Roti Coklat)';
      const detailsText = appState.selectedMixPicks.join(', ') + (subTab === 'serba38' ? ' + 2x Roti Coklat Klasik' : '');

      const cartItem = {
        id: 'cart-bundle-' + Date.now(),
        productId: `bundle-mix-${Date.now()}`,
        productName: `[PROMO BUNDLE] ${title}`,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        options: {
          details: detailsText
        }
      };

      appState.cart.push(cartItem);
      saveCartState();
      updateCartUI();
      appState.selectedMixPicks = [];
      renderBundlesSection();
    });
  }
}

// --- SECTION 2: MENU SATUAN (Categories & Product Grid) ---
function initCategories() {
  const container = document.getElementById('category-nav-list');
  if (!container) return;

  container.innerHTML = productCategories.map(cat => `
    <button 
      class="category-pill ${cat.id === appState.activeCategory ? 'active' : ''}" 
      data-category-id="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.category-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeCategory = btn.getAttribute('data-category-id');
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  
  let list = products.filter(p => p.category === appState.activeCategory);

  // Search filter
  if (appState.menuSearchQuery) {
    const q = appState.menuSearchQuery.toLowerCase().trim();
    list = products.filter(p => p.name.toLowerCase().includes(q));
  }

  // Sort
  if (appState.menuSort === 'low-to-high') {
    list.sort((a, b) => a.price - b.price);
  } else if (appState.menuSort === 'high-to-low') {
    list.sort((a, b) => b.price - a.price);
  }

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">Tidak ada menu ditemukan</div>`;
    return;
  }

  grid.innerHTML = list.map(prod => `
    <div class="product-card" data-product-id="${prod.id}">
      <div class="product-img-wrapper">
        ${prod.isBestSeller ? '<span class="best-seller-badge">★ Best Seller</span>' : ''}
        <img src="${prod.image}" alt="${prod.name}" class="product-img" loading="lazy" />
      </div>
      <div>
        <h3 class="product-name">${prod.name}</h3>
        <div class="product-price-row">
          <div class="price-container">
            ${prod.originalPrice ? `<span class="price-original">${formatRupiah(prod.originalPrice)}</span>` : ''}
            <span class="price-current">${formatRupiah(prod.price)}</span>
          </div>
          <button class="btn-add-mini" title="Tambah">+</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    const prodId = card.getAttribute('data-product-id');
    const prod = products.find(p => p.id === prodId);

    const btnAdd = card.querySelector('.btn-add-mini');
    if (btnAdd) {
      btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!prod) return;

        // Default options for quick add via + button
        const defaultOptions = {
          suhu: prod.options.suhu.length > 0 ? prod.options.suhu[0] : null,
          ukuran: prod.options.ukuran.length > 0 ? prod.options.ukuran[0] : null,
          es: prod.options.es.length > 0 ? prod.options.es[0] : null,
          gula: prod.options.gula.length > 0 ? prod.options.gula[0] : null,
          beans: prod.options.beans.length > 0 ? prod.options.beans[0] : null,
          syrup: [],
          topping: [],
          notes: '',
          quantity: 1
        };

        const cartItem = {
          id: 'cart-item-' + Date.now(),
          productId: prod.id,
          productName: prod.name,
          quantity: 1,
          unitPrice: prod.price,
          totalPrice: prod.price,
          options: defaultOptions
        };

        appState.cart.push(cartItem);
        saveCartState();
        updateCartUI();
      });
    }

    card.addEventListener('click', () => {
      openProductDetailModal(prodId);
    });
  });
}

// --- PRODUCT DETAIL MODAL ---
function openProductDetailModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  appState.modalProduct = prod;
  
  appState.modalSelectedOptions = {
    suhu: prod.options.suhu.length > 0 ? prod.options.suhu[0] : null,
    ukuran: prod.options.ukuran.length > 0 ? prod.options.ukuran[0] : null,
    es: prod.options.es.length > 0 ? prod.options.es[0] : null,
    gula: prod.options.gula.length > 0 ? prod.options.gula[0] : null,
    beans: prod.options.beans.length > 0 ? prod.options.beans[0] : null,
    syrup: [],
    topping: [],
    notes: '',
    quantity: 1
  };

  document.getElementById('detail-hero-img').src = prod.image;
  document.getElementById('detail-product-title').textContent = prod.name;
  document.getElementById('detail-original-price').textContent = prod.originalPrice ? formatRupiah(prod.originalPrice) : '';
  document.getElementById('detail-promo-price').textContent = formatRupiah(prod.price);
  document.getElementById('detail-notes-input').value = '';
  document.getElementById('detail-qty-val').textContent = '1';

  renderPillGroup('suhu', prod.options.suhu);
  renderPillGroup('ukuran', prod.options.ukuran);
  renderPillGroup('es', prod.options.es);
  renderPillGroup('gula', prod.options.gula);
  renderPillGroup('beans', prod.options.beans);
  renderCheckboxGroup('syrup', prod.options.syrup);
  renderCheckboxGroup('topping', prod.options.topping);

  recalculateModalTotal();

  const modal = document.getElementById('modal-product-detail');
  modal.classList.add('active');
}

function renderPillGroup(groupName, options) {
  const container = document.getElementById(`options-group-${groupName}`);
  if (!container) return;

  const sectionParent = container.closest('.option-section');

  if (!options || options.length === 0) {
    if (sectionParent) sectionParent.style.display = 'none';
    return;
  }

  if (sectionParent) sectionParent.style.display = 'block';

  container.innerHTML = options.map(opt => {
    const isSelected = appState.modalSelectedOptions[groupName] && appState.modalSelectedOptions[groupName].id === opt.id;
    const priceText = opt.price > 0 ? ` (+${formatRupiah(opt.price)})` : '';
    return `
      <button class="option-pill ${isSelected ? 'selected' : ''}" data-group="${groupName}" data-id="${opt.id}">
        ${opt.name}${priceText}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.option-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = btn.getAttribute('data-group');
      const id = btn.getAttribute('data-id');
      const selectedOpt = options.find(o => o.id === id);
      appState.modalSelectedOptions[g] = selectedOpt;

      container.querySelectorAll('.option-pill').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      recalculateModalTotal();
    });
  });
}

function renderCheckboxGroup(groupName, options) {
  const container = document.getElementById(`options-group-${groupName}`);
  if (!container) return;

  const sectionParent = container.closest('.option-section');

  if (!options || options.length === 0) {
    if (sectionParent) sectionParent.style.display = 'none';
    return;
  }

  if (sectionParent) sectionParent.style.display = 'block';

  container.innerHTML = options.map(opt => {
    const isChecked = appState.modalSelectedOptions[groupName].some(o => o.id === opt.id);
    const priceText = opt.price > 0 ? ` (+${formatRupiah(opt.price)})` : '';
    return `
      <label class="checkbox-pill ${isChecked ? 'checked' : ''}">
        <input type="checkbox" data-group="${groupName}" data-id="${opt.id}" ${isChecked ? 'checked' : ''} style="display:none;" />
        ${opt.name}${priceText}
      </label>
    `;
  }).join('');

  container.querySelectorAll('.checkbox-pill').forEach(label => {
    const input = label.querySelector('input');
    input.addEventListener('change', () => {
      const g = input.getAttribute('data-group');
      const id = input.getAttribute('data-id');
      const opt = options.find(o => o.id === id);

      if (input.checked) {
        appState.modalSelectedOptions[g].push(opt);
        label.classList.add('checked');
      } else {
        appState.modalSelectedOptions[g] = appState.modalSelectedOptions[g].filter(o => o.id !== id);
        label.classList.remove('checked');
      }

      recalculateModalTotal();
    });
  });
}

function recalculateModalTotal() {
  if (!appState.modalProduct) return;

  const basePrice = appState.modalProduct.price;
  let extraPrice = 0;

  ['suhu', 'ukuran', 'es', 'gula', 'beans'].forEach(g => {
    if (appState.modalSelectedOptions[g] && appState.modalSelectedOptions[g].price) {
      extraPrice += appState.modalSelectedOptions[g].price;
    }
  });

  ['syrup', 'topping'].forEach(g => {
    appState.modalSelectedOptions[g].forEach(opt => {
      extraPrice += opt.price;
    });
  });

  const unitPrice = basePrice + extraPrice;
  const totalPrice = unitPrice * appState.modalSelectedOptions.quantity;

  document.getElementById('modal-price-total').textContent = formatRupiah(totalPrice);
}

// --- CART & MINIMUM UNIT ITEM VALIDATION ---
function validateCartMinimum() {
  const unitItems = appState.cart.filter(item => !item.productName.startsWith('[PROMO BUNDLE]'));
  const unitTotalQty = unitItems.reduce((sum, item) => sum + item.quantity, 0);
  const bundleItems = appState.cart.filter(item => item.productName.startsWith('[PROMO BUNDLE]'));

  // Minimum 2 items requirement for unit items
  if (unitTotalQty > 0 && unitTotalQty < 2 && bundleItems.length === 0) {
    return {
      valid: false,
      message: "Minimum pembelian adalah 2 item. Silakan tambahkan 1 item lagi."
    };
  }
  return { valid: true };
}

function openCartModal() {
  renderCartDrawerItems();
  const modal = document.getElementById('modal-cart');
  modal.classList.add('active');
}

function renderCartDrawerItems() {
  const container = document.getElementById('cart-drawer-items');
  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">Keranjang Anda kosong</div>`;
    document.getElementById('cart-subtotal-val').textContent = 'Rp 0';
    return;
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + item.totalPrice, 0);

  container.innerHTML = appState.cart.map((item, idx) => {
    const opts = [];
    if (item.options.ukuran) opts.push(item.options.ukuran.name);
    if (item.options.es) opts.push(item.options.es.name);
    if (item.options.gula) opts.push(item.options.gula.name);
    if (item.options.beans && item.options.beans.price > 0) opts.push(item.options.beans.name);
    if (item.options.syrup && item.options.syrup.length > 0) opts.push(...item.options.syrup.map(s => s.name));
    if (item.options.topping && item.options.topping.length > 0) opts.push(...item.options.topping.map(t => t.name));
    if (item.options.details) opts.push(item.options.details);
    if (item.options.notes) opts.push(`Catatan: ${item.options.notes}`);

    const optStr = opts.length > 0 ? opts.join(' · ') : '';

    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px; margin-bottom: 10px; display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 14px; font-weight: 700; color: var(--text-main);">${item.productName}</div>
            ${optStr ? `<div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">${optStr}</div>` : ''}
          </div>
          <button class="btn-trash" data-index="${idx}" style="background: transparent; border: none; color: #ef4444; cursor: pointer; padding: 4px;">
            <i data-feather="trash-2" style="width: 16px; height: 16px;"></i>
          </button>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
          <div style="font-size: 14px; font-weight: 800; color: var(--primary-orange);">${formatRupiah(item.totalPrice)}</div>
          
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn-qty btn-cart-qty-minus" data-index="${idx}" style="width: 24px; height: 24px; font-size: 12px;">-</button>
            <span style="font-size: 13px; font-weight: 700;">${item.quantity}</span>
            <button class="btn-qty btn-cart-qty-plus" data-index="${idx}" style="width: 24px; height: 24px; font-size: 12px;">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-subtotal-val').textContent = formatRupiah(subtotal);

  if (window.feather) window.feather.replace();

  container.querySelectorAll('.btn-trash').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      appState.cart.splice(idx, 1);
      saveCartState();
      renderCartDrawerItems();
    });
  });

  container.querySelectorAll('.btn-cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (appState.cart[idx].quantity > 1) {
        appState.cart[idx].quantity--;
        const unitPrice = appState.cart[idx].totalPrice / (appState.cart[idx].quantity + 1);
        appState.cart[idx].totalPrice = unitPrice * appState.cart[idx].quantity;
      } else {
        appState.cart.splice(idx, 1);
      }
      saveCartState();
      renderCartDrawerItems();
    });
  });

  container.querySelectorAll('.btn-cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const unitPrice = appState.cart[idx].totalPrice / appState.cart[idx].quantity;
      appState.cart[idx].quantity++;
      appState.cart[idx].totalPrice = unitPrice * appState.cart[idx].quantity;
      saveCartState();
      renderCartDrawerItems();
    });
  });
}

// --- CHECKOUT & OUTLET SURCHARGE CALCULATION ---
function openCheckoutModal() {
  if (appState.cart.length === 0) {
    alert("Keranjang Anda masih kosong!");
    return;
  }

  const check = validateCartMinimum();
  if (!check.valid) {
    alert(check.message);
    return;
  }

  document.getElementById('modal-cart').classList.remove('active');
  document.getElementById('modal-checkout').classList.add('active');

  renderCheckoutOutletSection();
  renderCheckoutSummary();
}

function renderCheckoutOutletSection() {
  const card = document.getElementById('checkout-selected-outlet-card');
  const dropdown = document.getElementById('checkout-outlets-dropdown');
  const input = document.getElementById('input-checkout-outlet-search');

  if (!card || !dropdown || !input) return;

  if (appState.selectedOutlet) {
    dropdown.style.display = 'none';
    card.style.display = 'flex';
    document.getElementById('checkout-selected-outlet-name').textContent = appState.selectedOutlet.name;
    document.getElementById('checkout-selected-outlet-address').textContent = appState.selectedOutlet.address;

    // Check surcharge rule: Rest Area / Mall / Airport / Stasiun or hasSurcharge flag
    const nameLower = appState.selectedOutlet.name.toLowerCase();
    const isSurcharge = appState.selectedOutlet.hasSurcharge || 
                        nameLower.includes('rest area') || 
                        nameLower.includes('mall') || 
                        nameLower.includes('bandara') || 
                        nameLower.includes('airport') || 
                        nameLower.includes('stasiun');

    const badge = document.getElementById('checkout-surcharge-badge');
    if (badge) {
      badge.style.display = isSurcharge ? 'block' : 'none';
    }
  } else {
    card.style.display = 'none';
    dropdown.style.display = 'none';
    input.value = '';
  }
}

function handleCheckoutOutletSearch(query) {
  const dropdown = document.getElementById('checkout-outlets-dropdown');
  if (!dropdown) return;

  if (!query.trim()) {
    dropdown.style.display = 'none';
    return;
  }

  const results = searchOutlets(appState.outlets, query, 15);

  if (results.length === 0) {
    dropdown.innerHTML = `<div style="padding: 12px; font-size: 13px; color: var(--text-muted); text-align: center;">Outlet tidak ditemukan</div>`;
  } else {
    dropdown.innerHTML = results.map(o => `
      <div class="outlet-item" data-id="${o.id}">
        <div style="font-weight: 700; font-size: 13px;">${o.name}</div>
        <div style="font-size: 11px; color: var(--text-secondary);">${o.city} — ${o.address}</div>
      </div>
    `).join('');
  }

  dropdown.style.display = 'block';

  dropdown.querySelectorAll('.outlet-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      const selected = appState.outlets.find(o => o.id === id);
      if (selected) {
        appState.selectedOutlet = selected;
        localStorage.setItem('promoholic_selected_outlet', JSON.stringify(selected));
        renderCheckoutOutletSection();
        renderCheckoutSummary();
      }
    });
  });
}

function calculateFinalOrderTotal() {
  const nameLower = appState.selectedOutlet ? appState.selectedOutlet.name.toLowerCase() : '';
  const isSurcharge = appState.selectedOutlet && (
    appState.selectedOutlet.hasSurcharge || 
    nameLower.includes('rest area') || 
    nameLower.includes('mall') || 
    nameLower.includes('bandara') || 
    nameLower.includes('airport') || 
    nameLower.includes('stasiun')
  );

  let total = 0;
  appState.cart.forEach(item => {
    let price = item.totalPrice;
    if (isSurcharge && item.productName.includes('2 Large')) {
      price += 3000 * item.quantity;
    }
    total += price;
  });

  return { total, isSurcharge };
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-summary-items');
  if (!container) return;

  const { total, isSurcharge } = calculateFinalOrderTotal();

  container.innerHTML = appState.cart.map(item => {
    let itemPrice = item.totalPrice;
    if (isSurcharge && item.productName.includes('2 Large')) {
      itemPrice += 3000 * item.quantity;
    }
    return `
      <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
        <span>${item.quantity}x ${item.productName}</span>
        <span style="font-weight: 700;">${formatRupiah(itemPrice)}</span>
      </div>
    `;
  }).join('');

  document.getElementById('checkout-summary-total').textContent = formatRupiah(total);
}

function processWhatsAppOrder() {
  if (appState.cart.length === 0) {
    alert("Keranjang Anda masih kosong!");
    return;
  }
  if (!appState.selectedOutlet) {
    alert("Silakan pilih outlet Kopi Kenangan terlebih dahulu!");
    return;
  }

  const nameInput = document.getElementById('checkout-name').value.trim();
  const pickupInput = document.getElementById('checkout-pickup-time').value.trim();

  if (!nameInput) {
    alert("Silakan masukkan nama pemesan!");
    return;
  }
  if (!pickupInput) {
    alert("Silakan masukkan waktu pickup!");
    return;
  }

  const { total, isSurcharge } = calculateFinalOrderTotal();

  // Generate WhatsApp message format matching user's exact specification
  let orderText = `Halo, saya ingin memesan:\n\n`;
  orderText += `☕ Brand: ☕ Kopi Kenangan\n`;
  orderText += `👤 Nama: ${nameInput}\n`;
  orderText += `📍 Outlet: ${appState.selectedOutlet.name}\n`;
  orderText += `⏰ Pickup: ${pickupInput}\n\n`;
  orderText += `🍵 Pesanan:\n`;

  appState.cart.forEach(item => {
    let itemPrice = item.totalPrice;
    if (isSurcharge && item.productName.includes('2 Large')) {
      itemPrice += 3000 * item.quantity;
    }
    orderText += `• ${item.productName} x${item.quantity} — ${formatRupiah(itemPrice)}\n`;
  });

  orderText += `\n💰 Total: ${formatRupiah(total)}\n\n`;
  orderText += `Mohon konfirmasi pesanan saya. Terima kasih! 🙏`;

  const waNumber = appState.settings.adminWhatsApp || '6285159646922';
  const encodedText = encodeURIComponent(orderText);
  const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

  window.open(waUrl, '_blank');
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Toggle Hamburger Social Menu Dropdown
  const btnToggleMenu = document.getElementById('btn-toggle-menu');
  const socialDropdown = document.getElementById('social-dropdown-menu');

  if (btnToggleMenu && socialDropdown) {
    btnToggleMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      socialDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!socialDropdown.contains(e.target) && !btnToggleMenu.contains(e.target)) {
        socialDropdown.classList.remove('show');
      }
    });
  }

  // Main Tab Navigation Handlers ([ Menu ] vs [ Menu Bundling ])
  const tabBtnUnit = document.getElementById('tab-btn-unit-menu');
  const tabBtnBundling = document.getElementById('tab-btn-bundling-menu');
  const sectionUnit = document.getElementById('section-unit-menu');
  const sectionBundling = document.getElementById('section-bundling-menu');

  if (tabBtnUnit && tabBtnBundling && sectionUnit && sectionBundling) {
    tabBtnUnit.addEventListener('click', () => {
      tabBtnUnit.classList.add('active');
      tabBtnBundling.classList.remove('active');
      sectionUnit.style.display = 'block';
      sectionBundling.style.display = 'none';
      appState.activeMainTab = 'unit';
      renderProducts();
    });

    tabBtnBundling.addEventListener('click', () => {
      tabBtnBundling.classList.add('active');
      tabBtnUnit.classList.remove('active');
      sectionUnit.style.display = 'none';
      sectionBundling.style.display = 'block';
      appState.activeMainTab = 'bundling';
      renderBundlesSection();
    });
  }

  // Panduan Modal Handlers
  const btnOpenPanduan = document.getElementById('btn-open-panduan');
  const btnClosePanduan = document.getElementById('btn-close-panduan');
  const btnUnderstoodPanduan = document.getElementById('btn-understood-panduan');
  const modalPanduan = document.getElementById('modal-panduan');

  if (btnOpenPanduan && modalPanduan) {
    btnOpenPanduan.addEventListener('click', () => {
      if (socialDropdown) socialDropdown.classList.remove('show');
      modalPanduan.classList.add('active');
    });
  }

  if (btnClosePanduan && modalPanduan) {
    btnClosePanduan.addEventListener('click', () => {
      modalPanduan.classList.remove('active');
    });
  }

  if (btnUnderstoodPanduan && modalPanduan) {
    btnUnderstoodPanduan.addEventListener('click', () => {
      modalPanduan.classList.remove('active');
    });
  }

  // Checkout Outlet Search Input
  const checkoutOutletSearch = document.getElementById('input-checkout-outlet-search');
  if (checkoutOutletSearch) {
    checkoutOutletSearch.addEventListener('input', (e) => handleCheckoutOutletSearch(e.target.value));
  }

  // Checkout Change Outlet Button
  const btnCheckoutChangeOutlet = document.getElementById('btn-checkout-change-outlet');
  if (btnCheckoutChangeOutlet) {
    btnCheckoutChangeOutlet.addEventListener('click', () => {
      appState.selectedOutlet = null;
      localStorage.removeItem('promoholic_selected_outlet');
      renderCheckoutOutletSection();
    });
  }

  // Search Menu Input
  const searchMenuInput = document.getElementById('input-menu-search');
  if (searchMenuInput) {
    searchMenuInput.addEventListener('input', (e) => {
      appState.menuSearchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort Menu Dropdown
  const selectMenuSort = document.getElementById('select-menu-sort');
  if (selectMenuSort) {
    selectMenuSort.addEventListener('change', (e) => {
      appState.menuSort = e.target.value;
      renderProducts();
    });
  }

  // Cart Clicks
  const floatBar = document.getElementById('floating-cart-bar');
  if (floatBar) floatBar.addEventListener('click', openCartModal);

  const btnOpenCartHeader = document.getElementById('btn-open-cart-header');
  if (btnOpenCartHeader) btnOpenCartHeader.addEventListener('click', openCartModal);

  // Close Product Detail Modal
  const btnCloseDetail = document.getElementById('btn-close-product-detail');
  if (btnCloseDetail) {
    btnCloseDetail.addEventListener('click', () => {
      document.getElementById('modal-product-detail').classList.remove('active');
    });
  }

  // Modal Quantity Adjusters
  const btnQtyMinus = document.getElementById('btn-qty-minus');
  if (btnQtyMinus) {
    btnQtyMinus.addEventListener('click', () => {
      if (appState.modalSelectedOptions.quantity > 1) {
        appState.modalSelectedOptions.quantity--;
        document.getElementById('detail-qty-val').textContent = appState.modalSelectedOptions.quantity;
        recalculateModalTotal();
      }
    });
  }

  const btnQtyPlus = document.getElementById('btn-qty-plus');
  if (btnQtyPlus) {
    btnQtyPlus.addEventListener('click', () => {
      appState.modalSelectedOptions.quantity++;
      document.getElementById('detail-qty-val').textContent = appState.modalSelectedOptions.quantity;
      recalculateModalTotal();
    });
  }

  // Modal Notes Input
  const notesInput = document.getElementById('detail-notes-input');
  if (notesInput) {
    notesInput.addEventListener('input', (e) => {
      appState.modalSelectedOptions.notes = e.target.value;
    });
  }

  // Modal Add to Cart CTA
  const btnAddToCartModal = document.getElementById('btn-add-to-cart-modal');
  if (btnAddToCartModal) {
    btnAddToCartModal.addEventListener('click', () => {
      if (!appState.modalProduct) return;

      const basePrice = appState.modalProduct.price;
      let extraPrice = 0;

      ['suhu', 'ukuran', 'es', 'gula', 'beans'].forEach(g => {
        if (appState.modalSelectedOptions[g] && appState.modalSelectedOptions[g].price) {
          extraPrice += appState.modalSelectedOptions[g].price;
        }
      });

      ['syrup', 'topping'].forEach(g => {
        appState.modalSelectedOptions[g].forEach(opt => {
          extraPrice += opt.price;
        });
      });

      const unitPrice = basePrice + extraPrice;
      const totalPrice = unitPrice * appState.modalSelectedOptions.quantity;

      const cartItem = {
        id: 'cart-item-' + Date.now(),
        productId: appState.modalProduct.id,
        productName: appState.modalProduct.name,
        quantity: appState.modalSelectedOptions.quantity,
        unitPrice: unitPrice,
        totalPrice: totalPrice,
        options: { ...appState.modalSelectedOptions }
      };

      appState.cart.push(cartItem);
      saveCartState();

      document.getElementById('modal-product-detail').classList.remove('active');
    });
  }

  // Cart Drawer Events
  const btnCloseCart = document.getElementById('btn-close-cart');
  if (btnCloseCart) {
    btnCloseCart.addEventListener('click', () => {
      document.getElementById('modal-cart').classList.remove('active');
    });
  }

  const btnProceedCheckout = document.getElementById('btn-proceed-checkout');
  if (btnProceedCheckout) {
    btnProceedCheckout.addEventListener('click', openCheckoutModal);
  }

  // Checkout Events
  const btnCloseCheckout = document.getElementById('btn-close-checkout');
  if (btnCloseCheckout) {
    btnCloseCheckout.addEventListener('click', () => {
      document.getElementById('modal-checkout').classList.remove('active');
    });
  }

  const btnSendWa = document.getElementById('btn-send-whatsapp');
  if (btnSendWa) {
    btnSendWa.addEventListener('click', processWhatsAppOrder);
  }

  // Admin Modal Events
  const btnOpenAdmin = document.getElementById('btn-open-admin');
  if (btnOpenAdmin) {
    btnOpenAdmin.addEventListener('click', () => {
      if (socialDropdown) socialDropdown.classList.remove('show');
      openAdminModal();
    });
  }
  
  const btnCloseAdmin = document.getElementById('btn-close-admin');
  if (btnCloseAdmin) {
    btnCloseAdmin.addEventListener('click', () => {
      document.getElementById('modal-admin').classList.remove('active');
    });
  }

  const tabBtnOutlets = document.getElementById('tab-btn-outlets');
  if (tabBtnOutlets) {
    tabBtnOutlets.addEventListener('click', () => {
      tabBtnOutlets.classList.add('active');
      document.getElementById('tab-btn-settings').classList.remove('active');
      document.getElementById('tab-content-outlets').style.display = 'block';
      document.getElementById('tab-content-settings').style.display = 'none';
    });
  }

  const tabBtnSettings = document.getElementById('tab-btn-settings');
  if (tabBtnSettings) {
    tabBtnSettings.addEventListener('click', () => {
      tabBtnSettings.classList.add('active');
      document.getElementById('tab-btn-outlets').classList.remove('active');
      document.getElementById('tab-content-settings').style.display = 'block';
      document.getElementById('tab-content-outlets').style.display = 'none';
    });
  }

  const adminOutletSearch = document.getElementById('admin-outlet-search');
  if (adminOutletSearch) {
    adminOutletSearch.addEventListener('input', (e) => {
      renderAdminOutletsList(e.target.value);
    });
  }

  const btnSaveAdminSettings = document.getElementById('btn-save-admin-settings');
  if (btnSaveAdminSettings) {
    btnSaveAdminSettings.addEventListener('click', () => {
      const waVal = document.getElementById('setting-admin-wa').value.trim();
      const wifiVal = document.getElementById('setting-wifi-text').value.trim();

      appState.settings.adminWhatsApp = waVal;
      appState.settings.wifiPassword = wifiVal;

      saveSettings(appState.settings);
      alert('Pengaturan admin berhasil disimpan!');
      document.getElementById('modal-admin').classList.remove('active');
    });
  }
}

// --- HELPER UTILITIES ---
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

// --- ADMIN PANEL FUNCTIONS ---
function openAdminModal() {
  renderAdminOutletsList();
  document.getElementById('setting-admin-wa').value = appState.settings.adminWhatsApp;
  document.getElementById('setting-wifi-text').value = appState.settings.wifiPassword;
  
  document.getElementById('modal-admin').classList.add('active');
}

function renderAdminOutletsList(query = '') {
  const container = document.getElementById('admin-outlets-list');
  if (!container) return;

  const filtered = searchOutlets(appState.outlets, query, 100);

  container.innerHTML = filtered.map(outlet => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 10px; display: flex; align-items: center; justify-content: space-between;">
      <div>
        <div style="font-size: 13px; font-weight: 700;">${outlet.name} <span class="${outlet.is_active ? 'badge-active' : 'badge-inactive'}">${outlet.is_active ? 'Aktif' : 'Nonaktif'}</span></div>
        <div style="font-size: 11px; color: var(--text-secondary);">${outlet.city} — ${outlet.address}</div>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="btn-change-outlet btn-toggle-active" data-id="${outlet.id}" style="padding: 4px 8px; font-size: 10px;">
          ${outlet.is_active ? 'Nonaktifkan' : 'Aktifkan'}
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-toggle-active').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const target = appState.outlets.find(o => o.id === id);
      if (target) {
        target.is_active = !target.is_active;
        renderAdminOutletsList(query);
      }
    });
  });
}
