

# Rajan Savaliya Portfolio Website - Implementation Plan

## Overview
A premium, modern single-page portfolio website with dark/light mode, smooth animations, and a hidden admin panel for content management. All content lives in a single TypeScript data file for easy updates.

---

## Phase 1: Foundation & Theme System

### Data Architecture
- Create `src/data/portfolio.ts` with all your content (hero, about, skills, experience, projects, certifications, contact)
- Create `src/types/portfolio.ts` with TypeScript interfaces for autocomplete and type safety
- Clean, well-commented structure so you can easily add/edit content later

### Theme System (Dark/Light Mode)
- **Dark mode as default** with deep navy gradient backgrounds
- **Light mode** with clean white backgrounds and soft shadows
- Theme toggle (sun/moon icon) in navbar
- `ThemeContext` with `useTheme()` hook
- Tailwind `dark:` classes throughout - no hardcoded colors
- Smooth transitions when switching themes

---

## Phase 2: Layout & Navigation

### Sticky Navbar
- Logo/name on left, navigation links center, theme toggle right
- Links: Home, About, Skills, Experience, Projects, Contact
- Glassmorphism effect on scroll (blur background)
- Mobile: hamburger menu with slide-in drawer
- Smooth scroll to sections on click

### Footer
- Copyright with your name and year
- Quick social links (GitHub, LinkedIn, Email)
- "Back to top" smooth scroll button

---

## Phase 3: Main Sections

### Hero Section
- Your name with animated typing effect cycling through titles
- Subtitle and location badge
- CTA buttons: "View My Work" (scrolls to projects) and "Download Resume"
- Social links row
- Animated gradient background

### About Section
- Professional bio paragraph
- Gradient avatar placeholder with "RS" initials
- Animated stat counters (6+ Years, 40+ Apps, 10+ Store Apps, 5+ Companies)
- Core strengths as icon cards (Mobile, Web, Backend, Cloud, AI, Product)

### Skills Section
- Categorized skill badges in a clean grid
- Categories: Languages, Mobile, Web, Backend & APIs, Cloud & DevOps, Payments, AI & Automation
- Subtle hover effects on each badge
- Staggered fade-in animation on scroll

### Experience Section
- Vertical timeline layout with line on left, cards on right
- Each card shows: company, role, dates, achievements, tech stack
- Tech stack as colored badges at bottom of each card
- Live links where applicable
- Smooth reveal animation as you scroll

### Projects Section (Main Showcase)
- **Filter tabs**: All | Mobile | Web | AI - instant filtering with animation
- **Featured projects** as large cards (2 per row)
- **Other projects** as smaller cards (3 per row)
- Each card: project image placeholder, name, description, platform badges, tech stack, action buttons
- Click to expand modal with full details
- "Show More" button if many projects

### Certifications Section
- Horizontal scrolling cards or badge row
- Each certification shows name, provider, and link (where available)
- Clean, minimal design

### Contact Section
- "Let's Work Together" heading
- Contact cards (Email, Phone, LinkedIn, GitHub) - all clickable
- Contact form with Name, Email, Message fields
- Form uses Formspree/EmailJS if URL configured, falls back to mailto:

---

## Phase 4: Animations & Polish

### Scroll Animations (Framer Motion)
- Fade-in + slide-up on section scroll using Intersection Observer
- Staggered children animations for lists and grids
- Smooth page load sequence

### Micro-interactions
- Button scale on hover
- Card lift with glow (dark) or shadow (light) on hover
- Typing effect for hero titles
- Animated stat counters
- Smooth underline on nav link hover

### Responsive Design
- Mobile-first approach
- Hamburger menu on mobile with slide-in drawer
- Grid adjustments for tablet and mobile
- Touch-friendly tap targets

---

## Phase 5: Admin Panel (/admin)

### Password Gate
- Simple password input screen
- Hardcoded password: `rajan2026`
- Clean, centered design

### Admin Dashboard
- Sidebar with section tabs (Hero, About, Skills, Experience, Projects, Certifications, Contact)
- Each tab shows:
  - Visual preview of the section's current data
  - JSON editor (monospace textarea) pre-filled with section data
  - "Copy JSON" button - copies to clipboard
  - "Format JSON" button - pretty-prints

### Admin Features
- "Download All Data as JSON" button in top bar
- JSON validation (red border if invalid)
- "Add New Project" form with input fields that generates JSON
- "Add New Experience" form similarly
- Instructions banner explaining how to update the site

---

## Technical Implementation

### Dependencies to Add
- `framer-motion` for animations

### File Structure
```
src/
├── data/portfolio.ts          ← All your content
├── types/portfolio.ts         ← TypeScript interfaces
├── context/ThemeContext.tsx   ← Dark/light mode
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useTheme.ts
├── components/
│   ├── layout/ (Navbar, Footer)
│   ├── sections/ (Hero, About, Skills, etc.)
│   ├── ui/ (SkillBadge, ProjectCard, etc.)
│   └── admin/ (AdminLayout, JsonEditor, etc.)
└── pages/ (Home, Admin)
```

### SEO & Performance
- Semantic HTML structure
- Meta tags and Open Graph tags for social sharing
- Lazy loading for images
- Optimized bundle size

---

## Deliverables

✅ Complete single-page portfolio with all 7 sections  
✅ Dark/light mode toggle (dark default)  
✅ Smooth scroll animations with Framer Motion  
✅ Fully responsive design  
✅ All your data pre-populated from `portfolio.ts`  
✅ Hidden admin panel at `/admin`  
✅ JSON viewer/editor with copy functionality  
✅ TypeScript interfaces for type safety  

---

## How to Update Content Later

1. Open `src/data/portfolio.ts`
2. Edit the relevant section (add a project, update experience, etc.)
3. Save the file - changes appear immediately
4. Or use the Admin panel to preview/copy JSON snippets

