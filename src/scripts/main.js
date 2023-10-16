
const eventData = new Date("Mar 13, 2024 18:00:00");
const eventDataTimeStamp = eventData.getTime();
const elem = document.getElementById('niverData');

//Set interval, trigger function each 1 second
const timeOffset = setInterval(() => {
    const currentTime = new Date();
    const currentTimestamp = currentTime.getTime();
    const timeOffsetBetweenDates = eventDataTimeStamp - currentTimestamp;
    const daysInMs = 1000 * 3600 * 24;
    const hoursInMs = 1000 * 3600;
    const minutesInMs = 1000 * 60;
    //getDays
    const daysToEvent   = Math.floor(timeOffsetBetweenDates / daysInMs);
    //getHours
    const hoursToEvent  = Math.floor((timeOffsetBetweenDates % daysInMs) / hoursInMs);
    //getMinutes
    const minutesToEvent  = Math.floor((timeOffsetBetweenDates % hoursInMs) / minutesInMs);
    //getSeconds
    const secondsToEvent  = Math.floor((timeOffsetBetweenDates % minutesInMs) / 1000);
    elem.innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s `;

    if(timeOffsetBetweenDates < 0) {
        clearInterval(timeOffset);
        elem.innerHTML = "Já ta Sendo Celebrado, Vamos lá 🎉";
    }
}, 1000);