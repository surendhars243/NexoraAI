/* ==========================================================
   Nexora AI - script.js
   Handles the landing page content + login/register validation.
   ========================================================== */

// ---------- Learning flow steps shown on the landing page ----------
const LEARNING_FLOW = [
  "Enroll",
  "Set Goal",
  "Learn",
  "Complete Quiz",
  "Earn Points",
  "Redeem Rewards",
];

// ---------- Feature list ----------
const FEATURES = [
  { icon: "fa-route", title: "Personalized Path", text: "AI builds a step-by-step roadmap based on your goal and skill level." },
  { icon: "fa-circle-question", title: "Smart Quizzes", text: "Auto-generated quizzes with a timer and instant score feedback." },
  { icon: "fa-robot", title: "AI Study Buddy", text: "Ask doubts, generate notes or summarise any topic in seconds." },
  { icon: "fa-chart-line", title: "Progress Tracking", text: "Weekly charts, streaks and completion percentage for every course." },
  { icon: "fa-trophy", title: "Gamification", text: "Earn XP, unlock badges and climb the class leaderboard." },
  { icon: "fa-gift", title: "Rewards", text: "Convert your reward points into vouchers and certificates." },
];

/** Renders the flow chips with arrows between them. */
function renderFlow() {
  const box = document.getElementById("flowSteps");
  if (!box) return;
  box.innerHTML = LEARNING_FLOW.map((step, i) =>
    `<span class="nx-chip">${i + 1}. ${step}</span>` +
    (i < LEARNING_FLOW.length - 1 ? `<i class="fa-solid fa-arrow-right text-muted small"></i>` : "")
  ).join("");
}

/** Renders the features as a vertical list of cards. */
function renderFeatures() {
  const grid = document.getElementById("featureGrid");
  if (!grid) return;
  grid.innerHTML = FEATURES.map(
    (f) => `
    <div class="nx-feature-wrap">
      <div class="nx-card nx-feature p-3 d-flex align-items-center gap-3">
        <div class="nx-feature-icon"><i class="fa-solid ${f.icon}"></i></div>
        <div>
          <h6 class="fw-bold mb-1">${f.title}</h6>
          <p class="text-muted small mb-0">${f.text}</p>
        </div>
      </div>
    </div>`
  ).join("");
}

/** Simple demo auth: stores the name locally and moves to the dashboard. */
function initAuthForms() {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const pass = document.getElementById("loginPassword").value.trim();
      const alertBox = document.getElementById("authAlert");
      if (!email || !pass) {
        alertBox.className = "alert alert-danger rounded-3";
        alertBox.textContent = "Please fill in both email and password.";
        return;
      }
      localStorage.setItem("nexoraUser", email.split("@")[0]);
      alertBox.className = "alert alert-success rounded-3";
      alertBox.textContent = "Login successful! Redirecting to your dashboard...";
      setTimeout(() => (window.location.href = "dashboard.html"), 800);
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const pass = document.getElementById("regPassword").value;
      const confirm = document.getElementById("regConfirm").value;
      const alertBox = document.getElementById("authAlert");
      if (pass !== confirm) {
        alertBox.className = "alert alert-danger rounded-3";
        alertBox.textContent = "Passwords do not match.";
        return;
      }
      localStorage.setItem("nexoraUser", name || "Student");
      alertBox.className = "alert alert-success rounded-3";
      alertBox.textContent = "Account created! Taking you to the dashboard...";
      setTimeout(() => (window.location.href = "dashboard.html"), 800);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderFlow();
  renderFeatures();
  initAuthForms();
});
