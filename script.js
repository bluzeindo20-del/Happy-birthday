

// Confetti sederhana
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 20; i++) {
    let conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.animationDuration = (Math.random() * 3 + 2) + 's';
    conf.style.background = ['#ff69b4', '#ffc0cb', '#ffe4e1'][Math.floor(Math.random()*3)];
    document.body.appendChild(conf);
  }
});

// 🎶 Musik Global
const music = document.getElementById('bg-music');
const btn = document.getElementById('music-btn');
music.volume = 0.8;
music.play();

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.textContent = '⏸ Musik';
  } else {
    music.pause();
    btn.textContent = '▶️ Musik';
  }
});



// 🎊 Confetti (optional)
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 20; i++) {
    let conf = document.createElement('div');
    conf.classList.add('confetti');
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.animationDuration = (Math.random() * 3 + 2) + 's';
    conf.style.background = ['#ff69b4', '#ffc0cb', '#ffe4e1'][Math.floor(Math.random()*3)];
    document.body.appendChild(conf);
  }
});
