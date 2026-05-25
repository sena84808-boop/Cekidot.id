/* ============================================
   CEKIDOT MART — Product Data & Cart System
   product-data.js
   ============================================ */

'use strict';

// ── Extended Product Database ─────────────────
const PRODUCT_DATA = [
  {
    id: 1,
    name: 'MacBook Pro M3 14" Space Black',
    shortName: 'MacBook Pro M3 14"',
    price: 24500000,
    originalPrice: 27000000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'elektronik',
    brand: 'Apple',
    location: 'Jakarta Selatan',
    seller: 'TechStore ID',
    rating: 4.9,
    reviews: 128,
    sold: 47,
    stock: 5,
    badge: 'hot',
    description: 'MacBook Pro terbaru dengan chip Apple M3 yang luar biasa cepat. Layar Liquid Retina XDR 14.2 inci, baterai hingga 18 jam, RAM 8GB unified memory, SSD 512GB. Cocok untuk kreator konten, developer, dan profesional. Garansi resmi Apple Indonesia 1 tahun. Tersedia warna Space Black.',
    specs: {
      'Prosesor': 'Apple M3 (8-core CPU, 10-core GPU)',
      'RAM': '8GB Unified Memory',
      'Penyimpanan': '512GB SSD',
      'Layar': '14.2" Liquid Retina XDR',
      'Baterai': 'Hingga 18 jam',
      'OS': 'macOS Sonoma',
      'Warna': 'Space Black',
    },
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1611186871525-4e4d88a3a8ae?w=600&h=450&fit=crop',
    ],
    tags: ['laptop', 'apple', 'macbook', 'ultrabook', 'kreator'],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max 256GB Natural Titanium',
    shortName: 'iPhone 15 Pro Max 256GB',
    price: 18900000,
    originalPrice: 21999000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'elektronik',
    brand: 'Apple',
    location: 'Bandung',
    seller: 'Apple Center',
    rating: 4.8,
    reviews: 94,
    sold: 82,
    stock: 3,
    badge: 'new',
    description: 'iPhone 15 Pro Max dengan desain titanium premium dan chip A17 Pro tercepat. Kamera 48MP dengan optical zoom 5x, layar Super Retina XDR 6.7 inci ProMotion 120Hz. Action Button yang bisa dikustomisasi, koneksi USB-C 3.0. Warna Natural Titanium eksklusif. Garansi resmi iBox 1 tahun.',
    specs: {
      'Prosesor': 'Apple A17 Pro',
      'Kamera Utama': '48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto',
      'Kamera Depan': '12MP TrueDepth',
      'Layar': '6.7" Super Retina XDR ProMotion 120Hz',
      'Penyimpanan': '256GB',
      'Baterai': '4422 mAh',
      'Warna': 'Natural Titanium',
    },
    images: [
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=450&fit=crop',
    ],
    tags: ['smartphone', 'apple', 'iphone', 'flagship'],
  },
  {
    id: 3,
    name: 'Nike Air Jordan 1 Retro High OG "Chicago"',
    shortName: 'Air Jordan 1 Retro High OG',
    price: 3200000,
    originalPrice: 3200000,
    condition: 'Baru',
    conditionDetail: 'Baru (Tanpa Segel)',
    category: 'fashion',
    brand: 'Nike',
    location: 'Jakarta Pusat',
    seller: 'SneakerHeadJKT',
    rating: 4.7,
    reviews: 56,
    sold: 23,
    stock: 2,
    badge: 'new',
    description: 'Air Jordan 1 Retro High OG edisi ikonik colorway Chicago. Upper kulit asli premium dengan detail stitching klasik. Outsole original dengan Nike Air cushioning. Datang dengan dus original, extra lace merah dan putih, hang tag, dan semua accessories asli. Size US 10 / EU 44.',
    specs: {
      'Brand': 'Nike / Jordan Brand',
      'Model': 'Air Jordan 1 Retro High OG',
      'Colorway': 'White/Black/Varsity Red (Chicago)',
      'Material': 'Full Grain Leather Upper',
      'Sole': 'Nike Air + Rubber Outsole',
      'Size': 'US 10 / EU 44 / UK 9',
      'Kelengkapan': 'Box, Extra laces, Hang tag',
    },
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=600&h=450&fit=crop',
    ],
    tags: ['sepatu', 'sneakers', 'nike', 'jordan', 'hype'],
  },
  {
    id: 4,
    name: 'PlayStation 5 Digital Edition Bundle + 2 Controller',
    shortName: 'PS5 Digital Edition Bundle',
    price: 8500000,
    originalPrice: 9500000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'gaming',
    brand: 'Sony',
    location: 'Surabaya',
    seller: 'GamingZone99',
    rating: 4.6,
    reviews: 73,
    sold: 61,
    stock: 4,
    badge: 'hot',
    description: 'Bundle PS5 Digital Edition terlengkap! Sudah termasuk 2 unit DualSense controller (putih + hitam), kabel HDMI, kabel USB-C, base stand, dan buku manual. Konsol sudah di-update ke firmware terbaru. Garansi resmi Sony Indonesia 1 tahun. Bonus voucher PlayStation Store Rp200.000.',
    specs: {
      'CPU': 'AMD Zen 2 8-core @ 3.5 GHz',
      'GPU': 'AMD RDNA 2 @ 10.28 TFLOPS',
      'RAM': '16GB GDDR6',
      'Penyimpanan': '825GB SSD NVMe',
      'Output': '4K 120fps / 8K support',
      'Audio': 'Tempest 3D Audio Engine',
      'Paket': 'Console + 2 DualSense + Accessories',
    },
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&h=450&fit=crop',
    ],
    tags: ['gaming', 'console', 'playstation', 'ps5', 'sony'],
  },
  {
    id: 5,
    name: 'Honda Vario 160 CBS ISS 2023 Putih Mulus',
    shortName: 'Honda Vario 160 2023',
    price: 22000000,
    originalPrice: 25500000,
    condition: 'Bekas',
    conditionDetail: 'Bekas - Sangat Baik',
    category: 'kendaraan',
    brand: 'Honda',
    location: 'Bekasi',
    seller: 'AutoDealer Prima',
    rating: 4.5,
    reviews: 31,
    sold: 14,
    stock: 1,
    badge: 'used',
    description: 'Honda Vario 160 tahun 2023 kondisi sangat mulus, kilometer baru 8.500 km. Warna putih bersih tanpa lecet. Mesin 160cc eSP + bertenaga dan irit. Sudah servis rutin di AHASS, semua komponen original. STNK dan BPKB lengkap atas nama sendiri. Pajak hidup sampai Maret 2026. Bisa nego tipis.',
    specs: {
      'Mesin': '156.9cc SOHC eSP+ Fuel Injection',
      'Transmisi': 'CVT Otomatis',
      'Tahun': '2023',
      'KM': '8.500 km',
      'Warna': 'Putih Majestic',
      'Pajak': 'Hidup s/d Maret 2026',
      'Dokumen': 'STNK + BPKB lengkap',
    },
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&h=450&fit=crop',
    ],
    tags: ['motor', 'honda', 'vario', 'matic', 'kendaraan'],
  },
  {
    id: 6,
    name: 'Kursi Gaming RESPAWN 900 Racing Style Full Recline',
    shortName: 'Kursi Gaming RESPAWN 900',
    price: 2800000,
    originalPrice: 3500000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'furniture',
    brand: 'RESPAWN',
    location: 'Depok',
    seller: 'FurnitureMall',
    rating: 4.4,
    reviews: 44,
    sold: 29,
    stock: 8,
    badge: 'new',
    description: 'Kursi gaming ergonomis RESPAWN 900 dengan desain racing style premium. Sandaran bisa direbahkan hingga 155 derajat, dilengkapi bantal leher dan lumbar support yang bisa dilepas pasang. Material PU leather premium anti-gores, busa high-density 50mm. Cocok untuk gaming marathon maupun kerja seharian.',
    specs: {
      'Material': 'PU Leather Premium + High-Density Foam 50mm',
      'Recline': 'Adjustable 90° - 155°',
      'Kapasitas': 'Maks 150 kg',
      'Tinggi Seat': 'Adjustable 44-52 cm',
      'Armrest': '3D Adjustable',
      'Roda': 'Nylon 360° Swivel',
      'Warna': 'Hitam/Merah',
    },
    images: [
      'https://images.unsplash.com/photo-1616627985067-55ea1b5cf016?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=450&fit=crop',
    ],
    tags: ['kursi', 'gaming chair', 'furniture', 'ergonomis'],
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab S9 Ultra 5G 12GB/256GB',
    shortName: 'Samsung Galaxy Tab S9 Ultra',
    price: 16500000,
    originalPrice: 18999000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'elektronik',
    brand: 'Samsung',
    location: 'Tangerang',
    seller: 'GadgetPlus',
    rating: 4.7,
    reviews: 62,
    sold: 38,
    stock: 6,
    badge: 'new',
    description: 'Samsung Galaxy Tab S9 Ultra tablet flagship terkuat dengan layar Dynamic AMOLED 14.6 inci super luas. Sudah termasuk S Pen stylus di dalam box. Prosesor Snapdragon 8 Gen 2 for Galaxy, RAM 12GB, storage 256GB. Koneksi 5G + WiFi 6E. IP68 water resistant. Sempurna untuk produktivitas, menggambar digital, dan hiburan.',
    specs: {
      'Layar': '14.6" Dynamic AMOLED 2X 120Hz',
      'Prosesor': 'Snapdragon 8 Gen 2 for Galaxy',
      'RAM': '12GB LPDDR5X',
      'Penyimpanan': '256GB UFS 4.0',
      'Kamera': '13MP + 8MP (Belakang), 12MP + 12MP (Depan)',
      'Baterai': '11200 mAh 45W',
      'Fitur': 'S Pen Included, IP68, 5G',
    },
    images: [
      'https://images.unsplash.com/photo-1590739000027-286c2688ee57?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=450&fit=crop',
    ],
    tags: ['tablet', 'samsung', 'android', 's pen', '5g'],
  },
  {
    id: 8,
    name: 'Keychron K8 Pro QMK/VIA Hot-Swap RGB Gateron G Pro',
    shortName: 'Keychron K8 Pro Mechanical',
    price: 1850000,
    originalPrice: 2100000,
    condition: 'Baru',
    conditionDetail: 'Baru (Tanpa Segel)',
    category: 'elektronik',
    brand: 'Keychron',
    location: 'Jakarta Barat',
    seller: 'TechGear_ID',
    rating: 4.8,
    reviews: 89,
    sold: 103,
    stock: 12,
    badge: '',
    description: 'Keyboard mekanikal Keychron K8 Pro tenkeyless (TKL) 80% dengan switch Gateron G Pro Red (linear) hot-swappable. Support QMK/VIA untuk full programmability. Backlight RGB per-key, frame aluminum premium. Mode Bluetooth 5.1 multi-device (3 perangkat) + kabel USB-C. Kompatibel Mac & Windows. Box sudah dibuka untuk foto, kondisi 100% baru tidak terpakai.',
    specs: {
      'Layout': 'TKL 80% (87 keys)',
      'Switch': 'Gateron G Pro Red (Hot-Swap)',
      'Koneksi': 'Bluetooth 5.1 + USB-C',
      'Backlight': 'RGB Per-Key South-Facing',
      'Frame': 'Aluminum Alloy',
      'Programmable': 'QMK / VIA',
      'Baterai': '4000 mAh (Wireless mode)',
    },
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop',
    ],
    tags: ['keyboard', 'mechanical', 'keychron', 'gaming', 'office'],
  },
  {
    id: 9,
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    shortName: 'Sony WH-1000XM5',
    price: 4500000,
    originalPrice: 5500000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'elektronik',
    brand: 'Sony',
    location: 'Jakarta Timur',
    seller: 'AudioWorld_ID',
    rating: 4.9,
    reviews: 211,
    sold: 94,
    stock: 7,
    badge: 'hot',
    description: 'Headphone terbaik di kelasnya! Sony WH-1000XM5 dengan Active Noise Cancelling (ANC) terkuat yang pernah ada. 8 mikrofon untuk noise cancelling ultra-presisi. Kualitas suara Hi-Res Audio, codec LDAC & aptX. Baterai 30 jam dengan ANC aktif. Lipat ringkas, sangat nyaman untuk perjalanan panjang. Tersedia hitam dan putih.',
    specs: {
      'Driver': '30mm, Dynamic',
      'ANC': '8 Mic Integrated Processor V1',
      'Codec': 'LDAC, AAC, SBC, aptX',
      'Baterai': '30 jam (ANC on) / 40 jam (ANC off)',
      'Charging': 'USB-C, 3 menit = 3 jam pakai',
      'Fitur': 'Speak-to-Chat, Multipoint, Wear Detection',
      'Warna': 'Midnight Black / Platinum Silver',
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&h=450&fit=crop',
    ],
    tags: ['headphone', 'sony', 'audio', 'noise cancelling', 'wireless'],
  },
  {
    id: 10,
    name: 'Levi\'s 501 Original Fit Jeans Vintage Blue',
    shortName: 'Levi\'s 501 Original Fit',
    price: 850000,
    originalPrice: 1199000,
    condition: 'Baru',
    conditionDetail: 'Baru (Tanpa Segel)',
    category: 'fashion',
    brand: "Levi's",
    location: 'Yogyakarta',
    seller: 'DenimHouseYK',
    rating: 4.6,
    reviews: 77,
    sold: 55,
    stock: 15,
    badge: '',
    description: "Levi's 501 Original Fit jeans ikonik yang tidak pernah ketinggalan zaman. Bahan denim 100% cotton heavyweight 12oz, stonewash vintage blue. Potongan straight leg klasik dengan button fly khas 501. Sudah pre-washed jadi langsung nyaman dipakai. Cocok untuk casual maupun smart-casual. Size 32x32.",
    specs: {
      'Brand': "Levi's",
      'Model': '501 Original Fit',
      'Material': '100% Cotton Denim 12oz',
      'Fit': 'Straight Leg',
      'Closure': 'Button Fly',
      'Wash': 'Medium Stonewash Vintage',
      'Size': 'W32 x L32',
    },
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&h=450&fit=crop',
    ],
    tags: ['celana', 'jeans', 'levis', 'denim', 'fashion'],
  },
  {
    id: 11,
    name: 'Yamaha Acoustic Guitar FG800 Natural',
    shortName: 'Yamaha FG800 Acoustic Guitar',
    price: 2200000,
    originalPrice: 2750000,
    condition: 'Baru',
    conditionDetail: 'Baru (Tanpa Segel)',
    category: 'random',
    brand: 'Yamaha',
    location: 'Malang',
    seller: 'MusicStoreMalang',
    rating: 4.7,
    reviews: 133,
    sold: 67,
    stock: 9,
    badge: '',
    description: 'Yamaha FG800 gitar akustik entry-level terbaik yang pernah ada. Solid Sitka Spruce top untuk suara projection yang kaya dan jernih. Mahogany back & sides untuk tone yang warm dan seimbang. Neck Nato yang nyaman untuk pemula maupun profesional. Datang dengan dus keras, strap, pick, dan senar cadangan.',
    specs: {
      'Top': 'Solid Sitka Spruce',
      'Back & Sides': 'Mahogany',
      'Neck': 'Nato',
      'Fingerboard': 'Rosewood',
      'Skala': '634mm (25")',
      'Senar': 'D\'Addario EJ16',
      'Kelengkapan': 'Hard Case, Strap, Pick',
    },
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&h=450&fit=crop',
    ],
    tags: ['gitar', 'yamaha', 'musik', 'akustik', 'instrumen'],
  },
  {
    id: 12,
    name: 'Meja Kerja Standing Desk Elektrik 140x70cm',
    shortName: 'Standing Desk Elektrik 140cm',
    price: 3800000,
    originalPrice: 5200000,
    condition: 'Baru',
    conditionDetail: 'Baru (Segel)',
    category: 'furniture',
    brand: 'FlexiDesk',
    location: 'Tangerang Selatan',
    seller: 'HomeOfficeID',
    rating: 4.5,
    reviews: 48,
    sold: 22,
    stock: 3,
    badge: 'new',
    description: 'Standing desk elektrik motorized dengan range ketinggian 72-122 cm, cocok untuk semua postur. Tabletop kayu solid 140x70cm, rangka baja anti-karat dual motor ultra-silent (<50dB). Panel kontrol digital dengan 4 preset memory. Kapasitas beban hingga 100kg. Anti-collision system untuk keamanan. Cocok untuk WFH produktif dan sehat.',
    specs: {
      'Tabletop': '140 x 70 cm, Kayu MDF 25mm',
      'Range Ketinggian': '72 - 122 cm',
      'Motor': 'Dual Motor Silent <50dB',
      'Kapasitas': 'Maks 100 kg',
      'Kontrol': 'Digital Panel + 4 Memory Preset',
      'Frame': 'Baja Powder-Coated',
      'Fitur': 'Anti-Collision, Cable Management',
    },
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=450&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop',
    ],
    tags: ['meja', 'standing desk', 'wfh', 'furniture', 'ergonomis'],
  },
];

/* ─────────────────────────────────────────────
   CART SYSTEM
   Menyimpan barang pilihan ke localStorage
   ──────────────────────────────────────────── */
const Cart = {
  // Internal state
  _items: JSON.parse(localStorage.getItem('cm-cart') || '[]'),

  // Simpan ke localStorage
  _save() {
    localStorage.setItem('cm-cart', JSON.stringify(this._items));
    this._updateBadge();
    this._dispatchEvent();
  },

  // Hitung total item
  get totalItems() {
    return this._items.reduce((sum, item) => sum + item.qty, 0);
  },

  // Hitung total harga
  get totalPrice() {
    return this._items.reduce((sum, item) => {
      const product = PRODUCT_DATA.find(p => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },

  // Tambah barang ke keranjang
  add(productId, qty = 1) {
    const product = PRODUCT_DATA.find(p => p.id === productId);
    if (!product) return false;

    const existing = this._items.find(i => i.id === productId);
    if (existing) {
      const newQty = existing.qty + qty;
      if (newQty > product.stock) {
        showToast(`⚠️ Stok hanya tersedia ${product.stock} unit`, 'error');
        return false;
      }
      existing.qty = newQty;
    } else {
      if (qty > product.stock) {
        showToast(`⚠️ Stok hanya tersedia ${product.stock} unit`, 'error');
        return false;
      }
      this._items.push({ id: productId, qty });
    }

    this._save();
    showToast(`🛒 ${product.shortName} ditambahkan ke keranjang!`, 'success');
    return true;
  },

  // Hapus barang dari keranjang
  remove(productId) {
    const idx = this._items.findIndex(i => i.id === productId);
    if (idx !== -1) {
      this._items.splice(idx, 1);
      this._save();
    }
  },

  // Update jumlah
  updateQty(productId, qty) {
    const product = PRODUCT_DATA.find(p => p.id === productId);
    if (!product) return;

    if (qty <= 0) {
      this.remove(productId);
      return;
    }

    if (qty > product.stock) {
      showToast(`⚠️ Stok maksimal ${product.stock} unit`, 'error');
      return;
    }

    const item = this._items.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      this._save();
    }
  },

  // Cek apakah produk ada di keranjang
  has(productId) {
    return this._items.some(i => i.id === productId);
  },

  // Ambil qty produk di keranjang
  getQty(productId) {
    const item = this._items.find(i => i.id === productId);
    return item ? item.qty : 0;
  },

  // Ambil semua item beserta data produk
  getItems() {
    return this._items.map(item => {
      const product = PRODUCT_DATA.find(p => p.id === item.id);
      return product ? { ...product, qty: item.qty, subtotal: product.price * item.qty } : null;
    }).filter(Boolean);
  },

  // Kosongkan keranjang
  clear() {
    this._items = [];
    this._save();
  },

  // Update badge counter di UI
  _updateBadge() {
    const badge = document.getElementById('cart-badge');
    const total = this.totalItems;
    if (badge) {
      badge.textContent = total;
      badge.style.display = total > 0 ? 'flex' : 'none';
    }
  },

  // Dispatch event agar komponen lain bisa bereaksi
  _dispatchEvent() {
    window.dispatchEvent(new CustomEvent('cart:updated', {
      detail: { items: this.getItems(), total: this.totalPrice, count: this.totalItems }
    }));
  },

  // Init: pasang badge dan event listener
  init() {
    this._updateBadge();
    // Re-render cart panel jika sedang terbuka
    window.addEventListener('cart:updated', () => {
      if (document.getElementById('cart-panel')?.classList.contains('open')) {
        renderCartPanel();
      }
    });
  },
};

/* ─────────────────────────────────────────────
   CART PANEL UI
   Panel geser dari kanan untuk lihat keranjang
   ──────────────────────────────────────────── */
function injectCartPanel() {
  if (document.getElementById('cart-panel')) return;

  const html = `
    <!-- Cart Overlay -->
    <div id="cart-overlay" onclick="closeCart()" style="
      position:fixed;inset:0;z-index:3000;
      background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);
      opacity:0;visibility:hidden;transition:all .3s;
    "></div>

    <!-- Cart Panel -->
    <div id="cart-panel" style="
      position:fixed;top:0;right:0;bottom:0;z-index:3001;
      width:420px;max-width:100vw;
      background:var(--surface);
      border-left:1px solid var(--border);
      box-shadow:-24px 0 64px rgba(0,0,0,0.15);
      display:flex;flex-direction:column;
      transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);
    ">
      <!-- Header -->
      <div style="
        padding:24px 24px 20px;
        border-bottom:1px solid var(--border);
        display:flex;align-items:center;justify-content:space-between;
      ">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:22px">🛒</span>
          <span style="font-family:var(--font-display);font-size:20px;font-weight:700;letter-spacing:-.5px">
            Keranjang Belanja
          </span>
          <span id="cart-count-label" style="
            background:var(--neon);color:#000;
            font-size:12px;font-weight:700;
            padding:2px 8px;border-radius:99px;
          ">0</span>
        </div>
        <button onclick="closeCart()" style="
          width:36px;height:36px;border-radius:50%;
          background:var(--surface-2);border:1px solid var(--border);
          font-size:18px;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          transition:all .15s;color:var(--text-2);
        " onmouseover="this.style.background='var(--border-strong)'"
           onmouseout="this.style.background='var(--surface-2)'">✕</button>
      </div>

      <!-- Items List -->
      <div id="cart-items-list" style="flex:1;overflow-y:auto;padding:16px"></div>

      <!-- Footer -->
      <div id="cart-footer" style="
        padding:20px 24px;
        border-top:1px solid var(--border);
        background:var(--surface);
      "></div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
}

function renderCartPanel() {
  const list = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');
  const countLabel = document.getElementById('cart-count-label');
  if (!list || !footer) return;

  const items = Cart.getItems();
  if (countLabel) countLabel.textContent = Cart.totalItems;

  if (items.length === 0) {
    list.innerHTML = `
      <div style="
        display:flex;flex-direction:column;align-items:center;
        justify-content:center;height:100%;padding:60px 20px;
        text-align:center;color:var(--text-3);
      ">
        <div style="font-size:64px;margin-bottom:16px;opacity:.4">🛒</div>
        <div style="font-size:16px;font-weight:600;margin-bottom:8px;color:var(--text-2)">
          Keranjang masih kosong
        </div>
        <div style="font-size:13px;line-height:1.6">
          Tambah barang dari halaman produk<br>untuk mulai berbelanja!
        </div>
        <button onclick="closeCart();document.getElementById('products-section')?.scrollIntoView({behavior:'smooth'})"
          style="
            margin-top:24px;padding:12px 24px;border-radius:10px;
            background:var(--neon);color:#000;font-size:14px;font-weight:700;
            cursor:pointer;border:none;transition:all .15s;
          " onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
          🔍 Lihat Produk
        </button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  // Render items
  list.innerHTML = items.map(item => `
    <div class="cart-item" data-id="${item.id}" style="
      display:flex;gap:12px;padding:14px 0;
      border-bottom:1px solid var(--border);
      animation:fadeInUp .25s ease;
    ">
      <div style="
        width:72px;height:72px;border-radius:10px;
        overflow:hidden;flex-shrink:0;background:var(--surface-2);
      ">
        <img src="${item.images[0]}" alt="${item.shortName}"
          style="width:100%;height:100%;object-fit:cover">
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600;line-height:1.4;margin-bottom:4px;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
          ${item.shortName}
        </div>
        <div style="font-size:11px;padding:2px 6px;border-radius:99px;display:inline-block;margin-bottom:6px;
          ${item.condition === 'Baru'
            ? 'background:rgba(0,230,118,.15);color:var(--neon);'
            : 'background:rgba(255,149,0,.15);color:var(--warning);'}">
          ${item.conditionDetail}
        </div>
        <div style="font-family:var(--font-display);font-size:15px;font-weight:700;color:var(--neon);margin-bottom:8px">
          Rp ${formatPrice(item.price)}
        </div>
        <!-- Qty Controls -->
        <div style="display:flex;align-items:center;gap:0">
          <button onclick="Cart.updateQty(${item.id}, ${item.qty - 1});renderCartPanel()" style="
            width:28px;height:28px;border-radius:8px 0 0 8px;
            background:var(--surface-2);border:1px solid var(--border);
            font-size:16px;cursor:pointer;color:var(--text);
            display:flex;align-items:center;justify-content:center;
            transition:all .15s;
          " onmouseover="this.style.background='var(--border)'" onmouseout="this.style.background='var(--surface-2)'">−</button>
          <div style="
            width:36px;height:28px;
            border-top:1px solid var(--border);border-bottom:1px solid var(--border);
            display:flex;align-items:center;justify-content:center;
            font-size:13px;font-weight:700;background:var(--surface);
          ">${item.qty}</div>
          <button onclick="Cart.updateQty(${item.id}, ${item.qty + 1});renderCartPanel()" style="
            width:28px;height:28px;border-radius:0 8px 8px 0;
            background:var(--surface-2);border:1px solid var(--border);
            font-size:16px;cursor:pointer;color:var(--text);
            display:flex;align-items:center;justify-content:center;
            transition:all .15s;
          " onmouseover="this.style.background='var(--border)'" onmouseout="this.style.background='var(--surface-2)'">+</button>
          <button onclick="Cart.remove(${item.id});renderCartPanel()" style="
            margin-left:8px;padding:0 8px;height:28px;border-radius:8px;
            background:rgba(255,59,48,.1);border:1px solid rgba(255,59,48,.2);
            font-size:11px;font-weight:600;color:var(--danger);cursor:pointer;
            transition:all .15s;
          " onmouseover="this.style.background='rgba(255,59,48,.2)'" onmouseout="this.style.background='rgba(255,59,48,.1)'">
            Hapus
          </button>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;color:var(--text-3);margin-bottom:2px">Subtotal</div>
        <div style="font-family:var(--font-display);font-size:14px;font-weight:700">
          Rp ${formatPrice(item.subtotal)}
        </div>
      </div>
    </div>
  `).join('');

  // Render footer with total
  const total = Cart.totalPrice;
  const shipping = 0; // Free shipping simulation
  footer.innerHTML = `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:14px;color:var(--text-2)">
        <span>Subtotal (${Cart.totalItems} barang)</span>
        <span>Rp ${total.toLocaleString('id-ID')}</span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:14px;color:var(--neon)">
        <span>🎉 Ongkos Kirim</span>
        <span>GRATIS</span>
      </div>
      <div style="height:1px;background:var(--border);margin:12px 0"></div>
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:800;font-family:var(--font-display)">
        <span>Total</span>
        <span style="color:var(--neon)">Rp ${total.toLocaleString('id-ID')}</span>
      </div>
    </div>
    <button onclick="handleCheckout()" style="
      width:100%;padding:15px;border-radius:12px;
      background:var(--neon);color:#000;
      font-size:16px;font-weight:700;font-family:var(--font-heading);
      cursor:pointer;border:none;
      box-shadow:0 8px 24px rgba(0,230,118,.3);
      transition:all .2s;
    " onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 12px 32px rgba(0,230,118,.4)'"
       onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 8px 24px rgba(0,230,118,.3)'">
      🚀 Checkout Sekarang →
    </button>
    <button onclick="Cart.clear();renderCartPanel()" style="
      width:100%;margin-top:8px;padding:10px;border-radius:12px;
      background:none;color:var(--text-3);
      font-size:13px;cursor:pointer;border:1px solid var(--border);
      transition:all .15s;
    " onmouseover="this.style.borderColor='var(--danger)';this.style.color='var(--danger)'"
       onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text-3)'">
      🗑️ Kosongkan Keranjang
    </button>
  `;
}

function openCart() {
  injectCartPanel();
  renderCartPanel();
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  if (panel) panel.style.transform = 'translateX(0)';
  if (overlay) { overlay.style.opacity = '1'; overlay.style.visibility = 'visible'; }
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const panel = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  if (panel) panel.style.transform = 'translateX(100%)';
  if (overlay) { overlay.style.opacity = '0'; overlay.style.visibility = 'hidden'; }
  document.body.style.overflow = '';
}

function handleCheckout() {
  if (!window.auth?.current) {
    closeCart();
    showToast('⚠️ Silakan login dulu untuk checkout!', 'error');
    if (typeof openAuthModal === 'function') openAuthModal('login');
    return;
  }
  showToast('🎉 Fitur checkout segera hadir! Terima kasih telah berbelanja.', 'success');
}

// ── Inject cart button ke navbar ──────────────
function injectCartButton() {
  const actions = document.querySelector('.nav-actions');
  if (!actions || document.getElementById('cart-nav-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'cart-nav-btn';
  btn.className = 'btn-ghost';
  btn.style.cssText = 'position:relative;display:flex;align-items:center;gap:6px;padding:8px 16px';
  btn.onclick = openCart;
  btn.innerHTML = `
    🛒 <span style="font-size:14px;font-weight:600">Keranjang</span>
    <span id="cart-badge" style="
      position:absolute;top:2px;right:2px;
      width:18px;height:18px;border-radius:50%;
      background:var(--neon);color:#000;
      font-size:10px;font-weight:800;
      display:none;align-items:center;justify-content:center;
    ">0</span>
  `;

  const hamburger = actions.querySelector('.hamburger');
  if (hamburger) {
    actions.insertBefore(btn, hamburger);
  } else {
    actions.appendChild(btn);
  }

  Cart._updateBadge();
}

// ── Expose globals ────────────────────────────
window.PRODUCT_DATA = PRODUCT_DATA;
window.Cart = Cart;
window.openCart = openCart;
window.closeCart = closeCart;
window.renderCartPanel = renderCartPanel;
window.handleCheckout = handleCheckout;

// ── Auto-init on DOM ready ────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    Cart.init();
    injectCartButton();
  });
} else {
  Cart.init();
  injectCartButton();
}
