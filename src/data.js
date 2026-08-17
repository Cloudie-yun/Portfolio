export const contactInfo = {
  name: "Cheong Khai Yun",
  email: "khaiyuncheong@gmail.com",
  phone: "+60 12 8833638",
  phoneRaw: "+60128833638",
  github: "https://github.com/Cloudie-yun",
  githubUsername: "Cloudie-yun",
  location: "Cheras, Selangor · Malaysia",
  availability: "From October 5, 2026",
};

export const skills = [
  {
    cat: "Languages",
    items: "C++  ·  Java  ·  C#  ·  Python  ·  PHP  ·  SQL",
    tags: ["C++", "Java", "C#", "Python", "PHP", "SQL"],
    highlight: "Core foundation in Object-Oriented Programming, Scripting, and Relational Queries.",
  },
  {
    cat: "Frameworks & Libraries",
    items: "Laravel  ·  React  ·  Vue  ·  PrimeVue  ·  Ant Design  ·  Tailwind  ·  ASP.NET  ·  Flask",
    tags: ["Laravel", "React", "Vue", "PrimeVue", "Ant Design", "Tailwind", "ASP.NET", "Flask"],
    highlight: "Full-stack frontend/backend architectures with modern design systems and REST APIs.",
  },
  {
    cat: "Web",
    items: "HTML  ·  CSS  ·  JavaScript",
    tags: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ES6+)"],
    highlight: "Semantic, accessible markup with responsive layouts and fluid CSS transitions.",
  },
  {
    cat: "Databases",
    items: "MySQL  ·  PostgreSQL  ·  MSSQL",
    tags: ["MySQL", "PostgreSQL", "MSSQL"],
    highlight: "Schema design, relational normalization, indexing, and migration management.",
  },
  {
    cat: "Tools & Design",
    items: "Git  ·  GitHub  ·  VS Code  ·  Figma  ·  Canva  ·  MS Office",
    tags: ["Git", "GitHub", "VS Code", "Figma", "Canva", "MS Office"],
    highlight: "Version control workflows, UI/UX prototyping, and cross-team collaboration.",
  },
  {
    cat: "Documentation",
    items: "Markdown  ·  Technical Writing  ·  Developer Guides",
    tags: ["Markdown", "Technical Writing", "Developer Guides"],
    highlight: "Comprehensive technical guides, component specs, and onboarding documentations.",
  },
  {
    cat: "Languages Spoken",
    items: "English (Fluent)  ·  Chinese (Fluent)  ·  Malay (Familiar)",
    tags: ["English (Fluent)", "Chinese (Fluent)", "Malay (Familiar)"],
    highlight: "Trilingual communication for international engineering collaboration.",
  },
];

export const accentPresets = [
  { name: "Indigo", light: "#405b76", dark: "#9dbbd7" },
  { name: "Clay", light: "#9b4f38", dark: "#d8967b" },
  { name: "Moss", light: "#496342", dark: "#9cb98d" },
  { name: "Plum", light: "#694b63", dark: "#ba97b3" },
  { name: "Ochre", light: "#8d692f", dark: "#cbab67" },
];

export const projects = [
  {
    id: 101,
    type: "work",
    title: "Blog CMS with Custom Image Cropper",
    tags: ["Laravel", "PHP", "Tailwind", "Spatie"],
    desc: "A full CRUD blog system built to learn the company's Laravel stack, featuring an original image cropping tool built from scratch.",
    features: [
      "Create, edit, and soft-delete posts through a modal editor with autosave",
      "Card and table views, with table data exportable to CSV",
      "Built a custom JS cropping tool (zoom, pan, frame) — images save pre-cropped via Spatie Media Library",
      "Mentor specifically praised the cropping feature as a standout addition",
    ],
    stats: [
      { label: "Views", value: "Card + Table" },
      { label: "Export", value: "CSV" },
      { label: "Media", value: "Custom cropper" },
    ],
    media: [],
    demo: null,
    github: null,
  },
  {
    id: 102,
    type: "work",
    title: "QCG Company Site — Figma to Vue",
    tags: ["Vue", "Figma MCP", "i18n", "Responsive"],
    desc: "Converted a client's Figma-designed company profile site into a pixel-accurate Vue.js frontend across five pages.",
    features: [
      "Rebuilt Home, About, Accounts, Account Support & Market pages from an initial Figma MCP scaffold",
      "Localized across 5 languages: English, Simplified & Traditional Chinese, Japanese, Korean",
      "Tuned layouts individually across sm/md/lg breakpoints, with lg-and-up sharing one layout",
      "Achieved 1:1 visual match through manual side-by-side design comparison",
    ],
    stats: [
      { label: "Pages", value: "5" },
      { label: "Languages", value: "5" },
      { label: "Breakpoints", value: "4" },
    ],
    media: [],
    demo: null,
    github: null,
  },
  {
    id: 103,
    type: "work",
    title: "PrimeVue v5 — R&D & Component Docs",
    tags: ["Vue", "PrimeVue", "Documentation"],
    desc: "A research project evaluating PrimeVue v5's design-token system and theming architecture, paired with a small full-stack product management app.",
    features: [
      "Documented setup, v5's design token architecture, and style/config overrides in a developer guide",
      "Explored and catalogued 10 core components, from forms to data display",
      "Delivered research notes, proof-of-concept code, and a findings & recommendations report",
      "Mentor specifically praised the documentation quality",
    ],
    stats: [
      { label: "Components documented", value: "10" },
      { label: "Deliverables", value: "4 docs" },
    ],
    componentTags: ["Button", "InputText", "Select", "Checkbox", "RadioButton", "Dialog", "Card", "DataTable", "Toast", "Badge"],
    media: [],
    demo: null,
    github: null,
  },
  {
    id: 104,
    type: "work",
    status: "In Progress",
    title: "React + Ant Design Component Playground",
    tags: ["React", "Ant Design", "In Progress"],
    desc: "A reusable component library wrapping Ant Design with sensible defaults, prop docs, and live variant examples — built so any teammate can npm run dev and copy a component straight into their project.",
    features: [
      "Wrapping 10+ of Ant Design's 14 core components with predefined props",
      "Each component ships with an interactive playground and multiple variant examples",
      "Written to be copy-paste ready for other teams and future interns",
      "Currently in active development",
    ],
    stats: [
      { label: "Components", value: "10 of 14" },
      { label: "Status", value: "In progress" },
    ],
    media: [],
    demo: null,
    github: null,
  },
  {
    id: 1,
    type: "academic",
    title: "Document-Based Multimodal Chatbot",
    tags: ["Python", "Flask", "PostgreSQL", "AI/ML"],
    desc: "A web-based chatbot that understands both text and images in academic documents, with full session and citation tracking.",
    features: [
      "Integrated document analysis & image understanding APIs for OCR and multimodal querying",
      "Designed relational database schema for sessions, conversation history, and precise citation tracking",
      "Solo project — fully designed, trained, and developed independently as Final Year Project",
    ],
    stats: [
      { label: "Scope", value: "Solo Project" },
      { label: "Architecture", value: "Multimodal AI" },
      { label: "Database", value: "PostgreSQL" },
    ],
    componentTags: ["Document OCR", "Multimodal Query", "Session Memory", "Citation Engine", "REST API"],
    media: [
      { type: "image", src: "assets/Project1/1.png" },
      { type: "image", src: "assets/Project1/2.png" },
      { type: "image", src: "assets/Project1/3.png" },
      { type: "image", src: "assets/Project1/4.png" },
    ],
    demo: null,
    github: null,
  },
  {
    id: 2,
    type: "academic",
    title: "Multiuser E-Commerce — Agriculture",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    desc: "A team-built multiuser e-commerce platform for an agriculture business, with customer purchase flows and product reviews.",
    features: [
      "Designed full customer purchase lifecycle, cart checkout, and verified product review workflow",
      "Led team coordination, sprint reviews, and managed GitHub repository branching & PRs",
      "Debugged and resolved critical backend data flow and state consistency issues during development",
    ],
    stats: [
      { label: "Team Role", value: "Lead & Git" },
      { label: "Screens", value: "10 Views" },
      { label: "Modules", value: "Reviews & Store" },
    ],
    componentTags: ["Product Catalog", "Cart Checkout", "Reviews & Ratings", "User Roles", "Order Management"],
    media: [
      { type: "image", src: "assets/Project2/1.png" },
      { type: "image", src: "assets/Project2/2.png" },
      { type: "image", src: "assets/Project2/3.png" },
      { type: "image", src: "assets/Project2/4.png" },
      { type: "image", src: "assets/Project2/5.png" },
      { type: "image", src: "assets/Project2/6.png" },
      { type: "image", src: "assets/Project2/7.png" },
      { type: "image", src: "assets/Project2/8.png" },
      { type: "image", src: "assets/Project2/9.png" },
      { type: "image", src: "assets/Project2/10.png" },
    ],
    demo: null,
    github: "https://github.com/Cloudie-yun/SmartMart",
  },
  {
    id: 3,
    type: "academic",
    title: "Full Stack Bakery E-Commerce",
    tags: ["ASP.NET", "C#", "MSSQL"],
    desc: "A complete e-commerce web app for a bakery, featuring a customer storefront and a full admin panel.",
    features: [
      "Built comprehensive customer storefront and secure administrative control modules",
      "Implemented product inventory management, shopping carts, order processing, and sales tracking",
      "Capstone graduation project delivered with high distinction for Diploma in Computer Science",
    ],
    stats: [
      { label: "Milestone", value: "Diploma Capstone" },
      { label: "Stack", value: "ASP.NET / C#" },
      { label: "Database", value: "MSSQL" },
    ],
    componentTags: ["Storefront", "Admin Dashboard", "Order Processing", "Inventory Control", "Customer Auth"],
    media: [{ type: "video", src: "assets/Project3/DemoVideo.mp4" }],
    demo: null,
    github: "https://github.com/Cloudie-yun/E-Commerce-Website-for-bakeries",
  },
  {
    id: 4,
    type: "academic",
    title: "TO-DO List Tracker",
    tags: ["PHP", "JavaScript", "CSS"],
    desc: "A simple and minimalist to-do list tracker that helps users manage tasks, projects and due dates.",
    features: [
      "Add, prioritize, and categorize tasks with responsive status toggles and persistent storage",
      "Organize tasks into project-related to-do boards with progress tracking",
      "Set, monitor, and highlight upcoming due dates with deadline alerts",
    ],
    stats: [
      { label: "Design", value: "Minimalist UX" },
      { label: "Type", value: "Solo Utility" },
      { label: "Stack", value: "PHP & JS" },
    ],
    componentTags: ["Task Manager", "Project Grouping", "Due Dates", "Status Filters"],
    media: [
      { type: "image", src: "assets/Project4/1.png" },
      { type: "image", src: "assets/Project4/2.png" },
      { type: "image", src: "assets/Project4/3.png" },
      { type: "image", src: "assets/Project4/4.png" },
    ],
    demo: null,
    github: "https://github.com/Cloudie-yun/IndividualAssignment",
  },
];

export const journey = [
  {
    org: "Current Tech Industries",
    role: "IT Intern",
    note: "4 shipped projects: Laravel CRUD system, Vue site rebuild, PrimeVue R&D, React component library",
    period: "Jun 2026 — Present",
    badge: "Ongoing",
    statLabel: "Projects Shipped",
    statValue: "4",
  },
  {
    org: "INTI International University",
    role: "Bachelor of Computer Science (Hons) — Software Engineering",
    note: "Final Year Project: Document-Based Multimodal Chatbot",
    period: "Aug 2024 — Oct 2026",
    badge: "Final Semester",
    statLabel: "CGPA",
    statValue: "3.86",
  },
  {
    org: "INTI International University",
    role: "Diploma in Information Technology",
    note: "Capstone: Full Stack E-Commerce Website for Bakery Shop",
    period: "Aug 2022 — Jun 2024",
    badge: "Distinction",
    statLabel: "CGPA",
    statValue: "3.79",
  },
];

// Fallback to window for backward compatibility
if (typeof window !== "undefined") {
  window.portfolioData = {
    contactInfo,
    skills,
    accentPresets,
    projects,
    journey,
  };
}

export default {
  contactInfo,
  skills,
  accentPresets,
  projects,
  journey,
};
