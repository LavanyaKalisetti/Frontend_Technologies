let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

const clockDisplay = document.getElementById('clock-display');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);
resetButton.addEventListener('click', resetClock);

function startClock() {
    if (intervalId === null) {
        intervalId = setInterval(updateClock, 1000);
    }
}

function stopClock() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetClock() {
    stopClock();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateClockDisplay();
}

function updateClock() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    updateClockDisplay();
}

function updateClockDisplay() {
    const hoursString = String(hours).padStart(2, '0');
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');
    clockDisplay.textContent = `${hoursString}:${minutesString}:${secondsString}`;
}

// Using setTimeout to delay the start of the clock
setTimeout(startClock, 5000);    // Start the clock after 5 seconds

// Using asynchronous functions to update the clock
async function updateClockAsync() {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        updateClock();
    }
}