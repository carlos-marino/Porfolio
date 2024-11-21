function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function showFooterDate() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let daysPassed = Math.floor((now - new Date(2024, 8, 16)) / (1000 * 60 * 60 * 24));
    document.getElementById('footer-date').innerHTML = `Data d'avui: ${date}<br>Dies passats des del 16 de setembre de 2024: ${daysPassed}`;
}

updateClock();  
setInterval(updateClock, 1000);  
showFooterDate();  