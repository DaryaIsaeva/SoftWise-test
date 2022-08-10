const addTimer = () => {
    const $timerContainer = $('.utility__timer span')

    let seconds = 10;
    
    const tick = () => {
        if (seconds > 0) {
            --seconds;
        }
        $timerContainer.text(seconds);
    }
    
    const timer = setInterval(tick, 1000);
}

export { addTimer };