document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-img');
  
    // Tambahkan event listener untuk setiap gambar dalam galeri
    galleryImages.forEach(image => {
      image.addEventListener('click', function() {
        this.classList.toggle('enlarged'); // Menambah atau menghapus class 'enlarged' pada klik
      });
    });
  });
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Menambahkan event listener untuk setiap tautan
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default tautan

    const targetId = this.getAttribute('href'); // Mendapatkan ID tujuan dari tautan
    const targetElement = document.querySelector(targetId); // Mendapatkan elemen tujuan

    if (targetElement) {
      // Menggunakan smooth scroll ke elemen tujuan
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Menampilkan atau menyembunyikan tombol berdasarkan posisi scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll ke atas saat tombol diklik
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});