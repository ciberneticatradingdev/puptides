/* ═══ PUPTIDES — premium white lab ═══ */

/* Contract address — update at launch */
const CA = 'CrL92PP6U1WEij73HNd8YVbHYH8K7qeVtSidyUmapump';

/* CA box + buy/chart buttons */
const caText = document.getElementById('caText');
const caCopy = document.getElementById('caCopy');
if (CA) {
  caText.textContent = CA;
  const pump = `https://pump.fun/coin/${CA}`;
  document.getElementById('buyBtn').href = pump;
  document.getElementById('buyBtnNav').href = pump;
  document.getElementById('chartBtn').href = `https://dexscreener.com/solana/${CA}`;
}
caCopy.addEventListener('click', () => {
  if (!CA) {
    caCopy.textContent = 'SOON™';
    setTimeout(() => (caCopy.textContent = 'COPY'), 1200);
    return;
  }
  navigator.clipboard.writeText(CA).then(() => {
    caCopy.textContent = 'COPIED';
    setTimeout(() => (caCopy.textContent = 'COPY'), 1200);
  });
});

/* Marquee — duplicate track for seamless loop */
const track = document.getElementById('marqueeTrack');
track.innerHTML += track.innerHTML;

/* Scroll reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* Click the doge → WOOF */
const doge = document.getElementById('doge');
const WOOFS = ['WOOF', 'WOOF!', 'BORK', 'AWOO', 'GAINS', 'SCIENCE!'];
doge.addEventListener('click', (ev) => {
  const w = document.createElement('div');
  w.className = 'woof-float';
  w.textContent = WOOFS[Math.floor(Math.random() * WOOFS.length)];
  w.style.left = ev.clientX - 30 + 'px';
  w.style.top = ev.clientY - 20 + 'px';
  document.body.appendChild(w);
  setTimeout(() => w.remove(), 1100);
});
