// Shared sidebar/layout builder
function buildStudentLayout(pageTitle, activeNav, contentHTML) {
  const student = Auth.requireStudent();
  if (!student) return;
  if (student.onboardingComplete === false) { window.location.href = 'student-onboarding.html'; return; }
  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', href: 'student-dashboard.html' },
    { id: 'profile', icon: '👤', label: 'My Profile', href: 'student-profile.html' },
    { id: 'learning', icon: '📚', label: 'Learning', href: 'student-learning.html' },
    { id: 'mocktest', icon: '📝', label: 'Mock Tests', href: 'student-mocktest.html' },
    { id: 'interview', icon: '🎙️', label: 'AI Interview', href: 'student-interview.html' },
    { id: 'internships', icon: '💼', label: 'Internships', href: 'student-internships.html' },
    { id: 'jobs', icon: '🏢', label: 'Jobs', href: 'student-jobs.html' },
    { id: 'applications', icon: '📄', label: 'My Applications', href: 'student-applications.html' },
    { id: 'passport', icon: '🪪', label: 'Skill Passport', href: 'student-passport.html' },
    { id: 'performance', icon: '📊', label: 'Performance', href: 'student-performance.html' },
  ];
  const navHTML = navItems.map(n => `<div class="nav-item ${n.id === activeNav ? 'active' : ''}" onclick="window.location.href='${n.href}'">${n.icon} <span>${n.label}</span></div>`).join('');
  document.body.innerHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <div class="app-layout">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-logo">
          <div class="brand">🐯 SkillBridge AI</div>
          <div class="tagline">Learn • Improve • Get Placed</div>
        </div>
        <nav class="sidebar-nav">${navHTML}</nav>
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="sidebar-avatar">${student.avatar || '👤'}</div>
            <div class="sidebar-user-info">
              <div class="name">${student.name}</div>
              <div class="role">${student.course || 'Student'}</div>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" style="color:rgba(255,255,255,.5);margin-top:10px;width:100%" onclick="Storage.logout()">🚪 Logout</button>
        </div>
      </aside>
      <div class="main-content">
        <div class="topbar">
          <div style="display:flex;align-items:center;gap:12px">
            <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
            <span class="topbar-title">${pageTitle}</span>
          </div>
          <div class="topbar-actions">
            <div class="streak-badge">🔥 ${student.streak || 0} Day Streak</div>
            <div class="notif-btn" style="cursor:pointer;font-size:1.3rem" onclick="showNotifications()">🔔<span class="notif-dot"></span></div>
          </div>
        </div>
        <div class="page-content">${contentHTML}</div>
      </div>
    </div>`;
  return student;
}

function buildCompanyLayout(pageTitle, activeNav, contentHTML) {
  const company = Auth.requireCompany();
  if (!company) return;
  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', href: 'company-dashboard.html' },
    { id: 'post', icon: '➕', label: 'Post Job/Internship', href: 'company-post.html' },
    { id: 'applications', icon: '📋', label: 'Applications', href: 'company-applications.html' },
    { id: 'candidates', icon: '👥', label: 'Candidate Database', href: 'company-candidates.html' },
    { id: 'shortlisted', icon: '⭐', label: 'Shortlisted', href: 'company-shortlisted.html' },
    { id: 'analytics', icon: '📊', label: 'Analytics', href: 'company-analytics.html' },
    { id: 'profile', icon: '🏢', label: 'Company Profile', href: 'company-profile.html' },
  ];
  const navHTML = navItems.map(n => `<div class="nav-item ${n.id === activeNav ? 'active' : ''}" onclick="window.location.href='${n.href}'">${n.icon} <span>${n.label}</span></div>`).join('');
  document.body.innerHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <div class="app-layout">
      <aside class="sidebar" id="sidebar" style="background:#1a1a2e">
        <div class="sidebar-logo">
          <div class="brand">🐯 SkillBridge AI</div>
          <div class="tagline">Company Portal</div>
        </div>
        <nav class="sidebar-nav">${navHTML}</nav>
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="sidebar-avatar">${company.logo || '🏢'}</div>
            <div class="sidebar-user-info">
              <div class="name">${company.name}</div>
              <div class="role">Recruiter</div>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" style="color:rgba(255,255,255,.5);margin-top:10px;width:100%" onclick="Storage.logout()">🚪 Logout</button>
        </div>
      </aside>
      <div class="main-content">
        <div class="topbar">
          <div style="display:flex;align-items:center;gap:12px">
            <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
            <span class="topbar-title">${pageTitle}</span>
          </div>
          <div class="topbar-actions">
            <div class="notif-btn" style="cursor:pointer;font-size:1.3rem">🔔<span class="notif-dot"></span></div>
            <a href="company-post.html" class="btn btn-primary btn-sm">+ Post Job</a>
          </div>
        </div>
        <div class="page-content">${contentHTML}</div>
      </div>
    </div>`;
  return company;
}

function buildAdminLayout(pageTitle, activeNav, contentHTML) {
  const admin = Auth.requireAdmin();
  if (!admin) return;
  const navItems = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard', href: 'admin-dashboard.html' },
    { id: 'students', icon: '🎓', label: 'Students', href: 'admin-students.html' },
    { id: 'companies', icon: '🏢', label: 'Companies', href: 'admin-companies.html' },
    { id: 'activity', icon: '📜', label: 'Activity Log', href: 'admin-activity.html' },
  ];
  const navHTML = navItems.map(n => `<div class="nav-item ${n.id === activeNav ? 'active' : ''}" onclick="window.location.href='${n.href}'">${n.icon} <span>${n.label}</span></div>`).join('');
  document.body.innerHTML = `
    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <div class="app-layout">
      <aside class="sidebar" id="sidebar" style="background:#0f1117">
        <div class="sidebar-logo">
          <div class="brand">🛡️ SkillBridge AI</div>
          <div class="tagline">Admin Control Panel</div>
        </div>
        <nav class="sidebar-nav">${navHTML}</nav>
        <div class="sidebar-footer">
          <div class="sidebar-user">
            <div class="sidebar-avatar">${admin.avatar || '🛡️'}</div>
            <div class="sidebar-user-info">
              <div class="name">${admin.name}</div>
              <div class="role">${admin.role || 'Admin'}</div>
            </div>
          </div>
          <button class="btn btn-ghost btn-sm" style="color:rgba(255,255,255,.5);margin-top:10px;width:100%" onclick="Storage.logout()">🚪 Logout</button>
        </div>
      </aside>
      <div class="main-content">
        <div class="topbar">
          <div style="display:flex;align-items:center;gap:12px">
            <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
            <span class="topbar-title">${pageTitle}</span>
          </div>
          <div class="topbar-actions">
            <span class="badge badge-danger">🛡️ Admin Mode</span>
          </div>
        </div>
        <div class="page-content">${contentHTML}</div>
      </div>
    </div>`;
  return admin;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function showNotifications() {
  const notifs = [
    { icon: '🎯', text: 'New internship matches your skills', time: '2 min ago' },
    { icon: '📚', text: 'Your Data Structures score decreased', time: '1 hour ago' },
    { icon: '🎤', text: "Today's interview is pending", time: '3 hours ago' },
    { icon: '💼', text: 'You have been shortlisted by TechNova', time: '1 day ago' },
  ];
  const existing = document.getElementById('notif-panel');
  if (existing) { existing.remove(); return; }
  const panel = document.createElement('div');
  panel.id = 'notif-panel';
  panel.style.cssText = 'position:fixed;top:60px;right:20px;background:#fff;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.15);width:320px;z-index:500;border:1px solid #e2e8f0';
  panel.innerHTML = `<div style="padding:16px;border-bottom:1px solid #e2e8f0;font-weight:700">🔔 Notifications</div>` +
    notifs.map(n => `<div style="padding:12px 16px;border-bottom:1px solid #f1f5f9;display:flex;gap:10px;align-items:flex-start"><span style="font-size:1.2rem">${n.icon}</span><div><div style="font-size:.875rem;font-weight:600">${n.text}</div><div style="font-size:.75rem;color:#94a3b8">${n.time}</div></div></div>`).join('') +
    `<div style="padding:12px;text-align:center"><button class="btn btn-ghost btn-sm" onclick="document.getElementById('notif-panel').remove()">Close</button></div>`;
  document.body.appendChild(panel);
}
