const scrollContainer = document.getElementById('categoryScroll');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const scrollAmount = 250; // px per click

nextBtn.addEventListener('click', () => {
   scrollContainer.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
   scrollContainer.scrollLeft -= scrollAmount;
});
