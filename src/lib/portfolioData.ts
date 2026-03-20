export const person = {
  name: "Yash Sharma",
  title: "Full Stack Developer",
  tagline: "FULL STACK DEVELOPER PASSIONATE ABOUT BUILDING SCALABLE WEB APPLICATIONS.",
  summary: [
    "I am an MCA graduate with hands-on experience in developing full-stack web applications using React.js, Next.js, Node.js, PHP, and MySQL.",
    "I specialize in REST API development, authentication systems, and responsive UI design. Currently working as an AI Content Developer Intern while actively seeking Full Stack Developer opportunities.",
  ],
  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Technologies" },
    { value: "6+", label: "Certifications" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/yashsharma0228/",
    x: "https://x.com/Yashsharma0228",
    github: "https://github.com/yashsharma228",
    email: "mailto:yashsharma4841@gmail.com",
    salesforce: "https://www.salesforce.com/trailblazer/ysharma254",
    portfolioRepo: "https://github.com/yashsharma228/Personal-Portfolio-main",
  },
  location: "Jaipur, India",
} as const;

export const education = [
  {
    title: "Online Master of Computer Applications - MCA, Computer Science",
    year: "Jul 2023 - Nov 2025",
    org: "Manipal University Jaipur",
    location: "Jaipur, India",
    description:
      "Advanced studies in computer applications, cloud computing, software development, and system design.",
  },
  {
    title: "Informatics Assistant (Government Exam Preparation)",
    year: "Nov 2021 - Jun 2023",
    org: "Rajasthan Subordinate and Ministerial Services Selection Board (RSMSSB)",
    location: "Jaipur, India",
    description:
      "Focused preparation covering quantitative aptitude, logical reasoning, and core computer science fundamentals including databases, networking, and operating systems.",
  },
  {
    title: "Bachelor of Computer Applications - BCA, Computer Science",
    year: "Aug 2018 - Oct 2021",
    org: "University of Rajasthan",
    location: "Jaipur, India",
    description: "Foundation in computer science, programming, and information technology.",
  },
] as const;

export const experience = [
  {
    date: "March 2026 - Present",
    role: "AI Content Developer Intern",
    company: "K4 Media & Technologies",
    companyUrl: "https://www.k4.media/",
    location: "Jaipur, India",
    bullets: [
      "Created AI-assisted content using ChatGPT and Gemini with structured prompt workflows.",
      "Managed website content publishing using WordPress CMS and digital content pipelines.",
      "Applied SEO and keyword optimization techniques to improve content visibility.",
      "Collaborated with cross-functional teams to support AI-driven content automation.",
    ],
  },
  {
    date: "July 2025 - October 2025",
    role: "IT Technical Analyst Intern",
    company: "Geo Planet Solution Pvt. Ltd.",
    companyUrl: "http://www.geoplanetsolution.com/",
    location: "Jaipur, India",
    bullets: [
      "Developed and maintained full-stack web applications using React, PHP, and MySQL.",
      "Contributed to 5+ web and blockchain-based projects with responsive UI implementation.",
      "Integrated REST APIs and improved application performance through debugging and optimization.",
      "Designed UI wireframes and prototypes using Figma before development.",
    ],
  },
] as const;

export const skillsByCategory = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Cloudinary",
      "Firebase",
      "Figma",
      "WordPress CMS",
      "Salesforce CRM",
      "Postman",
      "Render",
      "Vercel",
    ],
  },
] as const;

export const projects = [
  {
    name: "Image Gallery App",
    stack: "MERN Stack | Next.js | Firebase | Cloudinary",
    description:
      "A full-stack image management system with user and admin panels. Users can upload, view, like, and comment on images with secure authentication.",
    learnings:
      "Built REST APIs, implemented Firebase Authentication, integrated Cloudinary for media storage, and deployed using Vercel and Render.",
    liveUrl: "https://image-gallery-app-coral.vercel.app/",
    sourceUrl: "https://github.com/yashsharma228/Image_Gallery_app",
  },
  {
    name: "Office Task Management Software",
    stack: "React.js | PHP | MySQL",
    description:
      "A role-based productivity platform with two user levels: Admin (settings, user management), Employee (task updates).",
    learnings:
      "Developed REST APIs with CRUD operations, implemented authentication, optimized database queries, and designed UI in Figma.",
    liveUrl: "",
    sourceUrl: "https://github.com/yashsharma228/Office-management-tool",
  },
] as const;

export const certifications = [
  {
    name: "Salesforce Developer Virtual Internship",
    issuer: "SmartInternz",
    date: "May 30, 2023",
    description:
      "Completed 8-week virtual internship covering Salesforce Fundamentals, Apex, Lightning Web Components, Process Automation, and Security.",
    skills: ["Salesforce", "Apex", "LWC", "Process Automation"],
    url: "https://smartinternz.com/internships/salesforce_certificates/565535a99bc58e7f368760b6501461e6",
  },
  {
    name: "React (Basic) Certification",
    issuer: "HackerRank",
    date: "March 19, 2025",
    description:
      "Passed the HackerRank skill certification test demonstrating proficiency in React.js fundamentals and practical application development.",
    skills: ["React.js", "JavaScript", "Frontend"],
    url: "https://www.hackerrank.com/certificates/iframe/c1188de0092a",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta",
    date: "September 29, 2023",
    description:
      "Comprehensive JavaScript programming course authorized by Meta, covering core concepts and practical applications in web development.",
    skills: ["JavaScript", "Programming", "Meta"],
    url: "https://coursera.org/share/bf5260e7a0295b90ed3c9ea6ee070d09",
  },
  {
    name: "Salesforce Trailblazer Achievements",
    issuer: "Salesforce Trailhead",
    date: "Ongoing",
    description:
      "Active Salesforce Trailblazer with completed modules and badges in Salesforce development, administration, and cloud technologies.",
    skills: ["Trailhead", "Salesforce Admin", "Cloud", "Developer"],
    url: "https://www.salesforce.com/trailblazer/ysharma254",
  },
] as const;

