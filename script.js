// Get the welcome popup element
const welcomePopup = document.getElementById('welcomePopup');

// Function to close the popup
function closePopup() {
    welcomePopup.style.display = 'none';
}

// Show the popup when the page loads
window.onload = function () {
    welcomePopup.style.display = 'flex';
};
