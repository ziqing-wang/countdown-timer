const dayEl = document.querySelector('.day');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

const formatTime = (number) => {
    if (number < 10) return `0${number}`;
    else return number;
}

const init = () => {
    dayEl.innerText = 0;
    hoursEl.innerText = 0;
    minutesEl.innerText = 0;
    secondsEl.innerText = 0;
}

const countdown = () => {
    const deadline = new Date('2021 June 31, 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = deadline - now;

    if (gap <= 0) { init(); return; }

    // Define the time 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculator the date 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor(gap % day / hour);
    const textMinute = Math.floor(gap % hour / minute);
    const textSecond = Math.floor(gap % minute / second);

    // Update the time 
    dayEl.innerText = formatTime(textDay);
    hoursEl.innerText = formatTime(textHour);
    minutesEl.innerText = formatTime(textMinute);
    secondsEl.innerText = formatTime(textSecond);
}
setInterval(countdown, 1000)