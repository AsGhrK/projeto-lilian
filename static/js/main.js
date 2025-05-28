// Atualize seu arquivo main.js
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-items');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const itemWidth = 270; // Largura do item + margem
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const maxIndex = items.length - visibleItems;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        // Desabilitar botões quando chegar nos extremos
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }
    
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Inicializar
    updateCarousel();
});