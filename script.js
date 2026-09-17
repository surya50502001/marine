// AEGIS INTERNATIONAL TRADING FZ LLC - JAVASCRIPT LOGIC

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });

    // Close menu when clicking nav links
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 3. Quote Form Submission Handling
  const quoteForm = document.getElementById('quoteForm');
  const formMessage = document.getElementById('formMessage');

  if (quoteForm && formMessage) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate submission & feedback
      formMessage.className = 'form-message success';
      formMessage.innerText = '✓ Thank you! Your inquiry has been submitted successfully. Our team will contact you shortly.';
      
      setTimeout(() => {
        quoteForm.reset();
      }, 1000);

      setTimeout(() => {
        formMessage.className = 'form-message';
        formMessage.innerText = '';
      }, 6000);
    });
  }
});
