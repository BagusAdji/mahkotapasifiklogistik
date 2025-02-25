// const header = document.getElementById('header');
// const navbar = document.getElementById('navbar');
// const scrollThreshold = 400; // Jarak scroll untuk mengubah warna navbar

// window.addEventListener('scroll', () => {
//     if (window.scrollY > scrollThreshold) {
//         header.classList.add('scroll-header');
//         navbar.classList.add('scroll-navbar');
//     } else {
//         header.classList.remove('scroll-header');
//         navbar.classList.remove('scroll-navbar');
//     }
// });

function showHero(heroNumber) {
    const heroes = document.querySelectorAll('.hero-item');
    const buttons = document.querySelectorAll('.nav-hero-number');

    heroes.forEach((hero, index) => {
        hero.classList.toggle('active', index === heroNumber - 1);
    });

    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === heroNumber - 1);
    });
}

const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats');

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCount, 10);
            } else {
                stat.textContent = target;
            }
        };

        updateCount();
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

statsObserver.observe(statsSection);

const testimoniList = document.querySelector('.testimoni-list');
const testimoniItems = document.querySelectorAll('.testimoni-item');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const dots = document.querySelectorAll('.testimoni-dots li');

let currentIndex = 0;
const totalItems = testimoniItems.length;

function updateSlider() {
    testimoniList.style.left = `-${currentIndex * 100}%`;

    document.querySelector('.testimoni-dots li.active').classList.remove('active');
    dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

window.addEventListener('resize', updateSlider);

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reason-right-item, .reason-left-text, .reason-left-button, .reason-left-image, .reason-right-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);       
            }
        });
    }, { 
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.forEach((el) => observer.observe(el));
});


// function checkScroll() {
//     const elements = document.querySelectorAll(".reason-right-item, .reason-left, .reason-right-text"); // Pilih dua class

//     elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.75) {
//             el.classList.add("show");
//         }
//     });
// }

// // Jalankan saat halaman discroll
// window.addEventListener("scroll", checkScroll);
// window.addEventListener("load", checkScroll);

