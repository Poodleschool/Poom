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
    const commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() !== '') {
        const commentsList = document.getElementById('commentsList');
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.textContent = commentInput;
        commentsList.appendChild(commentElement);
        document.getElementById('commentInput').value = '';
    }
}

