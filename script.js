// JavaScript functionality will be added based on Figma design requirements
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.slider-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const progressFill = document.querySelector('.progress-fill');

    let currentIndex = 0;
    const cardsPerView = 3.5;
    const totalSlides = Math.ceil(cards.length - cardsPerView);

    function updateSlider() {
        const cardWidth = 100 / cardsPerView;
        const translateX = currentIndex * cardWidth;
        
        // Update track position
        track.style.transform = `translateX(-${translateX}%)`;
        
        // Update progress bar
        progressFill.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;

        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= totalSlides ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initialize slider
    updateSlider();
}); 