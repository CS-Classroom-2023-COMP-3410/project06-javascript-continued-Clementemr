document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("toggle-dark-mode");
    const colorPicker = document.getElementById("color-picker");
    const backgroundPicker = document.getElementById("background-picker");
    const toggleFormat = document.getElementById("toggle-format");
    const clock = document.getElementById("clock");
    const timezoneSelect = document.getElementById("timezone-select");
    const weatherDisplay = document.getElementById("weather-display");
    const pomodoroStart = document.getElementById("start-pomodoro");
    const pomodoroReset = document.getElementById("reset-pomodoro");
    const fullScreenButton = document.getElementById("fullscreen-button");
    const alarmSoundInput = document.getElementById("alarm-sound-input");
    const timeAnnounceToggle = document.getElementById("time-announce-toggle");
    const funFactDisplay = document.getElementById("fun-fact-display");
    let is24HourFormat = false;

    const historicalEvents = {
        "00": "1801 - The United Kingdom and Ireland were formally joined.",
        "01": "1962 - The US Navy SEALs were established.",
        "02": "1492 - Christopher Columbus set sail from Spain.",
        "03": "2004 - NASA's Opportunity rover confirmed signs of past water on Mars.",
        "04": "1957 - The Soviet Union launched Sputnik 1, the first artificial satellite.",
        "05": "1971 - The first email was sent.",
        "06": "1986 - The space shuttle Challenger disaster occurred.",
        "07": "1920 - The League of Nations was established.",
        "08": "1941 - Japan attacked Pearl Harbor, leading to US involvement in WWII.",
        "09": "1969 - Apollo 11 astronauts walked on the Moon.",
        "10": "1920 - Women in the US gained the right to vote.",
        "11": "1989 - The Berlin Wall fell, marking the end of the Cold War.",
        "12": "1863 - Abraham Lincoln delivered the Gettysburg Address.",
        "13": "2008 - Barack Obama was elected the first African-American US President.",
        "14": "1848 - The California Gold Rush began.",
        "15": "1945 - The United Nations was established.",
        "16": "1955 - Disneyland opened in California.",
        "17": "1963 - The first episode of Doctor Who aired on the BBC.",
        "18": "1903 - The Wright brothers made their first successful flight.",
        "19": "1933 - The 21st Amendment ended Prohibition in the United States.",
        "20": "1969 - The first Concorde test flight was conducted.",
        "21": "1984 - Apple introduced the Macintosh computer.",
        "22": "1991 - The Soviet Union was formally dissolved.",
        "23": "2000 - The last original Peanuts comic strip was published."
    };

    function updateFunFact() {
        const now = new Date();
        const currentHour = now.getHours().toString().padStart(2, "0");
        funFactDisplay.innerText = historicalEvents[currentHour] || "No historical event recorded for this hour.";
    }

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        document.getElementById("clock-container").classList.toggle("dark-mode");
    }

    function updateClockColor() {
        clock.style.color = colorPicker.value;
    }

    function updateBackgroundColor() {
        document.body.style.backgroundColor = backgroundPicker.value;
    }

    function updateClock() {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString([], { hour12: !is24HourFormat });
        updateFunFact();
    }

    darkModeToggle.addEventListener("change", toggleDarkMode);
    colorPicker.addEventListener("input", updateClockColor);
    backgroundPicker.addEventListener("input", updateBackgroundColor);
    toggleFormat.addEventListener("change", () => {
        is24HourFormat = toggleFormat.checked;
        updateClock();
    });
    fullScreenButton.addEventListener("click", () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    });
    setInterval(updateClock, 1000);
    updateClock();
});
