// Get form elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent form from submitting normally
  event.preventDefault();

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate password length
  if (passwordInput.value.length < 8) {
    alert('Please enter a password that is at least 8 characters long.');
    return;
  }

  // Validate password match
  if (passwordInput.value!== confirmPasswordInput.value) {
    alert('Passwords do not match.');
    return;
  }

  // If validation passes, set a cookie and redirect to login.html
  document.cookie = 'email=' + emailInput.value;
  window.location.href = 'login.html';
});