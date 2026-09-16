/* =====================================================================
   LynoraLink — Application Frontend (SPA) · v3 « Aurora »
   Refonte du design et de la structure — logique et couleurs inchangées
   ===================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const Logo = (size = 34) =>
  `<img src="assets/logo.png" alt="LynoraLink" style="width:${size}px;height:${size}px;object-fit:contain" />`;

/* ---------- Bibliothèque d'icônes (trait fin 1.6) ---------- */
const Icon = (name, cls = 'w-5 h-5') => {
  const I = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M17.5 14.5a6.5 6.5 0 0 1 4 5.5"/>',
    post: '<path d="M12 20H9a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4z"/><path d="M12 20V10M8 6h8"/>',
    message: '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    like: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 11 6-3.5v9L16 13"/>',
    phone: '<path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L7.1 8.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    android: '<path d="M8 8.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6.5a2 2 0 0 1 2-2z"/><path d="M6 12H4v4M18 12h2v4M9 19v2M15 19v2M8 8.5 6.5 6M16 8.5 17.5 6M9.5 11.5h.01M14.5 11.5h.01"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    shield: '<path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    arrowRight: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    arrowDown: '<path d="M12 3v14m-6-6 6 6 6-6M5 21h14"/>',
    arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.4 5.3A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4M6.1 6.6A17.3 17.3 0 0 0 2 12s3.5 7 10 7c1.1 0 2.1-.2 3-.5"/>',
    send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>',
    camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="4"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.7.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.7-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>',
    google: '<path d="M21.3 12.2a10 10 0 0 0-.1-1.6H12v3.9h5.2a4.5 4.5 0 0 1-1.9 2.9v2.4h3.1a8.6 8.6 0 0 0 2.9-7.6z" fill="currentColor" stroke="none"/><path d="M12 22a8.6 8.6 0 0 0 6-2.2l-3.1-2.4a5.4 5.4 0 0 1-8-2.8H3.7v2.5A10 10 0 0 0 12 22z" fill="currentColor" stroke="none" opacity=".7"/><path d="M6.9 14.6a5.4 5.4 0 0 1 0-3.4V8.7H3.7a10 10 0 0 0 0 6.4z" fill="currentColor" stroke="none" opacity=".5"/><path d="M12 5.8a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 3.7 8.7l3.2 2.5A5.4 5.4 0 0 1 12 5.8z" fill="currentColor" stroke="none" opacity=".85"/>',
    code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    at: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.9 7.9"/>',
    hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${I[name] || I.info}</svg>`;
};

/* ---------- Toast — sobre ---------- */
const toast = (msg, type = 'success') => {
  const c = { success: 'bg-ink border-navy-700', error: 'bg-rose-800 border-rose-600', info: 'bg-ink border-navy-700' };
  const ic = { success: 'check', error: 'close', info: 'bell' };
  const el = document.createElement('div');
  el.className = `fixed top-5 right-5 z-[100] ${c[type]} text-white text-[13.5px] font-medium px-4 py-3 rounded-[14px] border shadow-lift flex items-center gap-2.5`;
  el.style.animation = 'toastIn .38s cubic-bezier(.2,.8,.2,1) both';
  el.innerHTML = `${Icon(ic[type], 'w-4 h-4 text-gold-400')} <span>${msg}</span>`;
  document.body.appendChild(el);
  setTimeout(() => { el.style.transition = 'opacity .35s, transform .35s'; el.style.opacity = '0'; el.style.transform = 'translateY(-8px)'; setTimeout(() => el.remove(), 350); }, 3000);
};

/* ---------- État ---------- */
const state = {
  route: location.hash.slice(1) || 'home',
  sidebarOpen: false,
  user: null,
  showcaseIndex: 0,
};
let showcaseTimer = null;
const SHOWCASE_MS = 5000;

const navigate = (r) => { location.hash = r; state.sidebarOpen = false; window.scrollTo({ top: 0, behavior: 'instant' }); render(); };
const toggleSidebar = () => { state.sidebarOpen = !state.sidebarOpen; render(); };
const logout = () => { state.user = null; toast('Vous êtes déconnecté.', 'info'); navigate('home'); };

/* ===================== SHELL ===================== */

const NAV = [
  { id: 'home', label: 'Accueil', icon: 'home' },
  { id: 'features', label: 'Fonctionnalités', icon: 'grid' },
  { id: 'pricing', label: 'Offres & Plans', icon: 'star' },
  { id: 'about', label: 'À propos', icon: 'info' },
  { id: 'download', label: 'Téléchargement', icon: 'arrowDown' },
];

const HERO_ROUTES = ['home', 'download'];

/* Barre de navigation unique — capsule flottante centrée */
const Topbar = () => `
  <header id="siteHeader" class="nav-shell ${HERO_ROUTES.includes(state.route) ? '' : 'nav-shell--solid'}">
    <div class="nav-capsule">
      <button onclick="navigate('home')" class="nav-brand" aria-label="Accueil LynoraLink">
        ${Logo(30)}
        <span class="nav-brand-text font-semibold text-[14.5px] tracking-[-0.01em]"><b class="text-gold-400">Lynora</b>Link</span>
      </button>

      <nav class="nav-links" aria-label="Navigation principale">
        ${NAV.map(n => `
          <button onclick="navigate('${n.id}')" class="nav-link ${state.route === n.id ? 'active' : ''}" aria-current="${state.route === n.id ? 'page' : 'false'}">${n.label}</button>`).join('')}
      </nav>

      <button onclick="navigate('download')" class="nav-cta btn btn-accent btn-sm">Télécharger ${Icon('arrowDown', 'w-3.5 h-3.5')}</button>

      <button onclick="toggleSidebar()" class="nav-burger" aria-label="Ouvrir le menu" aria-expanded="${state.sidebarOpen}">
        ${Icon('menu', 'w-5 h-5')}
      </button>
    </div>
  </header>`;

const MobileDrawer = () => `
  <div class="mobile-drawer ${state.sidebarOpen ? 'open' : ''}" aria-hidden="${!state.sidebarOpen}">
    <div class="mobile-drawer__overlay" onclick="toggleSidebar()"></div>
    <div class="mobile-drawer__panel">
      <div class="flex items-center justify-between mb-6">
        <span class="flex items-center gap-2.5">${Logo(28)}<span class="font-semibold text-[14px] text-white"><span class="text-gold-400">Lynora</span>Link</span></span>
        <button onclick="toggleSidebar()" class="nav-burger" aria-label="Fermer le menu">${Icon('x', 'w-5 h-5')}</button>
      </div>
      <nav class="space-y-1 flex-1">
        ${NAV.map(n => `
          <button onclick="navigate('${n.id}')" class="mobile-drawer__link w-full ${state.route === n.id ? 'active' : ''}">
            ${Icon(n.icon, 'w-[17px] h-[17px]')}<span>${n.label}</span>
          </button>`).join('')}
      </nav>
      <button onclick="navigate('download')" class="btn btn-accent w-full btn-sm mt-4">Télécharger l&#39;application ${Icon('arrowDown', 'w-4 h-4')}</button>
    </div>
  </div>`;

const Footer = () => `
  <footer class="footer-v2">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-16">
      <div class="footer-v2__cta">
        <div>
          <p class="eyebrow mb-2">Une question ?</p>
          <h3 class="text-white text-[20px] lg:text-[24px] font-semibold tracking-[-0.02em] max-w-sm">Parlons de votre projet et de vos besoins.</h3>
        </div>
        <button type="button" onclick="navigate('contact')" class="btn btn-accent btn-sm mt-6 lg:mt-0 lg:shrink-0">Nous contacter ${Icon('arrowRight', 'w-4 h-4')}</button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-14">
      <div class="footer-grid grid md:grid-cols-12 gap-10">
        <div class="md:col-span-5">
          <div class="flex items-center gap-3 mb-4">
            ${Logo(34)}
            <div>
              <p class="font-semibold text-[15px] tracking-[-0.01em] text-white">Lynora<span class="text-gold-400">Link</span></p>
            </div>
          </div>
          <p class="text-[13.5px] leading-relaxed max-w-sm">
            Réseau social interactif moderne réunissant profils, publications,
            conversations temps réel et appels vidéo HD dans une expérience fluide et sécurisée.
          </p>
          <div class="flex items-center gap-2.5 mt-6">
            <a href="https://app.lynoralink.com" target="_blank" rel="noopener noreferrer" class="footer-v2__social" aria-label="Version web">${Icon('globe', 'w-[17px] h-[17px]')}</a>
            <a href="public/LynoraLink.v1.1.1.apk" download class="footer-v2__social" aria-label="Télécharger l'APK">${Icon('android', 'w-[17px] h-[17px]')}</a>
          </div>
        </div>
        <div class="md:col-span-3">
          <p class="footer-v2__col-title mb-3.5">Plateforme</p>
          <ul class="space-y-2.5 text-[13.5px]">
            ${NAV.map(n => `<li><button onclick="navigate('${n.id}')" class="footer-v2__link">${n.label}</button></li>`).join('')}
          </ul>
        </div>
        <div class="md:col-span-2">
          <p class="footer-v2__col-title mb-3.5">Légal</p>
          <ul class="space-y-2.5 text-[13.5px]">
            <li><button onclick="navigate('legal')" class="footer-v2__link">Conditions</button></li>
            <li><button onclick="navigate('legal')" class="footer-v2__link">Confidentialité</button></li>
            <li><button onclick="navigate('legal')" class="footer-v2__link">Cookies</button></li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <p class="footer-v2__col-title mb-3.5">Contact</p>
          <button type="button" onclick="navigate('contact')" class="footer-v2__link flex items-start gap-2 text-[13px] text-left">
            <span class="break-all">contact@lynoralink.com</span>
          </button>
          <p class="text-[11.5px] leading-relaxed mt-3 opacity-60">Une question sur LynoraLink ? Écrivez-nous.</p>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] opacity-55">
        <p>© 2026 LynoraLink. Tous droits réservés.</p>
        <p>Conçu à Madagascar.</p>
      </div>
      <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="back-to-top absolute right-6 lg:right-10 -top-5" aria-label="Retour en haut">${Icon('arrowUpRight', 'w-4 h-4 -rotate-45')}</button>
    </div>
  </footer>`;

/* ===================== SHOWCASE (carousel) ===================== */

const ShowcaseMock = {
  feed: () => `
    <div class="bg-white rounded-2xl p-4 shadow-lift">
      <div class="flex items-center gap-2.5">
        <span class="icon-tile-solid w-8 h-8 !rounded-full">${Icon('user', 'w-3.5 h-3.5')}</span>
        <div class="flex-1 min-w-0"><p class="text-[12.5px] font-semibold text-ink leading-tight">Mia R.</p><p class="text-[10.5px] text-mist">à l'instant</p></div>
        ${Icon('mapPin', 'w-3.5 h-3.5 text-ink300')}
      </div>
      <p class="text-[13px] text-ink700 mt-3 leading-relaxed">Nouvelle publication avec la communauté ✨</p>
      <div class="rounded-xl bg-navy-100 h-24 mt-3"></div>
      <div class="flex items-center gap-4 mt-3 pt-3 border-t border-navy-200 text-[11.5px] text-ink500">
        <span class="flex items-center gap-1.5">${Icon('like', 'w-3.5 h-3.5')}128</span>
        <span class="flex items-center gap-1.5">${Icon('message', 'w-3.5 h-3.5')}24</span>
        <span class="flex items-center gap-1.5 ml-auto">${Icon('send', 'w-3.5 h-3.5')}</span>
      </div>
    </div>`,
  chat: () => `
    <div class="bg-white rounded-2xl p-4 shadow-lift">
      <div class="flex items-center gap-2.5 pb-3 border-b border-navy-200">
        <span class="icon-tile-solid w-8 h-8 !rounded-full">${Icon('users', 'w-3.5 h-3.5')}</span>
        <p class="text-[12.5px] font-semibold text-ink">Équipe Design</p>
        <span class="w-2 h-2 rounded-full bg-emerald-400 ml-auto"></span>
      </div>
      <div class="space-y-2 mt-3">
        <p class="bg-navy-100 text-ink700 text-[12px] rounded-xl rounded-bl-none px-3 py-2 w-[76%]">On lance l'appel dans 5 min ?</p>
        <p class="bg-navy-950 text-white text-[12px] rounded-xl rounded-br-none px-3 py-2 w-[68%] ml-auto">Parfait, j'arrive 🎥</p>
      </div>
      <div class="flex items-center gap-2 mt-3 pt-3 border-t border-navy-200">
        ${Icon('phone', 'w-4 h-4 text-ink500')}${Icon('video', 'w-4 h-4 text-ink500')}
        <span class="text-[11px] text-mist ml-auto">HD · chiffré</span>
      </div>
    </div>`,
  ai: () => `
    <div class="bg-white rounded-2xl p-4 shadow-lift">
      <div class="flex items-center gap-2 text-[11.5px] font-semibold text-ink700">${Icon('zap', 'w-4 h-4 text-gold-600')}Assistant IA</div>
      <div class="rounded-xl border border-navy-200 bg-navy-50 text-[12px] text-ink500 px-3 py-2 mt-3">« Génère une image pour mon prochain post… »</div>
      <div class="rounded-xl bg-gradient-to-br from-gold-100 to-navy-100 h-20 mt-3 flex items-center justify-center text-gold-700">${Icon('image', 'w-6 h-6')}</div>
      <div class="flex items-center gap-2 mt-3 pt-3 border-t border-navy-200 text-[11px] text-ink500">
        ${Icon('check', 'w-3.5 h-3.5 text-gold-600')} Image générée · prête à publier
      </div>
    </div>`,
  business: () => `
    <div class="bg-white rounded-2xl p-4 shadow-lift">
      <div class="flex items-center gap-2.5">
        <span class="icon-tile-solid w-8 h-8 !rounded-[10px]">${Icon('mapPin', 'w-3.5 h-3.5')}</span>
        <div class="flex-1 min-w-0"><p class="text-[12.5px] font-semibold text-ink leading-tight">Atelier Nova</p><p class="text-[10.5px] text-mist">Page entreprise · Premium</p></div>
        ${Icon('star', 'w-3.5 h-3.5 text-gold-500')}
      </div>
      <div class="rounded-xl bg-gradient-to-br from-navy-100 to-gold-100 h-20 mt-3"></div>
      <div class="flex items-center gap-3 mt-3 pt-3 border-t border-navy-200 text-[11px] text-ink500">
        <span class="flex items-center gap-1.5">${Icon('users', 'w-3.5 h-3.5')}2,4k abonnés</span>
        <span class="ml-auto text-gold-600 font-semibold">Sponsorisé</span>
      </div>
    </div>`,
};

const SHOWCASE = [
  { eyebrow: 'Fil social', title: 'Publiez et engagez votre communauté', desc: 'Publications riches, réactions et commentaires en temps réel, pensés pour créer des conversations authentiques.', mock: 'feed' },
  { eyebrow: 'Messagerie', title: 'Discutez et appelez sans friction', desc: 'Messagerie instantanée et appels vidéo HD, chiffrés de bout en bout, pour rester proche de votre réseau.', mock: 'chat' },
  { eyebrow: 'Assistant IA', title: 'Créez du contenu en quelques secondes', desc: 'Générez images et articles directement depuis le fil de publication, sans quitter l\'application.', mock: 'ai' },
  { eyebrow: 'Pages entreprise', title: 'Développez votre présence professionnelle', desc: 'Page entreprise dédiée, publicités sponsorisées et visibilité prioritaire avec le mode Premium.', mock: 'business' },
];

const Showcase = () => `
  <div id="showcase" class="showcase">
    <div id="showcaseTrack" class="showcase__track">
      ${SHOWCASE.map(s => `
        <div class="showcase__slide">
          <div>
            <p class="eyebrow showcase__eyebrow !text-gold-400">${s.eyebrow}</p>
            <h3 class="text-white text-[24px] lg:text-[30px] font-semibold tracking-[-0.02em] leading-[1.15] mt-2 max-w-[16ch]">${s.title}</h3>
            <p class="text-[14px] leading-relaxed text-white/60 mt-3 max-w-[46ch]">${s.desc}</p>
          </div>
          <div class="showcase__mock max-w-[300px] mx-auto lg:mx-0 lg:justify-self-end w-full">${ShowcaseMock[s.mock]()}</div>
        </div>`).join('')}
    </div>
    <div class="showcase__progress"><div class="showcase__progress-bar" id="showcaseProgress"></div></div>
    <div class="showcase__controls">
      <div class="showcase__dots" role="tablist" aria-label="Diapositives">
        ${SHOWCASE.map((_, i) => `<button class="showcase__dot ${i === 0 ? 'active' : ''}" onclick="showcaseGoto(${i})" aria-label="Diapositive ${i + 1}"></button>`).join('')}
      </div>
      <div class="flex items-center gap-2">
        <button class="showcase__arrow" onclick="showcasePrev()" aria-label="Précédent">${Icon('arrowRight', 'w-4 h-4 rotate-180')}</button>
        <button class="showcase__arrow" onclick="showcaseNext()" aria-label="Suivant">${Icon('arrowRight', 'w-4 h-4')}</button>
      </div>
    </div>
  </div>`;

const updateShowcaseUI = () => {
  const track = document.getElementById('showcaseTrack');
  if (!track) return;
  track.style.transform = `translateX(-${state.showcaseIndex * 100}%)`;
  $$('.showcase__dot').forEach((d, i) => d.classList.toggle('active', i === state.showcaseIndex));
  const bar = document.getElementById('showcaseProgress');
  if (bar) {
    bar.classList.remove('running');
    void bar.offsetWidth;
    bar.style.transitionDuration = `${SHOWCASE_MS}ms`;
    bar.classList.add('running');
  }
};
const showcaseGoto = (i) => { state.showcaseIndex = (i + SHOWCASE.length) % SHOWCASE.length; updateShowcaseUI(); restartShowcaseTimer(); };
const showcaseNext = () => showcaseGoto(state.showcaseIndex + 1);
const showcasePrev = () => showcaseGoto(state.showcaseIndex - 1);
const restartShowcaseTimer = () => { clearInterval(showcaseTimer); showcaseTimer = setInterval(showcaseNext, SHOWCASE_MS); };
const initShowcase = () => {
  const el = document.getElementById('showcase');
  if (!el) { clearInterval(showcaseTimer); return; }
  state.showcaseIndex = 0;
  updateShowcaseUI();
  restartShowcaseTimer();
  el.addEventListener('mouseenter', () => clearInterval(showcaseTimer));
  el.addEventListener('mouseleave', restartShowcaseTimer);
};

/* ===================== HOME ===================== */

const STATS = [
  { n: '4', l: 'Piliers du produit' },
  { n: '10+', l: 'Fonctionnalités clés' },
  { n: 'HD', l: 'Appels vidéo' },
  { n: '24/7', l: 'Disponibilité visée' },
];

const Home = () => `
  <div class="page-enter">

    <!-- Hero : centré, carte flottante -->
    <section class="hero-bg relative overflow-hidden">
      <div class="hero-grid absolute inset-0 pointer-events-none"></div>
      <div class="relative max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-12 lg:pt-28 lg:pb-16 text-center">
        <p class="pill pill-navy mb-6 mx-auto w-fit">Réseau social interactif · Vitrine officielle</p>
        <h1 class="display text-white text-[40px] leading-[1.08] sm:text-[54px] lg:text-[64px] max-w-[15ch] mx-auto">
          Connecter, partager, interagir<span class="text-gold-400">.</span>
        </h1>
        <p class="text-lead text-white/65 max-w-[54ch] mt-6 mx-auto">
          LynoraLink réunit profils personnalisés, publications enrichies, conversations
          temps réel et appels vidéo HD — dans une plateforme élégante, sécurisée et
          pensée pour les communautés modernes.
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-9">
          <button onclick="navigate('download')" class="btn btn-accent btn-lg">Télécharger l&#39;application ${Icon('arrowDown', 'w-4 h-4')}</button>
          <button onclick="navigate('features')" class="btn btn-dark btn-lg">Découvrir les fonctionnalités</button>
        </div>
      </div>

      <div class="relative max-w-4xl mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
        <div class="grid sm:grid-cols-2 gap-4 reveal">
          <div class="glass-dark rounded-[20px] p-5 hero-float-card">
            <div class="bg-white rounded-2xl p-4 shadow-lift">
              <div class="flex items-center gap-3">
                <span class="icon-tile-solid w-9 h-9 !rounded-full">${Icon('user', 'w-4 h-4')}</span>
                <div class="flex-1 min-w-0">
                  <p class="text-[13px] font-semibold text-ink leading-tight">Votre espace LynoraLink</p>
                  <p class="text-[11px] text-mist mt-0.5">Publication et échanges</p>
                </div>
                ${Icon('settings', 'w-4 h-4 text-ink300')}
              </div>
              <p class="text-[13.5px] text-ink700 mt-3 leading-relaxed">Publiez vos idées, partagez vos contenus et échangez avec votre réseau en toute sécurité.</p>
              <div class="hero-preview-meta flex flex-wrap items-center gap-x-4 gap-y-2 mt-3.5 pt-3 border-t border-navy-200 text-[12px] text-ink500">
                <span class="flex items-center gap-1.5">${Icon('like', 'w-4 h-4 text-ink500')}<span>Réactions</span></span>
                <span class="flex items-center gap-1.5">${Icon('message', 'w-4 h-4 text-ink500')}<span>Commentaires</span></span>
                <span class="flex items-center gap-1.5 ml-auto">${Icon('send', 'w-4 h-4 text-ink500')}<span>Partager</span></span>
              </div>
            </div>
          </div>
          <div class="glass-dark rounded-[20px] p-5 hero-float-card hero-float-card--delay flex flex-col justify-center">
            <div class="flex items-center gap-3">
              <span class="icon-tile-solid w-11 h-11 !rounded-[13px]">${Icon('video', 'w-5 h-5')}</span>
              <div class="flex-1 min-w-0">
                <p class="text-[13px] font-semibold text-white leading-tight">Communication temps réel</p>
                <p class="text-[11.5px] text-white/50 mt-0.5">Voix et vidéo haute définition</p>
              </div>
              <span class="w-2 h-2 rounded-full bg-rose-400 dot-pulse"></span>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[11.5px] text-white/55">
              ${Icon('shield', 'w-4 h-4 text-gold-400')} Chiffrement de bout en bout
            </div>
          </div>
        </div>

        <div class="stat-strip mt-6 reveal">
          ${STATS.map(s => `<div class="stat-strip__cell"><p class="stat-num">${s.n}</p><p class="stat-label">${s.l}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Vitrine : carousel auto-défilant -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 -mt-6 lg:-mt-8 relative z-10">
      ${Showcase()}
    </section>

    <!-- Plateforme : grille bento -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="eyebrow mb-3 mx-auto w-fit">La plateforme</p>
        <h2 class="text-[32px] lg:text-[40px] font-semibold tracking-[-0.025em] leading-[1.1]">Une plateforme complète</h2>
        <p class="text-[14.5px] leading-relaxed text-slatey mt-4">Des outils pensés pour créer, échanger et collaborer — dans un environnement fluide et sécurisé.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        ${[
          { n: '01', icon: 'user', t: 'Profil personnalisé', pts: ['Photo, bio et intérêts', 'Confidentialité granulaire', "Historique d'activité"] },
          { n: '02', icon: 'post', t: 'Publications riches', pts: ['Texte, image et vidéo', 'Tags et mentions', 'Brouillons automatiques'] },
          { n: '03', icon: 'message', t: 'Conversations', pts: ['Commentaires threadés', 'Likes et réactions', 'Notifications live'] },
          { n: '04', icon: 'video', t: 'Appels temps réel', pts: ['Voix et vidéo HD', "Partage d'écran", 'Chiffré de bout en bout'] },
        ].map((f, i) => `
          <article class="card-index reveal reveal-zoom" style="transition-delay:${i * 70}ms">
            <div class="flex items-start justify-between mb-6">
              <span class="icon-tile">${Icon(f.icon, 'w-[18px] h-[18px]')}</span>
              <span class="card-index__num">${f.n}</span>
            </div>
            <h3 class="font-semibold text-[15.5px] tracking-[-0.01em]">${f.t}</h3>
            <ul class="mt-4 space-y-2.5">
              ${f.pts.map(p => `<li class="tick">${p}</li>`).join('')}
            </ul>
          </article>`).join('')}
      </div>
      <div class="mt-10 flex justify-center">
        <button onclick="navigate('features')" class="btn btn-outline btn-sm">Explorer toutes les fonctionnalités ${Icon('arrowUpRight', 'w-4 h-4')}</button>
      </div>
    </section>

    <!-- Valeurs : cartes à filet supérieur -->
    <section class="section-tint border-y border-navy-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
          ${[
            { icon: 'shield', t: 'Sécurité avant tout', d: 'Mots de passe chiffrés avec bcrypt, authentification JWT et données protégées à chaque étape.' },
            { icon: 'zap', t: 'Performance', d: 'Interface réactive, temps de chargement minimal et appels temps réel fluides et fiables.' },
            { icon: 'globe', t: 'Accessibilité', d: 'Design responsive sur desktop, tablette et mobile, accessible au plus grand nombre.' },
          ].map((v, i) => `
            <div class="reveal card card-top-rule p-6" style="transition-delay:${i * 80}ms">
              <span class="icon-tile-accent mb-5">${Icon(v.icon, 'w-[18px] h-[18px]')}</span>
              <h3 class="font-semibold text-[16px] tracking-[-0.01em]">${v.t}</h3>
              <p class="text-[13.5px] leading-relaxed text-slatey mt-2.5">${v.d}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="section-navy rounded-[28px] border border-navy-900 px-6 py-16 lg:py-20 text-center relative overflow-hidden">
        <div class="hero-grid absolute inset-0 pointer-events-none"></div>
        <div class="relative max-w-2xl mx-auto">
          <h2 class="display text-white text-[30px] lg:text-[40px]">Prêt à rejoindre la communauté ?</h2>
          <p class="text-[14.5px] leading-relaxed text-white/60 mt-4 max-w-lg mx-auto">
            Créez votre compte en moins d'une minute et commencez à connecter,
            partager et interagir dès aujourd'hui.
          </p>
          <button onclick="navigate('download')" class="btn btn-accent btn-lg mt-8">Télécharger LynoraLink ${Icon('arrowDown', 'w-4 h-4')}</button>
          <p class="text-[12px] text-white/45 mt-5">Accès gratuit · Sans engagement</p>
        </div>
      </div>
    </section>

  </div>`;

/* ===================== FEATURES ===================== */

const FEATURES = [
  { icon: 'user', t: 'Création de profil utilisateur', d: 'Construisez une présence numérique complète et maîtrisez votre identité en ligne.', pts: ['Avatar et bannière personnalisables', 'Biographie et tags d\'intérêt', 'Statut en ligne', 'Paramètres de visibilité'] },
  { icon: 'post', t: 'Partage de posts', d: 'Exprimez-vous avec des publications multimédia enrichies.', pts: ['Support texte, image et vidéo', 'Hashtags et mentions', 'Brouillons et programmation', 'Édition et suppression'] },
  { icon: 'message', t: 'Commentaires et likes', d: 'Faites vivre les conversations autour de chaque publication.', pts: ['Commentaires threadés', 'Réactions et likes', 'Notifications temps réel', 'Modération des commentaires'] },
  { icon: 'video', t: 'Appels vocaux et vidéo', d: 'Communiquez en HD grâce à WebRTC et LiveKit.', pts: ['Appels 1-à-1 et de groupe', 'Partage d\'écran', 'Qualité HD adaptative', 'Chiffrement de bout en bout'] },
  { icon: 'bell', t: 'Notifications intelligentes', d: 'Restez informé sans être submergé.', pts: ['Notifications push et in-app', 'Filtres par type d\'événement', 'Mode ne pas déranger', 'Synthèse quotidienne'] },
  { icon: 'search', t: 'Recherche et découverte', d: 'Trouvez facilement utilisateurs, publications et sujets.', pts: ['Recherche utilisateurs et posts', 'Tendances et suggestions', 'Filtres avancés', 'Historique de recherche'] },
  { icon: 'shield', t: 'Sécurité et confidentialité', d: 'Vos données sont protégées par les meilleures pratiques.', pts: ['Mots de passe chiffrés bcrypt', 'Authentification JWT', 'Double authentification', 'Export RGPD des données'] },
  { icon: 'users', t: 'Communautés', d: 'Créez des espaces pour vos équipes et vos passions.', pts: ['Groupes thématiques', 'Événements et rencontres', 'Rôles et permissions', 'Espaces publics ou privés'] },
  { icon: 'zap', t: 'Génération de contenu par IA', d: 'Créez des visuels et des articles en quelques secondes, sans quitter l\'application.', pts: ['Génération d\'images à partir d\'un prompt', 'Rédaction d\'articles assistée', 'Suggestions adaptées à votre audience', 'Intégrée nativement au fil de publication'] },
  { icon: 'mapPin', t: 'Pages entreprise & Premium', d: 'Donnez à votre marque une présence professionnelle dédiée.', pts: ['Page entreprise personnalisable', 'Offres d\'emploi et recrutement', 'Publicités sponsorisées', 'Mode Premium avec visibilité prioritaire'] },
];

const STACK = [
  { icon: 'code', n: 'Framework', tags: ['Next.js', 'TailwindCSS'], d: 'Rendu hybride, routage applicatif et interface réactive de bout en bout.' },
  { icon: 'database', n: 'Données', tags: ['PostgreSQL · Neon', 'Prisma'], d: 'Base de données serverless, schéma relationnel typé et migrations versionnées.' },
  { icon: 'layers', n: 'Temps réel', tags: ['WebRTC', 'LiveKit'], d: 'Appels voix/vidéo HD, écran partagé et multi-participants.' },
  { icon: 'zap', n: 'Intelligence artificielle', tags: ['Génération de contenu'], d: 'Création automatique d\'images et d\'articles, intégrée nativement au fil de publication.' },
  { icon: 'lock', n: 'Sécurité', tags: ['JWT', 'bcrypt'], d: 'Sessions signées, hachage 12 rounds et bonnes pratiques d\'en-têtes HTTP.' },
];

const FAQ = [
  { q: 'LynoraLink est-il gratuit ?', a: 'Oui. L\'essentiel des fonctionnalités — messagerie, publications, groupes et appels — est accessible gratuitement. Le mode Premium Business ajoute des outils prioritaires pour les entreprises.' },
  { q: 'Comment fonctionne la génération de contenu par IA ?', a: 'Depuis le fil de publication, vous décrivez ce que vous souhaitez créer et l\'IA génère une image ou un article prêt à publier. Le plan Essentiel inclut un quota quotidien, le Premium retire cette limite.' },
  { q: 'Qui peut créer une page entreprise ?', a: 'Toute marque ou organisation peut créer une page entreprise gratuitement. Le mode Premium débloque la publication d\'offres d\'emploi et de publicités sponsorisées avec une visibilité prioritaire.' },
  { q: 'Mes données sont-elles sécurisées ?', a: 'Les mots de passe sont hachés avec bcrypt, les sessions sont authentifiées par JWT et les appels vocaux/vidéo sont chiffrés de bout en bout via WebRTC.' },
  { q: 'L\'application est-elle disponible sur mobile ?', a: 'Oui, une application Android est disponible au téléchargement, en complément de la version web accessible depuis n\'importe quel navigateur.' },
];

const PageHead = ({ eyebrow, title, lead }) => `
  <section class="section-tint border-b border-navy-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
      <p class="eyebrow mb-3 mx-auto w-fit">${eyebrow}</p>
      <h1 class="text-[34px] lg:text-[46px] font-semibold tracking-[-0.03em] leading-[1.08] max-w-[20ch] mx-auto">${title}</h1>
      ${lead ? `<p class="text-lead max-w-[62ch] mt-5 mx-auto">${lead}</p>` : ''}
    </div>
  </section>`;

const Features = () => `
  <div class="page-enter">
    ${PageHead({
      eyebrow: 'Fonctionnalités',
      title: 'Une suite complète d\'outils sociaux',
      lead: 'LynoraLink combine tous les éléments essentiels d\'un réseau social moderne dans une expérience cohérente, rapide et sécurisée.',
    })}

    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        ${FEATURES.map((f, i) => `
          <article class="card card-hover p-6 reveal" style="transition-delay:${(i % 4) * 60}ms">
            <span class="icon-tile mb-5">${Icon(f.icon, 'w-[18px] h-[18px]')}</span>
            <h3 class="font-semibold text-[15px] tracking-[-0.01em] leading-snug">${f.t}</h3>
            <p class="text-[13px] leading-relaxed text-slatey mt-2">${f.d}</p>
            <ul class="mt-4 pt-4 border-t border-navy-200 space-y-2">
              ${f.pts.map(p => `<li class="text-[12.5px] text-ink500 flex items-start gap-2">${Icon('check', 'w-3.5 h-3.5 text-gold-600 mt-[3px] shrink-0')}<span>${p}</span></li>`).join('')}
            </ul>
          </article>`).join('')}
      </div>
    </section>

    <section class="section-tint border-y border-navy-200">
      <div class="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div class="text-center mb-12">
          <p class="eyebrow-neutral mb-3 mx-auto w-fit">Sous le capot</p>
          <h2 class="text-[28px] lg:text-[34px] font-semibold tracking-[-0.025em]">Une architecture moderne et éprouvée</h2>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          ${STACK.map((s, i) => `
            <div class="reveal card p-6" style="transition-delay:${i * 60}ms">
              <span class="icon-tile-solid mb-4">${Icon(s.icon, 'w-[18px] h-[18px]')}</span>
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <h3 class="font-semibold text-[15px]">${s.n}</h3>
              </div>
              <div class="flex flex-wrap gap-2 mt-2.5">
                ${s.tags.map(t => `<span class="text-[10.5px] font-semibold tracking-[.08em] uppercase text-ink500 bg-white border border-navy-200 rounded-full px-2.5 py-1">${t}</span>`).join('')}
              </div>
              <p class="text-[13px] text-slatey mt-2.5">${s.d}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="text-center mb-12">
        <p class="eyebrow-neutral mb-3 mx-auto w-fit">Questions fréquentes</p>
        <h2 class="text-[28px] lg:text-[34px] font-semibold tracking-[-0.025em]">Tout ce qu'il faut savoir</h2>
      </div>
      <div class="space-y-3">
        ${FAQ.map((f, i) => `
          <details class="faq-item reveal" style="transition-delay:${i * 50}ms">
            <summary class="faq-item__q">
              <span>${f.q}</span>
              ${Icon('chevronDown', 'w-[18px] h-[18px] faq-item__chevron shrink-0')}
            </summary>
            <p class="faq-item__a">${f.a}</p>
          </details>`).join('')}
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div class="card p-10 lg:p-12 text-center flex flex-col items-center">
        <p class="eyebrow mb-3 mx-auto w-fit">Prêt à commencer ?</p>
        <h2 class="text-[26px] lg:text-[32px] font-semibold tracking-[-0.025em] max-w-md">Toutes ces fonctionnalités, gratuitement.</h2>
        <button onclick="navigate('download')" class="btn btn-primary btn-lg mt-7">Télécharger LynoraLink ${Icon('arrowDown', 'w-4 h-4')}</button>
      </div>
    </section>
  </div>`;

/* ===================== PRICING ===================== */

const PLANS = [
  { name: 'Essentiel', price: 'Gratuit', note: 'Les fonctionnalités fondamentales pour développer votre réseau', accent: false, features: ['Messagerie sans limitation', 'Réseau de connexions sans limitation', 'Publication de contenus sans limitation', 'Création de pages entreprise', 'Création et gestion de groupes sans limitation', 'Assistant IA : 3 créations de contenus par jour', 'Création de publicités sponsorisées'] },
  { name: 'Premium Business', price: '9,99 €', annualPrice: '7,99 €', note: 'Développez votre activité avec des fonctionnalités prioritaires', billing: 'Soit 95,88 € facturés annuellement', accent: true, features: ['Messagerie sans limitation', 'Connexions sans limitation et traitement prioritaire', 'Publication et diffusion prioritaires, sans limitation', 'Création de pages entreprise', 'Création et gestion de groupes prioritaires, sans limitation', 'Assistant IA : créations de contenus illimitées et prioritaires', 'Création et diffusion de publicités sponsorisées'] },
];

const Pricing = () => `
  <div class="page-enter">
    ${PageHead({
      eyebrow: 'Offres & Plans',
      title: 'Développez votre activité avec LynoraLink',
      lead: 'Passez à Premium Business pour bénéficier de fonctionnalités prioritaires, ou commencez avec Essentiel et développez votre réseau gratuitement.',
    })}
    <section class="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="grid md:grid-cols-2 gap-6 items-stretch">
        ${PLANS.map((plan, i) => `
          <article class="card ${plan.accent ? 'border-gold-500 shadow-lift' : ''} p-7 lg:p-9 reveal flex flex-col" style="transition-delay:${i * 90}ms">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="eyebrow${plan.accent ? '' : '-neutral'} mb-3">${plan.accent ? 'Pour les communautés' : 'Pour commencer'}</p>
                <h2 class="text-[26px] font-semibold tracking-[-0.025em]">${plan.name}</h2>
              </div>
              ${plan.accent ? '<span class="pill pill-accent">Populaire</span>' : ''}
            </div>
            <p class="text-[13.5px] text-slatey mt-3">${plan.note}</p>
            <p class="mt-7"><strong class="text-[38px] tracking-[-0.04em]">${plan.price}</strong>${plan.annualPrice ? `<span class="text-[13px] text-mist"> / mois</span>` : ''}</p>
            ${plan.annualPrice ? `<p class="text-[13px] font-medium text-gold-700 mt-1">${plan.annualPrice} / mois</p><p class="text-[12px] text-mist mt-1">${plan.billing}</p>` : ''}
            <ul class="mt-7 pt-6 border-t border-navy-200 space-y-3 flex-1">
              ${plan.features.map(feature => `<li class="tick">${feature}</li>`).join('')}
            </ul>
            <button onclick="navigate('download')" class="btn ${plan.accent ? 'btn-accent' : 'btn-outline'} w-full mt-8">${plan.accent ? 'Passer à Premium' : 'Commencer avec Essentiel'} ${Icon('arrowRight', 'w-4 h-4')}</button>
          </article>`).join('')}
      </div>
      <p class="text-center text-[12.5px] text-mist mt-8">Les offres sont présentées à titre indicatif. Aucun paiement n'est requis sur cette vitrine.</p>
    </section>
  </div>`;

/* ===================== DOWNLOAD ===================== */

const Download = () => `
  <div class="page-enter">
    <section class="download-hero">
      <div class="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20 text-center">
        <p class="pill pill-navy mb-6 mx-auto w-fit">Téléchargement</p>
        <h1 class="display text-white text-[38px] sm:text-[50px] lg:text-[60px] max-w-[14ch] mx-auto">LynoraLink, partout avec vous<span class="text-gold-400">.</span></h1>
        <p class="text-[16px] lg:text-[17px] leading-relaxed text-white/65 max-w-[58ch] mt-6 mx-auto">Choisissez l'expérience qui correspond à votre usage : l'application Android pour rester proche de votre réseau, ou la version web pour accéder à LynoraLink depuis n'importe quel navigateur.</p>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
      <div class="download-grid grid lg:grid-cols-2 gap-6">
        <article class="download-card download-card--android card reveal">
          <div class="download-card__visual">
            <span class="download-card__icon">${Icon('android', 'w-6 h-6')}</span>
            <span class="pill pill-accent">Android</span>
          </div>
          <div class="p-7 lg:p-9 flex flex-col flex-1">
            <p class="eyebrow mb-3">Application mobile</p>
            <h2 class="text-[28px] font-semibold tracking-[-0.025em]">Vos échanges, dans votre poche.</h2>
            <p class="text-[14px] leading-relaxed text-slatey mt-3 max-w-[42ch]">Retrouvez vos conversations, publications et appels vidéo depuis votre téléphone Android.</p>
            <ul class="download-features mt-7 pt-6 border-t border-navy-200 space-y-3">
              <li>${Icon('check', 'w-4 h-4')} Accès rapide à votre réseau</li>
              <li>${Icon('check', 'w-4 h-4')} Publications et messages où que vous soyez</li>
              <li>${Icon('check', 'w-4 h-4')} Appels vocaux et vidéo</li>
            </ul>
            <div class="mt-auto pt-8 flex items-center justify-between gap-4 flex-wrap">
              <a href="public/LynoraLink.v1.1.1.apk" download class="btn btn-accent btn-lg">Télécharger l'APK ${Icon('arrowDown', 'w-4 h-4')}</a>
              <span class="text-[11.5px] text-mist">Fichier Android</span>
            </div>
          </div>
        </article>
        <article class="download-card download-card--web card reveal" style="transition-delay:90ms">
          <div class="download-card__visual">
            <span class="download-card__icon">${Icon('globe', 'w-6 h-6')}</span>
            <span class="pill">Navigateur</span>
          </div>
          <div class="p-7 lg:p-9 flex flex-col flex-1">
            <p class="eyebrow-neutral mb-3">Version web</p>
            <h2 class="text-[28px] font-semibold tracking-[-0.025em]">Simplement, depuis votre navigateur.</h2>
            <p class="text-[14px] leading-relaxed text-slatey mt-3 max-w-[42ch]">Utilisez LynoraLink depuis un ordinateur, une tablette ou un mobile, sans installation.</p>
            <ul class="download-features mt-7 pt-6 border-t border-navy-200 space-y-3">
              <li>${Icon('check', 'w-4 h-4')} Accessible sur ordinateur et mobile</li>
              <li>${Icon('check', 'w-4 h-4')} Aucun téléchargement nécessaire</li>
              <li>${Icon('check', 'w-4 h-4')} Une expérience fluide et responsive</li>
            </ul>
            <div class="mt-auto pt-8 flex items-center justify-between gap-4 flex-wrap">
              <a href="https://app.lynoralink.com" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">Ouvrir la version web ${Icon('arrowUpRight', 'w-4 h-4')}</a>
              <span class="text-[11.5px] text-mist">Sans installation</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>`;

/* ===================== LEGAL ===================== */

const LEGAL_SECTIONS = [
  {
    id: 'editor',
    title: '1. Mentions légales',
    text: [
      'LynoraLink est une vitrine de présentation d’une application sociale conçue pour faciliter les échanges, les publications et la création de communautés.',
      'Le site est édité depuis Madagascar. Les informations d’identification juridique complètes de l’éditeur, ainsi que celles de l’hébergeur, seront ajoutées avant toute mise en production commerciale.',
      'Pour toute demande concernant le site, utilisez le canal de contact officiellement communiqué par LynoraLink. Aucune donnée personnelle ne doit être envoyée via un canal non vérifié.',
    ],
  },
  {
    id: 'terms',
    title: '2. Conditions générales d’utilisation',
    text: [
      'L’accès à cette vitrine est libre. Elle présente les fonctionnalités, les offres et les moyens d’accès à LynoraLink. Les fonctionnalités interactives de l’application peuvent être soumises à des conditions distinctes au moment de leur activation.',
      'L’utilisateur s’engage à utiliser LynoraLink conformément aux lois applicables, à respecter les autres utilisateurs et à ne pas tenter de perturber le fonctionnement, la sécurité ou la disponibilité du service.',
      'Les offres, prix et fonctionnalités présentés sur cette page peuvent évoluer. Toute souscription effective sera encadrée par les conditions contractuelles affichées avant la validation du paiement.',
      'LynoraLink peut modifier, suspendre ou interrompre tout ou partie de la vitrine pour des raisons de maintenance, de sécurité, d’évolution technique ou de conformité.',
    ],
  },
  {
    id: 'content',
    title: '3. Contenus et propriété intellectuelle',
    text: [
      'Le nom LynoraLink, le logo, les textes, la structure éditoriale, les interfaces et les éléments graphiques du site sont protégés par les règles applicables en matière de propriété intellectuelle.',
      'Toute reproduction, représentation, adaptation ou réutilisation non autorisée d’un élément du site est interdite, sauf accord écrit préalable ou exception légale applicable.',
      'Les contenus publiés par les utilisateurs dans l’application restent soumis aux droits de leurs auteurs. L’utilisateur doit disposer des autorisations nécessaires avant de publier une image, une vidéo, une marque ou tout autre contenu appartenant à un tiers.',
    ],
  },
  {
    id: 'privacy',
    title: '4. Données personnelles et confidentialité',
    text: [
      'La présente vitrine statique ne nécessite pas de compte utilisateur et ne transmet pas de formulaire vers un serveur. Les données saisies dans un éventuel formulaire local ne sont pas conservées par cette version du site.',
      'Dans l’application complète, les données pouvant être traitées dépendront des fonctionnalités activées : compte, profil, publications, messages, interactions, données techniques et préférences. La collecte devra rester limitée à ce qui est nécessaire au fonctionnement du service.',
      'Les utilisateurs disposent, selon la réglementation applicable, de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité. Les modalités et coordonnées d’exercice de ces droits devront être précisées dans la politique de confidentialité de l’application avant sa mise en production.',
      'Les mesures de sécurité doivent inclure un contrôle des accès, la protection des identifiants, le chiffrement des échanges et une conservation limitée des données. Aucune donnée sensible ne doit être ajoutée à cette vitrine statique.',
    ],
  },
  {
    id: 'cookies',
    title: '5. Cookies et traceurs',
    text: [
      'La vitrine utilise uniquement les mécanismes nécessaires à l’affichage, à la navigation et au fonctionnement de ses pages statiques. Aucun profilage publicitaire ou suivi comportemental n’est ajouté par le code de cette version.',
      'Le navigateur peut toutefois charger des ressources externes, comme la police ou la feuille de style utilisée par l’interface. Ces ressources peuvent être soumises aux politiques de leurs propres fournisseurs.',
      'Tout outil d’analyse d’audience, de publicité ou de personnalisation devra être déclaré et soumis au consentement de l’utilisateur lorsqu’il est requis.',
    ],
  },
  {
    id: 'liability',
    title: '6. Responsabilité et disponibilité',
    text: [
      'LynoraLink s’efforce de maintenir des informations claires et à jour, sans garantir que la vitrine sera exempte d’erreurs, disponible sans interruption ou compatible avec tous les environnements.',
      'Les liens de téléchargement, les prix et les fonctionnalités doivent être vérifiés avant toute communication commerciale. La présence d’un lien sur cette page ne constitue pas une garantie de disponibilité de la ressource cible.',
      'L’utilisateur reste responsable de l’usage qu’il fait des informations et des services accessibles depuis cette vitrine.',
    ],
  },
  {
    id: 'contact',
    title: '7. Contact et mise à jour',
    text: [
      'Cette page sera complétée avec les coordonnées juridiques officielles, l’identité de l’éditeur et les informations d’hébergement avant le lancement public du service.',
      'Dernière mise à jour : 13 septembre 2026.',
    ],
  },
];

const Legal = () => `
  <div class="page-enter">
    ${PageHead({
      eyebrow: 'Informations légales',
      title: 'LynoraLink, en toute transparence.',
      lead: 'Retrouvez ici les règles d’utilisation, les engagements de confidentialité et les informations relatives à cette vitrine statique.',
    })}
    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <aside class="lg:col-span-3">
          <div class="card p-5 lg:sticky lg:top-24">
            <p class="eyebrow-neutral mb-4">Sur cette page</p>
            <nav class="space-y-1 text-[13px] text-ink700" aria-label="Sommaire juridique">
              ${LEGAL_SECTIONS.map(section => `<a href="#legal-${section.id}" data-legal-link="legal-${section.id}" class="legal-toc-link block hover:text-ink transition-colors">${section.title}</a>`).join('')}
            </nav>
          </div>
        </aside>
        <article class="lg:col-span-9 max-w-3xl legal-content">
          <div class="panel p-7 lg:p-10">
            <div class="flex items-start gap-4 pb-7 border-b border-navy-200">
              <span class="icon-tile-accent shrink-0">${Icon('shield', 'w-5 h-5')}</span>
              <div>
                <h2 class="text-[20px] font-semibold tracking-[-0.02em]">Un cadre clair pour une expérience de confiance</h2>
                <p class="text-[13.5px] leading-relaxed text-slatey mt-2">Cette page décrit le fonctionnement de la vitrine actuelle. Les documents contractuels de l’application seront présentés séparément avant toute création de compte ou souscription.</p>
              </div>
            </div>
            <div class="mt-8 space-y-10">
              ${LEGAL_SECTIONS.map(section => `
                <section id="legal-${section.id}" class="scroll-mt-24">
                  <h2 class="text-[20px] font-semibold tracking-[-0.02em]">${section.title}</h2>
                  <div class="space-y-3 mt-4 text-[14px] leading-[1.75] text-ink700">
                    ${section.text.map(paragraph => `<p>${paragraph}</p>`).join('')}
                  </div>
                </section>`).join('')}
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>`;

/* ===================== ABOUT ===================== */

const About = () => `
  <div class="page-enter">
    ${PageHead({
      eyebrow: 'À propos de nous',
      title: 'Notre histoire, notre mission',
      lead: 'LynoraLink est né d\'une idée simple : créer un espace social où la technologie sert véritablement les liens humains.',
    })}

    <section class="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <p class="eyebrow-neutral mb-4 mx-auto w-fit text-center">Le projet</p>
      <h2 class="text-[26px] lg:text-[32px] font-semibold tracking-[-0.025em] leading-[1.15] text-center">LynoraLink, en quelques mots</h2>
      <div class="space-y-5 mt-8 text-[15px] leading-[1.75] text-ink700 max-w-[68ch] mx-auto">
        <p>
          LynoraLink est un réseau social interactif moderne conçu pour réunir les meilleures
          pratiques du Web social dans une plateforme cohérente et élégante. Le projet s'appuie
          sur une architecture robuste : Next.js pour le rendu et le routage applicatif, associé
          à TailwindCSS pour une interface réactive et accessible, une base de données PostgreSQL
          hébergée sur Neon et gérée via l'ORM Prisma, et une couche temps réel basée sur WebRTC
          et LiveKit pour les appels vocaux et vidéo. Une IA intégrée vient compléter cette base
          en générant automatiquement des images et des articles directement dans l'application.
        </p>
        <p>
          Au-delà de la technique, LynoraLink ambitionne de redonner du sens aux interactions
          en ligne. Nous croyons qu'un réseau social doit être à la fois puissant et respectueux :
          puissant par ses fonctionnalités — profils personnalisés, publications multimédia,
          conversations threadées, appels haute définition — et respectueux par sa transparence,
          sa sécurité et son souci de la vie privée de ses utilisateurs.
        </p>
      </div>
      <figure class="card mt-12 p-8 lg:p-10 max-w-[68ch] mx-auto text-center">
        <blockquote class="text-[19px] lg:text-[22px] leading-[1.5] font-medium tracking-[-0.01em] text-ink">
          « Nous voulions construire un espace où la technologie s'efface devant les liens humains. »
        </blockquote>
        <figcaption class="mt-4 text-[13px] text-mist">L'équipe LynoraLink</figcaption>
      </figure>
    </section>

    <section class="section-tint border-y border-navy-200">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div class="text-center mb-10">
          <p class="eyebrow mb-3 mx-auto w-fit">Notre mission</p>
          <h2 class="text-[28px] lg:text-[34px] font-semibold tracking-[-0.025em]">Des valeurs qui guident chaque décision</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8 lg:gap-10">
          ${[
            { icon: 'like', t: 'Bienveillance', d: 'Un environnement respectueux où chacun peut s\'exprimer librement et en sécurité.' },
            { icon: 'zap', t: 'Innovation', d: 'Des technologies de pointe au service d\'une expérience sociale toujours plus fluide.' },
            { icon: 'shield', t: 'Confiance', d: 'La transparence et la protection des données au cœur de nos engagements.' },
          ].map((v, i) => `
            <div class="reveal card card-top-rule p-6" style="transition-delay:${i * 80}ms">
              <span class="icon-tile-accent mb-5">${Icon(v.icon, 'w-[18px] h-[18px]')}</span>
              <h3 class="font-semibold text-[16px]">${v.t}</h3>
              <p class="text-[13.5px] leading-relaxed text-slatey mt-2.5">${v.d}</p>
            </div>`).join('')}
        </div>
      </div>
    </section>

  </div>`;

/* ===================== CONTACT ===================== */

const CONTACTS = [];

const Contact = () => `
  <div class="page-enter">
    ${PageHead({
      eyebrow: 'Contact',
      title: 'Parlons ensemble',
      lead: 'Une question, une suggestion ou une demande de partenariat ? Notre équipe vous répond dans les meilleurs délais.',
    })}

    <section class="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="grid lg:grid-cols-12 gap-12">

        <div class="lg:col-span-5">
          <p class="eyebrow-neutral mb-6">Nous joindre</p>
          <div>
            ${CONTACTS.map((c, i) => `
              <div class="reveal flex items-start gap-4 py-5 ${i > 0 ? 'border-t border-navy-200' : ''}" style="transition-delay:${i * 60}ms">
                <span class="icon-tile shrink-0">${Icon(c.icon, 'w-[18px] h-[18px]')}</span>
                <div class="min-w-0">
                  <p class="text-[10.5px] font-semibold tracking-[.14em] uppercase text-mist">${c.l}</p>
                  <p class="text-[14.5px] font-semibold mt-1 break-words">${c.v}</p>
                  <p class="text-[12.5px] text-slatey mt-1">${c.s}</p>
                </div>
              </div>`).join('')}
          </div>

          <div class="card p-6 mt-8 bg-navy-50 border-navy-200">
            <p class="font-semibold text-[14px]">Lettre d'information</p>
            <p class="text-[12.5px] text-slatey mt-1.5 leading-relaxed">Une fois par mois : nouveautés produit et bonnes pratiques sociales. Pas de spam.</p>
            <form onsubmit="subscribe(event)" class="mt-4 flex gap-2">
              <input type="email" required placeholder="vous@exemple.com" class="field flex-1 px-3.5 py-2.5 text-[13.5px]" />
              <button class="btn btn-primary btn-sm shrink-0">${Icon('send', 'w-4 h-4')}</button>
            </form>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="panel panel-inset p-7 lg:p-9">
            <p class="eyebrow mb-1.5">Formulaire</p>
            <h2 class="text-[22px] font-semibold tracking-[-0.02em] mb-7">Envoyez-nous un message</h2>
            <form onsubmit="sendContact(event)" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Nom complet *</label>
                  <input name="name" required placeholder="Jean Dupont" class="field w-full px-3.5 py-2.5 text-[14px]" />
                </div>
                <div>
                  <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Email *</label>
                  <input name="email" type="email" required placeholder="jean@exemple.com" class="field w-full px-3.5 py-2.5 text-[14px]" />
                </div>
              </div>
              <div>
                <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Sujet</label>
                <div class="relative">
                  <select name="subject" class="field w-full px-3.5 py-2.5 text-[14px] appearance-none pr-10">
                    <option>Demande générale</option>
                    <option>Support technique</option>
                    <option>Partenariat</option>
                    <option>Presse et médias</option>
                  </select>
                  <span class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-ink500">${Icon('chevronDown', 'w-4 h-4')}</span>
                </div>
              </div>
              <div>
                <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Message *</label>
                <textarea name="message" required rows="5" placeholder="Décrivez votre demande…" class="field w-full px-3.5 py-2.5 text-[14px] resize-none"></textarea>
              </div>
              <label class="flex items-start gap-2.5 text-[12.5px] text-ink500 leading-relaxed cursor-pointer">
                <input type="checkbox" required class="mt-0.5 accent-ink" />
                <span>J'accepte que mes données soient traitées conformément à la politique de confidentialité de LynoraLink.</span>
              </label>
              <button class="btn btn-primary btn-lg w-full sm:w-auto">Envoyer le message ${Icon('arrowRight', 'w-4 h-4')}</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>`;

/* ===================== LOGIN ===================== */

const Login = () => `
  <div class="page-enter min-h-[82vh] flex items-center justify-center px-6 py-16 bg-navy-50">
    <div class="w-full max-w-[400px]">
      <div class="text-center mb-8">
        ${Logo(44)}
        <h1 class="text-[24px] font-semibold tracking-[-0.02em] mt-5">Connexion à LynoraLink</h1>
        <p class="text-[13.5px] text-slatey mt-1.5">Heureux de vous revoir.</p>
      </div>
      <div class="panel panel-inset p-7">
        <form onsubmit="doLogin(event)" class="space-y-5">
          <div>
            <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Email</label>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('mail', 'w-4 h-4')}</span>
              <input name="email" type="email" required placeholder="Votre adresse email" class="field w-full pl-10 pr-4 py-2.5 text-[14px]" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="text-[12px] font-semibold text-ink700">Mot de passe</label>
              <a href="#" class="text-[12px] text-gold-600 font-medium hover:text-gold-700">Oublié ?</a>
            </div>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('lock', 'w-4 h-4')}</span>
              <input id="loginPass" name="password" type="password" required placeholder="Votre mot de passe" class="field w-full pl-10 pr-11 py-2.5 text-[14px]" />
              <button type="button" onclick="togglePass('loginPass', this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-ink300 hover:text-ink500 p-0.5" aria-label="Afficher le mot de passe">${Icon('eye', 'w-4 h-4')}</button>
            </div>
          </div>
          <label class="flex items-center gap-2.5 text-[12.5px] text-ink500 cursor-pointer">
            <input type="checkbox" checked class="accent-ink" /> <span>Se souvenir de moi</span>
          </label>
          <button class="btn btn-accent w-full btn-lg">Se connecter ${Icon('arrowRight', 'w-4 h-4')}</button>
          <div class="divider-label">ou</div>
          <button type="button" class="btn btn-outline w-full">${Icon('google', 'w-4 h-4')} Continuer avec Google</button>
        </form>
      </div>
      <p class="text-center text-[13px] text-slatey mt-6">Pas encore de compte ? <button onclick="navigate('register')" class="text-gold-600 font-semibold hover:text-gold-700">Créer un compte</button></p>
    </div>
  </div>`;

/* ===================== REGISTER ===================== */

const Register = () => `
  <div class="page-enter min-h-[82vh] flex items-center justify-center px-6 py-16 bg-navy-50">
    <div class="w-full max-w-[440px]">
      <div class="text-center mb-8">
        ${Logo(44)}
        <h1 class="text-[24px] font-semibold tracking-[-0.02em] mt-5">Créer votre compte</h1>
        <p class="text-[13.5px] text-slatey mt-1.5">Rejoignez la communauté LynoraLink.</p>
      </div>
      <div class="panel panel-inset p-7">
        <form onsubmit="doRegister(event)" class="space-y-5">
          <div>
            <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Nom complet *</label>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('user', 'w-4 h-4')}</span>
              <input name="name" required placeholder="Jean Dupont" class="field w-full pl-10 pr-4 py-2.5 text-[14px]" />
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Email *</label>
              <div class="relative">
                <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('mail', 'w-4 h-4')}</span>
                <input name="email" type="email" required placeholder="vous@exemple.com" class="field w-full pl-10 pr-4 py-2.5 text-[14px]" />
              </div>
            </div>
            <div>
              <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Nom d'utilisateur *</label>
              <div class="relative">
                <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('at', 'w-4 h-4')}</span>
                <input name="username" required placeholder="jeandupont" class="field w-full pl-10 pr-4 py-2.5 text-[14px]" />
              </div>
            </div>
          </div>
          <div>
            <label class="block text-[12px] font-semibold text-ink700 mb-1.5">Mot de passe *</label>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink300 pointer-events-none">${Icon('lock', 'w-4 h-4')}</span>
              <input id="regPass" name="password" type="password" required minlength="6" oninput="checkStrength(this.value)" placeholder="6 caractères min." class="field w-full pl-10 pr-11 py-2.5 text-[14px]" />
              <button type="button" onclick="togglePass('regPass', this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-ink300 hover:text-ink500 p-0.5" aria-label="Afficher le mot de passe">${Icon('eye', 'w-4 h-4')}</button>
            </div>
            <div class="flex items-center gap-3 mt-3">
              <div class="meter flex-1"><div id="meterFill" class="meter-fill" style="width:0%"></div></div>
              <span id="strengthLabel" class="text-[11px] text-mist w-[86px] text-right">—</span>
            </div>
          </div>
          <label class="flex items-start gap-2.5 text-[12.5px] text-ink500 leading-relaxed cursor-pointer">
            <input type="checkbox" required class="mt-0.5 accent-ink" />
            <span>J'accepte les <a href="#" class="text-gold-600 font-medium">conditions d'utilisation</a> et la <a href="#" class="text-gold-600 font-medium">politique de confidentialité</a>.</span>
          </label>
          <button class="btn btn-accent w-full btn-lg">Créer mon compte ${Icon('arrowRight', 'w-4 h-4')}</button>
        </form>
      </div>
      <p class="text-center text-[13px] text-slatey mt-6">Déjà inscrit ? <button onclick="navigate('login')" class="text-gold-600 font-semibold hover:text-gold-700">Se connecter</button></p>
    </div>
  </div>`;

/* ===================== INTERACTIONS ===================== */

const sendContact = (e) => {
  e.preventDefault();
  const f = e.target;
  toast('Message envoyé. Nous revenons vers vous sous 24h.');
  f.reset();
};

const subscribe = (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  toast('Inscription confirmée. Merci !');
  input.value = '';
};

const doLogin = (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f.name?.value || 'Utilisateur';
  state.user = { name, handle: 'alex', initials: 'AL' };
  toast('Connexion réussie. Bienvenue !');
  navigate('home');
};

const doRegister = (e) => {
  e.preventDefault();
  toast('Compte créé avec succès. Connectez-vous !');
  navigate('login');
};

const togglePass = (id, btn) => {
  const input = document.getElementById(id);
  if (!input) return;
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  btn.innerHTML = Icon(show ? 'eyeOff' : 'eye', 'w-4 h-4');
};

const checkStrength = (val) => {
  const fill = document.getElementById('meterFill');
  const label = document.getElementById('strengthLabel');
  if (!fill || !label) return;
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  const pct = Math.min(score / 5, 1) * 100;
  const map = [
    { w: 0, c: '#d0d5dd', t: '—' },
    { w: 22, c: '#e11d48', t: 'Faible' },
    { w: 45, c: '#ea8c00', t: 'Moyen' },
    { w: 68, c: '#c9a24b', t: 'Bon' },
    { w: 85, c: '#4c5871', t: 'Solide' },
    { w: 100, c: '#2563eb', t: 'Excellent' },
  ];
  const m = map[Math.min(score, 5)];
  fill.style.width = (val ? m.w : 0) + '%';
  fill.style.background = m.c;
  label.textContent = val ? m.t : '—';
};

/* ===================== ROUTER & RENDER ===================== */

const pages = { home: Home, features: Features, pricing: Pricing, about: About, download: Download, contact: Contact, legal: Legal };

const render = () => {
  const hashRoute = location.hash.slice(1) || 'home';
  state.route = hashRoute.startsWith('legal-') ? 'legal' : hashRoute;
  const page = pages[state.route] || Home;
  document.getElementById('app').innerHTML = `
    <div class="min-h-screen">
      ${Topbar()}
      ${MobileDrawer()}
      <main class="pt-[92px]">${page()}</main>
      ${Footer()}
    </div>`;
  observeReveal();
  initHeaderScroll();
  initShowcase();
  if (state.route === 'legal') observeLegalNavigation();
  if (hashRoute.startsWith('legal-')) {
    document.getElementById(hashRoute)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const initHeaderScroll = () => {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const isHero = HERO_ROUTES.includes(state.route);
  const update = () => {
    if (!isHero) { header.classList.add('nav-shell--solid'); return; }
    header.classList.toggle('nav-shell--solid', window.scrollY > 28);
  };
  if (window.__headerScrollHandler) window.removeEventListener('scroll', window.__headerScrollHandler);
  window.__headerScrollHandler = update;
  window.addEventListener('scroll', update, { passive: true });
  update();
};

const observeReveal = () => {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('on')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('on'); io.unobserve(en.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => io.observe(e));
};

const observeLegalNavigation = () => {
  const sections = $$('.legal-content section[id]');
  const links = $$('[data-legal-link]');
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach(link => {
      const active = link.dataset.legalLink === id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const updateActive = () => {
    const marker = window.innerHeight * 0.5;
    let current = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= marker) current = section;
    });
    setActive(current.id);
  };

  if (window.__legalScrollHandler) window.removeEventListener('scroll', window.__legalScrollHandler);
  window.__legalScrollHandler = updateActive;
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
};

window.addEventListener('hashchange', () => { state.route = location.hash.slice(1) || 'home'; render(); });
window.navigate = navigate; window.toggleSidebar = toggleSidebar; window.logout = logout;
window.sendContact = sendContact; window.subscribe = subscribe;
window.doLogin = doLogin; window.doRegister = doRegister;
window.togglePass = togglePass; window.checkStrength = checkStrength; window.toast = toast;
window.showcaseGoto = showcaseGoto; window.showcaseNext = showcaseNext; window.showcasePrev = showcasePrev;

document.addEventListener('DOMContentLoaded', render);
render();
