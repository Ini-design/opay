function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function openAddCardModal() {
  alert('Open Add Card Modal - Add form here');
}

function editCard() {
  alert('Edit Card functionality');
}

function deactivateCard() {
  if (confirm('Are you sure you want to deactivate this card?')) {
    alert('Card deactivated');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
