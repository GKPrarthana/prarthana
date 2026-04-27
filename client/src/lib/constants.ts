export const SITE_CONFIG = {
  name: "Prarthana Sewmini",
  title: "AI & Data Science Engineer",
  description: "Engineering intelligent systems at the intersection of data, machine learning, and real-world impact.",
  location: "Colombo, Sri Lanka",
  email: "prarthanasewminiganegama@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/prarthanasg",
    github: "https://github.com/GKPrarthana",
    email: "mailto:prarthanasewminiganegama@gmail.com",
  },
};

export const HERO_CONTENT = {
  headline: "Prarthana Sewmini",
  subheadline: "Crafting intelligent solutions that bridge data and real-world impact.",
  cta: "View My Projects",
};

export const ABOUT_CONTENT = {
  title: "About",
  description: `I'm an AI Engineer focused on building production-ready systems that bridge the gap between raw data and intelligent decisions. My approach combines rigorous machine learning fundamentals with pragmatic engineering—designing systems that are not just accurate, but reliable, scalable, and maintainable.

At Vectorium Labs, I architected and deployed a production RAG system handling data ingestion, embedding, retrieval, and response generation. I've worked across the full stack: from data preprocessing and model training to API design and cloud deployment.

I believe in clarity over complexity. The best AI systems are invisible—they quietly do the heavy lifting so products feel simple, fast, and smart.`,
};

export const SKILLS = [
  {
    category: "AI & ML",
    items: [
      "LLMs & Generative AI",
      "RAG Systems",
      "Prompt Engineering",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Model Optimization",
    ],
  },
  {
    category: "Engineering",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Data Pipelines",
      "Production Deployment",
      "System Design",
      "Performance Optimization",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "TensorFlow & Keras",
      "PyTorch",
      "LangChain",
      "Hugging Face",
      "AWS",
      "Google Cloud",
      "Docker",
      "Git & GitHub",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design",
    ],
  },
];

export const PROJECTS = [
  {
    id: "weather-rag",
    title: "AI-Powered Weather Application",
    category: "AI/ML",
    description: "Production RAG pipeline combining real-time weather data with embedded knowledge sources for enhanced AI responses.",
    problem: "Weather APIs provide raw data, but users need intelligent insights. How do we combine real-time data with domain knowledge for contextual, accurate responses?",
    approach: "Designed and implemented a RAG pipeline with data ingestion from weather APIs, embedding generation, semantic retrieval, and LLM-based response generation. Deployed on AWS with Hugging Face models.",
    impact: "Reduced latency by 40% through optimized retrieval. Achieved 95%+ accuracy on weather queries. Deployed to production handling 10K+ daily requests.",
    technologies: ["Python", "LLMs", "FastAPI", "AWS", "Hugging Face", "Runpod"],
    timeline: "Jul 2025 - Dec 2025",
    image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800&q=80",
  },
  {
    id: "face-recognition",
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    description: "Real-time facial recognition system automating attendance tracking for university lecture slots.",
    problem: "Manual attendance tracking is time-consuming and error-prone. Universities need an automated, accurate system that respects privacy and handles edge cases.",
    approach: "Implemented real-time facial recognition using DeepFace (FaceNet) and MTCNN. Built Flask web interface with latecomer alerts, manual logging, and CSV export. Expanded dataset to improve accuracy.",
    impact: "Reduced attendance admin time by 80%. Achieved 94% recognition accuracy. Deployed across 8 lecture slots daily.",
    technologies: ["Python", "OpenCV", "DeepFace", "MTCNN", "Flask", "Pandas"],
    timeline: "April 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: "kidney-disease",
    title: "Kidney Disease Classification with Deep Learning",
    category: "Medical AI",
    description: "Deep learning model for classifying kidney disease from medical imaging to support early diagnosis.",
    problem: "Early kidney disease detection is critical but requires expert radiologists. How can we build a scalable system for preliminary diagnosis?",
    approach: "Developed CNN using TensorFlow/Keras with data preprocessing via OpenCV. Implemented experiment tracking with MLflow. Achieved 92% accuracy through iterative model optimization and dataset expansion.",
    impact: "Supports preliminary diagnosis workflow. Reproducible codebase on GitHub. Demonstrated proficiency in computer vision and model optimization.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "MLflow", "Flask"],
    timeline: "March 2025",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
];

export const EXPERIENCE = [
  {
    role: "Associate AI Engineer",
    company: "Vectorium Labs Pvt Ltd",
    period: "Jan 2026 - Present",
    description: "Architected and implemented production-ready RAG systems. Owned delivery of AI capability upgrades from design to deployment with minimal supervision.",
    achievements: [
      "Designed end-to-end RAG pipeline handling data ingestion, embedding, retrieval, and response generation",
      "Delivered AI system upgrades from implementation through testing and deployment",
      "Collaborated with cross-functional teams on system architecture and optimization",
    ],
  },
  {
    role: "AI Engineer Intern",
    company: "Vectorium Labs Pvt Ltd",
    period: "Jul 2025 - Jan 2026",
    description: "Designed and developed AI-driven solutions using Python, focusing on machine learning and data-driven decision systems.",
    achievements: [
      "Built and optimized data pipelines for preprocessing, feature engineering, and model evaluation",
      "Developed machine learning models for business-critical applications",
      "Collaborated with teams to translate requirements into scalable AI solutions",
    ],
  },
  {
    role: "AI Developer Intern",
    company: "StrataNEXTGEN PTY LTD",
    period: "Jun 2025 - Sep 2025",
    description: "Built AI-powered features and interactive dashboards. Collaborated on API contracts and cloud deployments.",
    achievements: [
      "Developed AI-powered chatbot with API integration and automated PDF generation",
      "Built role-based dashboards using Next.js, TypeScript, and Tailwind CSS",
      "Collaborated on Supabase schema design and deployments on AWS Amplify & Google Cloud Run",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "BSc (Hons) Data Science & Business Analytics",
    institution: "General Sir John Kotelawala Defence University",
    location: "Ratmalana, Sri Lanka",
    period: "2022 - 2025",
  },
  {
    degree: "GCE Advanced Level - Physical Science Stream",
    institution: "Anula Vidyalaya",
    location: "Nugegoda, Sri Lanka",
    period: "2011 - 2020",
  },
];

export const CERTIFICATIONS = [
  "AI Agents Fundamentals (Huggingface)",
  "Generative AI Foundations (Databricks)",
  "Machine Learning for Data Science Projects (IBM)",
  "AWS Educate Introduction to AWS",
  "AWS Educate Machine Learning",
  "Generative AI Foundations",
];

export const PERSONAL_SKILLS = [
  "Technical Leadership",
  "AI System Design",
  "Model Evaluation",
  "Production Deployment",
  "Performance Optimization",
  "Cross-functional Collaboration",
  "Technical Communication",
  "Consistency & Discipline",
];
