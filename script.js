let discordIcon = document.getElementById('discord')

discordIcon.addEventListener('click', discord)

function discord() {
    alert('My discord is " the.silly.kind "')
}

// Returns a Date object representing the current time in GMT+1 (UTC+1).
function dateInGMTPlus1(now = new Date()) {
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
    const targetMs = utcMs + 1 * 60 * 60 * 1000; // +1 hour
    return new Date(targetMs);
}

// Returns a formatted string "YYYY-MM-DD HH:mm:ss" for GMT+1.
function formatDateInGMTPlus1(now = new Date()) {
    const d = dateInGMTPlus1(now);
    const pad = n => String(n).padStart(2, '0');
    return `${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function displayMyTime() {
    headerLeft = document.getElementById('headerLeft')
    headerLeft.innerHTML = ''  // Clear previous time
    const myTime = document.createElement('h1')
    myTime.textContent = 'My local time is: ' + formatDateInGMTPlus1()
    headerLeft.appendChild(myTime)
}

displayMyTime()  // Initial call

setInterval(() => {
    displayMyTime()
}, 1000);
