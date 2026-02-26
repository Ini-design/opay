// ================= DASHBOARD PAGE SCRIPTS =================

document.addEventListener("DOMContentLoaded", () => {
  // Simulate user data
  const userData = {
    name: localStorage.getItem("userName") || "John Doe",
    balance: 125500.50,
    moneySent: 50000.00,
    moneyReceived: 75500.50,
    totalTransactions: 12
  };

  // Update dashboard elements
  const userNameElement = document.getElementById("userName");
  if (userNameElement) {
    userNameElement.textContent = userData.name;
  }

  const balanceElement = document.getElementById("balance");
  if (balanceElement) {
    balanceElement.textContent = `₦${userData.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
  }

  const moneySentElement = document.getElementById("moneySent");
  if (moneySentElement) {
    moneySentElement.textContent = `₦${userData.moneySent.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
  }

  const moneyReceivedElement = document.getElementById("moneyReceived");
  if (moneyReceivedElement) {
    moneyReceivedElement.textContent = `₦${userData.moneyReceived.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
  }

  const totalTransactionsElement = document.getElementById("totalTransactions");
  if (totalTransactionsElement) {
    totalTransactionsElement.textContent = userData.totalTransactions;
  }

  // Quick action buttons
  const sendMoneyBtn = document.getElementById("sendMoneyBtn");
  if (sendMoneyBtn) {
    sendMoneyBtn.addEventListener("click", () => {
      showToast("Opening send money form...", "warning");
    });
  }

  const historyBtn = document.getElementById("historyBtn");
  if (historyBtn) {
    historyBtn.addEventListener("click", () => {
      showToast("Loading transaction history...", "warning");
    });
  }

  // Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      showToast("Logging out...", "warning");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  }
});
