// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for internal links
document.addEventListener('click', (e) => {
  const target = e.target;
  if (target instanceof Element && target.matches('a[href^="#"]')) {
    const hash = target.getAttribute('href');
    if (!hash || hash.length < 2) return;
    const dest = document.querySelector(hash);
    if (dest) {
      e.preventDefault();
      dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// Menu tabs filter
const tabs = Array.from(document.querySelectorAll('.tab'));
const cards = Array.from(document.querySelectorAll('.card'));
function setActiveTab(category) {
  tabs.forEach(btn => btn.classList.toggle('active', btn.dataset.category === category || (category === 'all' && btn.dataset.category === 'all')));
  cards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
  });
}
tabs.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.dataset.category || 'all')));

// Initialize default state
setActiveTab('all');

// Parallax effect for hero media
const heroMedia = document.querySelector('.hero-media');
if (heroMedia) {
  const onScroll = () => {
    const y = window.scrollY;
    // translate slower than scroll to create parallax depth
    const offset = Math.min(80, y * 0.15);
    heroMedia.style.transform = `translateY(${offset}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Basic form handling (demo)
const form = document.getElementById('reservation-form');
const statusEl = document.getElementById('form-status');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const date = String(formData.get('date') || '').trim();
    const time = String(formData.get('time') || '').trim();
    if (!name || !phone || !date || !time) {
      statusEl.textContent = 'Please fill in required fields (Name, Phone, Date, Time).';
      statusEl.style.color = 'var(--danger)';
      return;
    }
    statusEl.textContent = 'Thank you! We\'ve received your request. We\'ll confirm shortly.';
    statusEl.style.color = 'var(--ok)';
    form.reset();
  });
}


