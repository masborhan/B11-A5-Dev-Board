function updateDate() {
    const dateElement = document.getElementById('currentDate');
    const now = new Date();

    // Format the date as "Wed, Jul 28 2025"
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Update the content of the element
    dateElement.textContent = formattedDate;
}

// Call the function to set the initial date
updateDate();

// Update the date every day at midnight
setInterval(updateDate, 24 * 60 * 60 * 1000);