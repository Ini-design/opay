function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function openCreateSavingModal() {
  alert('Open Create Savings Plan Modal - Add form here');
}

function editPlan() {
  alert('Edit Savings Plan functionality');
}

function viewDetails() {
  alert('View detailed plan information');
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
