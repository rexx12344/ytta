const ucapan = "Habede, Dini. Semoga di usia yang bertambah ini, kamu senantiasa diberikan kesehatan, kebahagiaan, dan kemudahan dalam segala hal yang sedang kamu jalani. Aku berharap semua cita-cita dan impian yang sedang kamu kejar bisa tercapai satu per satu dengan lancar. Tetaplah menjadi pribadi yang baik dan terus memberikan dampak positif bagi orang-orang di sekitarmu. Selamat merayakan hari spesialmu, semoga tahun ini membawa banyak cerita indah dan kesuksesan yang lebih besar dari tahun sebelumnya.";

function mulaiSurat() {
    // Sembunyikan amplop
    document.querySelector('.pembungkus-amplop').style.display = 'none';
    
    // Tampilkan konten utama
    const konten = document.getElementById('konten-ultah');
    konten.classList.remove('tersembunyi');
    
    // Jalankan efek mengetik
    efekKetik(ucapan, "teks-ucapan", 40);
    
    // Jalankan animasi bintang
    setInterval(buatBintang, 300); // Sedikit dipercepat agar lebih ramai
}

function efekKetik(teks, elemenId, kecepatan) {
    let i = 0;
    const elemen = document.getElementById(elemenId);
    function mengetik() {
        if (i < teks.length) {
            elemen.innerHTML += teks.charAt(i);
            i++;
            setTimeout(mengetik, kecepatan);
        }
    }
    mengetik();
}

function buatBintang() {
    const bintang = document.createElement('div');
    bintang.classList.add('bintang');
    bintang.innerHTML = '✨';
    bintang.style.left = Math.random() * 100 + 'vw';
    bintang.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('wadah-bintang').appendChild(bintang);
    
    setTimeout(() => { bintang.remove(); }, 5000);
}
