const hourHand = document.querySelector('.hour-hand'); 
const minuteHand = document.querySelector('.minute-hand'); 
const secondHand = document.querySelector('.second-hand'); 
const timezoneSelect = document.getElementById('timezone'); 

let selectedTimezone = 'UTC';

function setDate() {
    const now = new Date();

    const localeTime = now.toLocaleString('en-US', { timeZone: selectedTimezone });
    const time = new Date(localeTime);

    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = time.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = time.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

timezoneSelect.addEventListener('change', (event) => {
    selectedTimezone = event.target.value;
    setDate(); 
});

setInterval(setDate, 1000); 

setDate(); 
