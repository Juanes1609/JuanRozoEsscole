
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'flex' : 'none';
        });
    }

    prevButton.addEventListener('click', () => {
        currentItem = (currentItem > 0) ? currentItem - 1 : items.length - 1;
        showItem(currentItem);
    });

    nextButton.addEventListener('click', () => {
        currentItem = (currentItem < items.length - 1) ? currentItem + 1 : 0;
        showItem(currentItem);
    });

    showItem(currentItem);
});



