const qElements = document.querySelectorAll('.q');

qElements.forEach((q, index) => {
    q.addEventListener('click', () => {
        const a = q.nextElementSibling; // Elemen .a setelah .q
        const kotak = q.querySelector('.kotak');
        const arrow = q.querySelector('.arrow');

        // Toggle class untuk menampilkan jawaban
        a.classList.toggle('a-opened');
        kotak.classList.toggle('kotak-active');
        arrow.classList.toggle('arrow-rotated');

        // Tutup semua selain yang diklik
        qElements.forEach((otherQ, otherIndex) => {
            if (otherIndex !== index) {
                otherQ.nextElementSibling.classList.remove('a-opened');
                otherQ.querySelector('.kotak').classList.remove('kotak-active');
                otherQ.querySelector('.arrow').classList.remove('arrow-rotated');
            }
        });
    });
});
