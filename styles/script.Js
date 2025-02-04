// WORD

let words = document.querySelectorAll(".word");

words.forEach(word => {
  let letters = word.textContent.split("");
  word.textContent = "";

  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";

    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";

  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";

    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 4000);

// PORTOFOLIO
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', filterPortfolios);
});

function filterPortfolios() {
  const filter = this.dataset.filter;

  // Hapus kelas active dari semua tombol
  filterBtns.forEach((b) => b.classList.remove('active'));

  // Tambahkan kelas active pada tombol yang diklik
  this.classList.add('active');

  // Tampilkan atau sembunyikan item portfolio berdasarkan filter
  portfolioItems.forEach((item) => {
    if (filter === 'all' || item.classList.contains(filter)) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

// SERTIFICATE GALLERY

document.querySelectorAll('.gallery-item').forEach(item => {
  let currentIndex = 0;
  const images = item.querySelectorAll('.gallery-images img');

  // Pastikan hanya memulai animasi jika ada lebih dari satu gambar
  if (images.length <= 1) {
    images[0]?.classList.add('active');
    return;
  }

  // Inisialisasi gambar pertama sebagai active
  images[currentIndex].classList.add('active');

  setInterval(() => {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % images.length;

    // Transisi fade antar gambar
    images[previousIndex].classList.remove('active');
    images[currentIndex].classList.add('active');
  }, 3000);
});

