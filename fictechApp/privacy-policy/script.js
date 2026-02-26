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

// Cookie consent
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const cookieReject = document.getElementById("cookieReject");

if (cookieAccept && cookieReject && cookieBanner) {
  if (!localStorage.getItem("cookieConsent")) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.classList.remove("show");
  });

  cookieReject.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBanner.classList.remove("show");
  });
}
