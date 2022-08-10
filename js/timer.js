const timerContainer = document.querySelector('.utility__timer span')

let seconds = 10;

const tick = () => {
    if (seconds > 0) {
        --seconds;
    }
    timerContainer.textContent = `${seconds} seconds`;
}

const timer = setInterval(tick, 1000);