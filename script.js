const header_menu = document.getElementById('header_menu');
const toggle_header_menu = document.getElementById('toggle_header-menu');
const header_nav = document.getElementById('header_nav');

/* toggle menu */
header_nav.addEventListener('click', () => {
    header_menu.classList.toggle('open_menu');
    header_menu.classList.toggle('close_menu');
    toggle_header_menu.classList.toggle('toggle_open');
    toggle_header_menu.classList.toggle('toggle_close');
})
/* carusel */
const carousel = document.getElementById('carousel');
const leftButton = document.getElementById('carousel_left');
const rightButton = document.getElementById('carousel_right');
let currentIndex = 0;

const items = carousel.children;
const totalItems = items.length;
const itemsToScroll = window.innerWidth > 768 ? 3 : 6; 
const itemWidth = 220; 

function updateButtons() {
    leftButton.disabled = currentIndex === 0;
    rightButton.disabled = currentIndex >= totalItems - itemsToScroll;
}


function moveLeft() {
    if (currentIndex > 0) {
        currentIndex -= itemsToScroll;
        updateCarousel();
    }
}


function moveRight() {
    if (currentIndex < totalItems - itemsToScroll) {
        currentIndex += itemsToScroll;
        updateCarousel();
    }
}


function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    carousel.style.transition = 'transform 0.3s ease-in-out';
    updateButtons();
}


leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);


window.addEventListener('resize', () => {
    // Сбрасываем индекс и обновляем карусель
    currentIndex = 0;
    updateCarousel();
});

updateButtons();
/*Date*/
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
setInterval(() => {
    const date = new Date();
    const newYear = new Date(2024, 11, 31, 23, 59, 59);
    days.textContent = newYear.getDate() - date.getDate();
    hours.textContent = newYear.getHours() - date.getHours();
    minutes.textContent = newYear.getMinutes() - date.getMinutes();
    seconds.textContent = newYear.getSeconds() - date.getSeconds();
}, 1000);
