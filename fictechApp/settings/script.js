// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Settings page functionality
document.addEventListener("DOMContentLoaded", () => {
  const settingsMenuItems = document.querySelectorAll(".menu-item");
  const settingsSections = document.querySelectorAll(".settings-section");

  settingsMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const section = item.getAttribute("data-section");
      
      settingsMenuItems.forEach(m => m.classList.remove("active"));
      settingsSections.forEach(s => s.classList.remove("active"));

      item.classList.add("active");
      const targetSection = document.getElementById(`${section}-section`);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });

  // Save profile changes
  const profileForm = document.getElementById("profileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Profile updated successfully!");
    });
  }

  // 2FA Toggle
  const twoFactorToggle = document.getElementById("twoFactorToggle");
  if (twoFactorToggle) {
    twoFactorToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        alert("2FA enabled! Check your email for setup instructions.");
      } else {
        alert("2FA disabled");
      }
    });
  }
});
