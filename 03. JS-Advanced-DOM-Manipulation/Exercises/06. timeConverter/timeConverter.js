function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daySibling = days.nextElementSibling;
    daySibling.addEventListener('click', convertFromDays);
    let hoursSibling = hours.nextElementSibling;
    hoursSibling.addEventListener('click', convertFromHours);
    let minutesSibling = minutes.nextElementSibling;
    minutesSibling.addEventListener('click', convertFromMinutes);
    let secondsSibling = seconds.nextElementSibling;
    secondsSibling.addEventListener('click', convertFromSeconds);

    function convertFromDays() {
        let daysValue = days.value;
        let currentHours = daysValue * 24;
        let currentMinutes = currentHours * 60;
        let currentSeconds = currentMinutes * 60;

        hours.value = currentHours;
        minutes.value = currentMinutes;
        seconds.value = currentSeconds;
    }

    function convertFromHours() {
        let hoursValue = hours.value;
        let currentMinutes = hoursValue * 60;
        let currentSeconds = currentMinutes * 60;
        let currentDays = (hoursValue / 24);

        minutes.value = currentMinutes;
        seconds.value = currentSeconds;
        days.value = currentDays;
    }

    function convertFromMinutes() {
        let minutesValue = minutes.value;
        let currentSeconds = minutesValue * 60;
        let currentHours = (minutesValue / 60);
        let currentDays = (currentHours / 24);

        seconds.value = currentSeconds;
        hours.value = currentHours;
        days.value = currentDays;
    }

    function convertFromSeconds() {
        let secondsValue = seconds.value;
        let currentMinutes = (secondsValue / 60);
        let currentHours = (currentMinutes / 60);
        let currentDays = (currentHours / 24);

        minutes.value = currentMinutes;
        hours.value = currentHours;
        days.value = currentDays;
    }
}