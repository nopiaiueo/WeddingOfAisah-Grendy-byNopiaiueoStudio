// 1. Elemen HTML
const openBtn = document.getElementById('open-btn');
const cover = document.getElementById('cover');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

let isPlaying = false;

// 2. Fungsi Buka Undangan & Putar Musik
openBtn.addEventListener('click', () => {
  // Sembunyikan Cover
  cover.style.display = 'none';
  
  // Tampilkan Konten Utama
  mainContent.classList.remove('hidden');
  
  // Putar Musik
  bgMusic.play();
  isPlaying = true;
});

// 3. Tombol Toggle Play/Pause Musik
musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.innerText = '🔇';
  } else {
    bgMusic.play();
    isPlaying = true;
    musicBtn.innerText = '🎵';
  }
});

// 4. Logika Hitung Mundur (Countdown Timer)
const targetDate = new Date('April 26, 2026 08:00:00').getTime();

const updateCountdown = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    clearInterval(updateCountdown);
    document.querySelector('.countdown').innerHTML = "<h3>Acara Telah Berlangsung!</h3>";
    return;
  }

  // Hitung Hari, Jam, Menit, Detik
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Tampilkan ke Elemen HTML
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}, 1000);
