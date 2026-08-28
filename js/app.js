import { initialOutlets, searchOutlets } from './data/outlets.js';
import { productCategories, products } from './data/products.js';
import { loadSettings, saveSettings } from './data/settings.js';
import { createOrder, fetchOrdersByPhone, subscribeCustomerOrders, normalizePhone, escapeHtml } from './data/supabase.js';
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
  selectedBundleSugars: {},
  
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
  },
  
  // Kantung Belanja optional state (default false / Tidak)
  includeShoppingBag: false,
  pickupType: 'now',
  pickupTime: 'Sekarang',
  checkoutSurcharge: 0
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

// --- BUNDLING HELPERS & SUGAR CONFIGURATION ---
function isItemDrink(name) {
  if (!name) return false;
  const n = name.toLowerCase();
  const foodKeywords = ['bun', 'choux', 'roti', 'saltbread', 'salt bread', 'croissant', 'toast', 'cheeseburger', 'cookie', 'donat', 'donut', 'canele', 'cromboloni'];
  return !foodKeywords.some(kw => n.includes(kw));
}

function isItemRawanStok(name) {
  if (!name) return false;
  const n = name.toLowerCase();
  return n.includes('saltbread') || n.includes('salt bread');
}

function formatDrinkName(name) {
  if (!name) return '';
  let clean = name.trim();
  
  if (clean.toLowerCase() === 'kkm regular' || clean.toLowerCase() === 'kkm reg') return 'KKM Regular';
  if (clean.toLowerCase() === 'spanish regular' || clean.toLowerCase() === 'spanish reg') return 'Spanish Regular';
  if (clean.toLowerCase() === 'americano regular') return 'Americano Regular';
  if (clean.toLowerCase() === 'toffe nut latte regular' || clean.toLowerCase() === 'toffee nut latte reg') return 'Toffee Nut Latte Regular';
  if (clean.toLowerCase() === 'baby cino' || clean.toLowerCase() === 'babycino') return 'Babyccino';
  if (clean.toLowerCase() === 'og thai tea' || clean.toLowerCase() === 'og thaitea reg') return 'OG Thai Tea Regular';
  if (clean.toLowerCase() === 'pistachio aren') return 'Pistachio Aren';
  if (clean.toLowerCase() === 'caramel matchiato reg') return 'Caramel Macchiato Regular';
  if (clean.toLowerCase() === 'creamy aren latte reg' || clean.toLowerCase() === 'creamy aren latte regular') return 'Creamy Aren Latte Regular';
  if (clean.toLowerCase() === 'hazelnut choco milk tea') return 'Hazelnut Choco Milk Tea';
  if (clean.toLowerCase() === 'butterscotch aren latte reg') return 'Butterscotch Aren Latte Regular';
  if (clean.toLowerCase() === 'butterscotch seasalt crumble') return 'Butterscotch Seasalt Crumble';
  
  return clean;
}

function expandBundleItemsList(rawItems) {
  const result = [];
  rawItems.forEach(raw => {
    let count = 1;
    let name = raw;
    const match = raw.match(/^(\d+)x?\s+(.*)$/i);
    if (match) {
      count = parseInt(match[1], 10);
      name = match[2];
    }
    name = name.replace(/\(bebas varian\)/gi, '').trim();
    for (let i = 0; i < count; i++) {
      const isDrink = isItemDrink(name);
      const isRawan = isItemRawanStok(name);
      result.push({
        name: isDrink ? formatDrinkName(name) : name,
        isDrink: isDrink,
        isRawanStok: isRawan
      });
    }
  });
  return result;
}

function getBundleItems2Large(b) {
  if (!b) return [];
  const drinkName = b.name.replace(/^2\s*/i, '');
  return [
    { name: drinkName, isDrink: true, isRawanStok: false },
    { name: drinkName, isDrink: true, isRawanStok: false }
  ];
}

function renderSugarConfigurator(itemsList) {
  if (!itemsList || itemsList.length === 0) return '';

  return `
    <div class="bundle-sugar-configurator">
      <div class="configurator-title">
        <span>⚙ Pilihan Sugar Level per Minuman:</span>
      </div>
      <div class="configurator-items-list">
        ${itemsList.map((item, idx) => {
          const currentSugar = (appState.selectedBundleSugars && appState.selectedBundleSugars[idx]) || 'Normal Sugar';
          return `
            <div class="configurator-item-card">
              <div class="configurator-item-header">
                <span class="configurator-item-num">${idx + 1}.</span>
                <span class="configurator-item-name">${item.name}</span>
                ${item.isRawanStok ? '<span class="rawan-stok-tag">⚠rawan stok</span>' : ''}
              </div>
              ${item.isDrink ? `
                <div class="sugar-pills-row">
                  <button type="button" class="sugar-pill-btn ${currentSugar === 'Normal Sugar' ? 'active' : ''}" data-item-idx="${idx}" data-sugar="Normal Sugar">Normal Sugar</button>
                  <button type="button" class="sugar-pill-btn ${currentSugar === 'Less Sugar' ? 'active' : ''}" data-item-idx="${idx}" data-sugar="Less Sugar">Less Sugar</button>
                  <button type="button" class="sugar-pill-btn ${currentSugar === 'No Sugar' ? 'active' : ''}" data-item-idx="${idx}" data-sugar="No Sugar">No Sugar</button>
                </div>
              ` : `
                <div class="food-item-notice">🥐 Makanan (Tanpa Sugar)</div>
              `}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
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
    html += renderSubTabMix(35000, 3, BUNDLE_MIX35_OPTS, "Paket Mix 3 Minuman 35k", "Pilih 3 minuman · Pilihan sugar dapat ditentukan secara terpisah untuk tiap minuman.");
  } else if (subTab === 'serba35') {
    html += renderSubTabSerba35();
  } else if (subTab === 'serba38') {
    html += renderSubTabMix(38000, 2, BUNDLE_SERBA38_OPTS, "Paket Serba 38k (2 Minuman + 2 Roti Coklat)", "Pilih 2 minuman · 2 Roti Coklat sudah termasuk otomatis.", "+ 2 Roti Coklat Klasik (sudah termasuk)");
  }

  container.innerHTML = html;

  // Bind sub-tab pills click
  container.querySelectorAll('.bundling-subtab-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeBundlingSubTab = btn.getAttribute('data-subtab');
      appState.selectedBundleSelection = null;
      appState.selectedMixPicks = [];
      appState.selectedBundleSugars = {};
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

  const selectedItems = appState.selectedBundleSelection ? getBundleItems2Large(appState.selectedBundleSelection) : [];
  const configuratorHtml = selectedItems.length > 0 ? renderSugarConfigurator(selectedItems) : '';

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : `Tambah ke Keranjang (${formatRupiah(appState.selectedBundleSelection.price)})`;

  return `
    ${notice}
    <div class="bundle-large-grid">
      ${cards}
    </div>
    ${configuratorHtml}
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

  const selectedItems = appState.selectedBundleSelection ? expandBundleItemsList(appState.selectedBundleSelection.items) : [];
  const configuratorHtml = selectedItems.length > 0 ? renderSugarConfigurator(selectedItems) : '';

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : 'Tambah ke Keranjang (Rp 50.000)';

  return `
    <div class="bundle-list-container">
      ${cards}
    </div>
    ${configuratorHtml}
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

  const selectedItems = appState.selectedBundleSelection ? expandBundleItemsList(appState.selectedBundleSelection.items) : [];
  const configuratorHtml = selectedItems.length > 0 ? renderSugarConfigurator(selectedItems) : '';

  const ctaDisabled = !appState.selectedBundleSelection;
  const ctaText = ctaDisabled ? 'Pilih paket dulu...' : 'Tambah ke Keranjang (Rp 35.000)';

  return `
    <div class="bundle-list-container">
      ${cards}
    </div>
    ${configuratorHtml}
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

  const selectedItems = appState.selectedMixPicks.map(name => ({
    name: formatDrinkName(name),
    isDrink: true,
    isRawanStok: false
  }));

  if (appState.activeBundlingSubTab === 'serba38') {
    selectedItems.push({ name: 'Roti Coklat Klasik', isDrink: false, isRawanStok: false });
    selectedItems.push({ name: 'Roti Coklat Klasik', isDrink: false, isRawanStok: false });
  }

  const configuratorHtml = selectedItems.length > 0 ? renderSugarConfigurator(selectedItems) : '';

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

    ${configuratorHtml}

    <button class="btn-cta-sticky" id="btn-add-mix-cta" ${ctaDisabled ? 'disabled' : ''}>
      ${ctaText}
    </button>
  `;
}

function bindBundlingInteractions(container, subTab) {
  // Bind Sugar Pill click handlers
  container.querySelectorAll('.sugar-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-item-idx'), 10);
      const sugar = btn.getAttribute('data-sugar');
      if (!appState.selectedBundleSugars) appState.selectedBundleSugars = {};
      appState.selectedBundleSugars[idx] = sugar;
      renderBundlesSection();
    });
  });

  if (subTab === '2large') {
    container.querySelectorAll('.bundle-large-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-large-id');
        appState.selectedBundleSelection = BUNDLE_LARGE2.find(b => b.id === id);
        appState.selectedBundleSugars = {};
        renderBundlesSection();
      });
    });
  } else if (subTab === 'serba50') {
    container.querySelectorAll('.bundle-list-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-serba50-code');
        appState.selectedBundleSelection = BUNDLE_SERBA50.find(b => b.code === code);
        appState.selectedBundleSugars = {};
        renderBundlesSection();
      });
    });
  } else if (subTab === 'serba35') {
    container.querySelectorAll('.bundle-list-card').forEach(card => {
      card.addEventListener('click', () => {
        const code = card.getAttribute('data-serba35-code');
        appState.selectedBundleSelection = BUNDLE_SERBA35.find(b => b.code === code);
        appState.selectedBundleSugars = {};
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
      let rawItems = [];
      let nameTitle = '';

      if (subTab === '2large') {
        rawItems = getBundleItems2Large(b);
        nameTitle = `🔀 ${b.name}`;
      } else if (subTab === 'serba50') {
        rawItems = expandBundleItemsList(b.items);
        nameTitle = `🔀 Paket ${b.code} Serba 50k`;
      } else if (subTab === 'serba35') {
        rawItems = expandBundleItemsList(b.items);
        nameTitle = `🔀 ${b.name || ('Paket ' + b.code)} 35k`;
      }

      const bundleItems = rawItems.map((item, idx) => ({
        name: item.name,
        sugar: item.isDrink ? ((appState.selectedBundleSugars && appState.selectedBundleSugars[idx]) || 'Normal Sugar') : undefined,
        isDrink: item.isDrink,
        isRawanStok: item.isRawanStok || false
      }));
      
      const cartItem = {
        id: 'cart-bundle-' + Date.now(),
        productId: `bundle-${b.id || b.code}`,
        productName: nameTitle,
        quantity: 1,
        unitPrice: b.price,
        totalPrice: b.price,
        isBundle: true,
        bundleItems: bundleItems,
        options: {
          details: bundleItems.map(bi => bi.name + (bi.sugar ? ` (${bi.sugar})` : '')).join(', ')
        }
      };

      appState.cart.push(cartItem);
      saveCartState();
      updateCartUI();
      appState.selectedBundleSelection = null;
      appState.selectedBundleSugars = {};
      renderBundlesSection();
    });
  }

  const btnMixCta = container.querySelector('#btn-add-mix-cta');
  if (btnMixCta) {
    btnMixCta.addEventListener('click', () => {
      const maxPicks = subTab === 'mix35' ? 3 : 2;
      if (appState.selectedMixPicks.length < maxPicks) return;

      const price = subTab === 'mix35' ? 35000 : 38000;
      const title = subTab === 'mix35' ? '🔀 Paket Mix 3 Minuman 35k' : '🔀 Paket Serba 38k (2 Minuman + 2 Roti Coklat)';

      const bundleItems = appState.selectedMixPicks.map((pickName, idx) => ({
        name: formatDrinkName(pickName),
        sugar: (appState.selectedBundleSugars && appState.selectedBundleSugars[idx]) || 'Normal Sugar',
        isDrink: true,
        isRawanStok: false
      }));

      if (subTab === 'serba38') {
        bundleItems.push({ name: 'Roti Coklat Klasik', isDrink: false, isRawanStok: false });
        bundleItems.push({ name: 'Roti Coklat Klasik', isDrink: false, isRawanStok: false });
      }

      const cartItem = {
        id: 'cart-bundle-' + Date.now(),
        productId: `bundle-mix-${Date.now()}`,
        productName: title,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        isBundle: true,
        bundleItems: bundleItems,
        options: {
          details: bundleItems.map(bi => bi.name + (bi.sugar ? ` (${bi.sugar})` : '')).join(', ')
        }
      };

      appState.cart.push(cartItem);
      saveCartState();
      updateCartUI();
      appState.selectedMixPicks = [];
      appState.selectedBundleSugars = {};
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
        ${prod.seriesBadge ? `<span class="series-badge">${prod.seriesBadge}</span>` : ''}
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

    // Both product card and + button open Product Customization Modal Sheet
    const btnAdd = card.querySelector('.btn-add-mini');
    if (btnAdd) {
      btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openProductDetailModal(prodId);
      });
    }

    card.addEventListener('click', (e) => {
      e.preventDefault();
      openProductDetailModal(prodId);
    });
  });
}

// --- PRODUCT DETAIL MODAL & EDITING ---
function getNonDefaultCustomizationTokens(options) {
  if (!options) return [];
  const tokens = [];

  // Ukuran: only if Large or Jumbo
  if (options.ukuran && options.ukuran.id !== 'normal') {
    tokens.push(options.ukuran.name);
  }

  // Suhu: only if Hot (since Ice is default)
  if (options.suhu && options.suhu.id === 'hot') {
    tokens.push('Hot');
  }

  // Es: only if Less Ice or No Ice (since Normal is default)
  if (options.es && options.es.id !== 'normal-ice') {
    tokens.push(options.es.name);
  }

  // Gula: only if Less Sugar or No Sugar (since Normal is default)
  if (options.gula && options.gula.id !== 'normal-sugar') {
    tokens.push(options.gula.name);
  }

  // Beans: only if Juwara Beans (since Kenangan Blend is default)
  if (options.beans && options.beans.id === 'juwara-beans') {
    tokens.push('Juwara');
  }

  // Syrup: all selected syrups
  if (options.syrup && options.syrup.length > 0) {
    options.syrup.forEach(s => tokens.push(s.name));
  }

  // Topping: all selected toppings
  if (options.topping && options.topping.length > 0) {
    options.topping.forEach(t => tokens.push(t.name));
  }

  return tokens;
}

function getItemCustomizationSummary(options) {
  if (!options) return '';
  const tokens = getNonDefaultCustomizationTokens(options);
  if (options.notes) tokens.push(`Catatan: ${options.notes}`);
  return tokens.join(', ');
}

function openProductDetailModal(productId, cartItemId = null) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  appState.modalProduct = prod;
  appState.editingCartItemId = cartItemId;

  if (cartItemId) {
    const existingItem = appState.cart.find(i => i.id === cartItemId);
    if (existingItem) {
      appState.modalSelectedOptions = JSON.parse(JSON.stringify(existingItem.options));
    }
  } else {
    appState.modalSelectedOptions = {
      suhu: prod.options.suhu.length > 0 ? prod.options.suhu[0] : null,
      ukuran: prod.options.ukuran.length > 0 ? prod.options.ukuran[0] : null,
      es: prod.options.es.length > 0 ? prod.options.es[0] : null,
      gula: prod.options.gula.length > 0 ? prod.options.gula[0] : null,
      beans: prod.options.beans && prod.options.beans.length > 0 ? prod.options.beans[0] : null,
      syrup: [],
      topping: [],
      notes: '',
      quantity: 1
    };
  }

  document.getElementById('detail-hero-img').src = prod.image;
  document.getElementById('detail-product-title').textContent = prod.name;
  document.getElementById('detail-original-price').textContent = prod.originalPrice ? formatRupiah(prod.originalPrice) : '';
  document.getElementById('detail-promo-price').textContent = formatRupiah(prod.price);
  document.getElementById('detail-notes-input').value = appState.modalSelectedOptions.notes || '';
  document.getElementById('detail-qty-val').textContent = appState.modalSelectedOptions.quantity || '1';

  const ctaBtn = document.getElementById('btn-add-to-cart-modal');
  if (ctaBtn) {
    ctaBtn.textContent = cartItemId ? 'Simpan Perubahan' : '+ Tambah ke Keranjang';
  }

  renderPillGroup('suhu', prod.options.suhu, 'pills-suhu', 'group-suhu');
  renderPillGroup('ukuran', prod.options.ukuran, 'pills-ukuran', 'group-ukuran');
  renderPillGroup('es', prod.options.es, 'pills-es', 'group-es');
  renderPillGroup('gula', prod.options.gula, 'pills-gula', 'group-gula');
  renderPillGroup('beans', prod.options.beans, 'pills-beans', 'group-beans');
  renderCheckboxGroup('syrup', prod.options.syrup, 'list-syrup', 'group-syrup');
  renderCheckboxGroup('topping', prod.options.topping, 'list-topping', 'group-topping');

  recalculateModalTotal();

  const modal = document.getElementById('modal-product-detail');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderPillGroup(groupName, options, containerId, parentGroupId) {
  const container = document.getElementById(containerId);
  const groupParent = document.getElementById(parentGroupId);
  if (!container || !groupParent) return;

  if (!options || options.length === 0) {
    groupParent.style.display = 'none';
    return;
  }

  groupParent.style.display = 'block';

  container.innerHTML = options.map(opt => {
    const isSelected = appState.modalSelectedOptions[groupName] && appState.modalSelectedOptions[groupName].id === opt.id;
    let labelText = opt.name;

    if (groupName === 'ukuran' && opt.id === 'large') {
      labelText = 'Large+Rp5.000';
    } else if (groupName === 'beans' && opt.id === 'juwara-beans') {
      labelText = 'Juwara Beans +Rp3k';
    }

    return `
      <button class="option-pill-btn ${isSelected ? 'selected' : ''}" data-group="${groupName}" data-id="${opt.id}">
        ${labelText}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.option-pill-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const g = btn.getAttribute('data-group');
      const id = btn.getAttribute('data-id');
      const selectedOpt = options.find(o => o.id === id);
      appState.modalSelectedOptions[g] = selectedOpt;

      container.querySelectorAll('.option-pill-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      recalculateModalTotal();
    });
  });
}

function renderCheckboxGroup(groupName, options, containerId, parentGroupId) {
  const container = document.getElementById(containerId);
  const groupParent = document.getElementById(parentGroupId);
  if (!container || !groupParent) return;

  if (!options || options.length === 0) {
    groupParent.style.display = 'none';
    return;
  }

  groupParent.style.display = 'block';

  container.innerHTML = options.map(opt => {
    const isChecked = appState.modalSelectedOptions[groupName].some(o => o.id === opt.id);
    const priceText = opt.price > 0 ? `+${formatRupiah(opt.price)}` : '';
    return `
      <label class="checkbox-row ${isChecked ? 'checked' : ''}">
        <span class="checkbox-label-text">${opt.name}</span>
        <div style="display: flex; align-items: center; gap: 10px;">
          ${priceText ? `<span class="checkbox-price">${priceText}</span>` : ''}
          <input type="checkbox" class="custom-checkbox" data-group="${groupName}" data-id="${opt.id}" ${isChecked ? 'checked' : ''} />
        </div>
      </label>
    `;
  }).join('');

  container.querySelectorAll('.checkbox-row').forEach(row => {
    const input = row.querySelector('input');
    row.addEventListener('click', (e) => {
      if (e.target !== input) {
        input.checked = !input.checked;
      }
      const g = input.getAttribute('data-group');
      const id = input.getAttribute('data-id');
      const opt = options.find(o => o.id === id);

      if (input.checked) {
        if (!appState.modalSelectedOptions[g].some(o => o.id === id)) {
          appState.modalSelectedOptions[g].push(opt);
        }
        row.classList.add('checked');
      } else {
        appState.modalSelectedOptions[g] = appState.modalSelectedOptions[g].filter(o => o.id !== id);
        row.classList.remove('checked');
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
    if (Array.isArray(appState.modalSelectedOptions[g])) {
      appState.modalSelectedOptions[g].forEach(opt => {
        extraPrice += opt.price || 0;
      });
    }
  });

  const unitPrice = basePrice + extraPrice;
  const totalPrice = unitPrice * appState.modalSelectedOptions.quantity;

  const calculatedTotalElem = document.getElementById('detail-calculated-total');
  if (calculatedTotalElem) {
    calculatedTotalElem.textContent = formatRupiah(totalPrice);
  }
}

// --- CART & MINIMUM UNIT ITEM VALIDATION ---
function isBundleCartItem(item) {
  if (!item) return false;
  return !!(item.isBundle || (item.productName && (item.productName.startsWith('🔀') || item.productName.startsWith('[PROMO BUNDLE]'))));
}

function validateCartMinimum() {
  const bundleItems = appState.cart.filter(item => isBundleCartItem(item));
  
  // Produk Bundling tidak termasuk dalam aturan minimum pembelian 2 item.
  // Pelanggan boleh checkout langsung meskipun hanya membeli 1 produk bundling.
  if (bundleItems.length > 0) {
    return { valid: true };
  }

  const unitItems = appState.cart.filter(item => !isBundleCartItem(item));
  const unitTotalQty = unitItems.reduce((sum, item) => sum + item.quantity, 0);

  // Aturan minimum pembelian 2 item hanya berlaku untuk produk non-bundling
  if (unitTotalQty < 2) {
    const remaining = 2 - unitTotalQty;
    return {
      valid: false,
      message: `Minimum pembelian menu satuan adalah 2 item. Silakan tambahkan ${remaining} item lagi.`
    };
  }
  return { valid: true };
}

function openCartModal() {
  renderCartDrawerItems();
  const modal = document.getElementById('modal-cart');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderCartDrawerItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--text-muted);">Keranjang Anda kosong</div>`;
    document.getElementById('cart-subtotal-val').textContent = 'Rp 0';
    return;
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + item.totalPrice, 0);

  container.innerHTML = appState.cart.map((item, idx) => {
    let optStr = getItemCustomizationSummary(item.options);

    if (item.isBundle && item.bundleItems && item.bundleItems.length > 0) {
      optStr = item.bundleItems.map((bItem, bIdx) => {
        const sugarText = bItem.isDrink ? ` (${bItem.sugar || 'Normal Sugar'})` : '';
        const rawanText = bItem.isRawanStok ? ' ⚠rawan stok' : '';
        return `${bIdx + 1}. ${bItem.name}${sugarText}${rawanText}`;
      }).join(', ');
    }

    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px; margin-bottom: 10px; display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <div style="font-size: 14px; font-weight: 700; color: var(--text-main);">${item.productName}</div>
            ${optStr ? `<div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">${optStr}</div>` : ''}
            ${!item.productName.startsWith('[PROMO BUNDLE]') && !item.isBundle ? `<button class="btn-edit-cart-item" data-cart-id="${item.id}" data-product-id="${item.productId}" style="font-size: 11px; font-weight: 800; color: #0F172A; background: none; border: none; padding: 0; margin-top: 4px; cursor: pointer; text-decoration: underline;">Klik untuk edit</button>` : ''}
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

  container.querySelectorAll('.btn-edit-cart-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-product-id');
      const cartId = btn.getAttribute('data-cart-id');
      document.getElementById('modal-cart').classList.remove('active');
      openProductDetailModal(prodId, cartId);
    });
  });

  container.querySelectorAll('.btn-trash').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      appState.cart.splice(idx, 1);
      saveCartState();
      updateCartUI();
      renderCartDrawerItems();
    });
  });

  container.querySelectorAll('.btn-cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (appState.cart[idx].quantity > 1) {
        appState.cart[idx].quantity--;
        appState.cart[idx].totalPrice = appState.cart[idx].unitPrice * appState.cart[idx].quantity;
      } else {
        appState.cart.splice(idx, 1);
      }
      saveCartState();
      updateCartUI();
      renderCartDrawerItems();
    });
  });

  container.querySelectorAll('.btn-cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      appState.cart[idx].quantity++;
      appState.cart[idx].totalPrice = appState.cart[idx].unitPrice * appState.cart[idx].quantity;
      saveCartState();
      updateCartUI();
      renderCartDrawerItems();
    });
  });
}

// --- CHECKOUT & KONFIRMASI PESANAN LOGIC ---
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
  document.body.style.overflow = 'hidden';

  setupCheckoutEvents();
  renderCheckoutSummary();
}

function validateCheckoutForm() {
  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const outletInput = document.getElementById('checkout-manual-outlet');
  const waBtn = document.getElementById('btn-send-whatsapp');
  if (!nameInput || !phoneInput || !outletInput || !waBtn) return;

  const nameVal = nameInput.value.trim();
  const phoneVal = phoneInput.value.trim();
  const outletVal = outletInput.value.trim();

  let isPickupValid = true;
  if (appState.pickupType === 'scheduled') {
    const timeInput = document.getElementById('checkout-pickup-time-input');
    if (!timeInput || !timeInput.value.trim()) {
      isPickupValid = false;
    }
  }

  if (nameVal && phoneVal && outletVal && isPickupValid && appState.cart.length > 0) {
    waBtn.disabled = false;
  } else {
    waBtn.disabled = true;
  }
}

function setupCheckoutEvents() {
  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const outletInput = document.getElementById('checkout-manual-outlet');
  const btnPickupNow = document.getElementById('btn-pickup-now');
  const btnPickupScheduled = document.getElementById('btn-pickup-scheduled');
  const pickupTimeWrapper = document.getElementById('pickup-time-picker-wrapper');
  const pickupTimeInput = document.getElementById('checkout-pickup-time-input');
  const btnBagNo = document.getElementById('btn-bag-no');
  const btnBagYes = document.getElementById('btn-bag-yes');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateCheckoutForm();
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      validateCheckoutForm();
    });
  }

  if (outletInput) {
    outletInput.addEventListener('input', () => {
      renderCheckoutSummary();
    });
  }

  if (btnPickupNow && btnPickupScheduled) {
    btnPickupNow.addEventListener('click', () => {
      btnPickupNow.classList.add('active');
      btnPickupScheduled.classList.remove('active');
      appState.pickupType = 'now';
      appState.pickupTime = 'Sekarang';
      if (pickupTimeWrapper) pickupTimeWrapper.style.display = 'none';
      validateCheckoutForm();
    });

    btnPickupScheduled.addEventListener('click', () => {
      btnPickupScheduled.classList.add('active');
      btnPickupNow.classList.remove('active');
      appState.pickupType = 'scheduled';
      if (pickupTimeWrapper) pickupTimeWrapper.style.display = 'block';
      validateCheckoutForm();
    });
  }

  if (pickupTimeInput) {
    pickupTimeInput.addEventListener('input', () => {
      appState.pickupTime = pickupTimeInput.value.trim();
      validateCheckoutForm();
    });
  }

  if (btnBagNo && btnBagYes) {
    btnBagNo.addEventListener('click', () => {
      btnBagNo.classList.add('active');
      btnBagYes.classList.remove('active');
      appState.includeShoppingBag = false;
      renderCheckoutSummary();
    });

    btnBagYes.addEventListener('click', () => {
      btnBagYes.classList.add('active');
      btnBagNo.classList.remove('active');
      appState.includeShoppingBag = true;
      renderCheckoutSummary();
    });
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-summary-items-list');
  if (!container) return;

  if (appState.cart.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-muted);">Keranjang kosong</div>`;
    document.getElementById('checkout-subtotal-amount').textContent = 'Rp 0';
    document.getElementById('checkout-total-final-amount').textContent = 'Rp 0';
    validateCheckoutForm();
    return;
  }

  const manualOutletInput = document.getElementById('checkout-manual-outlet');
  const outletText = manualOutletInput ? manualOutletInput.value.trim() : '';
  const outletTextLower = outletText.toLowerCase();

  // Check surcharge (+Rp 3.000 for Rest Area / Mall / Airport / Stasiun)
  const hasSurcharge = outletTextLower.includes('rest area') ||
                       outletTextLower.includes('mall') ||
                       outletTextLower.includes('bandara') ||
                       outletTextLower.includes('airport') ||
                       outletTextLower.includes('stasiun');

  appState.checkoutSurcharge = hasSurcharge ? 3000 : 0;

  const surchargeRow = document.getElementById('row-outlet-surcharge');
  if (surchargeRow) {
    surchargeRow.style.display = hasSurcharge ? 'flex' : 'none';
  }

  const bagRow = document.getElementById('row-kantung-belanja');
  if (bagRow) {
    bagRow.style.display = appState.includeShoppingBag ? 'flex' : 'none';
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const shoppingBagCost = appState.includeShoppingBag ? 1000 : 0;
  const totalFinal = subtotal + shoppingBagCost + appState.checkoutSurcharge;

  container.innerHTML = appState.cart.map((item, idx) => {
    const isRawan = item.isRawanStok || (item.productName && item.productName.toLowerCase().includes('salt bread'));
    const rawanHtml = isRawan ? ' <span class="rawan-stok-text">⚠rawan stok</span>' : '';

    if (item.isBundle && item.bundleItems && item.bundleItems.length > 0) {
      return `
        <div class="checkout-item-card bundle-checkout-card">
          <div class="checkout-item-header">
            <span class="checkout-item-title">• ${item.quantity}x ${item.productName}</span>
            <span class="checkout-item-price-badge">${formatRupiah(item.totalPrice)}</span>
          </div>
          <div class="checkout-bundle-details">
            <div class="bundle-catatan-label">Catatan:</div>
            <div class="bundle-catatan-list">
              ${item.bundleItems.map((bItem, bIdx) => {
                const sugarStr = bItem.isDrink ? ` + ${bItem.sugar || 'Normal Sugar'}` : '';
                const bRawanStr = bItem.isRawanStok ? ' <span class="rawan-stok-text">⚠rawan stok</span>' : '';
                return `<div class="bundle-catatan-row">${bIdx + 1}. ${bItem.name}${sugarStr}${bRawanStr}</div>`;
              }).join('')}
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn-qty btn-checkout-item-minus" data-index="${idx}" style="width: 26px; height: 26px; font-size: 12px;">-</button>
              <span style="font-size: 13px; font-weight: 800;">${item.quantity}</span>
              <button class="btn-qty btn-checkout-item-plus" data-index="${idx}" style="width: 26px; height: 26px; font-size: 12px;">+</button>
            </div>
          </div>
        </div>
      `;
    } else {
      const summaryText = getItemCustomizationSummary(item.options);
      return `
        <div class="checkout-item-card">
          <div class="checkout-item-header">
            <span class="checkout-item-title">• ${item.quantity}x ${item.productName}${rawanHtml}</span>
            <span class="checkout-item-price-badge">${formatRupiah(item.totalPrice)}</span>
          </div>
          ${summaryText ? `<div class="checkout-item-customization">${summaryText}</div>` : ''}
          
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
            ${!item.productName.startsWith('[PROMO BUNDLE]') && !item.isBundle ? `<button class="checkout-item-edit-btn" data-cart-id="${item.id}" data-product-id="${item.productId}">Klik untuk edit</button>` : '<span></span>'}
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn-qty btn-checkout-item-minus" data-index="${idx}" style="width: 26px; height: 26px; font-size: 12px;">-</button>
              <span style="font-size: 13px; font-weight: 800;">${item.quantity}</span>
              <button class="btn-qty btn-checkout-item-plus" data-index="${idx}" style="width: 26px; height: 26px; font-size: 12px;">+</button>
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  document.getElementById('checkout-subtotal-amount').textContent = formatRupiah(subtotal);
  document.getElementById('checkout-total-final-amount').textContent = formatRupiah(totalFinal);

  // Edit item event bindings
  container.querySelectorAll('.checkout-item-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodId = btn.getAttribute('data-product-id');
      const cartId = btn.getAttribute('data-cart-id');
      document.getElementById('modal-checkout').classList.remove('active');
      openProductDetailModal(prodId, cartId);
    });
  });

  // Quantity button event bindings
  container.querySelectorAll('.btn-checkout-item-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (appState.cart[idx].quantity > 1) {
        appState.cart[idx].quantity--;
        appState.cart[idx].totalPrice = appState.cart[idx].unitPrice * appState.cart[idx].quantity;
      } else {
        appState.cart.splice(idx, 1);
      }
      saveCartState();
      updateCartUI();
      renderCheckoutSummary();
    });
  });

  container.querySelectorAll('.btn-checkout-item-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      appState.cart[idx].quantity++;
      appState.cart[idx].totalPrice = appState.cart[idx].unitPrice * appState.cart[idx].quantity;
      saveCartState();
      updateCartUI();
      renderCheckoutSummary();
    });
  });

  validateCheckoutForm();
}

async function processWhatsAppOrder() {
  if (appState.cart.length === 0) {
    alert("Keranjang Anda masih kosong!");
    return;
  }

  const nameVal = document.getElementById('checkout-name').value.trim();
  const phoneVal = document.getElementById('checkout-phone') ? document.getElementById('checkout-phone').value.trim() : '';
  const outletVal = document.getElementById('checkout-manual-outlet').value.trim();

  if (!nameVal) {
    alert("Silakan masukkan nama pemesan!");
    return;
  }
  if (!phoneVal) {
    alert("Silakan masukkan nomor telepon pemesan!");
    return;
  }
  if (!outletVal) {
    alert("Silakan ketik nama outlet!");
    return;
  }

  let pickupVal = "Sekarang";
  if (appState.pickupType === 'scheduled') {
    const timeInput = document.getElementById('checkout-pickup-time-input');
    pickupVal = timeInput ? timeInput.value.trim() : "Jam khusus";
    if (!pickupVal) {
      alert("Silakan tentukan jam pickup!");
      return;
    }
  }

  const subtotal = appState.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const shoppingBagCost = appState.includeShoppingBag ? 1000 : 0;
  const surcharge = appState.checkoutSurcharge || 0;
  const totalFinal = subtotal + shoppingBagCost + surcharge;

  // Build DB Order Payload
  const orderPayload = {
    brand: 'Kopi Kenangan',
    customer_name: nameVal,
    phone_number: phoneVal,
    outlet: outletVal,
    pickup_time: pickupVal,
    items: JSON.parse(JSON.stringify(appState.cart)),
    subtotal: subtotal,
    surcharge: surcharge,
    total_price: totalFinal,
    payment_method: 'QRIS'
  };

  // Save to Realtime Database
  try {
    const created = await createOrder(orderPayload);
  } catch (err) {
    alert("Gagal menyimpan pesanan ke database:\n" + err.message);
    return;
  }

  let orderText = `Halo, saya ingin memesan:\n\n`;
  orderText += `☕ Brand: Kopi Kenangan\n`;
  orderText += `👤 Nama: ${nameVal}\n`;
  orderText += `📱 Nomor: ${phoneVal}\n`;
  orderText += `📍 Outlet: ${outletVal}\n`;
  orderText += `⏰ Pickup: ${pickupVal}\n\n`;
  orderText += `🍵 Pesanan:\n`;

  appState.cart.forEach((item, iIdx) => {
    if (item.isBundle && item.bundleItems && item.bundleItems.length > 0) {
      orderText += `• ${item.quantity}x ${item.productName} ${formatRupiah(item.totalPrice)}\n`;
      orderText += `Catatan:\n\n`;
      item.bundleItems.forEach((bItem, bIdx) => {
        const sugarText = bItem.isDrink ? ` + ${bItem.sugar || 'Normal Sugar'}` : '';
        const rawanText = bItem.isRawanStok ? ` ⚠rawan stok` : '';
        orderText += `${bIdx + 1}. ${bItem.name}${sugarText}${rawanText}\n`;
      });
      if (iIdx < appState.cart.length - 1) {
        orderText += `\n`;
      }
    } else {
      const tokens = getNonDefaultCustomizationTokens(item.options);
      const tokenStr = tokens.length > 0 ? ' ' + tokens.map(t => `(${t})`).join(' ') : '';
      const isRawan = item.isRawanStok || (item.productName && item.productName.toLowerCase().includes('salt bread'));
      const rawanText = isRawan ? ` ⚠rawan stok` : '';

      orderText += `• ${item.quantity}x ${item.productName}${tokenStr} ${formatRupiah(item.totalPrice)}${rawanText}\n`;
      if (item.options && item.options.notes) {
        orderText += `  Catatan: ${item.options.notes}\n`;
      }
    }
  });

  orderText += `\n💰 Total: ${formatRupiah(totalFinal)}\n\n`;
  orderText += `⚠ Outlet & jenis harga dikonfirmasi manual oleh pelanggan.\n`;
  orderText += `Mohon cek ketersediaan outlet & menu ya`;

  const waNumber = appState.settings.adminWhatsApp || '6285159646922';
  const encodedText = encodeURIComponent(orderText);
  const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

  // Clear cart after checkout
  appState.cart = [];
  saveCartState();
  updateCartUI();
  document.getElementById('modal-checkout').classList.remove('active');
  document.body.style.overflow = '';

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
  const modalDetail = document.getElementById('modal-product-detail');
  if (btnCloseDetail && modalDetail) {
    btnCloseDetail.addEventListener('click', () => {
      modalDetail.classList.remove('active');
      document.body.style.overflow = '';
      appState.editingCartItemId = null;
    });

    modalDetail.addEventListener('click', (e) => {
      if (e.target === modalDetail) {
        modalDetail.classList.remove('active');
        document.body.style.overflow = '';
        appState.editingCartItemId = null;
      }
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

  // Modal Add / Save to Cart CTA
  const btnAddToCartModal = document.getElementById('btn-add-to-cart-modal');
  if (btnAddToCartModal) {
    btnAddToCartModal.addEventListener('click', () => {
      if (!appState.modalProduct) return;

      const inputNotes = document.getElementById('detail-notes-input');
      if (inputNotes) {
        appState.modalSelectedOptions.notes = inputNotes.value.trim();
      }

      const basePrice = appState.modalProduct.price;
      let extraPrice = 0;

      ['suhu', 'ukuran', 'es', 'gula', 'beans'].forEach(g => {
        if (appState.modalSelectedOptions[g] && appState.modalSelectedOptions[g].price) {
          extraPrice += appState.modalSelectedOptions[g].price;
        }
      });

      ['syrup', 'topping'].forEach(g => {
        if (Array.isArray(appState.modalSelectedOptions[g])) {
          appState.modalSelectedOptions[g].forEach(opt => {
            extraPrice += opt.price || 0;
          });
        }
      });

      const unitPrice = basePrice + extraPrice;
      const quantity = appState.modalSelectedOptions.quantity || 1;
      const totalPrice = unitPrice * quantity;

      if (appState.editingCartItemId) {
        const itemIdx = appState.cart.findIndex(i => i.id === appState.editingCartItemId);
        if (itemIdx !== -1) {
          appState.cart[itemIdx].quantity = quantity;
          appState.cart[itemIdx].unitPrice = unitPrice;
          appState.cart[itemIdx].totalPrice = totalPrice;
          appState.cart[itemIdx].options = JSON.parse(JSON.stringify(appState.modalSelectedOptions));
        }
      } else {
        const cartItem = {
          id: 'cart-item-' + Date.now(),
          productId: appState.modalProduct.id,
          productName: appState.modalProduct.name,
          image: appState.modalProduct.image,
          basePrice: appState.modalProduct.price,
          quantity: quantity,
          unitPrice: unitPrice,
          totalPrice: totalPrice,
          isRawanStok: !!(appState.modalProduct.isRawanStok || (appState.modalProduct.name && appState.modalProduct.name.toLowerCase().includes('salt bread'))),
          options: JSON.parse(JSON.stringify(appState.modalSelectedOptions))
        };
        appState.cart.push(cartItem);
      }

      saveCartState();
      updateCartUI();

      const modal = document.getElementById('modal-product-detail');
      modal.classList.remove('active');
      document.body.style.overflow = '';
      appState.editingCartItemId = null;
    });
  }

  // Cart Drawer Events
  const btnCloseCart = document.getElementById('btn-close-cart');
  const modalCart = document.getElementById('modal-cart');
  if (btnCloseCart && modalCart) {
    btnCloseCart.addEventListener('click', () => {
      modalCart.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalCart.addEventListener('click', (e) => {
      if (e.target === modalCart) {
        modalCart.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  const btnProceedCheckout = document.getElementById('btn-proceed-checkout');
  if (btnProceedCheckout) {
    btnProceedCheckout.addEventListener('click', openCheckoutModal);
  }

  // Checkout Events
  const btnCloseCheckout = document.getElementById('btn-close-checkout');
  const modalCheckout = document.getElementById('modal-checkout');
  if (btnCloseCheckout && modalCheckout) {
    btnCloseCheckout.addEventListener('click', () => {
      modalCheckout.classList.remove('active');
      document.body.style.overflow = '';
    });

    modalCheckout.addEventListener('click', (e) => {
      if (e.target === modalCheckout) {
        modalCheckout.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  const btnBackToCart = document.getElementById('btn-back-to-cart');
  if (btnBackToCart && modalCheckout) {
    btnBackToCart.addEventListener('click', () => {
      modalCheckout.classList.remove('active');
      const modalCart = document.getElementById('modal-cart');
      if (modalCart) {
        modalCart.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderCartDrawerItems();
      }
    });
  }

  const btnSendWa = document.getElementById('btn-send-whatsapp');
  if (btnSendWa) {
    btnSendWa.addEventListener('click', processWhatsAppOrder);
  }

  // Lacak Pesanan Modal Events
  const btnOpenTrack = document.getElementById('btn-open-track');
  if (btnOpenTrack) {
    btnOpenTrack.addEventListener('click', openTrackOrderModal);
  }

  const btnCloseTrack = document.getElementById('btn-close-track');
  if (btnCloseTrack) {
    btnCloseTrack.addEventListener('click', () => {
      document.getElementById('modal-track-order').classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  const btnSubmitTrack = document.getElementById('btn-submit-track');
  if (btnSubmitTrack) {
    btnSubmitTrack.addEventListener('click', handleTrackOrderSearch);
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

// --- LACAK PESANAN (REALTIME CUSTOMER TRACKING) ---
let trackUnsubscribe = null;

function openTrackOrderModal() {
  const socialDropdown = document.getElementById('social-dropdown-menu');
  if (socialDropdown) socialDropdown.classList.remove('show');
  
  const modal = document.getElementById('modal-track-order');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

async function handleTrackOrderSearch() {
  const input = document.getElementById('track-phone-input');
  if (!input) return;
  const phone = input.value.trim();
  if (!phone) {
    alert("Silakan masukkan nomor HP!");
    return;
  }

  const container = document.getElementById('track-results-container');
  if (container) {
    container.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-muted);">Mencari pesanan...</div>`;
  }

  if (trackUnsubscribe) {
    trackUnsubscribe();
    trackUnsubscribe = null;
  }

  try {
    const orders = await fetchOrdersByPhone(phone);
    renderTrackOrderResults(orders);

    // Realtime subscription for customer order status changes
    trackUnsubscribe = subscribeCustomerOrders(
      phone, 
      (updatedOrders) => { renderTrackOrderResults(updatedOrders); },
      (err) => { console.warn("Track realtime update error:", err); }
    );
  } catch (err) {
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 20px; color: #DC2626; font-size: 13px; background: #FEF2F2; border-radius: var(--radius-md);">
          ⚠️ Gagal melacak pesanan dari database:<br /><strong>${err.message}</strong>
        </div>
      `;
    }
  }
}

function renderTrackOrderResults(orders) {
  const container = document.getElementById('track-results-container');
  if (!container) return;

  if (!orders || orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted); font-size: 13px;">
        Tidak ada pesanan ditemukan untuk nomor tersebut.
      </div>
    `;
    return;
  }

  const statusBadgeMap = {
    'BELUM_DIPROSES': '<span style="background: #FFF7ED; color: #C2410C; padding: 3px 8px; border-radius: 9999px; font-weight: 800; font-size: 11px;">🟡 Belum Diproses</span>',
    'DIPROSES': '<span style="background: #EFF6FF; color: #1D4ED8; padding: 3px 8px; border-radius: 9999px; font-weight: 800; font-size: 11px;">🔵 Diproses</span>',
    'SUDAH_DIPROSES': '<span style="background: #F0FDF4; color: #15803D; padding: 3px 8px; border-radius: 9999px; font-weight: 800; font-size: 11px;">🟢 Sudah Diproses</span>',
    'SELESAI': '<span style="background: #F0FDF4; color: #15803D; padding: 3px 8px; border-radius: 9999px; font-weight: 800; font-size: 11px;">✅ Selesai</span>',
    'DIBATALKAN': '<span style="background: #FEF2F2; color: #DC2626; padding: 3px 8px; border-radius: 9999px; font-weight: 800; font-size: 11px;">🔴 Dibatalkan</span>'
  };

  container.innerHTML = orders.map(order => `
    <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-md); padding: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 13px; font-weight: 800; color: var(--primary-orange);">${escapeHtml(order.order_id)}</span>
        ${statusBadgeMap[order.status] || ''}
      </div>

      <div style="font-size: 13px; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">
        ☕ ${escapeHtml(order.brand || 'Kopi Kenangan')} — 📍 ${escapeHtml(order.outlet || '')}
      </div>

      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">
        ⏰ Pickup: ${escapeHtml(order.pickup_time || 'Sekarang')} | 💰 Total: <strong>${formatRupiah(order.total_price)}</strong>
      </div>

      ${order.receipt_url ? `
        <div style="margin-top: 10px; padding: 10px; background: #F8FAFC; border: 1px solid var(--border-light); border-radius: var(--radius-md);">
          <div style="font-size: 11px; font-weight: 800; color: #16A34A; margin-bottom: 6px;">🧾 Bukti Receipt Pembayaran (Dari Admin):</div>
          <img src="${escapeHtml(order.receipt_url)}" alt="Receipt" style="width: 100%; max-height: 180px; object-fit: contain; border-radius: var(--radius-sm); border: 1px solid var(--border-light);" />
        </div>
      ` : ''}
    </div>
  `).join('');
}
