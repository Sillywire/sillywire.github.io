// nav
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.pane').forEach(p=>p.classList.remove('active'));
    a.classList.add('active');
    document.getElementById('pane-'+a.dataset.pane).classList.add('active');
  });
});

// clock
function tick() {
    document.getElementById('clock').textContent =
    new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',timeZone:'Europe/Oslo'});
}
tick(); setInterval(tick,1000);