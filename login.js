const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[username] && users[username] === password) {
    alert('Login successful!');
    localStorage.setItem('loggedInUser', username); // Save logged-in user
    window.location.href = 'main.html'; // Redirect to main page
  } else {
    alert('Invalid username or password.');
  }
});
