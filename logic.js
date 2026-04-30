const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();

  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let successMessage = document.getElementById('successMessage');

  emailError.textContent = '';
  passwordError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Email validation
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  }

  // Password validation
  if (password === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    isValid = false;
  }

  // Success
  if (isValid) {
    successMessage.textContent = 'Login successful!';
  }
});