export const profile = {
  name: 'Khyati Singh',
  firstName: 'KHYATI',
  lastName: 'SINGH',
  initials: 'K / S',
  location: 'Lucknow, Uttar Pradesh',
  email: 'khyatiisingh25@gmail.com',
  phone: '+91 9026503943',
  linkedin: 'https://www.linkedin.com/in/khyati-singh-9a6629330',
  github: 'https://github.com/khyatiisingh25',
  role: 'CSE (AI) Undergraduate',
  tagline: 'Building practical software and intelligent applications.',
};

export const navItems = [
  { id: 'home', label: 'Home', num: '00' },
  { id: 'about', label: 'About', num: '01' },
  { id: 'projects', label: 'Work', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'experience', label: 'Experience', num: '04' },
  { id: 'education', label: 'Education', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

export const aboutWords = [
  { text: 'SOFTWARE', sub: 'Development' },
  { text: 'AI', sub: 'Applications' },
  { text: 'APPLICATIONS', sub: 'Full-Stack' },
];

export const aboutMeta = [
  { label: 'Degree', value: 'B.Tech CSE (AI)' },
  { label: 'University', value: 'BBD University' },
  { label: 'Location', value: 'Lucknow, India' },
  { label: 'Status', value: '2024 — Present' },
];

export const aboutParagraphs = [
  'Computer Science & Engineering (Artificial Intelligence) undergraduate interested in software development and practical AI applications.',
  'Experienced in building AI and full-stack projects involving RAG, computer vision, backend APIs, databases, and modern development tools.',
  'Building practical projects while developing technical skills through internships and open-source contributions.',
];

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    num: '01',
    icon: 'Code2',
    skills: [
      { name: 'Java', cat: 'languages' },
      { name: 'Python', cat: 'languages' },
      { name: 'JavaScript', cat: 'languages' },
      { name: 'TypeScript', cat: 'languages' },
      { name: 'HTML/CSS', cat: 'languages' },
      { name: 'SQL', cat: 'languages' },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    num: '02',
    icon: 'Brain',
    skills: [
      { name: 'RAG', cat: 'aiml' },
      { name: 'Sentence Transformers', cat: 'aiml' },
      { name: 'Embeddings', cat: 'aiml' },
      { name: 'OpenCV', cat: 'aiml' },
      { name: 'YOLOv8', cat: 'aiml' },
      { name: 'Gemini API', cat: 'aiml' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    num: '03',
    icon: 'Layers',
    skills: [
      { name: 'React', cat: 'frontend' },
      { name: 'Vite', cat: 'frontend' },
      { name: 'Tailwind CSS', cat: 'frontend' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    num: '04',
    icon: 'Server',
    skills: [
      { name: 'FastAPI', cat: 'backend' },
      { name: 'Node.js', cat: 'backend' },
      { name: 'Express', cat: 'backend' },
      { name: 'Flask', cat: 'backend' },
      { name: 'REST APIs', cat: 'backend' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases / Tools',
    num: '05',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', cat: 'databases' },
      { name: 'MongoDB', cat: 'databases' },
      { name: 'Supabase', cat: 'databases' },
      { name: 'FAISS', cat: 'databases' },
      { name: 'Git', cat: 'databases' },
      { name: 'GitHub', cat: 'databases' },
      { name: 'VS Code', cat: 'databases' },
    ],
  },
];

// All skills flattened for the constellation
export const allSkills = skillCategories.flatMap((c) => c.skills);

export const projects = [
  {
    id: 'warehouse',
    num: '01',
    name: 'AI Warehouse Automation & Digital Twin',
    short:
      'AI-powered warehouse monitoring for product detection, inventory tracking, and shelf occupancy analysis using computer vision.',
    category: 'Computer Vision',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'YOLOv8', 'OpenCV'],
    event: null,
    github: 'https://github.com/khyatiisingh25/AI-Warehouse-Automation',
    overview:
      'An AI-powered warehouse monitoring system for product detection, inventory tracking, and shelf occupancy analysis using computer vision.',
    built: [
      'Product detection and shelf occupancy analysis using YOLOv8 and OpenCV',
      'Inventory tracking with real-time warehouse data monitoring',
      'Backend APIs and database functionality to manage warehouse data',
      'React frontend for operational monitoring and visualization',
    ],
    pipeline: [
      { label: 'Camera Feed', icon: 'Camera', desc: 'Warehouse shelf capture' },
      { label: 'YOLOv8', icon: 'ScanFace', desc: 'Product detection' },
      { label: 'OpenCV', icon: 'Cpu', desc: 'Occupancy analysis' },
      { label: 'FastAPI', icon: 'Server', desc: 'Backend API layer' },
      { label: 'Dashboard', icon: 'ClipboardCheck', desc: 'Inventory tracking' },
    ],
  },
  {
    id: 'saathi',
    num: '02',
    name: 'SAATHI — AI Distress Monitoring',
    short:
      'AI-assisted platform that analyzes periodic user check-ins to identify concerning patterns and changes over time.',
    category: 'AI / Full-Stack',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Gemini API'],
    event: null,
    github: null,
    overview:
      'An AI-assisted platform that analyzes periodic user check-ins to identify concerning patterns and changes over time. Implemented baseline analysis, explainable alerts, and human-in-the-loop review for early support workflows.',
    built: [
      'Periodic user check-in collection and analysis',
      'Baseline analysis to identify concerning patterns and changes',
      'Explainable alerts with human-in-the-loop review for early support',
      'Backend APIs and PostgreSQL database for check-in data',
    ],
    pipeline: [
      { label: 'Check-in', icon: 'MessageSquare', desc: 'Periodic user input' },
      { label: 'Baseline', icon: 'FileText', desc: 'Pattern analysis' },
      { label: 'Alerts', icon: 'Sparkles', desc: 'Explainable flags' },
      { label: 'Review', icon: 'ClipboardCheck', desc: 'Human-in-the-loop' },
    ],
  },
  {
    id: 'rag',
    num: '03',
    name: 'Voice-Enabled RAG Assistant',
    short:
      'Voice-enabled RAG pipeline that converts speech into queries, retrieves relevant context, and generates grounded responses.',
    category: 'AI / NLP',
    tags: ['Python', 'Sentence Transformers', 'FAISS', 'FastAPI', 'Gemini'],
    event: null,
    github: 'https://github.com/khyatiisingh25/voice-enabled-rag',
    overview:
      'A voice-enabled RAG pipeline that converts speech into queries, retrieves relevant information from a knowledge base, and generates context-grounded responses. Integrated speech processing, semantic embeddings, vector search, and LLM-based response generation into an interactive QA workflow.',
    built: [
      'Voice input capture and speech processing',
      'Document embeddings using Sentence Transformers',
      'Vector similarity search with FAISS',
      'Context-grounded answer generation via Gemini',
      'FastAPI backend serving the full pipeline',
    ],
    pipeline: [
      { label: 'Voice Input', icon: 'Mic', desc: 'Spoken question captured' },
      { label: 'Speech Processing', icon: 'Cpu', desc: 'Speech-to-text conversion' },
      { label: 'Embeddings', icon: 'FileText', desc: 'Sentence Transformers' },
      { label: 'Vector Search', icon: 'Search', desc: 'FAISS retrieval' },
      { label: 'Retrieved Context', icon: 'FileText', desc: 'Relevant passages' },
      { label: 'Gemini', icon: 'Sparkles', desc: 'Grounded generation' },
      { label: 'Answer', icon: 'MessageSquare', desc: 'Context-grounded response' },
    ],
  },
  {
    id: 'attendance',
    num: '04',
    name: 'Smart Attendance System',
    short:
      'Facial-recognition-based attendance system using OpenCV and Flask to automate identity recognition and attendance recording.',
    category: 'Computer Vision',
    tags: ['Python', 'Flask', 'OpenCV'],
    event: null,
    github: 'https://github.com/khyatiisingh25/smart-attendance_clean',
    overview:
      'A facial-recognition-based attendance system using OpenCV and Flask to automate identity recognition and attendance recording.',
    built: [
      'Facial detection and recognition via OpenCV',
      'Flask web interface for attendance management',
      'Automated attendance marking on face match',
    ],
    pipeline: [
      { label: 'Camera', icon: 'Camera', desc: 'Live video feed' },
      { label: 'Face Recognition', icon: 'ScanFace', desc: 'OpenCV face matching' },
      { label: 'Processing', icon: 'Cpu', desc: 'Identity verification' },
      { label: 'Attendance', icon: 'ClipboardCheck', desc: 'Auto-marked attendance' },
    ],
  },
];

export const experiences = [
  {
    id: 'webrunzo',
    year: '2026 — Present',
    role: 'Full-Stack Developer (Part-time)',
    org: 'WebRunzo',
    description:
      'Contributing to a website-as-a-service platform using React, TypeScript, Express, Supabase, and PostgreSQL across frontend, backend, authentication, and application workflows.',
    secondDescription:
      'Debugging application issues and improving authentication, onboarding, database security, and functional reliability through testing and iterative development.',
    tags: ['React', 'TypeScript', 'Express', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/daizy0097-web/WebRunzo-platform',
  },
  {
    id: 'codealpha',
    year: '2024',
    role: 'Python Developer Intern',
    org: 'CodeAlpha',
    description:
      'Completed a Python internship involving practical programming tasks, application development, and debugging.',
    tags: ['Python', 'Debugging'],
    link: null,
  },
  {
    id: 'gssoc',
    year: '2026',
    role: 'Open Source Contributor',
    org: 'GSSoC',
    fullOrg: 'GirlScript Summer of Code 2026',
    description: 'Selected as a contributor and participated in open-source development through community repositories.',
    tags: ['Open Source'],
    link: null,
  },
];

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech — CSE (AI)',
    fullDegree: 'B.Tech in Computer Science & Engineering (AI)',
    institution: 'Babu Banarasi Das University',
    period: '2024 — Present',
    location: 'Lucknow, India',
    cgpa: '6.19',
  },
  {
    id: 'school',
    degree: 'ISC Class XII — 64.0% · ICSE Class X — 71.5%',
    fullDegree: "HP Children's Academy",
    institution: 'Lucknow, India',
    period: '2024',
    location: null,
    cgpa: null,
  },
];
