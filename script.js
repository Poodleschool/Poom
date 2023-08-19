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
function addComment() {
    const displayName = 'John Doe'; // Replace with user's display name
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() !== '') {
        const commentsList = document.getElementById('commentsList');
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <span class="display-name">${displayName}:</span>
            <p>${commentInput}</p>`;
        commentsList.appendChild(commentElement);
        document.getElementById('commentInput').value = '';
    }
}


