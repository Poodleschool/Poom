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
const commentsList = document.getElementById('commentsList');
const displayNameElement = document.getElementById('displayName');

// Load the display name from localStorage when the page loads
const savedDisplayName = localStorage.getItem('displayName');
const displayName = savedDisplayName ? savedDisplayName : 'John Doe'; // Default if not set
displayNameElement.value = displayName;

function addComment() {
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() !== '') {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <span class="display-name">${displayName}:</span>
            <p>${commentInput}</p>`;
        commentsList.appendChild(commentElement);
        document.getElementById('commentInput').value = '';
        saveDisplayName(); // Save display name after posting a comment
    }
}

// Save the display name to localStorage when changed
function saveDisplayName() {
    const newDisplayName = displayNameElement.value;
    localStorage.setItem('displayName', newDisplayName);
}
