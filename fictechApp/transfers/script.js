function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function openNewTransferModal() {
  alert('Open New Transfer Modal - Add transfer form here');
}

function openTransferForm(recipientName) {
  alert('Transfer to ' + recipientName);
}

function openAddFavoriteModal() {
  alert('Open Add Favorite Modal - Add recipient form here');
}

function viewTransfer() {
  alert('View transfer details');
}

function cancelTransfer() {
  if (confirm('Are you sure you want to cancel this transfer?')) {
    alert('Transfer cancelled');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
