// ================= DARK MODE ================= 
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ================= COOKIE CONSENT =================
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const cookieReject = document.getElementById("cookieReject");

if (cookieAccept && cookieReject && cookieBanner) {
  // Show banner if no cookie preference saved
  if (!localStorage.getItem("cookieConsent")) {
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.classList.remove("show");
    showToast("✅ Cookie preference saved!", "success");
  });

  cookieReject.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBanner.classList.remove("show");
    showToast("🍪 Cookies rejected", "warning");
  });
}

// ================= SCROLL TO TOP BUTTON =================
const scrollToTopBtn = document.getElementById("scrollToTop");

if (scrollToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ================= LOADING SPINNER =================
const loadingSpinner = document.getElementById("loadingSpinner");

function showLoading(show = true) {
  if (loadingSpinner) {
    if (show) {
      loadingSpinner.classList.add("active");
    } else {
      loadingSpinner.classList.remove("active");
    }
  }
}

// ================= PASSWORD STRENGTH INDICATOR =================
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

if (passwordInput && strengthBar && strengthText) {
  passwordInput.addEventListener("input", (e) => {
    const password = e.target.value;
    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (password.length === 0) {
      strengthBar.className = "strength-bar";
      strengthText.textContent = "Password strength: Weak";
    } else if (strength <= 2) {
      strengthBar.className = "strength-bar weak";
      strengthText.textContent = "Password strength: Weak";
    } else if (strength === 3) {
      strengthBar.className = "strength-bar fair";
      strengthText.textContent = "Password strength: Fair";
    } else {
      strengthBar.className = "strength-bar strong";
      strengthText.textContent = "Password strength: Strong";
    }
  });
}

// ================= FAQ ACCORDION =================
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");
  
  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      
      // Close all other items
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.parentElement.classList.remove("active");
          q.setAttribute("aria-expanded", "false");
        }
      });

      // Toggle current item
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

// ================= SETTINGS PAGE FUNCTIONALITY =================
document.addEventListener("DOMContentLoaded", () => {
  const settingsMenuItems = document.querySelectorAll(".menu-item");
  const settingsSections = document.querySelectorAll(".settings-section");

  settingsMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const section = item.getAttribute("data-section");
      
      // Remove active from all
      settingsMenuItems.forEach(m => m.classList.remove("active"));
      settingsSections.forEach(s => s.classList.remove("active"));

      // Add active to clicked
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
      showToast("✅ Profile updated successfully!", "success");
      // Simulate save
      setTimeout(() => {
        showLoading(false);
      }, 500);
    });
  }

  // 2FA Toggle
  const twoFactorToggle = document.getElementById("twoFactorToggle");
  if (twoFactorToggle) {
    twoFactorToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        showToast("✅ 2FA enabled! Check your email.", "success");
      } else {
        showToast("2FA disabled", "warning");
      }
    });
  }
});

// ================= DASHBOARD FUNCTIONALITY =================
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

// ================= MOBILE MENU TOGGLE =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navLinks.classList.remove("active");
    }
  });
}

// Close mobile menu when a link is clicked
if (navLinks) {
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// ================= MODAL FUNCTIONALITY =================
const signupModal = document.getElementById("signupModal");
const transactionModal = document.getElementById("transactionModal");
const signUpBtn = document.getElementById("signUpBtn");
const closeBtns = document.querySelectorAll(".close-modal");

// Open signup modal
if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    signupModal.classList.add("active");
  });
}

// Close modals
closeBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    this.closest(".modal").classList.remove("active");
  });
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === signupModal) {
    signupModal.classList.remove("active");
  }
  if (e.target === transactionModal) {
    transactionModal.classList.remove("active");
  }
});

// Close modal on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    signupModal?.classList.remove("active");
    transactionModal?.classList.remove("active");
  }
});

// ================= FORM VALIDATION & SUBMISSION =================
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      showToast("Please fill all fields", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Invalid email address", "error");
      return;
    }

    if (phone.length < 10) {
      showToast("Invalid phone number", "error");
      return;
    }

    if (password.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    // Success
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
      showToast("✅ Account created successfully!", "success");
      localStorage.setItem("userName", fullName);
      signupForm.reset();
      signupModal.classList.remove("active");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    }, 1500);
  });
}

// Email validation
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ================= TRANSACTION FORM =================
const transactionForm = document.getElementById("transactionForm");
if (transactionForm) {
  transactionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const recipientName = document.getElementById("recipientName").value;
    const recipientEmail = document.getElementById("recipientEmail").value;
    const transferAmount = parseFloat(document.getElementById("transferAmount").value);

    if (!recipientName || !recipientEmail || transferAmount <= 0) {
      showToast("Please enter valid details", "error");
      return;
    }

    // Simulate transaction
    const status = document.getElementById("transactionStatus");
    status.innerHTML = `<div style="color: #00c853; margin-top: 20px;">
      <p>Processing...</p>
      <div style="width: 100%; height: 4px; background: #ddd; border-radius: 2px; margin: 10px 0;">
        <div style="width: 100%; height: 100%; background: #00c853; border-radius: 2px; animation: progress 2s ease;"></div>
      </div>
    </div>`;

    setTimeout(() => {
      status.innerHTML = `<div style="color: #00c853; margin-top: 20px; text-align: center;">
        <h3>✅ Transaction Successful!</h3>
        <p>Amount: ₦${transferAmount.toLocaleString()}</p>
        <p>To: ${recipientName}</p>
      </div>`;
      showToast("Money sent successfully!", "success");
      transactionForm.reset();
      
      setTimeout(() => {
        transactionModal.classList.remove("active");
        status.innerHTML = "";
      }, 2000);
    }, 2000);
  });
}

// ================= TOAST NOTIFICATION =================
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ================= ANIMATED COUNTER =================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString() + (element.dataset.suffix || "");
  }, 16);
}

// Trigger counters on scroll
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll("h3");
      stats.forEach(stat => {
        const value = parseInt(stat.textContent.replace(/\D/g, ""));
        const suffix = stat.textContent.replace(/[0-9]/g, "");
        stat.dataset.suffix = suffix;
        animateCounter(stat, value);
      });
      counterObserver.unobserve(entry.target);
    }
  });
});

const statsSection = document.querySelector(".stats");
if (statsSection) {
  counterObserver.observe(statsSection);
}

// ================= FEATURE CARDS INTERACTION =================
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const feature = card.getAttribute("data-feature");
    showToast(`📱 Loading ${feature} details...`, "warning");
  });
});

// ================= CALCULATOR =================
const calculateBtn = document.getElementById("calculateBtn");
if (calculateBtn) {
  calculateBtn.addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amountInput").value);
    const recipientType = document.getElementById("recipientType").value;

    if (!amount || amount <= 0) {
      showToast("Please enter a valid amount", "error");
      return;
    }

    const fees = {
      same: amount * 0.005,      // 0.5%
      other: amount * 0.01,       // 1%
      international: amount * 0.05 // 5%
    };

    const fee = fees[recipientType];
    const total = amount + fee;

    const result = document.getElementById("calculatorResult");
    result.innerHTML = `
      <div style="text-align: center;">
        <h3>💰 Fee Breakdown</h3>
        <p><strong>Amount:</strong> ₦${amount.toLocaleString()}</p>
        <p><strong>Fee:</strong> ₦${fee.toFixed(2)}</p>
        <hr style="margin: 10px 0;">
        <h2 style="color: #00c853;">Total: ₦${total.toFixed(2)}</h2>
      </div>
    `;
    result.classList.add("show");
    showToast("Fee calculated!", "success");
  });
}

// ================= TESTIMONIAL CAROUSEL =================
let testimonialIndex = 0;
const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevTestimonial");
const nextBtn = document.getElementById("nextTestimonial");

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.style.display = i === index ? "block" : "none";
  });
}

if (prevBtn && nextBtn && testimonialCards.length > 0) {
  prevBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  });

  nextBtn.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  });

  // Show first testimonial by default
  showTestimonial(0);

  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    showTestimonial(testimonialIndex);
  }, 5000);
}

// ================= LIVE CHAT WIDGET =================
const chatWidget = document.getElementById("chatWidget");
const chatHeader = document.getElementById("chatHeader");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatBody = document.getElementById("chatBody");
const chatToggle = document.querySelector(".chat-toggle");

let chatMinimized = false;

if (chatHeader) {
  chatHeader.addEventListener("click", () => {
    chatMinimized = !chatMinimized;
    if (chatBody) {
      chatBody.style.display = chatMinimized ? "none" : "flex";
    }
    if (chatToggle) {
      chatToggle.textContent = chatMinimized ? "+" : "−";
    }
  });
}

const botResponses = [
  "That's a great question! How can I help you further?",
  "I'm here to assist you 24/7. What else would you like to know?",
  "Thank you for reaching out! Is there anything else?",
  "I'm happy to help! Do you need anything else?",
  "Feel free to ask me anything about our services!",
  "Your satisfaction is important to us. How else can I help?",
  "Have you tried our transfer feature? It's super fast!",
  "Need help with payments? I can guide you through it.",
  "Our security is top-notch. Want to know more details?",
  "Interested in opening an account? Click the Sign Up button!",
  "You can calculate transfer fees using our calculator above.",
  "Check out our features section for more information.",
  "Have any other questions about digital payments?",
  "Our app is available for both iOS and Android.",
  "Transactions are processed within seconds!",
  "We offer competitive rates and low fees.",
  "Your money is safe with our advanced encryption.",
  "Join thousands of satisfied users today!",
  "Need support? You can also contact us via email.",
  "Try our savings feature to grow your money smartly!",
];

if (sendChatBtn) {
  sendChatBtn.addEventListener("click", sendMessage);
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }
}

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message || !chatMessages) return;

  // Add user message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.innerHTML = `<p>${message}</p>`;
  chatMessages.appendChild(userMsg);

  if (chatInput) {
    chatInput.value = "";
  }
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    botMsg.innerHTML = `<p>${randomResponse}</p>`;
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}

// ================= SEARCH FUNCTIONALITY =================
const searchBox = document.getElementById("searchBox");
if (searchBox) {
  searchBox.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const features = document.querySelectorAll(".feature-card");
    
    features.forEach(feature => {
      const text = feature.textContent.toLowerCase();
      feature.style.display = text.includes(query) ? "block" : "none";
    });

    if (query === "") {
      features.forEach(feature => {
        feature.style.display = "block";
      });
    }
  });
}

// ================= BUTTON INTERACTIONS =================
const downloadBtn = document.querySelector(".hero-buttons .btn-primary");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    showToast("🚀 Redirecting to app store...", "warning");
  });
}

const learnMoreBtn = document.querySelector(".hero-buttons .btn-outline");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ================= HEADER BACKGROUND ON SCROLL =================
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    if (header) {
      header.style.boxShadow = "0 4px 12px rgba(0, 200, 83, 0.2)";
    }
  } else {
    if (header) {
      header.style.boxShadow = "none";
    }
  }
});

// ================= SMOOTH SCROLL FOR NAVIGATION =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && !href.startsWith('http')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ================= INITIAL PAGE LOAD ANIMATION =================
window.addEventListener('load', () => {
  const cards = document.querySelectorAll(".feature-card, .testimonial-card, .stat-card");
  cards.forEach((card, index) => {
    card.style.animation = `slideUp 0.5s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

// ================= ACCESSIBILITY ENHANCEMENTS =================
// Keyboard navigation for modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // Trap focus within modal
    });
  }
});

// Skip to main content link
const skipLink = document.createElement("a");
skipLink.href = "#main";
skipLink.className = "skip-to-main";
skipLink.textContent = "Skip to main content";
skipLink.style.position = "absolute";
skipLink.style.top = "-40px";
skipLink.style.left = "0";
skipLink.style.background = "#00c853";
skipLink.style.color = "white";
skipLink.style.padding = "8px";
skipLink.style.zIndex = "100";
skipLink.addEventListener("focus", () => {
  skipLink.style.top = "0";
});
skipLink.addEventListener("blur", () => {
  skipLink.style.top = "-40px";
});
document.body.insertBefore(skipLink, document.body.firstChild);
