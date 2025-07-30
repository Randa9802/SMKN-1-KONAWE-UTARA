function tambahMenu(menuId) {
    // Sembunyikan semua konten
    document.getElementById('VisiMisiContent').style.display = 'none';
    document.getElementById('ProfilSekolahContent').style.display = 'none';
    document.getElementById('ProgramKeahlianContent').style.display = 'none';

    // Tampilkan konten yang dipilih
    const target = document.getElementById(menuId);
    if (target) {
        target.style.display = 'block';

        // Scroll halus ke konten
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnVisiMisi').addEventListener('click', function () {
        tambahMenu('VisiMisiContent');
    });

    document.getElementById('btnProfilSekolah').addEventListener('click', function () {
        tambahMenu('ProfilSekolahContent');
    });

    document.getElementById('btnProgramKeahlian').addEventListener('click', function () {
        tambahMenu('ProgramKeahlianContent');
    });
});