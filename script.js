const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card[data-category]');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  cards.forEach((card) => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
