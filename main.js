/* ===== PRAKASH KNOWLEDGE HUB - Main JavaScript ===== */

// ===== ARTICLE DATA STORE =====
let ARTICLES = [];
let CATEGORIES = [];

// Load articles from JSON
async function loadArticles() {
  try {
    const res = await fetch('/data/articles.json');
    const data = await res.json();
    ARTICLES = data.articles;
    CATEGORIES = data.categories;
    return data;
  } catch (e) {
    console.error('Failed to load articles:', e);
    return { articles: [], categories: [] };
  }
}

// ===== HEADER HTML =====
function renderHeader(activePage = '') {
  const navLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/articles.html', label: 'Articles', id: 'articles' },
    { href: '/categories.html', label: 'Categories', id: 'categories' },
    { href: '/about.html', label: 'About', id: 'about' },
    { href: '/contact.html', label: 'Contact', id: 'contact' },
  ];

  const links = navLinks.map(link => `
    <a href="${link.href}" class="nav-link ${activePage === link.id ? 'active' : ''}">${link.label}</a>
  `).join('');

  const mobileLinks = navLinks.map(link => `
    <a href="${link.href}" class="block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${activePage === link.id ? 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}">${link.label}</a>
  `).join('');

  const headerHTML = `
    <header id="main-header">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-2 group" aria-label="Prakash Knowledge Hub">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-content-center items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-purple-500/30 transition-all duration-200">P</div>
            <span class="logo-text text-lg font-bold hidden sm:block">Prakash Knowledge</span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-1">
            ${links}
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2">
            <!-- Search -->
            <a href="/search.html" class="theme-toggle" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </a>

            <!-- Theme Toggle -->
            <button id="theme-toggle" class="theme-toggle" aria-label="Toggle dark mode">
              <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="theme-toggle md:hidden" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" role="dialog" aria-label="Mobile navigation">
      <div id="mobile-menu-panel">
        <div class="flex items-center justify-between mb-6">
          <span class="logo-text font-bold text-lg">Prakash Knowledge</span>
          <button id="mobile-menu-close" class="theme-toggle" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div class="space-y-1">
          ${mobileLinks}
        </div>
        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a href="/search.html" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            Search Articles
          </a>
        </div>
        <div class="mt-6 flex gap-3 flex-wrap">
          <a href="https://www.linkedin.com/in/prakashphiroda" target="_blank" rel="noopener" class="social-link">in</a>
          <a href="https://x.com/Piprotecter" target="_blank" rel="noopener" class="social-link">𝕏</a>
          <a href="https://github.com/prakashfirodawork-ctrl" target="_blank" rel="noopener" class="social-link">⌨</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('header-mount').innerHTML = headerHTML;
  initHeader();
}

// ===== FOOTER HTML =====
function renderFooter() {
  const footerHTML = `
    <footer>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          <!-- Brand -->
          <div class="lg:col-span-2">
            <a href="/" class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-xl">P</div>
              <span class="logo-text text-xl font-bold">Prakash Knowledge Hub</span>
            </a>
            <p class="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Practical insights on Artificial Intelligence, Pi Network, Web3, Data Analytics, Personal Branding, Digital Growth, Education and Agri-Tech.
            </p>
            <p class="text-purple-400 font-semibold font-poppins text-sm mb-4">Learn. Build. Grow. Impact.</p>
            <div class="flex gap-3 flex-wrap">
              <a href="https://www.linkedin.com/in/prakashphiroda" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://x.com/Piprotecter" target="_blank" rel="noopener" class="social-link" title="Twitter/X">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com/prakashphiroda" target="_blank" rel="noopener" class="social-link" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com/prakashphiroda" target="_blank" rel="noopener" class="social-link" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://github.com/prakashfirodawork-ctrl" target="_blank" rel="noopener" class="social-link" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <!-- Categories -->
          <div>
            <h4 class="footer-heading">Categories</h4>
            <div class="space-y-1">
              <a href="/categories.html#artificial-intelligence" class="footer-link">Artificial Intelligence</a>
              <a href="/categories.html#pi-network" class="footer-link">Pi Network</a>
              <a href="/categories.html#web3-blockchain" class="footer-link">Web3 & Blockchain</a>
              <a href="/categories.html#data-analytics" class="footer-link">Data Analytics</a>
              <a href="/categories.html#personal-branding" class="footer-link">Personal Branding</a>
              <a href="/categories.html#digital-growth" class="footer-link">Digital Growth</a>
              <a href="/categories.html#education" class="footer-link">Education</a>
              <a href="/categories.html#agri-tech" class="footer-link">Agri-Tech</a>
            </div>
          </div>

          <!-- Platform -->
          <div>
            <h4 class="footer-heading">Platform</h4>
            <div class="space-y-1">
              <a href="/" class="footer-link">Home</a>
              <a href="/articles.html" class="footer-link">All Articles</a>
              <a href="/about.html" class="footer-link">About Prakash</a>
              <a href="/search.html" class="footer-link">Search</a>
              <a href="/contact.html" class="footer-link">Contact</a>
              <a href="https://prakashfirodawork-ctrl.github.io/Prakash-Identity-Hub/" target="_blank" rel="noopener" class="footer-link">Portfolio</a>
            </div>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="footer-heading">Stay Updated</h4>
            <p class="text-gray-400 text-sm mb-4 leading-relaxed">Get insights on AI, Web3, Pi Network and Digital Growth delivered to your inbox.</p>
            <div class="flex">
              <input type="email" placeholder="Your email" class="newsletter-input text-sm" id="footer-email" />
              <button class="newsletter-btn text-sm" onclick="subscribeNewsletter()">→</button>
            </div>
            <p class="text-gray-500 text-xs mt-2">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">
            © ${new Date().getFullYear()} Prakash Knowledge Hub. All rights reserved.
          </p>
          <div class="flex items-center gap-6">
            <a href="/sitemap.xml" class="text-gray-500 text-sm hover:text-gray-300 transition-colors">Sitemap</a>
            <span class="text-gray-700">•</span>
            <span class="text-gray-500 text-sm">Made with ❤️ by Prakash Choudhary</span>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById('footer-mount').innerHTML = footerHTML;
}

// ===== HEADER FUNCTIONALITY =====
function initHeader() {
  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }

    // Scroll to top button
    const scrollBtn = document.getElementById('scroll-top');
    if (scrollBtn) {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }
  });

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) mobileMenu.classList.remove('open');
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function updateThemeIcons(isDark) {
    if (sunIcon && moonIcon) {
      sunIcon.classList.toggle('hidden', !isDark);
      moonIcon.classList.toggle('hidden', isDark);
    }
  }

  // Initialize theme
  const isDark = localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
  }
  updateThemeIcons(isDark);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      updateThemeIcons(dark);
    });
  }
}

// ===== THEME INIT (run immediately to prevent flash) =====
function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ===== NEWSLETTER =====
function subscribeNewsletter(inputId = 'footer-email') {
  const input = document.getElementById(inputId);
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  showToast('Thank you for subscribing! 🎉', 'success');
  input.value = '';
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-white text-sm font-medium shadow-xl transition-all duration-300`;

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-purple-600',
    warning: 'bg-yellow-600'
  };

  toast.classList.add(colors[type] || colors.info);
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translate(-50%, 20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== COPY TO CLIPBOARD =====
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard! 📋', 'success');
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('Copied to clipboard! 📋', 'success');
  });
}

// ===== FORMAT NUMBERS =====
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// ===== FORMAT DATE =====
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ===== READING TIME =====
function getReadingTime(mins) {
  return `${mins} min read`;
}

// ===== ARTICLE CARD COMPONENT =====
function createArticleCard(article, size = 'default') {
  const categoryColors = {
    'Artificial Intelligence': '#6D28D9',
    'Pi Network': '#7C3AED',
    'Web3 & Blockchain': '#8B5CF6',
    'Data Analytics': '#A78BFA',
    'Personal Branding': '#F59E0B',
    'Digital Growth': '#EF4444',
    'Education': '#10B981',
    'Agri-Tech': '#059669'
  };

  const color = categoryColors[article.category] || '#6D28D9';

  if (size === 'featured') {
    return `
      <article class="featured-card group" onclick="window.location.href='/article.html?slug=${article.slug}'">
        <div class="overflow-hidden relative" style="aspect-ratio: 16/7;">
          <img
            src="${article.coverImage}"
            alt="${article.title}"
            class="w-full h-full object-cover card-image"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6">
            <span class="inline-block text-xs font-bold text-white uppercase tracking-wider bg-purple-600 px-3 py-1 rounded-full mb-2">${article.category}</span>
          </div>
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-2" style="font-family:'Poppins',sans-serif;">${article.title}</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed">${article.excerpt}</p>
          <div class="flex items-center justify-between text-xs text-gray-400">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                ${getReadingTime(article.readTime)}
              </span>
              <span class="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                ${formatNumber(article.views)}
              </span>
              <span>❤️ ${formatNumber(article.likes)}</span>
            </div>
            <time datetime="${article.date}" class="text-gray-400">${formatDate(article.date)}</time>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="article-card group" onclick="window.location.href='/article.html?slug=${article.slug}'">
      <div class="overflow-hidden relative" style="aspect-ratio: 16/9;">
        <img
          src="${article.coverImage}"
          alt="${article.title}"
          class="card-image w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute top-3 left-3">
          <span class="category-badge" style="background:${color}18;color:${color};border-color:${color}33;">${article.category}</span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors line-clamp-2 text-base leading-snug" style="font-family:'Poppins',sans-serif;">${article.title}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">${article.excerpt}</p>
        <div class="flex items-center justify-between text-xs text-gray-400">
          <div class="flex items-center gap-3">
            <span>${getReadingTime(article.readTime)}</span>
            <span>${formatNumber(article.views)} views</span>
          </div>
          <time datetime="${article.date}">${formatDate(article.date)}</time>
        </div>
      </div>
    </article>
  `;
}

// ===== SEARCH FUNCTIONALITY =====
function searchArticles(query, articles = ARTICLES) {
  if (!query.trim()) return articles;
  const q = query.toLowerCase().trim();
  return articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q)) ||
    a.author.toLowerCase().includes(q)
  );
}

// ===== READING PROGRESS =====
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  });
}

// ===== LAZY LOAD IMAGES =====
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }
}

// ===== SMOOTH PAGE TRANSITIONS =====
function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      link.addEventListener('click', (e) => {
        // Let normal navigation happen but add a fade
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.2s ease';
      });
    }
  });
}

// ===== INITIALIZE PAGE =====
async function initPage(activePage = '') {
  initTheme();

  // Render header and footer mounts if they exist
  if (document.getElementById('header-mount')) {
    renderHeader(activePage);
  }
  if (document.getElementById('footer-mount')) {
    renderFooter();
  }

  // Create scroll to top button
  const scrollBtn = document.createElement('button');
  scrollBtn.id = 'scroll-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18,15 12,9 6,15"></polyline></svg>`;
  document.body.appendChild(scrollBtn);

  initScrollTop();
  initReadingProgress();
  initLazyLoad();

  // Fade in body
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  // Init animations after short delay
  setTimeout(initAnimations, 100);

  return await loadArticles();
}
