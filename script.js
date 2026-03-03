function updateTime() {
    const now = new Date();
    
    // Format the time for the main display (e.g., "10:45:32 AM")
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    // Format the date for the display below the time (e.g., "Monday, Oct 24, 2023")
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Format short time for the navbar
    const navTimeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const timeString = timeFormatter.format(now);
    const dateString = dateFormatter.format(now);
    const navTimeString = navTimeFormatter.format(now);

    const mainTimeDisplay = document.getElementById('mainTime');
    const mainDateDisplay = document.getElementById('mainDate');
    const navTimeDisplay = document.getElementById('navTime');

    if (mainTimeDisplay) mainTimeDisplay.textContent = timeString;
    if (mainDateDisplay) mainDateDisplay.textContent = dateString;
    if (navTimeDisplay) navTimeDisplay.textContent = navTimeString + ' / LOCAL';
}

// Update the time immediately on load
updateTime();

// Update the time every 1000ms (1 second)
setInterval(updateTime, 1000);
