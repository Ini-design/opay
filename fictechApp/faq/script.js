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

// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");
  
  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.parentElement.classList.remove("active");
          q.setAttribute("aria-expanded", "false");
        }
      });

      faqItem.classList.toggle("active");
      const isActive = faqItem.classList.contains("active");
      question.setAttribute("aria-expanded", isActive);
    });
  });

  // FAQ Search
  const faqSearch = document.getElementById("faqSearch");
  if (faqSearch) {
    faqSearch.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach(item => {
        const questionText = item.querySelector(".faq-question span").textContent.toLowerCase();
        const answerText = item.querySelector(".faq-answer p").textContent.toLowerCase();
        
        if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});
