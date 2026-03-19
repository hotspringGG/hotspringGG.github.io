document.addEventListener("DOMContentLoaded", () => {
  // 语言切换
  const langToggleBtn = document.getElementById("lang-toggle");
  const i18nElements = document.querySelectorAll(".i18n");
  let currentLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

  const updateLanguage = () => {
    i18nElements.forEach(el => {
      // 优先从 data 属性获取内容
      const text = el.getAttribute(`data-${currentLang}`);
      if (text) el.innerText = text;
    });
    langToggleBtn.innerText = currentLang === 'en' ? '中文' : 'EN';
  };
  updateLanguage();

  langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateLanguage();
  });

  // 滚动进入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});