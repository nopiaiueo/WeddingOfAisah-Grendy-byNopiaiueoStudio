// Menunggu semua komponen web siap
document.addEventListener('DOMContentLoaded', () => {

  const openBtn = document.getElementById('open-btn');
  const cover = document.getElementById('cover');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');

  let isPlaying = false;

  // 1. Fungsi Buka Undangan & Putar Musik
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      cover.style.display = 'none';
      mainContent.classList.remove('hidden');
      
      bgMusic.play().then(() => {
        isPlaying = true;
      }).catch(err => {
        console.log("Audio play failed:", err);
      });
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
  const targetDate = new Date('Desember 5, 2026 08:00:00').getTime();

  const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      clearInterval(updateCountdown);
      const timerContainer = document.querySelector('.countdown');
      if (timerContainer) {
        timerContainer.innerHTML = "<h3>Acara Telah Berlangsung!</h3>";
      }
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);

});
