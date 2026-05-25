/* ============================================
   CEKIDOT MART — Cart System JavaScript
   ============================================ */

'use strict';

/* ── Cart State ─────────────────────────────── */
const cart = {
  items: JSON.parse(localStorage.getItem('cm-cart') || '[]'),

  save() {
    localStorage.setItem('cm-cart', JSON.stringify(this.items));
  },

  add(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        condition: product.condition,
        img: product.img,
        shortDesc: product.shortDesc || '',
        funsi: product.funsi || '',
        manfaat: product.manfaat || '',
        qty: 1,
      });
    }
    this.save();
    cartUI.refresh();
    cartUI.animateFAB();
  },

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
    cartUI.refresh();
  },

  setQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    if (qty < 1) { this.remove(id); return; }
    item.qty = qty;
    this.save();
    cartUI.refresh();
  },

  clear() {
    this.items = [];
    this.save();
    cartUI.refresh();
  },

  get totalItems() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  get subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  get tax() {
    return Math.round(this.subtotal * 0.11); // PPN 11%
  },

  get total() {
    return this.subtotal + this.tax;
  },
};

/* ── Cart UI ─────────────────────────────────── */
const cartUI = {
  overlay: null,
  panel: null,
  fab: null,
  badge: null,

  init() {
    this._inject();
    this.overlay = document.getElementById('cart-overlay');
    this.panel   = document.getElementById('cart-panel');
    this.fab     = document.getElementById('cart-fab');
    this.badge   = document.getElementById('cart-fab-badge');

    this.fab?.addEventListener('click', () => this.open());
    this.overlay?.addEventListener('click', e => {
      if (e.target === this.overlay) this.close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.close();
    });

    this.refresh();
  },

  _inject() {
    // FAB Button
    const fab = document.createElement('button');
    fab.id = 'cart-fab';
    fab.className = 'cart-fab';
    fab.title = 'Lihat keranjang';
    fab.setAttribute('aria-label', 'Keranjang belanja');
    fab.innerHTML = `
      🛒
      <span class="cart-fab-badge" id="cart-fab-badge">0</span>
    `;
    document.body.appendChild(fab);

    // Cart Overlay + Panel
    const overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.className = 'cart-overlay';
    overlay.innerHTML = `
      <div class="cart-panel" id="cart-panel">
        <div class="cart-header">
          <div class="cart-title">
            🛒 Keranjang
            <span class="cart-count-chip" id="cart-count-chip">0</span>
          </div>
          <button class="cart-close-btn" onclick="cartUI.close()">✕</button>
        </div>
        <div class="cart-body" id="cart-body"></div>
        <div class="cart-footer" id="cart-footer" style="display:none">
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span id="cart-subtotal">Rp 0</span>
          </div>
          <div class="cart-summary-row">
            <span>PPN 11%</span>
            <span id="cart-tax">Rp 0</span>
          </div>
          <div class="cart-summary-row">
            <span>Total</span>
            <span class="total-val" id="cart-total">Rp 0</span>
          </div>
          <button class="cart-checkout-btn" onclick="cartCheckout()">
            💳 Checkout Sekarang
          </button>
          <button class="cart-clear-btn" onclick="cartClearConfirm()">
            🗑️ Kosongkan Keranjang
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  },

  open() {
    this.overlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.overlay?.classList.remove('open');
    document.body.style.overflow = '';
  },

  refresh() {
    const body   = document.getElementById('cart-body');
    const footer = document.getElementById('cart-footer');
    const chip   = document.getElementById('cart-count-chip');

    if (!body) return;

    // Update badge
    const total = cart.totalItems;
    if (this.badge) {
      this.badge.textContent = total;
      this.badge.classList.toggle('show', total > 0);
    }
    if (chip) chip.textContent = total;

    // Render body
    if (cart.items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3>Keranjang Kosong</h3>
          <p>Tambahkan barang yang kamu suka<br>dengan menekan tombol 🛒 pada produk.</p>
        </div>
      `;
      if (footer) footer.style.display = 'none';
      return;
    }

    body.innerHTML = cart.items.map(item => this._itemHTML(item)).join('');
    if (footer) {
      footer.style.display = 'block';
      const sub   = document.getElementById('cart-subtotal');
      const tax   = document.getElementById('cart-tax');
      const tot   = document.getElementById('cart-total');
      if (sub) sub.textContent = 'Rp ' + formatCartPrice(cart.subtotal);
      if (tax) tax.textContent = 'Rp ' + formatCartPrice(cart.tax);
      if (tot) tot.textContent = 'Rp ' + formatCartPrice(cart.total);
    }

    // Refresh add-to-cart buttons on product grid
    this._refreshProductButtons();
  },

  _itemHTML(item) {
    const condClass = item.condition?.toLowerCase().startsWith('baru') ? 'baru' : 'bekas';
    const condLabel = item.condition?.toLowerCase().startsWith('baru') ? '✨ Baru' : '📦 Bekas';
    return `
      <div class="cart-item" id="cart-item-${item.id}">
        <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="cart-item-main">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">
            <span class="cart-item-cat">${item.category}</span>
            <span class="cart-item-condition ${condClass}">${condLabel}</span>
          </div>
          <div class="cart-item-desc">${item.shortDesc}</div>
          <button class="cart-item-detail-toggle" onclick="cartUI.toggleDetail(${item.id}, this)">
            ℹ️ Lihat detail produk ▾
          </button>
          <div class="cart-item-detail-box" id="cart-detail-${item.id}">
            <b>⚙️ Fungsi</b>${item.funsi}
            <b>✅ Manfaat</b>${item.manfaat}
          </div>
          <div class="cart-item-price-row" style="margin-top:10px">
            <div class="cart-item-price">Rp ${formatCartPrice(item.price)}</div>
            <div class="cart-item-qty">
              <button class="cart-qty-btn" onclick="cart.setQty(${item.id}, ${item.qty - 1})">−</button>
              <span class="cart-qty-num">${item.qty}</span>
              <button class="cart-qty-btn" onclick="cart.setQty(${item.id}, ${item.qty + 1})">+</button>
            </div>
          </div>
        </div>
        <button class="cart-item-remove" onclick="cart.remove(${item.id})" title="Hapus dari keranjang">✕</button>
      </div>
    `;
  },

  toggleDetail(id, btn) {
    const box = document.getElementById(`cart-detail-${id}`);
    if (!box) return;
    const isOpen = box.classList.toggle('open');
    btn.innerHTML = isOpen
      ? 'ℹ️ Sembunyikan detail ▴'
      : 'ℹ️ Lihat detail produk ▾';
  },

  animateFAB() {
    if (!this.fab) return;
    this.fab.style.transform = 'scale(1.3)';
    setTimeout(() => { this.fab.style.transform = ''; }, 200);
  },

  _refreshProductButtons() {
    const cartIds = new Set(cart.items.map(i => i.id));
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      if (cartIds.has(id)) {
        btn.textContent = '✓ Added';
        btn.classList.add('added');
      } else {
        btn.textContent = '🛒 Cart';
        btn.classList.remove('added');
      }
    });
  },
};

/* ── Helpers ─────────────────────────────────── */
function formatCartPrice(n) {
  if (n >= 1000000000) return (n / 1000000000).toFixed(1).replace('.0', '') + ' M';
  if (n >= 1000000)    return (n / 1000000).toFixed(1).replace('.0', '') + ' jt';
  if (n >= 1000)       return (n / 1000).toFixed(0) + ' rb';
  return n.toLocaleString('id-ID');
}

function cartCheckout() {
  if (!window.auth?.current) {
    cartUI.close();
    if (typeof showToast === 'function') showToast('⚠️ Silakan login dulu untuk checkout!', 'error');
    if (typeof openAuthModal === 'function') openAuthModal('register');
    return;
  }
  if (typeof showToast === 'function')
    showToast(`✅ Pesanan ${cart.totalItems} item (Rp ${formatCartPrice(cart.total)}) berhasil dibuat!`, 'success');
  cart.clear();
  cartUI.close();
}

function cartClearConfirm() {
  if (!confirm('Yakin ingin mengosongkan keranjang?')) return;
  cart.clear();
  if (typeof showToast === 'function') showToast('🗑️ Keranjang dikosongkan', 'success');
}

/* ── Override productCard to include Cart button ─ */
/*  Patch injected AFTER main.js loads — we wrap
    window.renderProducts so the updated card HTML
    includes the "🛒 Cart" button.                  */

function _patchProductCard() {
  if (typeof window.productCard !== 'function') return;

  const _orig = window.productCard;
  window.productCard = function(p) {
    // Call original to get baseline HTML
    let html = _orig(p);

    // Replace the btn-chat with btn-chat + btn-add-cart
    const isWished = window.state?.wishlist?.includes(p.id);
    const inCart   = cart.items.some(i => i.id === p.id);

    const addCartBtn = `
      <button class="btn-add-cart ${inCart ? 'added' : ''}" data-id="${p.id}"
        onclick="cartAddProduct(${p.id})" title="Tambah ke keranjang">
        ${inCart ? '✓ Added' : '🛒 Cart'}
      </button>`;

    // Insert add-cart button before closing .product-footer div
    html = html.replace(
      /<div class="product-footer">/,
      `<div class="product-footer" style="gap:6px">`
    );
    // Append our button inside footer (before the closing </div> of product-footer)
    // We do this by injecting right before the last </div></div> of the card
    html = html.replace(
      /(<button class="btn-chat"[^>]*>.*?<\/button>)/,
      `$1 ${addCartBtn}`
    );

    return html;
  };
}

/* Add product to cart by ID */
function cartAddProduct(id) {
  const allProducts = window.PRODUCTS || window.PRODUCTS_EXTENDED || [];
  const product = allProducts.find(p => p.id === id);
  if (!product) return;

  const inCart = cart.items.some(i => i.id === id);
  if (inCart) {
    // If already in cart, open cart
    cartUI.open();
    return;
  }

  cart.add(product);
  if (typeof showToast === 'function')
    showToast(`🛒 "${product.name.slice(0, 28)}..." ditambahkan ke keranjang!`, 'success');
}

/* ── Expose globals ──────────────────────────── */
window.cart           = cart;
window.cartUI         = cartUI;
window.cartAddProduct = cartAddProduct;
window.cartCheckout   = cartCheckout;
window.cartClearConfirm = cartClearConfirm;

/* ── Bootstrap ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  cartUI.init();
  // Patch productCard after all scripts are loaded
  setTimeout(_patchProductCard, 0);
});
