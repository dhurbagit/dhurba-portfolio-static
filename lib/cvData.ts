export interface CVProfile {
  personalInfo: {
    fullName: string;
    primaryTitle: string;
    secondaryTitle: string;
    location: string;
    country: string;
    timezone: string;
    primaryEmail: string;
    secondaryEmail: string;
    githubUrl: string;
    linkedinUrl: string;
    facebookUrl: string;
    availability: string;
    experienceYears: string;
    summary: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    coursework: string[];
  }[];
  experience: {
    id: string;
    company: string;
    position: string;
    status: string;
    location: string;
    overview: string;
    responsibilities: string[];
    techStack: string[];
  }[];
  freelancePractice: {
    role: string;
    identity: string;
    overview: string;
    services: string[];
  };
  skills: {
    primary: {
      category: string;
      items: string[];
    }[];
    secondary: {
      category: string;
      items: string[];
    }[];
  };
  featuredProjects: {
    title: string;
    role: string;
    category: string;
    description: string;
    keyDeliverables: string[];
    technologies: string[];
  }[];
  philosophy: {
    title: string;
    principle: string;
  }[];
}

export const cvData: CVProfile = {
  personalInfo: {
    fullName: "Dhurba Dhakal",
    primaryTitle: "Full Stack Developer | Laravel & PHP Developer",
    secondaryTitle: "Web Designer • Freelancer • Software Developer",
    location: "Nepal",
    country: "Nepal",
    timezone: "UTC+5:45 (NPT)",
    primaryEmail: "dhurba179@gmail.com",
    secondaryEmail: "sharvikatech@gmail.com",
    githubUrl: "https://github.com/dhurbagit",
    linkedinUrl: "https://www.linkedin.com/in/dhurba-dhakal-449158423/",
    facebookUrl: "https://www.facebook.com/profile.php?id=61578215681792",
    availability: "Full-Time • Remote • Freelance Ready",
    experienceYears: "2+ Years Software Development Experience",
    summary:
      "Software Developer and Web Designer with 2+ years of professional software development experience specializing in PHP and Laravel applications. Proven expertise in engineering transactional web platforms, dynamic CMS architectures, RESTful APIs, relational databases, responsive frontend interfaces, and business workflow software. Bridges the gap between clean engineering and real-world business objectives.",
  },
  education: [
    {
      degree: "BSc IT",
      field: "Bachelor of Science in Information Technology",
      institution: "Lord Buddha Education Foundation",
      location: "Nepal",
      coursework: [
        "Software Engineering & Architecture",
        "Object-Oriented Programming (OOP)",
        "Relational Database Management Systems (RDBMS)",
        "Web Technologies & Internet Computing",
        "System Analysis & Design",
        "Data Structures & Algorithm Fundamentals",
      ],
    },
  ],
  experience: [
    {
      id: "ndpc",
      company: "Nepal Digital Payment Company Limited (NDPC)",
      position: "Developer",
      status: "Currently Working",
      location: "Nepal",
      overview:
        "Contributing to software development, transactional infrastructure, and digital payment business solutions.",
      responsibilities: [
        "Web application development and database-driven application engineering.",
        "Backend development and business logic implementation using PHP and Laravel.",
        "API development, third-party service integration, and frontend/backend coordination.",
        "Application maintenance, continuous debugging, and technical problem solving.",
      ],
      techStack: ["PHP", "Laravel", "JavaScript", "MySQL", "REST APIs", "Git"],
    },
    {
      id: "nector-digit",
      company: "Nector Digit",
      position: "Web Designer & Developer",
      status: "Previous Role",
      location: "Nepal",
      overview:
        "Combined frontend design and web development to build responsive, functional, and visually engaging web solutions.",
      responsibilities: [
        "Website design, UI implementation, and responsive layout engineering across all devices.",
        "Frontend development using HTML5, CSS3, JavaScript, Bootstrap 5, jQuery, and AJAX.",
        "Custom CMS integration, website customization, and client requirement implementation.",
        "Website maintenance, cross-browser compatibility, and performance optimization.",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery", "AJAX", "PHP", "Laravel"],
    },
    {
      id: "nepal-pasta",
      company: "Nepal Pasta Food Company",
      position: "Senior IT Manager",
      status: "Previous Role",
      location: "Nepal",
      overview:
        "Oversaw technology operations, digital systems, website management, and enterprise IT coordination.",
      responsibilities: [
        "IT management, digital operations, and business technology systems oversight.",
        "Website management, CMS administration, and product information management.",
        "Technology planning, technical coordination, and system administration.",
        "Business requirement analysis and digital workflow improvement across departments.",
      ],
      techStack: ["Laravel", "PHP", "MySQL", "CMS", "Web Technologies", "SEO", "Digital Systems"],
    },
  ],
  freelancePractice: {
    role: "Freelance Developer & Web Designer",
    identity: "Developer + Designer + Problem Solver",
    overview:
      "Partnering directly with businesses, founders, and organizations to deliver custom web applications, dynamic CMS platforms, responsive websites, and digital workflow systems.",
    services: [
      "Custom website & web app development",
      "Laravel & PHP development",
      "Business websites & landing pages",
      "Custom CMS platforms",
      "Admin dashboards & control panels",
      "Responsive web design (Mobile/Tablet/Desktop)",
      "UI implementation & design-to-code",
      "REST API development & integration",
      "Database-driven applications (MySQL/PostgreSQL)",
      "Website maintenance & optimization",
      "SEO implementation & metadata architecture",
      "Business workflow & automation systems",
      "Custom feature development",
      "Technical consultation & architecture planning",
    ],
  },
  skills: {
    primary: [
      {
        category: "Backend & Server",
        items: ["PHP", "Laravel (MVC, Eloquent, Auth & RBAC)", "RESTful APIs", "Business Logic"],
      },
      {
        category: "Databases & Schemas",
        items: ["MySQL", "Relational Database Design", "Query Optimization", "Data Integrity"],
      },
      {
        category: "Frontend & UI Engineering",
        items: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "jQuery", "AJAX UI", "Responsive Layouts"],
      },
      {
        category: "CMS & Tools",
        items: ["Custom CMS Development", "Admin Dashboards", "Git & GitHub", "SEO Architecture"],
      },
    ],
    secondary: [
      {
        category: "Full-Stack Ecosystem & Modern Tools",
        items: [
          "React.js",
          "Next.js",
          "PostgreSQL",
          "Prisma ORM",
          "Redis",
          "Docker & Docker Compose",
          "Linux & Terminal",
          "TailwindCSS",
        ],
      },
    ],
  },
  featuredProjects: [
    {
      title: "Barari / Nepal Pasta Food Company Platform",
      role: "Laravel / Full-Stack Developer",
      category: "Business CMS & Web Application",
      description:
        "Comprehensive business website and custom CMS platform allowing administrators to manage business content, product catalog, barcode integration, news, and SEO dynamically.",
      keyDeliverables: [
        "Dynamic product catalog and barcode-related product integration.",
        "Full content management: dynamic sections, careers, blog, and media galleries.",
        "Role-based admin dashboard with SEO metadata and multilingual support.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX", "SEO Management"],
    },
    {
      title: "Sixvilla Project",
      role: "Laravel Developer",
      category: "Brand Platform & Centralized CMS",
      description:
        "Laravel-powered business website and custom CMS solution designed to showcase products and brands with full administrative control over digital content and customer inquiries.",
      keyDeliverables: [
        "Custom administration dashboard for brand and media asset management.",
        "SEO metadata management and structured inquiry workflows.",
        "Responsive, cross-browser frontend engineering.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "AJAX"],
    },
    {
      title: "Off-Hour Tracking System",
      role: "Full-Stack Developer",
      category: "Business Workflow & Task Tracking System",
      description:
        "Workforce management platform engineered to monitor organizational tasks, shift schedules, screenshot submissions, and multi-tier review workflows.",
      keyDeliverables: [
        "Task management and shift scheduling modules tailored to real business processes.",
        "Screenshot upload handling and multi-tier review verification.",
        "User permission roles separating team members, leads, and administrators.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Workflow Management"],
    },
    {
      title: "NDPC Web Portal & Corporate Platform",
      role: "Developer / Full-Stack Laravel Developer",
      category: "Public Corporate Portal & Enterprise Management",
      description:
        "Public corporate company website and administrative web portal for Nepal Digital Payment Company (NDPC) featuring granular role and permission management (RBAC), corporate content administration, and scalable database design.",
      keyDeliverables: [
        "Architected scalable relational database design (MySQL/PostgreSQL) with normalized schemas and optimized queries.",
        "Engineered granular Role & Permission management (RBAC) with multi-tier access control and authorization middleware.",
        "Built responsive corporate public interface for company governance, announcements, and services.",
        "Implemented secure REST APIs, dynamic CMS modules, and audit log tracking with Laravel & PHP.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "PostgreSQL", "RBAC & Permissions", "Scalable DB Design", "REST APIs", "Bootstrap 5", "JavaScript"],
    },
  ],
  philosophy: [
    {
      title: "Build With Purpose",
      principle: "Technology should solve real-world problems and deliver practical, measurable value.",
    },
    {
      title: "Understand the Business",
      principle: "The right software starts with thoroughly understanding business workflows.",
    },
    {
      title: "Design for Users",
      principle: "Good software should be practical, intuitive, responsive, and easy to navigate.",
    },
    {
      title: "Code for the Future",
      principle: "Build clean, maintainable MVC and REST architectures that scale effortlessly.",
    },
    {
      title: "Keep Learning",
      principle: "Continuously expand from Laravel/PHP strengths into modern full-stack architectures.",
    },
  ],
};
