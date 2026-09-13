// SkillBridge AI - Shared Data & Utilities

const DEMO_STUDENTS = [
  {
    id: 's1', name: 'Rahul Sharma', email: 'rahul@demo.com', password: 'demo123',
    phone: '9876543210', dob: '2002-05-15', gender: 'Male', location: 'Pune',
    college: 'MIT College of Engineering', course: 'BCA', branch: 'Computer Science',
    year: '3rd Year', cgpa: '8.4', graduationYear: '2025',
    school10: 'Delhi Public School', pct10: '92', school12: 'Delhi Public School', pct12: '88',
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'SQL'],
    languages: ['JavaScript', 'Python', 'Java', 'C++'],
    softSkills: ['Communication', 'Teamwork', 'Problem Solving'],
    preferredRole: 'Frontend Developer', preferredLocation: 'Pune, Mumbai',
    workMode: 'Hybrid',
    projects: [
      { name: 'Student Management System', tech: 'React, Node.js, MongoDB', desc: 'Full-stack web app for managing student records' },
      { name: 'Portfolio Website', tech: 'HTML, CSS, JS', desc: 'Personal portfolio with animations' }
    ],
    certifications: ['Python Beginner - Coursera', 'Java Basics - NPTEL'],
    careerScore: 78, technicalScore: 85, aptitudeScore: 78, communicationScore: 71,
    problemSolvingScore: 84, interviewScore: 76,
    testHistory: [
      { date: '2025-01-15', test: 'Full Mock Test', score: 82, aptitude: 85, reasoning: 80, programming: 78, english: 84 },
      { date: '2025-01-14', test: 'Technical Test', score: 76, aptitude: 72, reasoning: 74, programming: 80, english: 78 },
      { date: '2025-01-13', test: 'Aptitude Test', score: 68, aptitude: 70, reasoning: 66, programming: 65, english: 72 }
    ],
    interviewHistory: [
      { date: '2025-01-15', type: 'HR Interview', score: 76, communication: 72, confidence: 68, technical: 82, clarity: 75 },
      { date: '2025-01-14', type: 'Technical Interview', score: 81, communication: 78, confidence: 80, technical: 88, clarity: 79 },
      { date: '2025-01-13', type: 'Behavioral Interview', score: 72, communication: 70, confidence: 65, technical: 75, clarity: 78 }
    ],
    streak: 12, avatar: '👨‍💻', profileCompletion: 85,
    weakAreas: ['Communication', 'Data Structures', 'Java'],
    scoreHistory: [72, 74, 73, 76, 75, 78, 78]
  },
  {
    id: 's2', name: 'Priya Das', email: 'priya@demo.com', password: 'demo123',
    phone: '9876543211', location: 'Bangalore', college: 'RV College of Engineering',
    course: 'B.Tech', branch: 'Information Technology', year: '4th Year', cgpa: '8.9',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Data Analysis'],
    languages: ['Python', 'R', 'SQL'], preferredRole: 'Data Scientist',
    careerScore: 86, technicalScore: 91, aptitudeScore: 84, communicationScore: 82,
    problemSolvingScore: 88, interviewScore: 83, streak: 8, avatar: '👩‍💻', profileCompletion: 92,
    weakAreas: ['Communication', 'System Design'],
    scoreHistory: [78, 80, 82, 83, 85, 86, 86]
  },
  {
    id: 's3', name: 'Aman Singh', email: 'aman@demo.com', password: 'demo123',
    phone: '9876543212', location: 'Delhi', college: 'NSIT Delhi',
    course: 'B.Tech', branch: 'Computer Science', year: '3rd Year', cgpa: '7.8',
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    languages: ['Java', 'Python', 'C'], preferredRole: 'Backend Developer',
    careerScore: 81, technicalScore: 84, aptitudeScore: 79, communicationScore: 76,
    problemSolvingScore: 82, interviewScore: 80, streak: 5, avatar: '👨‍🎓', profileCompletion: 78,
    weakAreas: ['Communication', 'Frontend'],
    scoreHistory: [74, 75, 77, 78, 80, 81, 81]
  },
  {
    id: 's4', name: 'Sneha Roy', email: 'sneha@demo.com', password: 'demo123',
    phone: '9876543213', location: 'Kolkata', college: 'Jadavpur University',
    course: 'B.Tech', branch: 'Electronics', year: '4th Year', cgpa: '8.2',
    skills: ['Python', 'IoT', 'Embedded C', 'Arduino'],
    languages: ['Python', 'C', 'C++'], preferredRole: 'IoT Developer',
    careerScore: 74, technicalScore: 78, aptitudeScore: 76, communicationScore: 70,
    problemSolvingScore: 75, interviewScore: 72, streak: 3, avatar: '👩‍🔬', profileCompletion: 70,
    weakAreas: ['Web Development', 'Communication', 'SQL'],
    scoreHistory: [68, 70, 71, 72, 73, 74, 74]
  },
  {
    id: 's5', name: 'Rohit Kumar', email: 'rohit@demo.com', password: 'demo123',
    phone: '9876543214', location: 'Hyderabad', college: 'BITS Pilani',
    course: 'B.Tech', branch: 'Computer Science', year: '2nd Year', cgpa: '9.1',
    skills: ['C++', 'Algorithms', 'Data Structures', 'Python'],
    languages: ['C++', 'Python', 'Java'], preferredRole: 'Software Engineer',
    careerScore: 69, technicalScore: 82, aptitudeScore: 85, communicationScore: 60,
    problemSolvingScore: 88, interviewScore: 58, streak: 2, avatar: '👨‍💻', profileCompletion: 65,
    weakAreas: ['Communication', 'Interview Skills', 'Web Development'],
    scoreHistory: [62, 64, 65, 66, 68, 69, 69]
  }
];

const DEMO_COMPANIES = [
  {
    id: 'c1', name: 'TechNova Solutions', email: 'hr@technova.com', password: 'demo123',
    industry: 'Software Development', size: '500-1000', location: 'Pune',
    website: 'technova.com', recruiter: 'Anita Mehta', phone: '9800001111',
    description: 'Leading software solutions company specializing in web and mobile development.',
    logo: '🚀', totalApplications: 248, shortlisted: 36, hired: 12
  },
  {
    id: 'c2', name: 'DataWorks Analytics', email: 'hr@dataworks.com', password: 'demo123',
    industry: 'Data Analytics', size: '100-500', location: 'Bangalore',
    website: 'dataworks.com', recruiter: 'Suresh Nair', phone: '9800002222',
    description: 'Data-driven analytics company helping businesses make smarter decisions.',
    logo: '📊', totalApplications: 156, shortlisted: 24, hired: 8
  },
  {
    id: 'c3', name: 'CloudBase Systems', email: 'hr@cloudbase.com', password: 'demo123',
    industry: 'Cloud Computing', size: '1000+', location: 'Mumbai',
    website: 'cloudbase.com', recruiter: 'Ravi Sharma', phone: '9800003333',
    description: 'Enterprise cloud infrastructure and DevOps solutions provider.',
    logo: '☁️', totalApplications: 312, shortlisted: 48, hired: 18
  }
];

const DEMO_OPPORTUNITIES = [
  {
    id: 'o1', companyId: 'c1', companyName: 'TechNova Solutions', type: 'internship',
    title: 'Frontend Developer Intern', location: 'Remote', duration: '3 Months',
    stipend: '₹10,000/month', skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    description: 'Work on real-world frontend projects using React and modern JS.',
    responsibilities: ['Build UI components', 'Integrate APIs', 'Write clean code'],
    education: 'BCA/B.Tech', experience: 'Fresher', openings: 5,
    deadline: '2025-02-28', posted: '2025-01-10', logo: '🚀'
  },
  {
    id: 'o2', companyId: 'c2', companyName: 'DataWorks Analytics', type: 'internship',
    title: 'Data Analyst Intern', location: 'Bangalore', duration: '6 Months',
    stipend: '₹15,000/month', skills: ['Python', 'SQL', 'Excel', 'Tableau'],
    description: 'Analyze large datasets and create insightful dashboards.',
    responsibilities: ['Data cleaning', 'Statistical analysis', 'Dashboard creation'],
    education: 'B.Tech/MCA', experience: 'Fresher', openings: 3,
    deadline: '2025-02-15', posted: '2025-01-08', logo: '📊'
  },
  {
    id: 'o3', companyId: 'c1', companyName: 'TechNova Solutions', type: 'job',
    title: 'Full Stack Developer', location: 'Pune', duration: 'Full Time',
    salary: '₹6-8 LPA', skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    description: 'Build and maintain full-stack web applications.',
    responsibilities: ['Frontend development', 'Backend APIs', 'Database design'],
    education: 'B.Tech/BCA', experience: '0-2 years', openings: 8,
    deadline: '2025-03-15', posted: '2025-01-12', logo: '🚀'
  },
  {
    id: 'o4', companyId: 'c3', companyName: 'CloudBase Systems', type: 'job',
    title: 'Python Developer', location: 'Mumbai', duration: 'Full Time',
    salary: '₹7-10 LPA', skills: ['Python', 'Django', 'REST APIs', 'PostgreSQL'],
    description: 'Develop scalable backend services using Python and Django.',
    responsibilities: ['API development', 'Database optimization', 'Code review'],
    education: 'B.Tech/MCA', experience: '0-2 years', openings: 4,
    deadline: '2025-03-01', posted: '2025-01-11', logo: '☁️'
  },
  {
    id: 'o5', companyId: 'c2', companyName: 'DataWorks Analytics', type: 'internship',
    title: 'ML Engineer Intern', location: 'Remote', duration: '4 Months',
    stipend: '₹20,000/month', skills: ['Python', 'TensorFlow', 'Machine Learning', 'SQL'],
    description: 'Work on ML models for real business problems.',
    responsibilities: ['Model training', 'Feature engineering', 'Model deployment'],
    education: 'B.Tech/M.Tech', experience: 'Fresher', openings: 2,
    deadline: '2025-02-20', posted: '2025-01-09', logo: '📊'
  },
  {
    id: 'o6', companyId: 'c3', companyName: 'CloudBase Systems', type: 'internship',
    title: 'DevOps Intern', location: 'Mumbai', duration: '3 Months',
    stipend: '₹12,000/month', skills: ['Linux', 'Docker', 'AWS', 'CI/CD'],
    description: 'Learn and implement DevOps practices in a cloud environment.',
    responsibilities: ['CI/CD pipelines', 'Container management', 'Monitoring'],
    education: 'B.Tech', experience: 'Fresher', openings: 3,
    deadline: '2025-02-25', posted: '2025-01-13', logo: '☁️'
  },
  {
    id: 'o7', companyId: 'c1', companyName: 'TechNova Solutions', type: 'job',
    title: 'React Developer', location: 'Hybrid - Pune', duration: 'Full Time',
    salary: '₹5-7 LPA', skills: ['React', 'TypeScript', 'Redux', 'CSS'],
    description: 'Build modern web applications with React and TypeScript.',
    responsibilities: ['Component development', 'State management', 'Performance optimization'],
    education: 'BCA/B.Tech', experience: '0-1 year', openings: 6,
    deadline: '2025-03-10', posted: '2025-01-14', logo: '🚀'
  }
];

const DEMO_ADMIN = {
  id: 'admin1', name: 'SkillBridge Admin', email: 'admin@skillbridge.com', password: 'admin123',
  role: 'Super Admin', avatar: '🛡️'
};

const DEMO_ACTIVITY_LOG = [
  { id: 'act1', time: '2025-01-15T10:20:00', type: 'application', icon: '📋', message: 'Rahul Sharma applied to Frontend Developer Intern at TechNova Solutions' },
  { id: 'act2', time: '2025-01-15T09:05:00', type: 'status_change', icon: '⭐', message: 'TechNova Solutions shortlisted Rahul Sharma for Frontend Developer Intern' },
  { id: 'act3', time: '2025-01-14T16:40:00', type: 'job_post', icon: '💼', message: 'TechNova Solutions posted React Developer' },
  { id: 'act4', time: '2025-01-14T14:15:00', type: 'interview', icon: '🎤', message: 'Priya Das completed a Technical Interview scoring 81%' },
  { id: 'act5', time: '2025-01-14T11:30:00', type: 'application', icon: '📋', message: 'Priya Das applied to Data Analyst Intern at DataWorks Analytics' },
  { id: 'act6', time: '2025-01-13T18:00:00', type: 'test', icon: '📝', message: 'Aman Singh completed a Full Mock Test scoring 79%' },
  { id: 'act7', time: '2025-01-13T15:20:00', type: 'status_change', icon: '❌', message: 'DataWorks Analytics rejected Sneha Roy for ML Engineer Intern' },
  { id: 'act8', time: '2025-01-12T12:10:00', type: 'job_post', icon: '💼', message: 'CloudBase Systems posted Python Developer' },
  { id: 'act9', time: '2025-01-11T09:45:00', type: 'status_change', icon: '🎤', message: 'TechNova Solutions moved Priya Das to Interview stage' },
  { id: 'act10', time: '2025-01-10T08:30:00', type: 'registration', icon: '🏢', message: 'CloudBase Systems joined SkillBridge AI' }
];

const DEMO_APPLICATIONS = [
  { id: 'a1', studentId: 's1', companyId: 'c1', opportunityId: 'o1', skillMatch: 92, careerScore: 78, testScore: 82, interviewScore: 76, status: 'Shortlisted', appliedDate: '2025-01-14' },
  { id: 'a2', studentId: 's2', companyId: 'c2', opportunityId: 'o2', skillMatch: 88, careerScore: 86, testScore: 84, interviewScore: 83, status: 'Under Review', appliedDate: '2025-01-13' },
  { id: 'a3', studentId: 's3', companyId: 'c1', opportunityId: 'o3', skillMatch: 84, careerScore: 81, testScore: 79, interviewScore: 80, status: 'Applied', appliedDate: '2025-01-15' },
  { id: 'a4', studentId: 's1', companyId: 'c3', opportunityId: 'o4', skillMatch: 76, careerScore: 78, testScore: 82, interviewScore: 76, status: 'Applied', appliedDate: '2025-01-12' },
  { id: 'a5', studentId: 's4', companyId: 'c2', opportunityId: 'o5', skillMatch: 71, careerScore: 74, testScore: 70, interviewScore: 72, status: 'Rejected', appliedDate: '2025-01-10' },
  { id: 'a6', studentId: 's2', companyId: 'c1', opportunityId: 'o1', skillMatch: 86, careerScore: 86, testScore: 84, interviewScore: 83, status: 'Interview', appliedDate: '2025-01-11' },
  { id: 'a7', studentId: 's5', companyId: 'c3', opportunityId: 'o4', skillMatch: 79, careerScore: 69, testScore: 85, interviewScore: 58, status: 'Under Review', appliedDate: '2025-01-13' }
];

// LocalStorage helpers
const Storage = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  init() {
    if (!this.get('sb_students')) this.set('sb_students', DEMO_STUDENTS);
    if (!this.get('sb_companies')) this.set('sb_companies', DEMO_COMPANIES);
    if (!this.get('sb_opportunities')) this.set('sb_opportunities', DEMO_OPPORTUNITIES);
    if (!this.get('sb_applications')) this.set('sb_applications', DEMO_APPLICATIONS);
    if (!this.get('sb_activity_log')) this.set('sb_activity_log', DEMO_ACTIVITY_LOG);
  },
  getStudents: () => Storage.get('sb_students') || DEMO_STUDENTS,
  getCompanies: () => Storage.get('sb_companies') || DEMO_COMPANIES,
  getOpportunities: () => Storage.get('sb_opportunities') || DEMO_OPPORTUNITIES,
  getApplications: () => Storage.get('sb_applications') || DEMO_APPLICATIONS,
  getActivityLog: () => Storage.get('sb_activity_log') || DEMO_ACTIVITY_LOG,
  logActivity: (type, icon, message) => {
    const log = Storage.getActivityLog();
    log.unshift({ id: 'act' + Date.now(), time: new Date().toISOString(), type, icon, message });
    Storage.set('sb_activity_log', log.slice(0, 200));
  },
  getCurrentUser: () => Storage.get('sb_current_user'),
  setCurrentUser: (user) => Storage.set('sb_current_user', user),
  logout: () => {
    const u = Storage.getCurrentUser();
    localStorage.removeItem('sb_current_user');
    window.location.href = (u && u.type === 'admin') ? 'admin-login.html' : 'index.html';
  }
};

// Auth helpers
const Auth = {
  loginStudent(email, password) {
    const students = Storage.getStudents();
    const s = students.find(s => s.email === email && s.password === password);
    if (s) { Storage.setCurrentUser({ type: 'student', id: s.id }); return s; }
    return null;
  },
  loginCompany(email, password) {
    const companies = Storage.getCompanies();
    const c = companies.find(c => c.email === email && c.password === password);
    if (c) { Storage.setCurrentUser({ type: 'company', id: c.id }); return c; }
    return null;
  },
  loginAdmin(email, password) {
    if (email === DEMO_ADMIN.email && password === DEMO_ADMIN.password) {
      Storage.setCurrentUser({ type: 'admin', id: DEMO_ADMIN.id });
      return DEMO_ADMIN;
    }
    return null;
  },
  demoStudent() { Storage.setCurrentUser({ type: 'student', id: 's1' }); window.location.href = 'student-dashboard.html'; },
  demoCompany() { Storage.setCurrentUser({ type: 'company', id: 'c1' }); window.location.href = 'company-dashboard.html'; },
  demoAdmin() { Storage.setCurrentUser({ type: 'admin', id: DEMO_ADMIN.id }); window.location.href = 'admin-dashboard.html'; },
  requireStudent() {
    const u = Storage.getCurrentUser();
    if (!u || u.type !== 'student') { window.location.href = 'auth.html'; return null; }
    return Storage.getStudents().find(s => s.id === u.id);
  },
  requireCompany() {
    const u = Storage.getCurrentUser();
    if (!u || u.type !== 'company') { window.location.href = 'auth.html'; return null; }
    return Storage.getCompanies().find(c => c.id === u.id);
  },
  requireAdmin() {
    const u = Storage.getCurrentUser();
    if (!u || u.type !== 'admin') { window.location.href = 'admin-login.html'; return null; }
    return DEMO_ADMIN;
  }
};

// Skill match calculator
function calcSkillMatch(studentSkills, requiredSkills) {
  if (!requiredSkills || requiredSkills.length === 0) return 100;
  const matched = requiredSkills.filter(s => studentSkills.map(x => x.toLowerCase()).includes(s.toLowerCase()));
  return Math.round((matched.length / requiredSkills.length) * 100);
}

// Score color helper
function scoreColor(score) {
  if (score >= 80) return '#10b981';
  if (score >= 65) return '#f59e0b';
  return '#ef4444';
}

function scoreBadge(score) {
  if (score >= 80) return 'badge-success';
  if (score >= 65) return 'badge-warning';
  return 'badge-danger';
}

function statusBadge(status) {
  const map = { 'Applied': 'badge-info', 'Under Review': 'badge-warning', 'Shortlisted': 'badge-success', 'Interview': 'badge-purple', 'Selected': 'badge-success', 'Rejected': 'badge-danger', 'Hired': 'badge-success' };
  return map[status] || 'badge-info';
}

// Toast notification
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3000);
}

// Animated counter
function animateCount(el, target, suffix = '%') {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// Progress ring SVG
function progressRing(score, size = 80, stroke = 8) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const color = scoreColor(score);
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="#e5e7eb" stroke-width="${stroke}"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"
      transform="rotate(-90 ${size/2} ${size/2})" style="transition:stroke-dashoffset 1s ease"/>
    <text x="50%" y="50%" text-anchor="middle" dy=".35em" font-size="${size/5}" font-weight="700" fill="${color}">${score}%</text>
  </svg>`;
}

Storage.init();
