(() => {
  // data.js
  var STORAGE_KEYS = {
    PRODUCTS: "bpositive_products",
    ORDERS: "bpositive_orders",
    CURRENCY_VERSION: "bpositive_currency_version"
  };
  var USD_TO_INR = 96.063464;
  var INR_CURRENCY_VERSION = "inr-2026-09";
  var CATEGORIES = ["Mobiles", "Laptops", "Tablets", "Earbuds", "Accessories"];
  var BRANDS = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Sony", "Dell"];
  var SEED_PRODUCTS = [
    // Apple — Mobiles
    { id: "p001", name: "iPhone 15 Pro Max", brand: "Apple", category: "Mobiles", price: 1199, originalPrice: 1299, image: "https://images.pexels.com/photos/7889464/pexels-photo-7889464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Titanium build, A17 Pro chip, 48MP camera system.", badge: "Just In" },
    { id: "p002", name: "iPhone 15", brand: "Apple", category: "Mobiles", price: 799, image: "https://images.pexels.com/photos/12968298/pexels-photo-12968298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Dynamic Island, 48MP camera, USB-C." },
    // Apple — Laptops
    { id: "p003", name: "MacBook Air M3", brand: "Apple", category: "Laptops", price: 1099, image: "https://images.pexels.com/photos/8533587/pexels-photo-8533587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "13-inch Liquid Retina, M3 chip, 18-hour battery." },
    { id: "p004", name: 'MacBook Pro 16"', brand: "Apple", category: "Laptops", price: 2499, originalPrice: 2699, image: "https://images.pexels.com/photos/943596/pexels-photo-943596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "M3 Max, 36GB RAM, 1TB SSD.", badge: "Just In" },
    // Apple — Tablets
    { id: "p005", name: 'iPad Pro 12.9"', brand: "Apple", category: "Tablets", price: 1099, image: "https://images.pexels.com/photos/10535365/pexels-photo-10535365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "M2 chip, Liquid Retina XDR, Apple Pencil compatible." },
    // Apple — Earbuds
    { id: "p006", name: "AirPods Pro 2", brand: "Apple", category: "Earbuds", price: 249, originalPrice: 279, image: "https://images.pexels.com/photos/33298189/pexels-photo-33298189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Active noise cancellation, spatial audio, USB-C case." },
    // Apple — Accessories
    { id: "p007", name: "Apple Watch Series 9", brand: "Apple", category: "Accessories", price: 399, image: "https://images.pexels.com/photos/9142237/pexels-photo-9142237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Always-on display, ECG, crash detection." },
    // Samsung — Mobiles
    { id: "p008", name: "Galaxy S24 Ultra", brand: "Samsung", category: "Mobiles", price: 1299, image: "https://images.pexels.com/photos/7438754/pexels-photo-7438754.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "200MP camera, S Pen, Snapdragon 8 Gen 3.", badge: "Just In" },
    { id: "p009", name: "Galaxy Z Flip5", brand: "Samsung", category: "Mobiles", price: 999, originalPrice: 1099, image: "https://images.pexels.com/photos/20360361/pexels-photo-20360361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Foldable display, flex mode, compact design." },
    // Samsung — Tablets
    { id: "p010", name: "Galaxy Tab S9", brand: "Samsung", category: "Tablets", price: 799, image: "https://images.pexels.com/photos/13570165/pexels-photo-13570165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "11-inch Dynamic AMOLED, S Pen included." },
    // Samsung — Earbuds
    { id: "p011", name: "Galaxy Buds3 Pro", brand: "Samsung", category: "Earbuds", price: 229, image: "https://images.pexels.com/photos/30981655/pexels-photo-30981655.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Adaptive noise cancellation, 360 audio." },
    // Samsung — Accessories
    { id: "p012", name: "Galaxy Watch6", brand: "Samsung", category: "Accessories", price: 329, originalPrice: 359, image: "https://images.pexels.com/photos/14979022/pexels-photo-14979022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Body composition, sleep tracking, watch faces." },
    // Xiaomi — Mobiles
    { id: "p013", name: "Xiaomi 14 Pro", brand: "Xiaomi", category: "Mobiles", price: 899, image: "https://images.pexels.com/photos/4793929/pexels-photo-4793929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Leica optics, Snapdragon 8 Gen 3, 120W charging." },
    { id: "p014", name: "Redmi Note 13", brand: "Xiaomi", category: "Mobiles", price: 299, originalPrice: 349, image: "https://images.pexels.com/photos/6370362/pexels-photo-6370362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "108MP camera, 5000mAh battery, AMOLED display." },
    // Xiaomi — Earbuds
    { id: "p015", name: "Xiaomi Buds 4 Pro", brand: "Xiaomi", category: "Earbuds", price: 179, image: "https://images.pexels.com/photos/33936400/pexels-photo-33936400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Adaptive ANC, spatial audio, 52dB noise reduction." },
    // Xiaomi — Accessories
    { id: "p016", name: "Xiaomi Smart Band 8", brand: "Xiaomi", category: "Accessories", price: 79, image: "https://images.pexels.com/photos/29730990/pexels-photo-29730990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "150+ sports modes, AMOLED, 16-day battery." },
    // OnePlus — Mobiles
    { id: "p017", name: "OnePlus 12", brand: "OnePlus", category: "Mobiles", price: 799, image: "https://images.pexels.com/photos/17177820/pexels-photo-17177820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Hasselblad camera, 100W fast charging, 120Hz display.", badge: "Just In" },
    // OnePlus — Earbuds
    { id: "p018", name: "OnePlus Buds Pro 3", brand: "OnePlus", category: "Earbuds", price: 199, originalPrice: 229, image: "https://images.pexels.com/photos/33298188/pexels-photo-33298188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Dual drivers, ANC, up to 43 hours battery." },
    // OnePlus — Tablets
    { id: "p019", name: "OnePlus Pad", brand: "OnePlus", category: "Tablets", price: 479, image: "https://images.pexels.com/photos/25809238/pexels-photo-25809238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "11.6-inch 144Hz display, Dolby Vision, 9510mAh." },
    // Sony — Earbuds
    { id: "p020", name: "Sony WF-1000XM5", brand: "Sony", category: "Earbuds", price: 299, image: "https://images.pexels.com/photos/19321719/pexels-photo-19321719.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Industry-leading ANC, LDAC, 8-hour battery." },
    { id: "p021", name: "Sony WH-1000XM5", brand: "Sony", category: "Earbuds", price: 399, originalPrice: 449, image: "https://images.pexels.com/photos/33797659/pexels-photo-33797659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Over-ear flagship, 30-hour battery, multipoint." },
    // Sony — Accessories
    { id: "p022", name: "Sony Portable Power Bank", brand: "Sony", category: "Accessories", price: 89, image: "https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "10000mAh, USB-C PD, fast charge." },
    // Dell — Laptops
    { id: "p023", name: "Dell XPS 15", brand: "Dell", category: "Laptops", price: 1499, image: "https://images.pexels.com/photos/6968164/pexels-photo-6968164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "Intel Core Ultra 7, RTX 4060, OLED 3.5K display." },
    { id: "p024", name: "Dell Inspiron 14", brand: "Dell", category: "Laptops", price: 699, originalPrice: 799, image: "https://images.pexels.com/photos/11969081/pexels-photo-11969081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "AMD Ryzen 7, 16GB RAM, 512GB SSD." },
    // Dell — Tablets
    { id: "p025", name: "Dell Latitude 2-in-1", brand: "Dell", category: "Tablets", price: 1199, image: "https://images.pexels.com/photos/6373027/pexels-photo-6373027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", description: "12-inch convertible, Intel Core Ultra, enterprise-grade." }
  ];
  var data = {
    getProducts() {
      const raw = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      if (!raw) {
        const products = SEED_PRODUCTS.map((product) => ({
          ...product,
          price: Math.round(product.price * USD_TO_INR),
          originalPrice: product.originalPrice ? Math.round(product.originalPrice * USD_TO_INR) : product.originalPrice
        }));
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
        localStorage.setItem(STORAGE_KEYS.CURRENCY_VERSION, INR_CURRENCY_VERSION);
        return products;
      }
      try {
        const products = JSON.parse(raw);
        if (localStorage.getItem(STORAGE_KEYS.CURRENCY_VERSION) !== INR_CURRENCY_VERSION) {
          products.forEach((product) => {
            if (product.price != null && Number.isFinite(Number(product.price))) product.price = Math.round(Number(product.price) * USD_TO_INR);
            if (product.originalPrice != null && Number.isFinite(Number(product.originalPrice))) product.originalPrice = Math.round(Number(product.originalPrice) * USD_TO_INR);
          });
          localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
          try {
            const orders = JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS) || "[]");
            orders.forEach((order) => {
              if (order.productPrice != null && Number.isFinite(Number(order.productPrice))) order.productPrice = Math.round(Number(order.productPrice) * USD_TO_INR);
            });
            localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
          } catch (e) {}
          localStorage.setItem(STORAGE_KEYS.CURRENCY_VERSION, INR_CURRENCY_VERSION);
        }
        return products;
      } catch (e) {
        const products = SEED_PRODUCTS.map((product) => ({
          ...product,
          price: Math.round(product.price * USD_TO_INR),
          originalPrice: product.originalPrice ? Math.round(product.originalPrice * USD_TO_INR) : product.originalPrice
        }));
        localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
        localStorage.setItem(STORAGE_KEYS.CURRENCY_VERSION, INR_CURRENCY_VERSION);
        return products;
      }
    },
    saveProducts(products) {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
    },
    addProduct(product) {
      const products = this.getProducts();
      const newProduct = { ...product, id: "p" + Date.now() };
      products.unshift(newProduct);
      this.saveProducts(products);
      return newProduct;
    },
    deleteProduct(id) {
      const products = this.getProducts().filter((p) => p.id !== id);
      this.saveProducts(products);
    },
    getOrders() {
      const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
      if (!raw) return [];
      try {
        return JSON.parse(raw);
      } catch (e) {
        return [];
      }
    },
    saveOrders(orders) {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
    },
    addOrder(order) {
      const orders = this.getOrders();
      const newOrder = {
        ...order,
        id: "o" + Date.now(),
        date: (/* @__PURE__ */ new Date()).toISOString(),
        status: "pending"
      };
      orders.unshift(newOrder);
      this.saveOrders(orders);
      return newOrder;
    },
    updateOrderStatus(id, status) {
      const orders = this.getOrders().map((o) => o.id === id ? { ...o, status } : o);
      this.saveOrders(orders);
    },
    deleteOrder(id) {
      const orders = this.getOrders().filter((o) => o.id !== id);
      this.saveOrders(orders);
    },
    getCategories() {
      return CATEGORIES;
    },
    getBrands() {
      return BRANDS;
    },
    getBrandCategories(brand) {
      const products = this.getProducts();
      const cats = [...new Set(products.filter((p) => p.brand === brand).map((p) => p.category))];
      return cats.length > 0 ? cats : [...CATEGORIES];
    }
  };
  function formatPrice(amount) {
    const value = Number(amount) || 0;
    return `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
  }

  // components.js
  var ICONS = {
    home: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg>',
    catalog: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    about: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/></svg>',
    contact: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    bag: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    admin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    check: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    mapPin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    clock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    box: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    clipboard: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',
    trash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
  };
  function renderNav(currentRoute, onNavigate) {
    const brands = data.getBrands();
    const products = data.getProducts();
    return `
    <nav class="primary-nav">
      <div class="container">
        <div style="display:flex;align-items:center;gap:var(--space-xl)">
          <button class="btn-icon-circular mobile-menu-toggle" id="mobileMenuBtn">${ICONS.menu}</button>
          <span class="brand-logo" data-route="home">b-positive</span>
        </div>
        <div class="nav-actions">
          <div class="search-pill" id="searchPill">
            ${ICONS.search}
            <input type="text" id="navSearchInput" placeholder="Search products" />
          </div>
        </div>
      </div>
    </nav>
    <div class="brand-subnav" id="brandSubnav">
      <div class="container">
        ${brands.map((brand) => {
      const latestProduct = products.find((product) => product.brand === brand);
      return `
          <div class="brand-subnav-item" data-brand="${brand}" tabindex="0" aria-haspopup="true">
            <span class="brand-subnav-label">${brand}</span>
            <span class="brand-subnav-chevron" aria-hidden="true"></span>
            <div class="brand-dropdown">
              <div class="brand-dropdown-topline">
                <span class="brand-dropdown-title">Latest from ${brand}</span>
                <button class="brand-dropdown-all" data-brand="${brand}" data-category="">Shop brand</button>
              </div>
              ${latestProduct ? `
                <button class="brand-featured-product" data-product-id="${latestProduct.id}">
                  <span class="brand-featured-image"><img src="${latestProduct.image}" alt="${latestProduct.name}" /></span>
                  <span class="brand-featured-copy">
                    <span class="brand-featured-tag">Latest added</span>
                    <span class="brand-featured-name">${latestProduct.name}</span>
                    <span class="brand-featured-price">${formatPrice(latestProduct.price)}</span>
                  </span>
                </button>
              ` : ""}
              <div class="brand-dropdown-categories">
                ${data.getBrandCategories(brand).map((cat) => `
                  <button class="brand-dropdown-item" data-brand="${brand}" data-category="${cat}">${cat}</button>
                `).join("")}
              </div>
            </div>
          </div>
        `;
    }).join("")}
      </div>
    </div>
    <div class="mobile-drawer-overlay" id="mobileDrawerOverlay"></div>
    <div class="mobile-drawer" id="mobileDrawer">
      <span class="brand-logo" data-route="home" style="margin-bottom:var(--space-xl)">b-positive</span>
      <nav>
        ${["home", "catalog", "about", "contact"].map((r) => `
          <a data-route="${r}">${r === "home" ? "Home" : r === "catalog" ? "Catalog" : r === "about" ? "About Us" : "Contact Us"}</a>
        `).join("")}
      </nav>
    </div>
    <nav class="nav-links" role="toolbar" aria-label="Main navigation">
      ${["home", "catalog", "about", "contact"].map((route) => {
      const label = route === "about" ? "About Us" : route === "contact" ? "Contact Us" : route === "home" ? "Home" : "Catalog";
      return `
        <button class="nav-link ${currentRoute === route ? "active" : ""}" data-route="${route}" aria-label="${label}" title="${label}">
          ${ICONS[route]}
          <span class="nav-link-label" aria-hidden="true">${label}</span>
          <span class="nav-link-indicator" aria-hidden="true"></span>
        </button>
      `;
    }).join("")}
    </nav>
  `;
  }
  function renderProductCard(product) {
    const hasSale = product.originalPrice && product.originalPrice > product.price;
    return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-card-image">
        ${product.badge ? `<div class="product-card-badge"><span class="badge-promo">${product.badge}</span></div>` : ""}
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-card-info">
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-subtitle">${product.brand} \xB7 ${product.category}</div>
        <div class="product-card-price">
          ${hasSale ? `
            <span class="price-sale">${formatPrice(product.price)}</span>
            <span class="price-strike">${formatPrice(product.originalPrice)}</span>
            <span class="price-sale caption-sm">${Math.round((1 - product.price / product.originalPrice) * 100)}% off</span>
          ` : formatPrice(product.price)}
        </div>
      </div>
    </div>
  `;
  }
  function renderBuyModal(product) {
    return `
    <div class="modal-backdrop open" id="buyModalBackdrop">
      <div class="modal" id="buyModal">
        <div class="modal-header">
          <span class="modal-title">Complete Your Request</span>
          <button class="modal-close" id="buyModalClose">${ICONS.close}</button>
        </div>
        <div class="product-summary">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-summary-info">
            <div class="body-strong">${product.name}</div>
            <div class="caption-md text-mute">${product.brand} \xB7 ${product.category}</div>
            <div class="body-strong" style="margin-top:4px">${formatPrice(product.price)}</div>
          </div>
        </div>
        <form id="buyForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="bf_name">Full Name</label>
            <input class="form-input" type="text" id="bf_name" name="name" placeholder="Your full name" />
            <span class="form-error" data-error="name"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="bf_phone">Phone Number</label>
            <input class="form-input" type="tel" id="bf_phone" name="phone" placeholder="+1 234 567 890" />
            <span class="form-error" data-error="phone"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="bf_email">Email Address</label>
            <input class="form-input" type="email" id="bf_email" name="email" placeholder="you@example.com" />
            <span class="form-error" data-error="email"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="bf_address">Delivery Address</label>
            <textarea class="form-textarea" id="bf_address" name="address" placeholder="Street, city, postal code"></textarea>
            <span class="form-error" data-error="address"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="bf_notes">Additional Notes / Inquiries</label>
            <textarea class="form-textarea" id="bf_notes" name="notes" placeholder="Any special requests?"></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width:100%">Send Request</button>
        </form>
      </div>
    </div>
  `;
  }
  function renderConfirmation() {
    return `
    <div class="modal-backdrop open" id="buyModalBackdrop">
      <div class="modal" id="buyModal">
        <div class="modal-header">
          <span class="modal-title">Request Sent</span>
          <button class="modal-close" id="buyModalClose">${ICONS.close}</button>
        </div>
        <div class="confirmation">
          <div class="confirmation-icon">${ICONS.check}</div>
          <div class="confirmation-title">Request sent successfully!</div>
          <div class="confirmation-text">We will contact you shortly.</div>
        </div>
        <div style="margin-top:var(--space-xl)">
          <button class="btn-secondary" style="width:100%" id="confirmCloseBtn">Close</button>
        </div>
      </div>
    </div>
  `;
  }
  function renderFooter() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-col">
            <div class="footer-col-title">Resources</div>
            <ul>
              <li><a href="#" data-route="catalog">Product Catalog</a></li>
              <li><a href="#" data-route="about">About Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Help</div>
            <ul>
              <li><a href="#" data-route="contact">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Company</div>
            <ul>
              <li><a href="#" data-route="about">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Promotions & Discounts</div>
            <ul>
              <li><a href="#" data-route="catalog">Featured Deals</a></li>
              <li><a href="#">Member Offers</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Student Discount</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="text-utility">\xA9 2026 b-positive. All rights reserved.</span>
          <span class="text-utility">India \xB7 English \xB7 INR</span>
        </div>
      </div>
    </footer>
  `;
  }
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => toast.classList.remove("show"), 3e3);
  }

  // pages.js
  var HERO_IMG = "https://images.pexels.com/photos/12968298/pexels-photo-12968298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  var CAMPAIGN_IMG = "https://images.pexels.com/photos/8108650/pexels-photo-8108650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";
  function renderHome(state) {
    const allProducts = data.getProducts();
    const categories = data.getCategories();
    let products = allProducts;
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      products = products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    if (state.homeCategory && state.homeCategory !== "All") {
      products = products.filter((p) => p.category === state.homeCategory);
    }
    const featured = products.slice(0, 9);
    return `
    <section class="hero">
      <img class="hero-image" src="${HERO_IMG}" alt="b-positive electronics" />
      <div class="hero-overlay">
        <h1 class="hero-headline">Power Your World</h1>
        <p class="hero-sub">Discover premium electronics from the brands you trust. Shop the latest in mobile, computing, and audio.</p>
        <div>
          <button class="btn-outline-on-image" data-route="catalog">Shop Now</button>
        </div>
      </div>
    </section>

    <div class="container section-gap">
      <div class="section-header">
        <h2 class="section-title">Featured Products</h2>
      </div>

      <div class="category-chips">
        <button class="filter-chip ${!state.homeCategory || state.homeCategory === "All" ? "active" : ""}" data-home-category="All">All</button>
        ${categories.map((cat) => `
          <button class="filter-chip ${state.homeCategory === cat ? "active" : ""}" data-home-category="${cat}">${cat}</button>
        `).join("")}
      </div>

      ${featured.length > 0 ? `
        <div class="product-grid">
          ${featured.map((p) => renderProductCard(p)).join("")}
        </div>
      ` : `
        <div class="admin-empty">
          <p>No products found. Try a different search or category.</p>
        </div>
      `}
    </div>

    <div class="container section-gap">
      <div class="campaign-tile" style="aspect-ratio:21/9">
        <img src="${CAMPAIGN_IMG}" alt="Premium audio collection" />
        <div class="campaign-tile-overlay">
          <h2 class="campaign-tile-headline">Sound Without Limits</h2>
          <button class="btn-outline-on-image" data-route="catalog" data-home-category="Earbuds">Shop Audio</button>
        </div>
      </div>
    </div>

    <div class="container section-gap">
      <div class="section-header">
        <h2 class="section-title">Shop by Category</h2>
      </div>
      <div class="highlight-rail">
        ${categories.map((cat) => {
      const catProduct = allProducts.find((p) => p.category === cat);
      return `
            <div class="campaign-tile" style="aspect-ratio:4/5;cursor:pointer" data-route="catalog" data-cat="${cat}">
              <img src="${catProduct ? catProduct.image : allProducts[0].image}" alt="${cat}" />
              <div class="campaign-tile-overlay">
                <h3 class="campaign-tile-headline" style="font-size:24px">${cat}</h3>
              </div>
            </div>
          `;
    }).join("")}
      </div>
    </div>
  `;
  }
  function renderCatalog(state) {
    const allProducts = data.getProducts();
    const brands = data.getBrands();
    const categories = data.getCategories();
    let products = [...allProducts];
    if (state.filterBrand) {
      products = products.filter((p) => p.brand === state.filterBrand);
    }
    if (state.filterCategory) {
      products = products.filter((p) => p.category === state.filterCategory);
    }
    if (state.filterMaxPrice) {
      products = products.filter((p) => p.price <= state.filterMaxPrice);
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      products = products.filter(
        (p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }
    if (state.sortBy === "price-asc") products.sort((a, b) => a.price - b.price);
    else if (state.sortBy === "price-desc") products.sort((a, b) => b.price - a.price);
    else if (state.sortBy === "name-asc") products.sort((a, b) => a.name.localeCompare(b.name));
    return `
    <div class="container" style="padding-top:var(--space-xl)">
      <div class="catalog-toolbar">
        <div>
          <span class="catalog-count">${products.length} product${products.length !== 1 ? "s" : ""}</span>
        </div>
        <div style="display:flex;gap:var(--space-sm);align-items:center">
          <button class="filter-chip filters-toggle" id="filtersToggle">Filters</button>
          <select class="sort-select" id="sortSelect">
            <option value="" ${!state.sortBy ? "selected" : ""}>Sort By</option>
            <option value="price-asc" ${state.sortBy === "price-asc" ? "selected" : ""}>Price: Low to High</option>
            <option value="price-desc" ${state.sortBy === "price-desc" ? "selected" : ""}>Price: High to Low</option>
            <option value="name-asc" ${state.sortBy === "name-asc" ? "selected" : ""}>Name: A to Z</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container" style="padding-bottom:var(--space-section)">
      <div class="catalog-layout">
        <aside class="catalog-sidebar" id="catalogSidebar">
          <div class="filter-group">
            <div class="filter-group-title">Brand</div>
            ${brands.map((b) => `
              <label class="filter-option">
                <input type="radio" name="brand" value="${b}" ${state.filterBrand === b ? "checked" : ""} />
                ${b}
              </label>
            `).join("")}
            <label class="filter-option">
              <input type="radio" name="brand" value="" ${!state.filterBrand ? "checked" : ""} />
              All Brands
            </label>
          </div>

          <div class="filter-group">
            <div class="filter-group-title">Category</div>
            ${categories.map((c) => `
              <label class="filter-option">
                <input type="radio" name="category" value="${c}" ${state.filterCategory === c ? "checked" : ""} />
                ${c}
              </label>
            `).join("")}
            <label class="filter-option">
              <input type="radio" name="category" value="" ${!state.filterCategory ? "checked" : ""} />
              All Categories
            </label>
          </div>

          <div class="filter-group">
            <div class="filter-group-title">Price Range</div>
            <label class="filter-option">
              <input type="radio" name="price" value="" ${!state.filterMaxPrice ? "checked" : ""} />
              Any Price
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="10000" ${state.filterMaxPrice === 10000 ? "checked" : ""} />
              Under ₹10,000
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="30000" ${state.filterMaxPrice === 30000 ? "checked" : ""} />
              Under ₹30,000
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="80000" ${state.filterMaxPrice === 80000 ? "checked" : ""} />
              Under ₹80,000
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="150000" ${state.filterMaxPrice === 150000 ? "checked" : ""} />
              Under ₹1,50,000
            </label>
            <label class="filter-option">
              <input type="radio" name="price" value="250000" ${state.filterMaxPrice === 250000 ? "checked" : ""} />
              Under ₹2,50,000
            </label>
          </div>
        </aside>

        <div class="catalog-main">
          ${products.length > 0 ? `
            <div class="product-grid">
              ${products.map((p) => renderProductCard(p)).join("")}
            </div>
          ` : `
            <div class="admin-empty">
              <p>No products match your filters.</p>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
  }
  function renderAbout() {
    return `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero-title">About Us</h1>
        <p class="page-hero-sub">Positive energy in every device. We curate the best electronics so you can focus on what matters.</p>
      </div>
    </section>

    <div class="container section-gap">
      <div class="about-content">
        <img src="https://images.pexels.com/photos/12968299/pexels-photo-12968299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="b-positive store" />
        <div class="about-text">
          <h2>Our Story</h2>
          <p>b-positive was founded on a simple idea: buying electronics should feel good. We bring together the world's leading brands under one roof, with a curated selection that cuts through the noise.</p>
          <p>From the latest smartphones to pro-grade laptops and premium audio, every product in our catalog is chosen for quality, performance, and value. We partner directly with Apple, Samsung, Sony, Dell, OnePlus, and Xiaomi to bring you authentic products at competitive prices.</p>
          <p>Our team is passionate about technology and committed to helping you find the right device for your needs \u2014 no pushy sales, just honest advice.</p>
        </div>
      </div>
    </div>

    <div class="container section-gap">
      <div class="about-content" style="direction:rtl">
        <div class="about-text" style="direction:ltr">
          <h2>What We Stand For</h2>
          <p><strong>Authenticity.</strong> Every product is sourced directly from authorized distributors. No counterfeits, no grey market.</p>
          <p><strong>Transparency.</strong> Fair pricing with no hidden fees. What you see is what you pay.</p>
          <p><strong>Service.</strong> Real people, real answers. We are here before and after your purchase.</p>
        </div>
        <img src="https://images.pexels.com/photos/16888144/pexels-photo-16888144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Electronics flat lay" style="direction:ltr" />
      </div>
    </div>
  `;
  }
  function renderContact() {
    return `
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero-title">Contact Us</h1>
        <p class="page-hero-sub">Questions about a product or your order? We are here to help.</p>
      </div>
    </section>

    <div class="container section-gap">
      <div class="contact-grid">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <div class="contact-info-item">
            <div class="contact-info-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="contact-info-item-text">
              <h3>Visit Our Store</h3>
              <p>123 Tech Plaza, Innovation District<br />San Francisco, CA 94103</p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
            </div>
            <div class="contact-info-item-text">
              <h3>Call Us</h3>
              <p>+1 (800) 276-7848<br />Mon\u2013Fri, 9am\u20136pm PST</p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div class="contact-info-item-text">
              <h3>Email Us</h3>
              <p>support@b-positive.com<br />sales@b-positive.com</p>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div class="contact-info-item-text">
              <h3>Store Hours</h3>
              <p>Monday\u2013Friday: 9am\u20138pm<br />Saturday\u2013Sunday: 10am\u20136pm</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2 style="font-size:var(--text-heading-lg);font-weight:500;margin-bottom:var(--space-lg)">Send a Message</h2>
          <form id="contactForm" novalidate>
            <div class="form-group">
              <label class="form-label" for="cf_name">Your Name</label>
              <input class="form-input" type="text" id="cf_name" placeholder="Full name" />
            </div>
            <div class="form-group">
              <label class="form-label" for="cf_email">Email</label>
              <input class="form-input" type="email" id="cf_email" placeholder="you@example.com" />
            </div>
            <div class="form-group">
              <label class="form-label" for="cf_subject">Subject</label>
              <input class="form-input" type="text" id="cf_subject" placeholder="How can we help?" />
            </div>
            <div class="form-group">
              <label class="form-label" for="cf_message">Message</label>
              <textarea class="form-textarea" id="cf_message" placeholder="Tell us more..." style="min-height:120px"></textarea>
            </div>
            <button type="submit" class="btn-primary" style="width:100%">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;
  }

  // admin.js
  function renderAdminLogin() {
    return `
    <main class="admin-auth-page">
      <section class="admin-auth-panel" aria-labelledby="adminLoginTitle">
        <div class="admin-auth-mark">b+</div>
        <p class="admin-auth-eyebrow">Restricted area</p>
        <h1 id="adminLoginTitle">Admin sign in</h1>
        <p class="admin-auth-description">Sign in to manage the catalog and purchase requests.</p>
        <form id="adminLoginForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="adminUsername">Username</label>
            <input class="form-input" id="adminUsername" name="username" autocomplete="username" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="adminPassword">Password</label>
            <input class="form-input" id="adminPassword" name="password" type="password" autocomplete="current-password" required />
          </div>
          <p class="admin-login-error" id="adminLoginError" role="alert" aria-live="polite"></p>
          <button type="submit" class="btn-primary admin-login-submit">Sign in</button>
        </form>
        <button class="admin-back-link" type="button" data-route="home">Back to store</button>
      </section>
    </main>
  `;
  }
  function renderAdmin(tab = "products") {
    const brands = data.getBrands();
    const categories = data.getCategories();
    return `
    <div class="container" style="padding-top:var(--space-xl);padding-bottom:var(--space-section)">
      <h1 class="admin-panel-title">Admin Panel</h1>

      <div class="admin-layout">
        <aside class="admin-sidebar">
          <button class="admin-nav-item ${tab === "products" ? "active" : ""}" data-admin-tab="products">
            ${ICONS.box} Catalog Manager
          </button>
          <button class="admin-nav-item ${tab === "orders" ? "active" : ""}" data-admin-tab="orders">
            ${ICONS.clipboard} Purchase Requests
          </button>
          <button class="admin-nav-item" data-admin-logout>
            ${ICONS.close} Sign Out
          </button>
        </aside>

        <div class="admin-main" id="adminContent">
          ${tab === "products" ? renderProductsTab(brands, categories) : renderOrdersTab()}
        </div>
      </div>
    </div>
  `;
  }
  function renderProductsTab(brands, categories) {
    const products = data.getProducts();
    return `
    <div class="admin-add-form">
      <h3>Add New Product</h3>
      <form id="addProductForm" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="ap_name">Product Name</label>
            <input class="form-input" type="text" id="ap_name" placeholder="e.g. iPhone 16 Pro" />
          </div>
          <div class="form-group">
            <label class="form-label" for="ap_image">Image URL</label>
            <input class="form-input" type="url" id="ap_image" placeholder="https://..." />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="ap_brand">Brand</label>
            <select class="form-select" id="ap_brand">
              ${brands.map((b) => `<option value="${b}">${b}</option>`).join("")}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="ap_category">Category</label>
            <select class="form-select" id="ap_category">
              ${categories.map((c) => `<option value="${c}">${c}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="ap_price">Price (₹)</label>
            <input class="form-input" type="number" id="ap_price" placeholder="999" min="0" step="1" />
          </div>
          <div class="form-group">
            <label class="form-label" for="ap_original">Original Price (optional, for sale)</label>
            <input class="form-input" type="number" id="ap_original" placeholder="1099" min="0" step="1" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="ap_description">Description</label>
          <textarea class="form-textarea" id="ap_description" placeholder="Product description..."></textarea>
        </div>
        <button type="submit" class="btn-primary">Add Product</button>
      </form>
    </div>

    <div style="margin-bottom:var(--space-lg);display:flex;align-items:center;justify-content:space-between">
      <h3 class="heading-lg">Catalog (${products.length})</h3>
    </div>

    ${products.length > 0 ? `
      <div style="overflow-x:auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${products.map((p) => `
              <tr>
                <td>
                  <div class="admin-product-thumb">
                    <img src="${p.image}" alt="${p.name}" />
                    <span class="body-strong">${p.name}</span>
                  </div>
                </td>
                <td>${p.brand}</td>
                <td>${p.category}</td>
                <td>
                  ${p.originalPrice ? `<span class="price-sale">${formatPrice(p.price)}</span> <span class="price-strike">${formatPrice(p.originalPrice)}</span>` : formatPrice(p.price)}
                </td>
                <td>
                  <button class="btn-danger" data-delete-product="${p.id}">${ICONS.trash} Delete</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    ` : `
      <div class="admin-empty"><p>No products in catalog. Add one above.</p></div>
    `}
  `;
  }
  function renderOrdersTab() {
    const orders = data.getOrders();
    return `
    <div style="margin-bottom:var(--space-lg)">
      <h3 class="heading-lg">Purchase Requests (${orders.length})</h3>
    </div>

    ${orders.length > 0 ? `
      <div style="overflow-x:auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${orders.map((o) => {
      const date = new Date(o.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
      return `
                <tr>
                  <td>
                    <div class="body-strong">${o.customerName}</div>
                    <div class="caption-md text-mute">${o.address || "\u2014"}</div>
                  </td>
                  <td>
                    <div>${o.phone}</div>
                    <div class="caption-md text-mute">${o.email}</div>
                  </td>
                  <td>
                    <div class="body-strong">${o.productName}</div>
                    <div class="caption-md text-mute">${formatPrice(o.productPrice)}</div>
                    ${o.notes ? `<div class="caption-md text-mute" style="margin-top:4px;max-width:200px">Note: ${o.notes}</div>` : ""}
                  </td>
                  <td>${date}</td>
                  <td>
                    <select class="sort-select" data-order-status="${o.id}" style="min-width:130px">
                      <option value="pending" ${o.status === "pending" ? "selected" : ""}>Pending</option>
                      <option value="contacted" ${o.status === "contacted" ? "selected" : ""}>Contacted</option>
                      <option value="complete" ${o.status === "complete" ? "selected" : ""}>Complete</option>
                    </select>
                  </td>
                  <td>
                    <button class="btn-danger" data-delete-order="${o.id}">${ICONS.trash} Delete</button>
                  </td>
                </tr>
              `;
    }).join("")}
          </tbody>
        </table>
      </div>
    ` : `
      <div class="admin-empty">
        <p>No purchase requests yet. When customers click "Buy Now" and submit the form, their requests will appear here.</p>
      </div>
    `}
  `;
  }

  // main.js
  var ADMIN_SESSION_KEY = "bpositive_admin_authenticated";
  var ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };
  function getInitialRoute() {
    const path = window.location.pathname.replace(/\/+$/, "");
    const hashRoute = window.location.hash.replace(/^#\/?/, "").split(/[/?]/)[0];
    return path.endsWith("/admin") || hashRoute === "admin" ? "admin" : "home";
  }
  function getAdminBasePath() {
    const pathname = window.location.pathname;
    const cleanPath = pathname.replace(/\/+$/, "");
    if (cleanPath.endsWith("/admin")) return cleanPath.slice(0, -5) || "/";
    if (cleanPath.endsWith("/index.html")) return cleanPath.slice(0, -10) || "/";
    return pathname.endsWith("/") ? pathname : pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/";
  }
  function syncAdminLocation(previousRoute, route) {
    if (previousRoute === route || (previousRoute !== "admin" && route !== "admin")) return;
    let destination;
    if (window.location.protocol === "file:") {
      destination = `${window.location.pathname}${route === "admin" ? "#/admin" : ""}`;
    } else {
      destination = route === "admin" ? `${getAdminBasePath()}admin` : getAdminBasePath();
    }
    window.history.pushState({ route }, "", destination);
  }
  function hasAdminSession() {
    try {
      return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
    } catch (e) {
      return false;
    }
  }
  var app = {
    route: getInitialRoute(),
    prevRoute: null,
    searchQuery: "",
    homeCategory: null,
    filterBrand: null,
    filterCategory: null,
    filterMaxPrice: null,
    sortBy: null,
    adminTab: "products",
    selectedProduct: null,
    adminAuthenticated: hasAdminSession()
  };
  function navigate(route) {
    if (route === app.route) return;
    const previousRoute = app.route;
    app.prevRoute = app.route;
    app.route = route;
    syncAdminLocation(previousRoute, route);
    if (route !== "catalog") {
      app.filterBrand = null;
      app.filterCategory = null;
      app.filterMaxPrice = null;
      app.sortBy = null;
    }
    if (route !== "home") {
      app.homeCategory = null;
    }
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function getMainContent() {
    switch (app.route) {
      case "home":
        return renderHome(app);
      case "catalog":
        return renderCatalog(app);
      case "about":
        return renderAbout(app);
      case "contact":
        return renderContact(app);
      case "admin":
        return app.adminAuthenticated ? renderAdmin(app.adminTab) : renderAdminLogin();
      default:
        return renderHome(app);
    }
  }
  function render() {
    const navHtml = app.route === "admin" ? "" : renderNav(app.route, navigate);
    const mainHtml = getMainContent();
    const footerHtml = app.route === "admin" ? "" : renderFooter();
    document.querySelector("#app").innerHTML = navHtml + `<main id="pageContent">${mainHtml}</main>` + footerHtml;
    attachEventListeners();
  }
  function attachEventListeners() {
    attachNavDockEffect();
    document.querySelectorAll("[data-route]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const route = el.getAttribute("data-route");
        if (route) {
          closeMobileDrawer();
          navigate(route);
        }
      });
    });
    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) adminLoginForm.addEventListener("submit", handleAdminLogin);
    document.querySelectorAll("[data-admin-logout]").forEach((el) => {
      el.addEventListener("click", handleAdminLogout);
    });
    document.querySelectorAll(".brand-dropdown-item").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const brand = el.getAttribute("data-brand");
        const category = el.getAttribute("data-category");
        app.filterBrand = brand;
        app.filterCategory = category;
        app.route = "catalog";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.querySelectorAll("[data-home-category]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const cat = el.getAttribute("data-home-category");
        app.homeCategory = cat === "All" ? null : cat;
        if (el.getAttribute("data-route") === "catalog") {
          app.filterCategory = cat === "All" ? null : cat;
          app.route = "catalog";
        }
        render();
      });
    });
    document.querySelectorAll("[data-cat]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cat = el.getAttribute("data-cat");
        app.filterCategory = cat;
        app.route = "catalog";
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
    document.querySelectorAll("[data-product-id]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-product-id");
        const product = data.getProducts().find((p) => p.id === id);
        if (product) openBuyModal(product);
      });
    });
    const searchInput = document.getElementById("navSearchInput");
    if (searchInput) {
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          app.searchQuery = searchInput.value.trim();
          if (app.route !== "home" && app.route !== "catalog") {
            app.route = "home";
          }
          render();
        }
      });
    }
    document.querySelectorAll('input[name="brand"]').forEach((el) => {
      el.addEventListener("change", () => {
        app.filterBrand = el.value || null;
        render();
      });
    });
    document.querySelectorAll('input[name="category"]').forEach((el) => {
      el.addEventListener("change", () => {
        app.filterCategory = el.value || null;
        render();
      });
    });
    document.querySelectorAll('input[name="price"]').forEach((el) => {
      el.addEventListener("change", () => {
        app.filterMaxPrice = el.value ? parseInt(el.value) : null;
        render();
      });
    });
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", () => {
        app.sortBy = sortSelect.value || null;
        render();
      });
    }
    const filtersToggle = document.getElementById("filtersToggle");
    if (filtersToggle) {
      filtersToggle.addEventListener("click", () => {
        document.getElementById("catalogSidebar").classList.toggle("open");
      });
    }
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        document.getElementById("mobileDrawer").classList.add("open");
        document.getElementById("mobileDrawerOverlay").classList.add("open");
      });
    }
    const drawerOverlay = document.getElementById("mobileDrawerOverlay");
    if (drawerOverlay) {
      drawerOverlay.addEventListener("click", closeMobileDrawer);
    }
    document.querySelectorAll("[data-admin-tab]").forEach((el) => {
      el.addEventListener("click", () => {
        app.adminTab = el.getAttribute("data-admin-tab");
        render();
      });
    });
    const addForm = document.getElementById("addProductForm");
    if (addForm) {
      addForm.addEventListener("submit", handleAddProduct);
    }
    document.querySelectorAll("[data-delete-product]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-delete-product");
        data.deleteProduct(id);
        showToast("Product deleted");
        render();
      });
    });
    document.querySelectorAll("[data-order-status]").forEach((el) => {
      el.addEventListener("change", () => {
        const id = el.getAttribute("data-order-status");
        data.updateOrderStatus(id, el.value);
        showToast("Status updated");
      });
    });
    document.querySelectorAll("[data-delete-order]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = el.getAttribute("data-delete-order");
        data.deleteOrder(id);
        showToast("Request deleted");
        render();
      });
    });
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", handleContactForm);
    }
  }
  function attachNavDockEffect() {
    const nav = document.querySelector(".nav-links");
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll(".nav-link"));
    const current = links.map(() => ({ scale: 1, lift: 0, glow: 0 }));
    const target = links.map(() => ({ scale: 1, lift: 0, glow: 0 }));
    let pointerX = null;
    let focusedIndex = null;
    let animationFrame = null;

    const animate = () => {
      let moving = false;
      links.forEach((link, index) => {
        for (const property of ["scale", "lift", "glow"]) {
          const difference = target[index][property] - current[index][property];
          if (Math.abs(difference) > 0.002) moving = true;
          current[index][property] = moving ? current[index][property] + difference * 0.28 : target[index][property];
        }
        link.style.scale = current[index].scale.toFixed(3);
        link.style.translate = `0 ${current[index].lift.toFixed(2)}px`;
        link.style.setProperty("--nav-glow", current[index].glow.toFixed(3));
      });
      if (moving) animationFrame = requestAnimationFrame(animate);
      else animationFrame = null;
    };

    const updateTargets = () => {
      links.forEach((link, index) => {
        let influence = 0;
        if (pointerX !== null) {
          const rect = link.getBoundingClientRect();
          const distance = Math.abs(pointerX - (rect.left + rect.width / 2));
          influence = Math.max(0, 1 - distance / 150);
        }
        if (index === focusedIndex) influence = Math.max(influence, 0.8);
        target[index].scale = 1 + influence * (index === focusedIndex ? 0.2 : 0.2);
        target[index].lift = -7 * influence;
        target[index].glow = 0.18 * influence;
      });
      if (!animationFrame) animationFrame = requestAnimationFrame(animate);
    };

    nav.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      focusedIndex = null;
      updateTargets();
    });
    nav.addEventListener("pointerleave", () => {
      pointerX = null;
      updateTargets();
    });
    nav.addEventListener("pointercancel", () => {
      pointerX = null;
      updateTargets();
    });
    links.forEach((link, index) => {
      link.addEventListener("focus", () => {
        focusedIndex = index;
        updateTargets();
      });
      link.addEventListener("blur", () => {
        focusedIndex = null;
        updateTargets();
      });
    });
  }
  function closeMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
  }
  function openBuyModal(product) {
    app.selectedProduct = product;
    const modalContainer = document.createElement("div");
    modalContainer.id = "modalContainer";
    modalContainer.innerHTML = renderBuyModal(product);
    document.body.appendChild(modalContainer);
    document.body.style.overflow = "hidden";
    const closeBtn = document.getElementById("buyModalClose");
    if (closeBtn) closeBtn.addEventListener("click", closeBuyModal);
    const backdrop = document.getElementById("buyModalBackdrop");
    if (backdrop) backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeBuyModal();
    });
    const form = document.getElementById("buyForm");
    if (form) form.addEventListener("submit", handleBuySubmit);
  }
  function closeBuyModal() {
    const container = document.getElementById("modalContainer");
    if (container) container.remove();
    document.body.style.overflow = "";
    app.selectedProduct = null;
  }
  function showBuyConfirmation() {
    const container = document.getElementById("modalContainer");
    if (container) {
      container.innerHTML = renderConfirmation();
      const closeBtn = document.getElementById("buyModalClose");
      if (closeBtn) closeBtn.addEventListener("click", closeBuyModal);
      const confirmBtn = document.getElementById("confirmCloseBtn");
      if (confirmBtn) confirmBtn.addEventListener("click", closeBuyModal);
    }
  }
  function handleBuySubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const address = form.address.value.trim();
    const notes = form.notes.value.trim();
    form.querySelectorAll(".form-error").forEach((el) => el.textContent = "");
    let valid = true;
    if (!name) {
      form.querySelector('[data-error="name"]').textContent = "Please enter your full name";
      valid = false;
    }
    if (!phone) {
      form.querySelector('[data-error="phone"]').textContent = "Please enter your phone number";
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      form.querySelector('[data-error="email"]').textContent = "Please enter a valid email address";
      valid = false;
    }
    if (!address) {
      form.querySelector('[data-error="address"]').textContent = "Please enter your delivery address";
      valid = false;
    }
    if (!valid || !app.selectedProduct) return;
    data.addOrder({
      customerName: name,
      phone,
      email,
      address,
      notes,
      productId: app.selectedProduct.id,
      productName: app.selectedProduct.name,
      productBrand: app.selectedProduct.brand,
      productPrice: app.selectedProduct.price
    });
    showBuyConfirmation();
  }
  function handleAddProduct(e) {
    e.preventDefault();
    const name = document.getElementById("ap_name").value.trim();
    const image = document.getElementById("ap_image").value.trim();
    const brand = document.getElementById("ap_brand").value;
    const category = document.getElementById("ap_category").value;
    const price = parseFloat(document.getElementById("ap_price").value);
    const originalPrice = parseFloat(document.getElementById("ap_original").value) || null;
    const description = document.getElementById("ap_description").value.trim();
    if (!name || !image || !price) {
      showToast("Please fill in name, image URL, and price");
      return;
    }
    data.addProduct({
      name,
      image,
      brand,
      category,
      price,
      originalPrice: originalPrice && originalPrice > price ? originalPrice : null,
      description
    });
    showToast("Product added successfully");
    render();
  }
  function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById("cf_name").value.trim();
    const email = document.getElementById("cf_email").value.trim();
    const subject = document.getElementById("cf_subject").value.trim();
    const message = document.getElementById("cf_message").value.trim();
    if (!name || !email || !message) {
      showToast("Please fill in all required fields");
      return;
    }
    showToast("Message sent! We will get back to you soon.");
    e.target.reset();
  }
  function handleAdminLogin(e) {
    e.preventDefault();
    const username = document.getElementById("adminUsername").value.trim();
    const password = document.getElementById("adminPassword").value;
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      app.adminAuthenticated = true;
      try {
        window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      } catch (error) {
        // Keep the current tab usable if session storage is unavailable.
      }
      render();
      return;
    }
    document.getElementById("adminLoginError").textContent = "The username or password is incorrect.";
    document.getElementById("adminPassword").select();
  }
  function handleAdminLogout() {
    app.adminAuthenticated = false;
    app.adminTab = "products";
    try {
      window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch (error) {
      // The current app state still logs out if session storage is unavailable.
    }
    navigate("home");
  }
  function restoreRouteFromLocation() {
    const route = getInitialRoute();
    if (route === app.route) return;
    app.route = route;
    render();
  }
  window.addEventListener("popstate", restoreRouteFromLocation);
  window.addEventListener("hashchange", restoreRouteFromLocation);
  render();
})();
