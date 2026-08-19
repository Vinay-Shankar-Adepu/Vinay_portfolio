export const personalInfo = {
  name: "Vinay Shankar Adepu", firstName: "Vinay", brandName: "Vinay Adepu",
  title: "Full-Stack & Flutter Developer", location: "Hyderabad, India",
  phone: "+91 99661 20406", emails: { primary: "vinayshankar412@gmail.com" },
  summary: "Computer Science undergraduate and Full-Stack Developer Intern building responsive web and mobile products with React.js, Node.js, Flutter, Firebase, and MongoDB.",
  resumeUrl: "/vinay_adepu_resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Vinay-Shankar-Adepu",
  linkedin: "https://www.linkedin.com/in/vinay-adepu/",
  instagram: null,
};

export const heroContent = {
  greeting: "Hi, I'm Vinay", titleHighlight: "Full-Stack & Flutter Developer",
  subtitle: "I build responsive web and mobile applications, secure APIs, and real-time digital experiences.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/vinay_adepu_resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vinay Shankar Adepu</span>, a Computer Science undergraduate in Hyderabad and a Full-Stack Developer Intern. I enjoy turning complex requirements into reliable, database-driven web and mobile products.`,
  techStack: ["React.js", "Node.js", "Flutter"],
};

export const skillsContent = {
  badge: "My Process", heading: "Here's how I turn ideas into dependable products",
  description: "A practical engineering process shaped by team leadership, Agile delivery, and production-focused development.",
  cards: [
    { number: "01", title: "Discover", text: "Clarify user needs, business goals, technical constraints, and measurable outcomes." },
    { number: "02", title: "Architect", text: "Plan maintainable interfaces, APIs, data models, authentication, and application state." },
    { number: "03", title: "Build", text: "Develop responsive experiences and reusable services with clean, reviewable code." },
    { number: "04", title: "Validate", text: "Test critical flows, debug edge cases, optimize performance, and ship confidently." },
  ], endText: "Ready to ship!",
};

const category = (title, names) => ({ title, skills: names.map((name, index) => ({ name, level: 92 - (index % 4) * 5 })) });
export const technicalSkills = { categories: [
  category("Programming Languages", ["Java", "Python", "C", "C++", "JavaScript", "Dart"]),
  category("Frontend & Mobile", ["React.js", "Flutter", "HTML5", "CSS3", "Material UI", "Responsive Design", "Provider"]),
  category("Backend & APIs", ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Firebase Authentication", "Cloud Functions"]),
  category("Databases & Storage", ["MongoDB", "Firebase Firestore", "MySQL", "Hive"]),
  category("Tools & Platforms", ["Git", "GitHub", "GitHub Actions", "Postman", "DBeaver", "VS Code", "Android Studio", "Firebase Hosting"]),
  category("Additional", ["Appian", "Neutrinos", "Razorpay", "Google Maps API", "ML Model Integration", "Agile", "Code Reviews"]),
] };

export const internshipsList = [{
  organization: "Al Rajhi Takaful", role: "Full-Stack Developer Intern",
  duration: "Apr 2026 - Present · Remote",
  skills: ["Enterprise-scale insurance technology", "Full-stack application architecture", "Secure API-driven systems", "Agile delivery, testing, and debugging"],
  tech: ["Frontend", "Backend Services", "REST APIs", "Databases", "Git"],
}];

export const projects = [
  { id: "canteen", number: "01", badge: "Featured Demo", title: "College Canteen Ordering App", description: "Built a Flutter ordering system spanning customer and administrator workflows, with Provider state management, Hive cart persistence, Razorpay payments, QR pickup, and real-time Firestore updates.", techTags: ["Flutter", "Dart", "Firestore", "Razorpay", "Hive", "Provider"], links: { github: "https://github.com/Vinay-Shankar-Adepu/KMIT_Canteen_App", certificate: "https://psapi.kmitonline.com/studentps/certificate/3b35953b-60c2-487a-bb2f-d5de2326d971", youtube: "https://www.youtube-nocookie.com/embed/GvpodO7-AQc?rel=0" }, isFlagship: true },
  { id: "signature", number: "02", badge: "Live", title: "Signature Verification System", description: "A MERN application integrating a Python deep-learning model, with image upload, preprocessing and inference APIs, access controls, and modular backend services.", techTags: ["MERN Stack", "Python", "Deep Learning"], links: { github: "https://github.com/Vinay-Shankar-Adepu/Signature-Verification", demo: "https://signature-verification-mqtk.onrender.com/", certificate: "https://psapi.kmitonline.com/studentps/certificate/bf8ca6ee-c472-40e3-92cb-8251dfc81b58" }, isFlagship: false },
  { id: "fixitnow", number: "03", badge: "Team Lead · Live", title: "FixItNow", description: "Led a five-member team to deliver a service-booking platform with 20+ listings, REST APIs, and Firebase role-based workflows for customers, providers, and administrators.", techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"], links: { github: "https://github.com/Vinay-Shankar-Adepu/Local-Hands-01", demo: "https://localhands-45.vercel.app/" }, isFlagship: false },
  { id: "disaster", number: "04", badge: "Hackathon", title: "Disaster Management & Relief App", description: "A real-time rescue coordination app with one-tap SOS alerts, shelter mapping, role-based dashboards, resource allocation, and donation workflows.", techTags: ["Flutter", "Firebase", "Google Maps API", "Cloud Functions"], links: {}, isFlagship: false },
  { id: "megathon", number: "05", badge: "Top 10 Finalist", title: "Insurance Digitization Platform", description: "A 48-hour Megathon 2025 prototype aligned with insurance workflows and mentored by CHUBB professionals. Led the team across APIs, data handling, solution design, and presentation.", techTags: ["React.js", "Node.js", "MongoDB", "REST APIs", "JWT"], links: {}, isFlagship: false },
];

export const leadershipList = [
  { title: "Megathon 2025 Finalist", description: "Secured a Top 10 finish at the E-Cell IIIT Hyderabad national hackathon with an insurance digitization platform built in 48 hours.", role: "Team Lead", badge: "Achievement" },
  { title: "Cross-Functional Project Leadership", description: "Led teams of up to five through architecture planning, sprint execution, task allocation, code reviews, and delivery.", role: "Project Team Lead", badge: "Leadership" },
  { title: "AWS Summit New York 2026", description: "Explored cloud computing, generative AI, serverless architecture, DevOps, and enterprise software engineering.", role: "Attendee", badge: "Industry" },
];

export const certificates = { featured: [], viewAllUrl: null };
export const education = { degree: "Bachelor of Technology in Computer Science and Engineering", institution: "Keshav Memorial Institute of Technology, Hyderabad", period: "2023 - 2027" };
export const softSkillsList = [
  { name: "Team Leadership", icon: "TL", desc: "Architecture planning, task allocation, sprint execution, and delivery for teams of up to five." },
  { name: "Collaboration", icon: "CO", desc: "Agile teamwork across frontend, backend, APIs, databases, and product workflows." },
  { name: "Code Review", icon: "CR", desc: "A maintainability-first approach to clean code, testing, debugging, and peer review." },
  { name: "Problem Solving", icon: "PS", desc: "Designing reliable authentication, payment, real-time, and database-driven experiences." },
];
export const footerContent = {
  taglines: ["Full-Stack Web Development", "Flutter Mobile Applications", "Secure APIs & Real-Time Systems"],
  credential: "B.Tech CSE · 2023-2027", copyright: `© ${new Date().getFullYear()} Vinay Shankar Adepu | Built with React`,
};
