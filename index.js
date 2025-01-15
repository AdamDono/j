// Elements
const loginPage = document.getElementById('loginPage');
const mainPage = document.getElementById('mainPage');
const loginForm = document.getElementById('loginForm');
const statusForm = document.getElementById('statusForm');
const statusFeed = document.getElementById('statusFeed');
const logoutButton = document.getElementById('logoutButton');

// Dummy user credentials
const USERNAME = 'user';
const PASSWORD = '1234';

// Handle login
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === USERNAME && password === PASSWORD) {
    loginPage.style.display = 'none';
    mainPage.style.display = 'block';
  } else {
    alert('Invalid login details');
  }
});

// Handle posting status
statusForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const statusText = document.getElementById('statusInput').value;
  if (statusText) {
    const newStatus = document.createElement('p');
    newStatus.textContent = statusText;
    statusFeed.appendChild(newStatus);
    document.getElementById('statusInput').value = ''; // Clear input
  }
});

// Handle logout
logoutButton.addEventListener('click', function () {
  loginPage.style.display = 'block';
  mainPage.style.display = 'none';
});
