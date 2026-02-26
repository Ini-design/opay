function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function editContact() {
  alert('Edit contact functionality');
}

function removeContact() {
  if (confirm('Are you sure you want to remove this contact?')) {
    alert('Contact removed');
  }
}

function openAddContactModal() {
  alert('Open Add Trusted Contact Modal - Add form here');
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // Initialize toggle switches
  document.querySelectorAll('.toggle-switch input').forEach(toggle => {
    toggle.addEventListener('change', () => {
      console.log('Toggle changed:', toggle.checked);
    });
  });
});
