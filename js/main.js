// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuIcon.setAttribute('d', isOpen
    ? 'M6 18L18 6M6 6l12 12'
    : 'M4 6h16M4 12h16M4 18h16'
  );
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });
});

// Language toggle (placeholder)
const langModal = document.getElementById('lang-modal');
document.getElementById('lang-toggle')?.addEventListener('click', () => {
  langModal.classList.remove('hidden');
});
document.getElementById('lang-toggle-mobile')?.addEventListener('click', () => {
  langModal.classList.remove('hidden');
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
