// Get the toggle switch element
const toggleSwitch = document.getElementById('mode-toggle');

// Add an event listener to toggle the dark mode
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});
