document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('lang-select');
  const langToggle = document.getElementById('lang-toggle');
  const browserLang = navigator.language.slice(0, 2); // "en", "ru", "fr" и т.д.
  
  const savedLang = localStorage.getItem('lang') || browserLang || 'ru';

  setLanguage(savedLang);

  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  if (langToggle) {
    langToggle.textContent = savedLang === 'ru' ? 'EN' : 'RU';
    langToggle.addEventListener('click', () => {
      const newLang = localStorage.getItem('lang') === 'ru' ? 'en' : 'ru';
      setLanguage(newLang);
      langToggle.textContent = newLang === 'ru' ? 'EN' : 'RU';
    });
  }
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
}
