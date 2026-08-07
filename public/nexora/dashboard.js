/* ==========================================================
   Nexora AI - dashboard.js
   Shared layout (sidebar + navbar), dummy data and page logic.
   Each page sets   <body data-page="dashboard">   so this file
   knows which section to build.
   ========================================================== */

/* ---------------- DUMMY DATA ---------------- */

const NX = {
  student: { name: "Aditi Sharma", dept: "Information Technology", college: "Sinhgad Institute of Technology" },

  stats: { courses: 4, xp: 2450, streak: 10, rewardPoints: 780 },

  courses: [
    { name: "Python Programming", level: "Beginner", progress: 62, icon: "fa-python", color: "#3f6bff", brand: true },
    { name: "Java Fundamentals", level: "Intermediate", progress: 35, icon: "fa-java", color: "#e5533d", brand: true },
    { name: "HTML & CSS", level: "Beginner", progress: 88, icon: "fa-html5", color: "#e39a12", brand: true },
    { name: "JavaScript ES6", level: "Intermediate", progress: 47, icon: "fa-js", color: "#1e9e63", brand: true },
  ],

  tasks: [
    { text: "Watch Video: Python Loops", done: true },
    { text: "Read Notes: Range Function", done: true },
    { text: "Complete Quiz: Loops Basics", done: false },
    { text: "Practice Coding: 3 Problems", done: false },
  ],

  weekly: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], data: [45, 70, 30, 90, 60, 110, 80] },

  achievements: [
    { title: "Beginner Badge", icon: "fa-seedling", color: "green", desc: "Completed your first lesson" },
    { title: "10-Day Streak", icon: "fa-fire", color: "red", desc: "Learned 10 days in a row" },
    { title: "Quiz Master", icon: "fa-medal", color: "yellow", desc: "Scored 90%+ in 5 quizzes" },
  ],

  path: [
    { title: "Python Basics", status: "Completed", progress: 100 },
    { title: "Variables", status: "Completed", progress: 100 },
    { title: "Loops", status: "In Progress", progress: 55 },
    { title: "Functions", status: "Locked", progress: 0 },
    { title: "OOP", status: "Locked", progress: 0 },
    { title: "Mini Project", status: "Locked", progress: 0 },
    { title: "Final Quiz", status: "Locked", progress: 0 },
  ],

  quiz: [
    { q: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "lambda"], answer: 1 },
    { q: "What is the output of len('Nexora')?", options: ["5", "6", "7", "Error"], answer: 1 },
    { q: "Which loop runs while a condition stays true?", options: ["for", "do", "while", "repeat"], answer: 2 },
    { q: "Which data type stores key-value pairs?", options: ["list", "tuple", "set", "dict"], answer: 3 },
    { q: "What does OOP stand for?", options: ["Open Office Protocol", "Object Oriented Programming", "Optimal Output Process", "Ordered Object Pairing"], answer: 1 },
  ],

  rewards: [
    { name: "Amazon Voucher ₹250", cost: 500, icon: "fa-gift" },
    { name: "Udemy Course Coupon", cost: 700, icon: "fa-graduation-cap" },
    { name: "Nexora Certificate", cost: 300, icon: "fa-certificate" },
  ],

  rewardHistory: [
    { date: "12 Jul 2026", item: "Amazon Voucher ₹100", points: 250, status: "Delivered" },
    { date: "28 Jun 2026", item: "Nexora Certificate", points: 300, status: "Delivered" },
    { date: "05 Jun 2026", item: "Udemy Coupon", points: 700, status: "Pending" },
  ],

  leaderboard: [
    { name: "Rohan Patil", xp: 4120, badge: "Legend" },
    { name: "Sneha Kulkarni", xp: 3580, badge: "Expert" },
    { name: "Aditi Sharma", xp: 2450, badge: "Achiever", me: true },
    { name: "Vikram Iyer", xp: 2100, badge: "Achiever" },
    { name: "Neha Joshi", xp: 1870, badge: "Learner" },
    { name: "Arjun Mehta", xp: 1540, badge: "Learner" },
    { name: "Priya Nair", xp: 1220, badge: "Beginner" },
  ],

  admin: {
    totals: { students: 1240, courses: 28, completed: 634, rewards: 312 },
    students: [
      { id: "IT2201", name: "Aditi Sharma", course: "Python Programming", progress: 62, xp: 2450 },
      { id: "IT2202", name: "Rohan Patil", course: "Java Fundamentals", progress: 91, xp: 4120 },
      { id: "IT2203", name: "Sneha Kulkarni", course: "JavaScript ES6", progress: 78, xp: 3580 },
      { id: "IT2204", name: "Vikram Iyer", course: "HTML & CSS", progress: 44, xp: 2100 },
    ],
    courseRows: [
      { code: "C-101", name: "Python Programming", students: 420, level: "Beginner" },
      { code: "C-102", name: "Java Fundamentals", students: 310, level: "Intermediate" },
      { code: "C-103", name: "HTML & CSS", students: 285, level: "Beginner" },
      { code: "C-104", name: "JavaScript ES6", students: 225, level: "Intermediate" },
    ],
    rewardRows: [
      { id: "R-9001", student: "Rohan Patil", item: "Amazon Voucher ₹250", status: "Issued" },
      { id: "R-9002", student: "Aditi Sharma", item: "Nexora Certificate", status: "Issued" },
      { id: "R-9003", student: "Neha Joshi", item: "Udemy Coupon", status: "Pending" },
    ],
  },
};

/* ---------------- SIDEBAR + TOPBAR ---------------- */

const MENU = [
  { id: "dashboard", label: "Dashboard", icon: "fa-gauge-high", href: "dashboard.html" },
  { id: "path", label: "Learning Path", icon: "fa-route", href: "learning-path.html" },
  { id: "courses", label: "My Courses", icon: "fa-book", href: "courses.html" },
  { id: "quiz", label: "Quiz", icon: "fa-circle-question", href: "quiz.html" },
  { id: "buddy", label: "AI Study Buddy", icon: "fa-robot", href: "ai-buddy.html" },
  { id: "rewards", label: "Rewards", icon: "fa-gift", href: "rewards.html" },
  { id: "leaderboard", label: "Leaderboard", icon: "fa-ranking-star", href: "leaderboard.html" },
  { id: "profile", label: "Profile", icon: "fa-user", href: "profile.html" },
  { id: "settings", label: "Settings", icon: "fa-gear", href: "settings.html" },
  { id: "admin", label: "Admin Panel", icon: "fa-user-shield", href: "admin.html" },
];

/** Builds the sidebar + top navbar on every dashboard page. */
function buildLayout(active, pageTitle) {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.innerHTML = `
      <a class="nx-logo mb-4 px-2" href="index.html">
        <span class="nx-logo-mark"><i class="fa-solid fa-brain"></i></span>
        Nexora <span class="text-nexora">AI</span>
      </a>
      <ul class="nav flex-column">
        ${MENU.map(m => `
          <li class="nav-item">
            <a class="nav-link ${m.id === active ? "active" : ""}" href="${m.href}">
              <i class="fa-solid ${m.icon}"></i> ${m.label}
            </a>
          </li>`).join("")}
        <li class="nav-item mt-2 pt-2 border-top">
          <a class="nav-link text-danger" href="login.html"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
        </li>
      </ul>`;
  }

  const topbar = document.getElementById("topbar");
  if (topbar) {
    const name = localStorage.getItem("nexoraUser") || NX.student.name;
    topbar.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <button class="btn btn-light d-lg-none rounded-3" id="menuBtn"><i class="fa-solid fa-bars"></i></button>
        <h6 class="fw-bold mb-0 d-none d-sm-block">${pageTitle}</h6>
        <div class="input-group ms-auto" style="max-width:320px">
          <span class="input-group-text bg-white border-end-0 rounded-start-3"><i class="fa-solid fa-magnifying-glass text-muted"></i></span>
          <input class="form-control border-start-0" placeholder="Search courses, quizzes..." />
        </div>
        <div class="dropdown">
          <button class="btn btn-light position-relative rounded-3" data-bs-toggle="dropdown">
            <i class="fa-solid fa-bell"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow rounded-4 p-2" style="min-width:260px">
            <li class="dropdown-item small rounded-3">🎉 You earned the 10-Day Streak badge!</li>
            <li class="dropdown-item small rounded-3">📝 New quiz unlocked: Python Loops</li>
            <li class="dropdown-item small rounded-3">🎁 780 reward points available</li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-light d-flex align-items-center gap-2 rounded-3" data-bs-toggle="dropdown">
            <i class="fa-solid fa-circle-user fs-5 text-nexora"></i>
            <span class="small fw-semibold d-none d-md-inline">${name}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow rounded-4">
            <li><a class="dropdown-item" href="profile.html">Profile</a></li>
            <li><a class="dropdown-item" href="settings.html">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item text-danger" href="login.html">Logout</a></li>
          </ul>
        </div>
      </div>`;

    // Mobile sidebar toggle
    const btn = document.getElementById("menuBtn");
    btn?.addEventListener("click", () => {
      sidebar.classList.add("open");
      const back = document.createElement("div");
      back.className = "nx-backdrop";
      back.onclick = () => { sidebar.classList.remove("open"); back.remove(); };
      document.body.appendChild(back);
    });
  }
}

/* ---------------- SMALL HELPERS ---------------- */

const bar = (p, color = "var(--nx-primary)") =>
  `<div class="progress rounded-pill" style="height:8px">
     <div class="progress-bar" style="width:${p}%;background:${color}"></div>
   </div>`;

const statusBadge = (s) => {
  const map = { Completed: "success", "In Progress": "primary", Locked: "secondary", Issued: "success", Delivered: "success", Pending: "warning" };
  return `<span class="badge rounded-pill bg-${map[s] || "secondary"}-subtle text-${map[s] || "secondary"}">${s}</span>`;
};

/* ---------------- PAGE: DASHBOARD ---------------- */

function pageDashboard() {
  const s = NX.stats;
  document.getElementById("statCards").innerHTML = [
    { icon: "fa-book", cls: "blue", label: "Courses", value: s.courses, sub: "2 in progress" },
    { icon: "fa-star", cls: "yellow", label: "XP Points", value: s.xp.toLocaleString(), sub: "+180 this week" },
    { icon: "fa-fire", cls: "red", label: "Current Streak", value: s.streak + " days", sub: "Keep it going!" },
    { icon: "fa-gift", cls: "green", label: "Reward Points", value: s.rewardPoints, sub: "1 reward ready" },
  ].map(c => `
    <div class="col-6 col-lg-3">
      <div class="nx-card p-3 h-100">
        <div class="nx-stat-icon ${c.cls} mb-2"><i class="fa-solid ${c.icon}"></i></div>
        <div class="text-muted small">${c.label}</div>
        <div class="fs-4 fw-bold">${c.value}</div>
        <div class="small text-muted">${c.sub}</div>
      </div>
    </div>`).join("");

  // Continue learning cards
  document.getElementById("continueCards").innerHTML = NX.courses.slice(0, 2).map(c => `
    <div class="col-md-6">
      <div class="nx-card p-3 h-100">
        <div class="nx-course-thumb mb-3" style="background:linear-gradient(135deg,${c.color},#9db6ff)">
          <i class="fa-brands ${c.icon}"></i>
        </div>
        <h6 class="fw-bold mb-1">${c.name}</h6>
        <p class="small text-muted mb-2">${c.level} · ${c.progress}% complete</p>
        ${bar(c.progress, c.color)}
        <a href="learning-path.html" class="btn btn-nexora btn-sm mt-3">Continue</a>
      </div>
    </div>`).join("");

  // Today's tasks
  document.getElementById("taskList").innerHTML = NX.tasks.map((t, i) => `
    <label class="d-flex align-items-center gap-2 py-2 border-bottom">
      <input class="form-check-input mt-0" type="checkbox" ${t.done ? "checked" : ""} data-task="${i}" />
      <span class="small ${t.done ? "text-muted text-decoration-line-through" : ""}">${t.text}</span>
    </label>`).join("");

  // Achievements
  document.getElementById("achievementList").innerHTML = NX.achievements.map(a => `
    <div class="col-12 col-md-4">
      <div class="nx-card p-3 h-100 text-center">
        <div class="nx-stat-icon ${a.color} mx-auto mb-2"><i class="fa-solid ${a.icon}"></i></div>
        <div class="fw-semibold small">${a.title}</div>
        <div class="text-muted" style="font-size:.78rem">${a.desc}</div>
      </div>
    </div>`).join("");

  // Weekly progress chart
  new Chart(document.getElementById("weeklyChart"), {
    type: "bar",
    data: {
      labels: NX.weekly.labels,
      datasets: [{ label: "Minutes learned", data: NX.weekly.data, backgroundColor: "#3f6bff", borderRadius: 8, maxBarThickness: 34 }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, grid: { color: "#eef1f7" } }, x: { grid: { display: false } } },
    },
  });
}

/* ---------------- PAGE: LEARNING PATH ---------------- */

function pagePath() {
  document.getElementById("roadmap").innerHTML = NX.path.map((p, i) => `
    <div class="nx-road-step ${p.status === "Completed" ? "done" : ""} ${p.status === "Locked" ? "locked" : ""}">
      <div class="nx-card p-3 d-flex align-items-center gap-3 flex-wrap">
        <div class="nx-road-num">${p.status === "Completed" ? '<i class="fa-solid fa-check"></i>' : i + 1}</div>
        <div class="flex-grow-1" style="min-width:180px">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-semibold">${p.title}</span>${statusBadge(p.status)}
          </div>
          ${bar(p.progress)}
          <small class="text-muted">${p.progress}% complete</small>
        </div>
        <button class="btn btn-nexora btn-sm" ${p.status === "Locked" ? "disabled" : ""}>Open</button>
      </div>
    </div>
    ${i < NX.path.length - 1 ? '<div class="nx-road-arrow"><i class="fa-solid fa-arrow-down"></i></div>' : ""}
  `).join("");
}

/* ---------------- PAGE: COURSES ---------------- */

function pageCourses() {
  document.getElementById("courseGrid").innerHTML = NX.courses.map(c => `
    <div class="col-sm-6 col-lg-3">
      <div class="nx-card p-3 h-100">
        <div class="nx-course-thumb mb-3" style="background:linear-gradient(135deg,${c.color},#9db6ff)">
          <i class="fa-brands ${c.icon}"></i>
        </div>
        <h6 class="fw-bold mb-1">${c.name}</h6>
        <span class="badge rounded-pill bg-light text-muted mb-2">${c.level}</span>
        ${bar(c.progress, c.color)}
        <small class="text-muted">${c.progress}% complete</small>
        <a href="learning-path.html" class="btn btn-nexora btn-sm w-100 mt-3">Continue</a>
      </div>
    </div>`).join("");
}

/* ---------------- PAGE: QUIZ ---------------- */

function pageQuiz() {
  let index = 0, score = 0, selected = null, time = 300;

  const qBox = document.getElementById("quizBox");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  function render() {
    const q = NX.quiz[index];
    document.getElementById("qCounter").textContent = `Question ${index + 1} of ${NX.quiz.length}`;
    document.getElementById("qProgress").style.width = ((index / NX.quiz.length) * 100) + "%";
    qBox.innerHTML = `
      <h5 class="fw-bold mb-3">${q.q}</h5>
      ${q.options.map((o, i) => `<div class="nx-option" data-i="${i}"><strong class="me-2">${"ABCD"[i]}.</strong>${o}</div>`).join("")}`;
    qBox.querySelectorAll(".nx-option").forEach(el =>
      el.addEventListener("click", () => {
        qBox.querySelectorAll(".nx-option").forEach(x => x.classList.remove("selected"));
        el.classList.add("selected");
        selected = Number(el.dataset.i);
      }));
    nextBtn.classList.toggle("d-none", index === NX.quiz.length - 1);
    submitBtn.classList.toggle("d-none", index !== NX.quiz.length - 1);
  }

  function score1() { if (selected === NX.quiz[index].answer) score++; selected = null; }

  nextBtn.addEventListener("click", () => { score1(); index++; render(); });

  submitBtn.addEventListener("click", () => {
    score1();
    clearInterval(timer);
    const pct = Math.round((score / NX.quiz.length) * 100);
    document.getElementById("quizCard").classList.add("d-none");
    const res = document.getElementById("resultCard");
    res.classList.remove("d-none");
    res.innerHTML = `
      <div class="text-center p-4">
        <div class="nx-stat-icon ${pct >= 60 ? "green" : "red"} mx-auto mb-3"><i class="fa-solid fa-trophy"></i></div>
        <h4 class="fw-bold">You scored ${score}/${NX.quiz.length}</h4>
        <p class="text-muted">${pct}% · ${pct >= 60 ? "Great job! +50 XP earned 🎉" : "Keep practising, you'll get there!"}</p>
        <div class="progress rounded-pill mx-auto mb-4" style="height:10px;max-width:320px">
          <div class="progress-bar" style="width:${pct}%;background:var(--nx-primary)"></div>
        </div>
        <a href="quiz.html" class="btn btn-nexora">Retake Quiz</a>
        <a href="dashboard.html" class="btn btn-nexora-outline">Back to Dashboard</a>
      </div>`;
  });

  // Countdown timer (5 minutes)
  const timer = setInterval(() => {
    time--;
    const m = String(Math.floor(time / 60)).padStart(2, "0");
    const s = String(time % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${m}:${s}`;
    if (time <= 0) { clearInterval(timer); submitBtn.click(); }
  }, 1000);

  render();
}

/* ---------------- PAGE: AI STUDY BUDDY ---------------- */

function pageBuddy() {
  const area = document.getElementById("chatArea");
  const input = document.getElementById("chatInput");

  const REPLIES = {
    "Explain Variables": "A variable is a named container that stores a value. In Python:\n\nname = \"Nexora\"\nxp = 2450\n\nPython decides the type automatically, so you don't declare it.",
    "Generate Notes": "Notes — Python Loops:\n1. for loop → repeats over a sequence\n2. while loop → repeats while a condition is true\n3. break exits the loop, continue skips one round\n4. range(start, stop, step) generates numbers",
    "Create Quiz": "Quick quiz!\nQ1. Which loop needs a condition? (for / while)\nQ2. What does range(3) produce?\nQ3. Which keyword exits a loop early?",
    "Summarize Topic": "Summary — Functions: a function groups reusable code, is defined with def, can accept parameters, and returns a value with return. Functions keep programs short and readable.",
  };

  function addMsg(text, who) {
    const div = document.createElement("div");
    div.className = "nx-msg " + who;
    div.style.whiteSpace = "pre-line";
    div.textContent = text;
    area.appendChild(div);
    area.scrollTop = area.scrollHeight;
  }

  function send(text) {
    if (!text.trim()) return;
    addMsg(text, "user");
    input.value = "";
    setTimeout(() => {
      addMsg(REPLIES[text] || "Great question! Here is a simple explanation: break the topic into small parts, learn one part a day, and test yourself with a short quiz. (Demo response — UI only.)", "bot");
    }, 500);
  }

  addMsg("Hi Aditi 👋 I'm your AI Study Buddy. Ask me anything about your Python course, or tap a suggestion below.", "bot");

  document.getElementById("chatForm").addEventListener("submit", (e) => { e.preventDefault(); send(input.value); });
  document.querySelectorAll("[data-prompt]").forEach(b =>
    b.addEventListener("click", () => send(b.dataset.prompt)));
}

/* ---------------- PAGE: REWARDS ---------------- */

function pageRewards() {
  document.getElementById("rewardGrid").innerHTML = NX.rewards.map(r => `
    <div class="col-md-4">
      <div class="nx-card p-4 h-100 text-center">
        <div class="nx-stat-icon yellow mx-auto mb-3"><i class="fa-solid ${r.icon}"></i></div>
        <h6 class="fw-bold">${r.name}</h6>
        <p class="text-muted small mb-3">${r.cost} reward points</p>
        <button class="btn btn-nexora btn-sm w-100" ${NX.stats.rewardPoints < r.cost ? "disabled" : ""}
          data-bs-toggle="modal" data-bs-target="#redeemModal">
          ${NX.stats.rewardPoints < r.cost ? "Not enough points" : "Redeem"}
        </button>
      </div>
    </div>`).join("");

  document.getElementById("historyBody").innerHTML = NX.rewardHistory.map(h => `
    <tr><td>${h.date}</td><td>${h.item}</td><td>${h.points}</td><td>${statusBadge(h.status)}</td></tr>`).join("");
}

/* ---------------- PAGE: LEADERBOARD ---------------- */

function pageLeaderboard() {
  document.getElementById("lbBody").innerHTML = NX.leaderboard.map((s, i) => `
    <tr class="${s.me ? "nx-me" : ""}">
      <td>${i < 3 ? ["🥇", "🥈", "🥉"][i] : "#" + (i + 1)}</td>
      <td>${s.name} ${s.me ? '<span class="badge bg-primary-subtle text-primary ms-1">You</span>' : ""}</td>
      <td>${s.xp.toLocaleString()}</td>
      <td><span class="badge rounded-pill bg-light text-muted">${s.badge}</span></td>
    </tr>`).join("");
}

/* ---------------- PAGE: ADMIN ---------------- */

function pageAdmin() {
  const t = NX.admin.totals;
  document.getElementById("adminStats").innerHTML = [
    { icon: "fa-users", cls: "blue", label: "Total Students", value: t.students },
    { icon: "fa-book", cls: "yellow", label: "Total Courses", value: t.courses },
    { icon: "fa-circle-check", cls: "green", label: "Completed Courses", value: t.completed },
    { icon: "fa-gift", cls: "red", label: "Rewards Issued", value: t.rewards },
  ].map(c => `
    <div class="col-6 col-lg-3">
      <div class="nx-card p-3">
        <div class="nx-stat-icon ${c.cls} mb-2"><i class="fa-solid ${c.icon}"></i></div>
        <div class="text-muted small">${c.label}</div>
        <div class="fs-4 fw-bold">${c.value}</div>
      </div>
    </div>`).join("");

  document.getElementById("adminStudents").innerHTML = NX.admin.students.map(s => `
    <tr><td>${s.id}</td><td>${s.name}</td><td>${s.course}</td>
      <td style="min-width:140px">${bar(s.progress)}<small class="text-muted">${s.progress}%</small></td>
      <td>${s.xp}</td></tr>`).join("");

  document.getElementById("adminCourses").innerHTML = NX.admin.courseRows.map(c => `
    <tr><td>${c.code}</td><td>${c.name}</td><td>${c.students}</td>
      <td><span class="badge rounded-pill bg-light text-muted">${c.level}</span></td></tr>`).join("");

  document.getElementById("adminRewards").innerHTML = NX.admin.rewardRows.map(r => `
    <tr><td>${r.id}</td><td>${r.student}</td><td>${r.item}</td><td>${statusBadge(r.status)}</td></tr>`).join("");

  new Chart(document.getElementById("adminChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: "Average student progress (%)",
        data: [22, 31, 40, 48, 55, 61, 68],
        borderColor: "#3f6bff", backgroundColor: "rgba(63,107,255,.15)",
        fill: true, tension: 0.35, pointRadius: 4,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { y: { beginAtZero: true, max: 100, grid: { color: "#eef1f7" } }, x: { grid: { display: false } } },
    },
  });
}

/* ---------------- BOOTSTRAPPING ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  buildLayout(page, document.body.dataset.title || "Dashboard");

  const routes = {
    dashboard: pageDashboard,
    path: pagePath,
    courses: pageCourses,
    quiz: pageQuiz,
    buddy: pageBuddy,
    rewards: pageRewards,
    leaderboard: pageLeaderboard,
    admin: pageAdmin,
  };
  routes[page]?.();

  // Settings page: simple theme toggle demo
  document.getElementById("themeToggle")?.addEventListener("change", (e) => {
    document.body.style.filter = e.target.checked ? "invert(1) hue-rotate(180deg)" : "none";
  });
});
