document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 1000, once: false });

  const openBtn = document.getElementById('open-btn');
  const cover = document.getElementById('cover');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-btn');

  let isPlaying = false;

  // Fungsi Buka Undangan saat Klik Open Invitation
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Efek slide cover ke atas
      cover.style.transform = 'translateY(-100vh)';
      cover.style.opacity = '0';

      setTimeout(() => {
        cover.style.display = 'none';
        mainContent.classList.remove('hidden');
        AOS.refresh();
      }, 800);

      // Putar Musik
      if (bgMusic) {
        bgMusic.play().then(() => { isPlaying = true; }).catch(err => console.log(err));
      }
    });
  }

  // Kontrol Musik
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
        musicBtn.classList.remove('spinning');
        musicBtn.innerText = '🔇';
      } else {
        bgMusic.play();
        isPlaying = true;
        musicBtn.classList.add('spinning');
        musicBtn.innerText = '🎵';
      }
    });
  }

  // Countdown Timer
  const targetDate = new Date('December 5, 2026 08:00:00').getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
      document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
      document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60)) / (1000 * 60));
      document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
    }
  }, 1000);
});

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert('Nomor rekening/e-wallet berhasil disalin!');
}
