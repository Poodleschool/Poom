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

// Load the display name from localStorage when the page loads
const savedDisplayName = localStorage.getItem('displayName');
const displayName = savedDisplayName ? savedDisplayName : 'John Doe'; // Default if not set
const displayNameElement = document.getElementById('displayName');
displayNameElement.value = displayName;

// Load comments from localStorage when the page loads
const savedComments = localStorage.getItem('comments');
if (savedComments) {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = savedComments;
}

// Function to add a comment
function addComment() {
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
        saveComment(commentElement.outerHTML); // Save comment to localStorage
    }
}

// Save the comment to localStorage
function saveComment(commentHTML) {
    const savedComments = localStorage.getItem('comments') || '';
    localStorage.setItem('comments', savedComments + commentHTML);
}

// Save the display name to localStorage when changed
function saveDisplayName() {
    const newDisplayName = displayNameElement.value;
    localStorage.setItem('displayName', newDisplayName);
}
