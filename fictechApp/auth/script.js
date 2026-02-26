// Tab switching functionality
function switchTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // Remove active class from all buttons
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));

  // Show selected tab
  const selectedTab = document.getElementById(tabName + '-tab');
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Mark button as active
  event.target.classList.add('active');
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Set first tab as active by default
  const firstTabBtn = document.querySelector('.tab-btn');
  if (firstTabBtn) {
    firstTabBtn.classList.add('active');
  }

  const firstTabContent = document.querySelector('.tab-content');
  if (firstTabContent) {
    firstTabContent.classList.add('active');
  }

  // Add tab click listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = btn.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  // Form submission
  document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted! (This is a demo)');
    });
  });
});

// Password strength indicator
const passwordInput = document.getElementById('reg-password');
if (passwordInput) {
  passwordInput.addEventListener('input', () => {
    const strength = calculatePasswordStrength(passwordInput.value);
    const strengthBar = passwordInput.nextElementSibling;
    if (strengthBar && strengthBar.classList.contains('password-strength')) {
      strengthBar.className = 'password-strength ' + strength;
    }
  });
}

function calculatePasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++;

  if (strength < 2) return 'weak';
  if (strength < 3) return 'medium';
  return 'strong';
}
