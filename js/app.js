{/* <script> */ }
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;
    let isScrolling = false;

    // Function to update the carousel position
    function updateCarousel() {
        const offset = currentIndex * 104;
        carousel.style.transform = `translateY(-${offset}%)`;

        carouselItems.forEach((item, index) => {
            item.style.opacity = 1;
            item.classList.add('faded');
        });

        carouselItems[currentIndex].style.opacity = 1;
        carouselItems[currentIndex].classList.remove('faded');
    }

    // Handle click events on carousel items
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Handle scroll events
    carousel.addEventListener('wheel', function (event) {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            // Scrolling down
            currentIndex = (currentIndex + 1) % carouselItems.length;
        } else {
            // Scrolling up
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        }

        updateCarousel();

        setTimeout(() => {
            isScrolling = false;
        }, 600); // Adjust delay to match your CSS transition duration
    });

    // Handle keyboard arrow events
    window.addEventListener('keydown', (e) => {
        if (isScrolling) return;
        isScrolling = true;

        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % carouselItems.length;
        } else if (e.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        }

        updateCarousel();

        setTimeout(() => {
            isScrolling = false;
        }, 600); // Adjust delay to match your CSS transition duration
    });

    // Initial update
    updateCarousel();
});

{/* </script> */ }