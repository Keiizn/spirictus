// ============================
//          script.js
// ============================

document.addEventListener('DOMContentLoaded', () => {
    /* ===== MENU BURGER ===== */
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navList = document.querySelector('.nav-list');
  
    if (toggleBtn && nav) {
      toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        navList.classList.toggle('active'); // utile si tu cibles spécifiquement .nav-list
      });
    }
  
    /* ===== BARRE DE PROGRESSION (LOADING) ===== */
    const progressBar = document.getElementById('progress-bar');
    setTimeout(() => {
      progressBar.style.width = '100%';
    }, 100);
    setTimeout(() => {
      progressBar.style.opacity = '0';
    }, 1200);
  
    /* ===== FERMER LA TOP BAR ===== */
    const topBar = document.querySelector('.top-bar');
    const topClose = document.querySelector('.top-bar-close');
    if (topClose && topBar) {
      topClose.addEventListener('click', () => {
        topBar.style.display = 'none';
      });
    }
  
    /* ===== ANIMATIONS DE SCROLL (Intersection Observer) ===== */
    const heroSection = document.querySelector('.hero');
    const allSections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    if (heroSection) observer.observe(heroSection);
    allSections.forEach(sec => observer.observe(sec));
  
    /* ===== FAQ TOGGLE ===== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('h4');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  
    /* ===== TOGGLE DARK / LIGHT MODE ===== */
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const htmlEl = document.documentElement;
        const current = htmlEl.getAttribute('data-theme');
        if (current === 'light') {
          htmlEl.setAttribute('data-theme', 'dark');
          themeToggle.textContent = '☀️';
        } else {
          htmlEl.setAttribute('data-theme', 'light');
          themeToggle.textContent = '🌙';
        }
      });
    }
  });