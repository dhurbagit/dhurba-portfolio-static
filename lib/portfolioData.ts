export interface SiteSettings {
  site_title: string;
  meta_description: string;
  primary_email: string;
  secondary_email: string;
  phone_whatsapp: string;
  location: string;
  country: string;
  timezone: string;
  github_url: string;
  linkedin_url: string;
  facebook_url: string;
  availability_status: string;
  is_available_for_hire: boolean;
  experience_years: string;
}

export interface ProfileData {
  full_name: string;
  primary_title: string;
  secondary_title: string;
  short_bio: string;
  full_bio: string;
  avatar_url: string | null;
  cover_url: string | null;
  highlights: string[];
}

export interface SkillItem {
  id: number | string;
  name: string;
  level_label: string;
  proficiency_type: "primary" | "working" | "tool";
}

export interface SkillCategoryGroup {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  skills: SkillItem[];
}

export interface WorkExperienceItem {
  id: number | string;
  role_number: string;
  company_name: string;
  position: string;
  status: "Currently Working" | "Previous Role";
  location: string;
  overview: string;
  responsibilities: string[];
  tech_stack: string[];
  accent_theme: "royal" | "indigo" | "crimson";
}

export interface FreelanceSuiteItem {
  id: number | string;
  suite_number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  accent_color: "blue" | "rose" | "emerald";
}

export interface DesignCapabilityItem {
  id: number | string;
  capability_number: string;
  title: string;
  description: string;
  design_tags: string[];
}

export interface EducationItem {
  id: number | string;
  degree: string;
  field_of_study: string;
  institution: string;
  location: string;
  duration: string;
  coursework: string[];
  degree_type?: string;
}

export interface ProjectCaseStudy {
  id: number | string;
  title: string;
  slug: string;
  category: string;
  role_title: string;
  summary: string;
  full_description: string;
  challenge: string;
  solution: string;
  key_deliverables: string[];
  tech_stack: string[];
  metrics_label: string;
  metrics_value: string;
  thumbnail_url: string;
  gallery_urls: string[];
  demo_url: string | null;
  github_url: string | null;
  accent_theme: "royal" | "crimson";
  is_featured: boolean;
  is_published: boolean;
  seo_title?: string;
  seo_description?: string;
}

export interface ServiceOffering {
  id: number | string;
  service_number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  accent_color: "blue" | "crimson" | "indigo" | "emerald";
}

export interface PhilosophyPrinciple {
  id: number | string;
  principle_number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ClientReview {
  id: number | string;
  reviewer_name: string;
  reviewer_role: string;
  company_or_context: string;
  service_used: string;
  rating: number;
  comment: string;
  display_date: string;
  is_verified: boolean;
  likes_count: number;
}

export const portfolioData: {
  settings: SiteSettings;
  profile: ProfileData;
  skills: SkillCategoryGroup[];
  work_experience: WorkExperienceItem[];
  freelance: FreelanceSuiteItem[];
  design: DesignCapabilityItem[];
  education: EducationItem[];
  projects: ProjectCaseStudy[];
  services: ServiceOffering[];
  philosophies: PhilosophyPrinciple[];
  reviews: ClientReview[];
} = {
  settings: {
    site_title: "Dhurba Dhakal | Full Stack Developer | Laravel & PHP Developer",
    meta_description:
      "Software Developer and Web Designer with 2+ years of professional software development experience specializing in PHP and Laravel applications, RESTful APIs, relational databases, and modern web applications.",
    primary_email: "dhurba179@gmail.com",
    secondary_email: "sharvikatech@gmail.com",
    phone_whatsapp: "+9779800000000",
    location: "Nepal",
    country: "Nepal",
    timezone: "UTC+5:45 (NPT)",
    github_url: "https://github.com/dhurbagit",
    linkedin_url: "https://linkedin.com",
    facebook_url: "https://facebook.com",
    availability_status: "Full-Time • Remote • Freelance Ready",
    is_available_for_hire: true,
    experience_years: "2+ Years Software Development Experience",
  },

  profile: {
    full_name: "Dhurba Dhakal",
    primary_title: "Full Stack Developer | Laravel & PHP Developer",
    secondary_title: "Web Designer • Freelancer • Software Developer",
    short_bio:
      "Software Developer and Web Designer with 2+ years of professional software development experience specializing in PHP and Laravel applications. Proven expertise in engineering transactional web platforms, dynamic CMS architectures, RESTful APIs, relational databases, responsive frontend interfaces, and business workflow software.",
    full_bio:
      "Software Developer and Web Designer with 2+ years of professional software development experience specializing in PHP and Laravel applications. Proven expertise in engineering transactional web platforms, dynamic CMS architectures, RESTful APIs, relational databases, responsive frontend interfaces, and business workflow software. Bridges the gap between clean engineering and real-world business objectives.",
    avatar_url: null,
    cover_url: null,
    highlights: [
      "Full-Stack Engineering with Laravel & Modern UI",
      "Transactional Data Integrity & Financial Platforms",
      "Production-Ready Business Applications & Custom CMS",
      "Clean Code, Maintainable MVC & Scalable REST APIs",
    ],
  },

  skills: [
    {
      id: 1,
      name: "Backend & Server Engineering",
      slug: "backend",
      description: "Enterprise backend systems, Laravel MVC architecture, and transactional REST API architectures.",
      skills: [
        { id: 1, name: "PHP (PHP 8+)", level_label: "Core Strength", proficiency_type: "primary" },
        { id: 2, name: "Laravel (MVC, Eloquent, Auth, RBAC)", level_label: "Specialization", proficiency_type: "primary" },
        { id: 3, name: "RESTful API Engineering", level_label: "Enterprise Standard", proficiency_type: "primary" },
        { id: 4, name: "Business Logic & Workflows", level_label: "Core Capability", proficiency_type: "primary" },
        { id: 5, name: "Node.js & Express.js", level_label: "Working Knowledge", proficiency_type: "working" },
        { id: 6, name: "NestJS & Socket.io", level_label: "Project Experience", proficiency_type: "working" },
      ],
    },
    {
      id: 2,
      name: "Relational Databases & Data Architecture",
      slug: "database",
      description: "High-integrity relational database schemas, indexing, and query optimization.",
      skills: [
        { id: 7, name: "MySQL", level_label: "Primary Database", proficiency_type: "primary" },
        { id: 8, name: "Database Schema Normalization", level_label: "Production Standard", proficiency_type: "primary" },
        { id: 9, name: "Query Optimization & Indexing", level_label: "Core Strength", proficiency_type: "primary" },
        { id: 10, name: "PostgreSQL & Prisma ORM", level_label: "Database Layer", proficiency_type: "working" },
        { id: 11, name: "Redis Caching", level_label: "Performance Layer", proficiency_type: "working" },
      ],
    },
    {
      id: 3,
      name: "Frontend & UI Engineering",
      slug: "frontend",
      description: "Responsive web engineering, design-to-code implementation, and dynamic user experiences.",
      skills: [
        { id: 12, name: "HTML5 & Modern CSS3", level_label: "Web Foundation", proficiency_type: "primary" },
        { id: 13, name: "JavaScript & ES6+", level_label: "Interactive UI", proficiency_type: "primary" },
        { id: 14, name: "Bootstrap 5 & TailwindCSS", level_label: "Design Systems", proficiency_type: "primary" },
        { id: 15, name: "jQuery & AJAX UI", level_label: "Dynamic Interfaces", proficiency_type: "primary" },
        { id: 16, name: "React.js & Next.js", level_label: "Modern Web", proficiency_type: "working" },
      ],
    },
    {
      id: 4,
      name: "DevOps, Tools & CMS Platforms",
      slug: "ecosystem",
      description: "Custom CMS engineering, admin control panels, version control, and developer workflows.",
      skills: [
        { id: 17, name: "Custom CMS Development", level_label: "Production Standard", proficiency_type: "primary" },
        { id: 18, name: "Admin Dashboards & Control Panels", level_label: "Core Capability", proficiency_type: "primary" },
        { id: 19, name: "Git & GitHub Collaboration", level_label: "DevOps & Collaboration", proficiency_type: "primary" },
        { id: 20, name: "Docker & Docker Compose", level_label: "Containerization", proficiency_type: "working" },
        { id: 21, name: "Linux & Terminal Environments", level_label: "Server Management", proficiency_type: "working" },
      ],
    },
  ],

  work_experience: [
    {
      id: 1,
      role_number: "01",
      company_name: "Nepal Digital Payment Company Limited (NDPC)",
      position: "Developer",
      status: "Currently Working",
      location: "Nepal",
      overview:
        "Contributing to software development, transactional infrastructure, database systems, and digital payment business solutions.",
      responsibilities: [
        "Web application development and database-driven application engineering.",
        "Backend development and business logic implementation using PHP and Laravel.",
        "API development, third-party service integration, and frontend/backend coordination.",
        "Application maintenance, continuous debugging, and technical problem solving.",
      ],
      tech_stack: ["PHP", "Laravel", "JavaScript", "MySQL", "REST APIs", "Git"],
      accent_theme: "royal",
    },
    {
      id: 2,
      role_number: "02",
      company_name: "Nector Digit",
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
      tech_stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery", "AJAX", "PHP", "Laravel"],
      accent_theme: "indigo",
    },
    {
      id: 3,
      role_number: "03",
      company_name: "Nepal Pasta Food Company",
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
      tech_stack: ["Laravel", "PHP", "MySQL", "CMS", "Web Technologies", "SEO", "Digital Systems"],
      accent_theme: "crimson",
    },
  ],

  freelance: [
    {
      id: 1,
      suite_number: "01",
      title: "Full-Stack & Laravel Engineering",
      subtitle: "Custom Web Applications & Database Systems",
      description:
        "Architecting robust Laravel backends, relational database schemas, REST APIs, and automated business workflows engineered for performance and scalability.",
      capabilities: [
        "Custom website & web app development",
        "Laravel & PHP backend systems",
        "REST API development & integration",
        "Database-driven applications (MySQL/PostgreSQL)",
        "Business workflow & automation systems",
      ],
      technologies: ["PHP 8+", "Laravel", "MySQL", "MVC Architecture", "REST APIs"],
      accent_color: "blue",
    },
    {
      id: 2,
      suite_number: "02",
      title: "UI Design & Responsive Web",
      subtitle: "Design-to-Code & Brand Interfaces",
      description:
        "Creating modern, user-focused digital experiences, responsive websites, and clean visual layouts that align directly with business identity and conversion goals.",
      capabilities: [
        "Business website design & development",
        "Responsive UI implementation (Mobile/Tablet/Desktop)",
        "Frontend engineering (HTML5, CSS3, JS, Bootstrap 5)",
        "SEO implementation & metadata architecture",
        "Design-to-code production translation",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "TailwindCSS"],
      accent_color: "rose",
    },
    {
      id: 3,
      suite_number: "03",
      title: "Custom CMS Platforms & Operations",
      subtitle: "Admin Dashboards & Platform Maintenance",
      description:
        "Building tailored content management platforms, centralized admin dashboards, custom feature integrations, and ongoing technical maintenance.",
      capabilities: [
        "Custom CMS development",
        "Centralized admin dashboards & control panels",
        "Website maintenance & optimization",
        "Custom feature development & integrations",
        "Technical consultation & architecture planning",
      ],
      technologies: ["Laravel CMS", "Blade", "MySQL", "Admin Dashboards", "SEO Controls"],
      accent_color: "emerald",
    },
  ],

  design: [
    {
      id: 1,
      capability_number: "01",
      title: "Web Design",
      description:
        "Professional website design focused on real business requirements, usability, content hierarchy, and responsive presentation.",
      design_tags: ["Visual Hierarchy", "User Experience", "Semantic Layout"],
    },
    {
      id: 2,
      capability_number: "02",
      title: "UI Design",
      description:
        "Creating clean, practical, and user-focused interfaces with strong visual hierarchy and refined design systems.",
      design_tags: ["Design Systems", "Component States", "Clean Aesthetics"],
    },
    {
      id: 3,
      capability_number: "03",
      title: "Responsive Design",
      description:
        "Designing fluid interfaces that adapt perfectly across Desktop, Laptop, Tablet, and Mobile screens.",
      design_tags: ["Desktop", "Laptop", "Tablet", "Mobile First"],
    },
    {
      id: 4,
      capability_number: "04",
      title: "Business Website Design",
      description:
        "Designing websites around business identity, brand presentation, content structure, user requirements, and conversion goals.",
      design_tags: ["Brand Identity", "Content Structure", "Conversion Goals"],
    },
    {
      id: 5,
      capability_number: "05",
      title: "CMS Interface Design",
      description:
        "Designing practical interfaces for managing products, categories, pages, images, content, SEO, and website settings.",
      design_tags: ["Admin Dashboards", "Media Managers", "SEO Controls"],
    },
    {
      id: 6,
      capability_number: "06",
      title: "Design-to-Code",
      description:
        "Because I have both design and development experience, I understand how to translate designs directly into functional production interfaces.",
      design_tags: ["HTML5/CSS3", "Bootstrap 5", "Production Code"],
    },
  ],

  education: [
    {
      id: 1,
      degree: "BSc IT",
      field_of_study: "Bachelor of Science in Information Technology",
      institution: "Lord Buddha Education Foundation",
      location: "Nepal",
      duration: "Completed",
      degree_type: "Undergraduate Degree",
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

  projects: [
    {
      id: 1,
      title: "Barari / Nepal Pasta Food Company Platform",
      slug: "barari-nepal-pasta",
      category: "Business CMS & Web Application",
      role_title: "Laravel / Full-Stack Developer",
      summary:
        "Comprehensive business website and custom CMS platform allowing administrators to manage business content, product catalog, barcode integration, news, and SEO dynamically.",
      full_description:
        "A comprehensive business website and custom CMS platform developed for a leading food and manufacturing enterprise. The solution empowers non-technical administrators to manage the complete product catalog, corporate announcements, career opportunities, and multimedia content without modifying source code.\n\nEngineered with a clean Laravel MVC architecture, the platform features barcode integration for product lookup, granular role-based access control, automated SEO metadata injection, and a fully responsive frontend built with Bootstrap 5 and AJAX.",
      challenge:
        "Designing a multi-tiered administrative portal capable of managing hundreds of product SKUs with barcode mapping, media assets, and multilingual content while maintaining sub-second page loads on standard hosting infrastructure.",
      solution:
        "Architected a normalized MySQL schema with indexed category relations, implemented server-side image processing, and structured clean Laravel controllers with request validation and caching layers.",
      key_deliverables: [
        "Dynamic product catalog and barcode-related product integration.",
        "Full content management: dynamic sections, careers, blog, and media galleries.",
        "Role-based admin dashboard with SEO metadata and multilingual support.",
        "Fully responsive frontend with Bootstrap 5, JavaScript, jQuery, and AJAX.",
      ],
      tech_stack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap 5",
        "JavaScript",
        "jQuery",
        "AJAX",
        "SEO Management",
        "Barcode Integration",
      ],
      metrics_label: "System Architecture",
      metrics_value: "Dynamic Centralized CMS",
      thumbnail_url: "/projects/inventory_billing_system.jpg",
      gallery_urls: [
        "/projects/inventory_billing_system.jpg",
        "/projects/merchant_analytics_dashboard.jpg",
      ],
      demo_url: null,
      github_url: "https://github.com/dhurbagit",
      accent_theme: "crimson",
      is_featured: true,
      is_published: true,
      seo_title: "Barari Nepal Pasta Food Company Platform — Case Study",
      seo_description:
        "Case study of the custom Laravel CMS and business website platform developed for Nepal Pasta Food Company with dynamic product catalogs and barcode integration.",
    },
    {
      id: 2,
      title: "Sixvilla Project",
      slug: "sixvilla-cms",
      category: "Custom CMS & Brand Platform",
      role_title: "Laravel Developer",
      summary:
        "Laravel-powered business website and custom CMS solution designed to showcase products and brands with full administrative control over digital content and customer inquiries.",
      full_description:
        "A business-oriented digital showcase and centralized CMS engineered to manage multiple brand portfolios, media galleries, and structured customer inquiries. Built on Laravel, the platform ensures rapid administrative workflow execution and seamless mobile user experience.",
      challenge:
        "Creating an intuitive content management interface that allows non-technical marketing staff to create dynamic brand pages, manage high-resolution media galleries, and process inquiry leads securely.",
      solution:
        "Developed custom administration dashboards with live preview capabilities, automated thumbnail generation, role verification middleware, and structured lead routing.",
      key_deliverables: [
        "Custom administration dashboard for brand and media asset management.",
        "SEO metadata management and structured inquiry workflows.",
        "Responsive, cross-browser frontend engineering with Bootstrap and AJAX.",
        "Secured administrative routes with role verification and input sanitization.",
      ],
      tech_stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "AJAX", "Inquiry Workflow"],
      metrics_label: "Administration Control",
      metrics_value: "100% Dynamic Content",
      thumbnail_url: "/projects/merchant_analytics_dashboard.jpg",
      gallery_urls: [
        "/projects/merchant_analytics_dashboard.jpg",
        "/projects/inventory_billing_system.jpg",
      ],
      demo_url: null,
      github_url: "https://github.com/dhurbagit",
      accent_theme: "royal",
      is_featured: true,
      is_published: true,
      seo_title: "Sixvilla Project — Case Study | Dhurba Dhakal",
      seo_description:
        "Case study for Sixvilla Project: Laravel-powered business website and custom CMS solution for multi-brand management.",
    },
    {
      id: 3,
      title: "Off-Hour Tracking System",
      slug: "off-hour-tracking",
      category: "Business Workflow System",
      role_title: "Full-Stack Developer",
      summary:
        "Workforce management platform engineered to monitor organizational tasks, shift schedules, screenshot submissions, and multi-tier review workflows.",
      full_description:
        "An enterprise workforce tracking system engineered to monitor and manage organizational work processes, shift schedules, task submissions, and review pipelines. It provides organizational transparency while ensuring strict data privacy and permission controls.",
      challenge:
        "Handling structured task submissions, file/screenshot upload verifications, and multi-tier approval chains without bottle-necking server resources.",
      solution:
        "Designed structured relational MySQL schemas with timestamp indexing, multi-role authorization policies, and modular review controllers.",
      key_deliverables: [
        "Task management and shift scheduling modules tailored to real business operational processes.",
        "Screenshot upload handling and multi-tier review verification.",
        "User permission roles separating team members, leads, and administrators.",
        "Relational database schemas recording timestamps, task statuses, and audit history.",
      ],
      tech_stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Workflow Management"],
      metrics_label: "Workflow Scope",
      metrics_value: "Multi-Tier Review Pipeline",
      thumbnail_url: "/projects/ndpc_payment_dashboard.jpg",
      gallery_urls: [
        "/projects/ndpc_payment_dashboard.jpg",
        "/projects/merchant_analytics_dashboard.jpg",
      ],
      demo_url: null,
      github_url: "https://github.com/dhurbagit",
      accent_theme: "royal",
      is_featured: true,
      is_published: true,
      seo_title: "Off-Hour Tracking System — Case Study | Dhurba Dhakal",
      seo_description:
        "Case study for Off-Hour Tracking System: Business task and workforce workflow management platform built on Laravel.",
    },
    {
      id: 4,
      title: "Hospital Healthcare Distribution Marketplace",
      slug: "healthcare-marketplace",
      category: "Modern Full-Stack Marketplace Concept",
      role_title: "Full-Stack Architecture Planning & Developer",
      summary:
        "Healthcare procurement marketplace architecture connecting hospitals, distributors, and vendors across RFQ, Quotations, Orders, Invoicing, and fulfillment pipelines.",
      full_description:
        "A large-scale B2B healthcare procurement marketplace concept designed to streamline the procurement lifecycle between medical institutions and certified pharmaceutical/equipment distributors. Features RFQ generation, quotation bidding, invoicing, and audit trails.",
      challenge:
        "Designing an end-to-end B2B transaction pipeline with strict state machine validations across RFQ, Quotations, Purchase Orders, and Delivery Notes.",
      solution:
        "Architected modular microservices and modern frontend architectures using Next.js, Node.js, NestJS, and PostgreSQL managed with Prisma ORM and Docker orchestration.",
      key_deliverables: [
        "Domain workflows: Product Catalog, RFQ, Quotes, Invoicing, and Payment Readiness.",
        "Modern API structures with Next.js, React.js, Node.js, NestJS, and PostgreSQL via Prisma ORM.",
        "Docker container orchestration, Redis caching, and comprehensive audit logs.",
      ],
      tech_stack: [
        "Next.js",
        "React.js",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Docker",
        "REST APIs",
      ],
      metrics_label: "Architecture",
      metrics_value: "B2B Marketplace Platform",
      thumbnail_url: "/projects/merchant_analytics_dashboard.jpg",
      gallery_urls: [
        "/projects/merchant_analytics_dashboard.jpg",
        "/projects/ndpc_payment_dashboard.jpg",
      ],
      demo_url: null,
      github_url: "https://github.com/dhurbagit",
      accent_theme: "royal",
      is_featured: true,
      is_published: true,
      seo_title: "Hospital Healthcare Marketplace — Case Study",
      seo_description:
        "Case study of the B2B Healthcare procurement marketplace architecture engineered with Next.js, NestJS, and PostgreSQL.",
    },
    {
      id: 5,
      title: "Smart Classroom Operating System (SCOS)",
      slug: "scos-smart-classroom",
      category: "EdTech & SaaS Platform Concept",
      role_title: "SaaS Concept & Product Developer",
      summary:
        "SaaS platform designed for educational institutions to unify smart board classroom interactions, teacher applications, homework distribution, and student attendance.",
      full_description:
        "An educational SaaS platform engineered to unify classroom hardware (smart boards), teacher management dashboards, digital homework distribution, and institutional notice systems into a single centralized digital environment.",
      challenge:
        "Creating an intuitive touch-friendly interface for smart boards while maintaining high-performance real-time data sync with administrative databases.",
      solution:
        "Engineered modular SaaS services with clean API contracts, responsive touch-optimized UI components, and role-based permissions for educators, students, and administrators.",
      key_deliverables: [
        "Software architecture for smart board integration, teacher applications, and homework tracking.",
        "Planned extended SaaS modules for digital examinations and student performance analytics.",
        "Demonstrates practical experience in designing software around institutional workflows.",
      ],
      tech_stack: ["Laravel", "React.js", "Node.js", "MySQL", "EdTech SaaS", "Smart Board UI"],
      metrics_label: "Domain",
      metrics_value: "Education Technology SaaS",
      thumbnail_url: "/projects/inventory_billing_system.jpg",
      gallery_urls: [
        "/projects/inventory_billing_system.jpg",
        "/projects/ndpc_payment_dashboard.jpg",
      ],
      demo_url: null,
      github_url: "https://github.com/dhurbagit",
      accent_theme: "crimson",
      is_featured: true,
      is_published: true,
      seo_title: "Smart Classroom Operating System (SCOS) — Case Study",
      seo_description:
        "Case study for Smart Classroom Operating System: EdTech and school management SaaS platform architecture.",
    },
  ],

  services: [
    {
      id: 1,
      service_number: "01",
      title: "Laravel Development",
      subtitle: "Backend & Systems",
      description:
        "Custom Laravel applications, business architectures, RESTful APIs, database structures, and secure authentication workflows.",
      capabilities: ["Laravel MVC", "Auth & RBAC", "REST APIs", "Business Logic"],
      accent_color: "blue",
    },
    {
      id: 2,
      service_number: "02",
      title: "PHP Development",
      subtitle: "Server Engineering",
      description:
        "Robust backend engineering, custom server-side scripts, database-driven web applications, and legacy code maintenance.",
      capabilities: ["PHP 8.x", "OOP Principles", "MySQL Integration", "Backend Logic"],
      accent_color: "blue",
    },
    {
      id: 3,
      service_number: "03",
      title: "Web Design & Development",
      subtitle: "Creative UI & Frontend",
      description:
        "Responsive, clean, and accessible websites combining user-centric interface design with semantic, cross-browser frontend code.",
      capabilities: ["Responsive Design", "HTML5 & CSS3", "Bootstrap 5", "UI/UX"],
      accent_color: "crimson",
    },
    {
      id: 4,
      service_number: "04",
      title: "CMS Development",
      subtitle: "Dynamic Content Platforms",
      description:
        "Centralized custom content management systems empowering non-technical administrators to manage content, media, and products effortlessly.",
      capabilities: ["Custom CMS", "Admin Panels", "SEO Management", "Media Library"],
      accent_color: "indigo",
    },
    {
      id: 5,
      service_number: "05",
      title: "Full-Stack Development",
      subtitle: "End-to-End Solutions",
      description:
        "Comprehensive web application engineering across backend logic, relational databases, client-side scripting, and modern API architectures.",
      capabilities: ["PHP / Laravel", "JavaScript", "MySQL", "React / Next.js"],
      accent_color: "emerald",
    },
    {
      id: 6,
      service_number: "06",
      title: "API Development & Integration",
      subtitle: "Integration Engineering",
      description:
        "Designing secure REST APIs, JSON endpoints, third-party payment/service integrations, and asynchronous AJAX backend pipelines.",
      capabilities: ["REST APIs", "JSON Services", "Third-Party APIs", "AJAX"],
      accent_color: "blue",
    },
    {
      id: 7,
      service_number: "07",
      title: "Business Applications",
      subtitle: "Operations & Workflows",
      description:
        "Tailored digital software modules built around specific business operational requirements, task management, and shift tracking.",
      capabilities: ["Workflow Systems", "Task Tracking", "Audit History", "Operations"],
      accent_color: "indigo",
    },
    {
      id: 8,
      service_number: "08",
      title: "Freelance Solutions",
      subtitle: "Independent Delivery",
      description:
        "Direct technical partnership with founders, business owners, and organizations for custom digital projects, websites, and dashboards.",
      capabilities: ["Custom Builds", "Direct Collaboration", "Rapid Delivery", "Maintenance"],
      accent_color: "crimson",
    },
  ],

  philosophies: [
    {
      id: 1,
      principle_number: "01",
      title: "Build With Purpose",
      tagline: "Impact-Driven Engineering",
      description:
        "Every line of code should solve a tangible business problem and deliver practical, measurable value.",
    },
    {
      id: 2,
      principle_number: "02",
      title: "Understand the Business",
      tagline: "Workflow Alignment",
      description:
        "Effective software starts with deep domain understanding before architecting the technical implementation.",
    },
    {
      id: 3,
      principle_number: "03",
      title: "Design for Users",
      tagline: "Human-Centric UX",
      description:
        "Software must be intuitive, responsive, and easy to navigate for real daily users and administrators.",
    },
    {
      id: 4,
      principle_number: "04",
      title: "Code for the Future",
      tagline: "Maintainability & Scale",
      description:
        "Clean, structured MVC and REST codebases that remain maintainable and adapt as the organization grows.",
    },
    {
      id: 5,
      principle_number: "05",
      title: "Keep Learning",
      tagline: "Continuous Growth",
      description:
        "Consistently expanding from Laravel/PHP strengths into modern full-stack architectures and tooling.",
    },
  ],

  reviews: [
    {
      id: 1,
      reviewer_name: "Santosh Sharma",
      reviewer_role: "Head of Operations",
      company_or_context: "Nepal Pasta Food Company",
      service_used: "Enterprise CMS & Product Information Architecture",
      rating: 5,
      comment:
        "Dhurba demonstrated exceptional dedication and technical skill while building our business CMS. His ability to understand complex business processes and translate them into a clean, maintainable platform was invaluable.",
      display_date: "Verified Colleague & Client",
      is_verified: true,
      likes_count: 19,
    },
    {
      id: 2,
      reviewer_name: "Prakash Maharjan",
      reviewer_role: "Senior Engineering Lead",
      company_or_context: "NDPC Collaboration",
      service_used: "Transactional Web Platform & Backend Architecture",
      rating: 5,
      comment:
        "Dhurba brings a methodical, security-focused mindset to backend engineering. His understanding of Laravel MVC, relational schemas, and transaction management made our collaboration seamless and highly reliable.",
      display_date: "Verified Technical Colleague",
      is_verified: true,
      likes_count: 18,
    },
    {
      id: 3,
      reviewer_name: "Rohan Adhikari",
      reviewer_role: "Project Coordinator",
      company_or_context: "Digital Solutions Client",
      service_used: "Laravel & REST API Backend",
      rating: 5,
      comment:
        "Exceptional Laravel developer. Dhurba developed our backend services and third-party API integrations on schedule. His understanding of database design and MVC structure is top-notch.",
      display_date: "Verified Client",
      is_verified: true,
      likes_count: 14,
    },
    {
      id: 4,
      reviewer_name: "Pooja Karki",
      reviewer_role: "Marketing & Brand Lead",
      company_or_context: "Brand Platform Client",
      service_used: "Web Design & UI/UX",
      rating: 5,
      comment:
        "Great eye for design and responsive frontend execution. Dhurba translated our design concepts into a fast, mobile-friendly interface with Bootstrap and JavaScript. Highly recommended!",
      display_date: "Verified Client",
      is_verified: true,
      likes_count: 12,
    },
    {
      id: 5,
      reviewer_name: "Bikash Thapa",
      reviewer_role: "Operations Manager",
      company_or_context: "Workforce Tracking Project",
      service_used: "Business Workflow System",
      rating: 5,
      comment:
        "The task management and shift tracking workflow Dhurba built streamlined our daily review cycle. Very collaborative, dependable, and responsive developer.",
      display_date: "Verified Colleague",
      is_verified: true,
      likes_count: 10,
    },
  ],
};
