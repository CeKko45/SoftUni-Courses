function attachEventsListeners() {
    // config
    const RATIOS = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    // helper methods
    function convert(value, unit) {
        const inDays = value / RATIOS[unit];
        return {
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds
        };
    }

    function onConvert(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            //get input
            const input = e.target.parentElement.querySelector("input[type='text']");

            //get time
            const time = convert(Number(input.value), input.id);
            daysInput.value = time.days;
            hoursInput.value = time.hours;
            mintesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }
    }

    // get elements
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const mintesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    // event listener setup
    document.querySelector("main").addEventListener("click", onConvert);
}