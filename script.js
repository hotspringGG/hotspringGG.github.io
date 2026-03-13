document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Toggle Logic (i18n)
  const langToggleBtn = document.getElementById("lang-toggle");
  const i18nElements = document.querySelectorAll(".i18n");
  
  // Detect browser language or default to English
  let currentLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

  const updateLanguage = () => {
    i18nElements.forEach(el => {
      el.innerText = el.getAttribute(`data-${currentLang}`);
    });
    // Update button text to show the *other* language
    langToggleBtn.innerText = currentLang === 'en' ? '中文' : 'EN';
    document.documentElement.lang = currentLang;
  };

  // Initialize language
  updateLanguage();

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage();
  });

  // 2. Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Optional: stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the element is visible
  });

  revealElements.forEach(el => revealObserver.observe(el));
});