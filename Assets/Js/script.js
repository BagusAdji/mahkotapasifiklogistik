const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
function showHero(heroNumber) {
   const heroes = document.querySelectorAll('.hero-item');
   const buttons = document.querySelectorAll('.nav-hero span');

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
const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
           animateStats();
           observer.unobserve(entry.target);
       }
   });
});

observer.observe(statsSection);