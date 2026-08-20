# Dhurba Dhakal — Modern Static Developer Portfolio

> **High-Performance Static Developer Portfolio** built with **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, and **Framer Motion**. Self-contained with rich, static data and zero external backend/CMS dependencies.

---

## 📌 Executive Summary & Master Identity

- **Full Name:** **Dhurba Dhakal**
- **Primary Title:** *Full Stack Developer | Laravel & PHP Developer*
- **Secondary Title:** *Web Designer • Freelancer • Software Developer*
- **Experience:** 2+ Years Professional Software Development Experience
- **Primary Email:** `dhurba179@gmail.com`
- **Secondary Email:** `sharvikatech@gmail.com`
- **Location:** Nepal (UTC+5:45 Kathmandu)
- **Education:** *BSc IT — Lord Buddha Education Foundation*
- **Architecture:** **100% Static Next.js Application** (Static Export / Pre-rendered Pages with instant loading, SEO optimization, and rich static mock/production data).

---

## 🏛️ System Architecture & Technology Stack

```text
+-------------------------------------------------------------------------+
|                          STATIC CLIENT LAYER                            |
|   Next.js (App Router) • React 19 • TailwindCSS • Framer Motion         |
|   • Public Portfolio UI: Responsive Bento Grids, Interactive Modals    |
|   • Static Case Studies (/projects/[slug]) via generateStaticParams    |
|   • Rich Static Data Store (lib/portfolioData.ts)                      |
|   • Instant Local Feedback & Interactive Modals                        |
+-------------------------------------------------------------------------+
```

### Core Technologies
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Carousels:** Swiper.js
- **Icons:** Lucide React & Custom SVG Icons
- **Data Source:** Static Portfolio Store (`lib/portfolioData.ts`, `lib/cvData.ts`)

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js:** v20.x or v22.x
- **npm** or **pnpm** / **yarn**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/dhurbagit/dhurba-portfolio-static.git
cd dhurba-portfolio-static

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production (Static Generation)
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
dhurba-portfolio-static/
├── app/
│   ├── globals.css                # Global Tailwind CSS and design tokens
│   ├── layout.tsx                 # Root layout with Google Fonts and metadata
│   ├── page.tsx                   # Main portfolio landing page
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx           # Static project case studies (generateStaticParams)
│   ├── robots.ts                  # Static robots.txt generator
│   └── sitemap.ts                 # Static sitemap.xml generator
├── components/
│   ├── ContactModal.tsx           # Interactive contact modal
│   ├── DesignExperience.tsx       # Creative & visual engineering section
│   ├── DeveloperParallaxBackground.tsx # Parallax matrix background
│   ├── Education.tsx              # Higher education & coursework
│   ├── ExperienceTimeline.tsx     # Animated experience timeline
│   ├── FloatingWhatsApp.tsx       # WhatsApp & direct call widget
│   ├── Footer.tsx                 # Footer with socials & quick copy
│   ├── FreelanceExperience.tsx    # Independent practice & services
│   ├── Hero.tsx                   # Hero profile & story tabs
│   ├── Icons.tsx                  # Brand & technology SVG icons
│   ├── Navbar.tsx                 # Floating pill navigation bar
│   ├── ProjectShowcase.tsx        # Swiper project carousel
│   ├── ResumeModal.tsx            # Printable CV & Markdown/JSON exporter
│   ├── ReviewsAndFeedback.tsx     # Client reviews & star feedback
│   ├── ServicesAndPhilosophy.tsx  # Offerings & 5 guiding principles
│   ├── SkillsBento.tsx            # Technical capabilities matrix
│   └── WorkExperience.tsx         # Mirror-view work experience slider
├── lib/
│   ├── api.ts                     # Static data accessor functions
│   ├── cvData.ts                  # Structured CV profile data
│   ├── portfolioData.ts           # Unified static portfolio data store
│   └── utils.ts                   # Tailwind merge & clsx utility
├── public/
│   └── projects/                  # Project showcase screenshots
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📄 License & Attribution

Designed and developed by **Dhurba Dhakal** © 2026. All rights reserved.