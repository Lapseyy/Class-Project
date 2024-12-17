let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const toggleSlideshowButton = document.getElementById('toggleSlideshow');
const slideshowWrapper = document.getElementById('slideshowWrapper');
let interval = 5000; //Pre slide duration
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function autoSlide() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, interval);
}

function toggleSlideshow() {
    if (slideshowWrapper.classList.contains('minimized')) {
        slideshowWrapper.classList.remove('minimized');
        slideshowWrapper.classList.add('expanded');
        toggleSlideshowButton.textContent = 'Hide Slideshow';
    } else {
        slideshowWrapper.classList.remove('expanded');
        slideshowWrapper.classList.add('minimized');
        toggleSlideshowButton.textContent = 'Show Slideshow';
    }
}


showSlide(currentSlide);
autoSlide();
toggleSlideshowButton.addEventListener('click', toggleSlideshow);
