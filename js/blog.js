const blogFilters = document.querySelectorAll('.blog-filter');
const blogCards = document.querySelectorAll('.blog-card');

blogFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const selectedCategory = filter.dataset.filter;

        blogFilters.forEach((button) => button.classList.toggle('active', button === filter));
        blogCards.forEach((card) => {
            card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
        });
    });
});
