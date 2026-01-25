const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;


if (!html.dataset.theme) html.dataset.theme = 'light';

toggle.addEventListener('click', () => {
  html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
});
