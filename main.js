const statusForm = document.getElementById('statusForm');
const statusFeed = document.getElementById('statusFeed');
const logoutButton = document.getElementById('logoutButton');

// Check if user is logged in
const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
  alert('You are not logged in. Redirecting to login page.');
  window.location.href = 'login.html';
}

// Handle posting status
statusForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const statusText = document.getElementById('statusInput').value;
  if (statusText) {
    const newStatus = document.createElement('p');
    newStatus.textContent = `${loggedInUser}: ${statusText}`;
    statusFeed.appendChild(newStatus);
    document.getElementById('statusInput').value = ''; // Clear input
  }
});

// Handle logout
logoutButton.addEventListener('click', function () {
  localStorage.removeItem('loggedInUser'); // Remove logged-in user
  window.location.href = 'login.html'; // Redirect to login page
});
