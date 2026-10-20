export const PROFILE = {
  name: "Alex Carter",                       // EDIT
  firstName: "Alex",                         // EDIT
  roles: ["Full Stack Developer", "React & Node.js Expert", "Cloud Architecture Enthusiast", "Open Source Contributor"],
  email: "alex.carter@example.com",          // EDIT
  phone: "+1 (555) 123-4567",                // EDIT
  location: "San Francisco, CA",             // EDIT
  github: "https://github.com/yourusername", // EDIT
  linkedin: "https://linkedin.com/in/yourusername", // EDIT
  twitter: "https://twitter.com/yourusername",      // EDIT
  bio: [
    "I'm a full stack developer with 5+ years of experience building scalable web applications, from pixel-perfect React frontends to robust Node.js microservices deployed on AWS.",
    "I care deeply about clean architecture, developer experience, and shipping products that users love. When I'm not coding, you'll find me contributing to open source or writing about web performance."
  ],
  stats: [
    { num: "5+", label: "Years Experience" },
    { num: "40+", label: "Projects Shipped" },
    { num: "12",  label: "Happy Clients" },
    { num: "2k+", label: "GitHub Stars" },
  ],
};

export const SKILLS = [
  { icon: "🎨", title: "Frontend", desc: "Interfaces that feel fast and look sharp.", color: "",
    items: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS", "Framer Motion"] },
  { icon: "⚙️", title: "Backend", desc: "APIs built to scale and stay maintainable.", color: "green",
    items: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Python", "Django"] },
  { icon: "☁️", title: "Database & DevOps", desc: "Reliable infrastructure, automated delivery.", color: "pink",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"] },
];

export const PROJECTS = [
  { banner: "pb-1", emoji: "🛒", title: "ShopSphere", desc: "A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin analytics dashboard serving 20k+ monthly users.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"], demo: "#", code: "#" },
  { banner: "pb-2", emoji: "📊", title: "InsightBoard", desc: "Real-time analytics dashboard with customizable widgets, WebSocket live updates, and role-based access control for data teams.",
    tech: ["Next.js", "GraphQL", "Redis", "Docker"], demo: "#", code: "#" },
  { banner: "pb-3", emoji: "💬", title: "ChatFlow", desc: "End-to-end encrypted team messaging app with channels, file sharing, and full-text search across 100k+ messages.",
    tech: ["React", "WebSockets", "NestJS", "MongoDB"], demo: "#", code: "#" },
  { banner: "pb-4", emoji: "🚀", title: "DeployKit", desc: "Open-source CLI + dashboard for one-command deployment of containerized apps to any cloud. 1.4k GitHub stars.",
    tech: ["TypeScript", "Go", "Kubernetes", "AWS"], demo: "#", code: "#" },
];

export const EXPERIENCE = [
  { period: "2023 — Present", role: "Senior Full Stack Engineer", company: "TechNova Inc.",
    desc: "Leading a team of 6 engineers building a SaaS platform processing 2M requests/day. Migrated monolith to microservices, cutting p95 latency by 60% and infra costs by 35%." },
  { period: "2021 — 2023", role: "Full Stack Developer", company: "PixelForge Studio",
    desc: "Built 15+ client web applications end-to-end. Introduced TypeScript and component-driven development, reducing bugs in production by 45%." },
  { period: "2019 — 2021", role: "Software Developer", company: "BrightLabs",
    desc: "Developed REST APIs and internal dashboards. Automated the CI/CD pipeline, shrinking release cycles from weekly to daily." },
];
