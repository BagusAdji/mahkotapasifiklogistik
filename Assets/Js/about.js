let nums = document.querySelectorAll(".count");
let container = document.querySelector(".counter-wrapper");

// Fungsi animasi counter
function startCounter(entry) {
    let e = entry.target;
    let start = 0;
    let end = parseInt(e.dataset.target); // Ambil target angka
    let speed = Math.ceil(end / 100); // Atur kecepatan animasi

    let count = setInterval(() => {
        start += speed;
        e.textContent = start;
        if (start >= end) {
            e.textContent = end; // Pastikan angka berhenti di target
            clearInterval(count);
        }
    }, 20);
}

// Menggunakan Intersection Observer
let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            let counterText = entry.target;
            if (entry.isIntersecting) {
                // Jika elemen masuk viewport, mulai animasi
                startCounter(entry);
            } else {
                // Jika elemen keluar dari viewport, reset ke 0
                counterText.textContent = "0";
            }
        });
    },
    { threshold: 0.5 } 
);

nums.forEach((num) => observer.observe(num));


document.addEventListener("DOMContentLoaded", function () {
    const textSection = document.querySelector(".container-about2-text");
    const imageSection = document.querySelector(".container-about2-image");
    const imgSection = document.querySelector(".about-footer2-image");
    const txtSection = document.querySelector(".about-footer2-text");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8; // 80% dari viewport

        const textTop = textSection.getBoundingClientRect().top;
        const imageTop = imageSection.getBoundingClientRect().top;
        const imgTop = imgSection.getBoundingClientRect().top;
        const txtTop = txtSection.getBoundingClientRect().top;

        if (textTop < triggerBottom) {
            textSection.classList.add("show");
        }

        if (imageTop < triggerBottom) {
            imageSection.classList.add("show");
        }

        if (imgTop < triggerBottom) {
            imgSection.classList.add("show");
        }

        if (txtTop < triggerBottom) {
            txtSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat pertama kali jika elemen sudah terlihat
});

document.addEventListener("DOMContentLoaded", function () {
    const footerSection = document.querySelector(".about-footer1");

    // Membuat observer untuk mendeteksi ketika elemen muncul di viewport
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class show saat elemen terlihat
                footerSection.classList.add("show");
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi terjadi
            }
        });
    }, {
        threshold: 0.4 // Animasi mulai ketika 10% elemen terlihat
    });

    observer.observe(footerSection); // Mulai observasi elemen .about-footer1
});
