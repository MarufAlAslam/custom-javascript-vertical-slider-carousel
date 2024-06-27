// JavaScript STARTS FROM HERE

const carouselItems = document.querySelectorAll('.carousel-item');
const carousel = document.querySelector('.carousel');
carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index === 0) {
            carousel.style.transform = `translateY(-${(carouselItems.length - 2) * 104}%)`;
        }
        else if (index === carouselItems.length - 1) {
            carousel.style.transform = `translateY(-104%)`;
        }
        else {
            carousel.style.transform = `translateY(-${(index) * 104}%)`;
        }

        carouselItems.forEach((item) => {
            item.style.opacity = 1;
            item.classList.add('faded');
        });

        item.style.opacity = 1;
        item.classList.remove('faded');
    })

    carouselItems[0].addEventListener('click', () => {
        carouselItems[carouselItems.length - 2].style.opacity = 1;
        carouselItems[carouselItems.length - 2].classList.remove('faded');
    })

    carouselItems[carouselItems.length - 1].addEventListener('click', () => {
        carouselItems[1].style.opacity = 1;
        carouselItems[1].classList.remove('faded');
    })
});


// scroll to change
let scroll = 0;
window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        scroll += 104;
        if (scroll > (carouselItems.length - 1) * 104) {
            scroll = 0;
        }
    }
    else {
        scroll -= 104;
        if (scroll < 0) {
            scroll = (carouselItems.length - 1) * 104;
        }
    }

    carousel.style.transform = `translateY(-${scroll}%)`;

    carouselItems.forEach((item) => {
        item.style.opacity = 1;
        item.classList.add('faded');
    });

    carouselItems[scroll / 104].style.opacity = 1;
    carouselItems[scroll / 104].classList.remove('faded');
})


// keyboard arrow button to change

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        scroll += 104;
        if (scroll > (carouselItems.length - 1) * 104) {
            scroll = 0;
        }
    }
    else if (e.key === 'ArrowUp') {
        scroll -= 104;
        if (scroll < 0) {
            scroll = (carouselItems.length - 1) * 104;
        }
    }

    carousel.style.transform = `translateY(-${scroll}%)`;

    carouselItems.forEach((item) => {
        item.style.opacity = 1;
        item.classList.add('faded');
    });

    carouselItems[scroll / 104].style.opacity = 1;
    carouselItems[scroll / 104].classList.remove('faded');
})

// JavaScript ENDS HERE