const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  let users = JSON.parse(localStorage.getItem('users')) || {};

  if (users[username]) {
    alert('User already exists. Please log in.');
  } else {
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully!');
    window.location.href = 'login.html'; // Redirect to login page
  }
});
