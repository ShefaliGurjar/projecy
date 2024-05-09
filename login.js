
// Get form elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
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

  // If validation passes, set a cookie and redirect to index.html
  document.cookie = 'email=' + emailInput.value;
  window.location.href = 'index.html';
});

// Get cookie value
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

// Pre-fill email field if cookie is present
const email = getCookie('email');
if (email!== '') {
  emailInput.value = email;
}