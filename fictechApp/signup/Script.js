const signupForm = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');

// Form validation
const validateForm = () => {
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error-message').forEach(el => {
    el.style.display = 'none';
    el.textContent = '';
  });

  // First Name validation
  const firstName = document.getElementById('firstName').value.trim();
  if (!firstName) {
    showError('firstNameError', 'First name is required');
    isValid = false;
  } else if (firstName.length < 2) {
    showError('firstNameError', 'First name must be at least 2 characters');
    isValid = false;
  }

  // Last Name validation
  const lastName = document.getElementById('lastName').value.trim();
  if (!lastName) {
    showError('lastNameError', 'Last name is required');
    isValid = false;
  } else if (lastName.length < 2) {
    showError('lastNameError', 'Last name must be at least 2 characters');
    isValid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError('emailError', 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError('emailError', 'Please enter a valid email');
    isValid = false;
  }

  // Phone validation
  const phone = document.getElementById('phone').value.trim();
  if (!phone) {
    showError('phoneError', 'Phone number is required');
    isValid = false;
  } else if (phone.replace(/\D/g, '').length < 10) {
    showError('phoneError', 'Please enter a valid phone number');
    isValid = false;
  }

  // Password validation
  const password = document.getElementById('password').value;
  if (!password) {
    showError('passwordError', 'Password is required');
    isValid = false;
  } else if (password.length < 8) {
    showError('passwordError', 'Password must be at least 8 characters');
    isValid = false;
  }

  // Confirm Password validation
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (!confirmPassword) {
    showError('confirmPasswordError', 'Please confirm your password');
    isValid = false;
  } else if (password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match');
    isValid = false;
  }

  // Country validation
  const country = document.getElementById('country').value;
  if (!country) {
    showError('countryError', 'Please select a country');
    isValid = false;
  }

  return isValid;
};

const showError = (elementId, message) => {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
};

// Form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Show success message
    successMessage.style.display = 'block';

    // Collect form data
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value
    };

    console.log('Form submitted:', formData);

    // Simulate API call - in real app, send to server
    setTimeout(() => {
      alert(`✅ Welcome ${formData.firstName}! Your account has been created successfully!`);
      // In a real app, redirect to dashboard or verification page
      window.location.href = '../index.html';
    }, 2000);
  }
});

// Real-time validation
document.getElementById('email').addEventListener('change', () => {
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    showError('emailError', 'Please enter a valid email');
  }
});

document.getElementById('password').addEventListener('change', () => {
  const password = document.getElementById('password').value;
  if (password && password.length < 8) {
    showError('passwordError', 'Password must be at least 8 characters');
  }
});

document.getElementById('confirmPassword').addEventListener('change', () => {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (confirmPassword && password !== confirmPassword) {
    showError('confirmPasswordError', 'Passwords do not match');
  }
});
