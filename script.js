//Definiton der Uhrzeiger sowie des Dropdown-Menüs
const hourHand = document.querySelector('.hour-hand'); //Stundenzeiger
const minuteHand = document.querySelector('.minute-hand'); //Minutenzeiger
const secondHand = document.querySelector('.second-hand'); //Sekundenzeiger
const timezoneSelect = document.getElementById('timezone'); //Dropdown-Menü

let selectedTimezone = 'UTC';// Standardmäßig auf UTC eingestellt

//Funktion zum Setzen der Uhrzeit entsprechend der ausgewählten Zeitzone
function setDate() {
    const now = new Date();

    //Zeit in der ausgewählten Zeitzone
    const localeTime = now.toLocaleString('en-US', { timeZone: selectedTimezone });
    const time = new Date(localeTime);

    //Sekunden ermitteln und auf Zeiger anwenden
    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    //Minuten ermitteln und auf Zeiger anwenden
    const minutes = time.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //Stunden ermitteln und auf Zeiger anwenden
    const hours = time.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

//Event-Listener, um bei Auswahl einer anderen Zeitzone direkt die Anzeige zu ändern
timezoneSelect.addEventListener('change', (event) => {
    selectedTimezone = event.target.value;
    setDate(); // Update die Uhr sofort nach Auswahl einer neuen Zeitzone
});

setInterval(setDate, 1000); //Aktualisiere die Uhr jede Sekunde

setDate(); //Sofort die aktuelle Uhrzeit einstellen
