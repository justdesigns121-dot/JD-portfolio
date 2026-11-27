const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card[data-category]');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const category = button.dataset.filter;
  cards.forEach((card) => {
    const visible = category === 'all'
      ? card.dataset.category === 'digital'
      : card.dataset.category === category;
    card.hidden = !visible;
  });
}));
// Apply the default ALL view on initial page load.
document.querySelector('.filter[data-filter="all"]')?.click();
