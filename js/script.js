document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-btn');
  const cover = document.getElementById('cover');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');

  let isPlaying = false;

  // 1. Fungsi Buka Undangan
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Sembunyikan Cover & Tampilkan Konten
      if (cover) cover.style.display = 'none';
      if (mainContent) mainContent.classList.remove('hidden');

      // Coba putar musik (kalau gagal/diblokir browser, web tetap bisa terbuka)
      if (bgMusic) {
        bgMusic.play().then(() => {
          isPlaying = true;
          if (musicBtn) musicBtn.innerText = '🎵';
        }).catch(err => {
          console.log("Audio diblokir browser:", err);
        });
      }
    });
  }

  // 2. Tombol Play/Pause Musik
  if (musicBtn) {
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
  }

  // 3. Logika Countdown Timer
  const targetDate = new Date('April 26, 2026 08:00:00').getTime();

  const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      clearInterval(updateCountdown);
      const timerBox = document.querySelector('.countdown');
      if (timerBox) timerBox.innerHTML = "<h3>Acara Telah Berlangsung!</h3>";
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const d = document.getElementById('days');
    const h = document.getElementById('hours');
    const m = document.getElementById('minutes');
    const s = document.getElementById('seconds');

    if (d) d.innerText = days;
    if (h) h.innerText = hours < 10 ? '0' + hours : hours;
    if (m) m.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (s) s.innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
});
