// ============================================
// PORTFOLIO DATA - Edit this file to update your website
// ============================================
// All website content is stored here. Simply edit the values below
// and save the file to update your portfolio.
// ============================================

import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    name: "Rajan Savaliya",
    titles: [
      "Senior Software Developer",
      "React Native Expert",
      "Full Stack Developer",
      "AI Integration Specialist",
    ],
    subtitle:
      "6+ years building production mobile & web apps for startups, products, and global clients",
    location: "Gujarat, India",
    availability: "Open to Remote & Contract",
    resumeLink: "https://docs.google.com/document/d/1tgUBZFN0C0QPUWBaOEhLGqjnSAKHst-4c3-B8wIpWew/edit?usp=sharing",
    socials: {
      github: "https://github.com/Rajan-Savaliya",
      linkedin: "https://www.linkedin.com/in/rajansavaliya/",
      email: "rajansavaliyawork@gmail.com",
      phone: "+91 6354701809",
    },
  },

  // ============================================
  // ABOUT SECTION
  // ============================================
  about: {
    bio: "Product-focused Senior Software Developer with 6+ years of hands-on experience delivering scalable, secure, and high-performance web and mobile applications for startups, product teams, and agencies. I help businesses turn ideas into production-ready digital products using React Native, React.js, Next.js, Node.js, Firebase, AWS, and AI-powered tools. Over the years, I've delivered 40+ live applications across healthcare, social networking, fintech, ERP, e-commerce, and mobility platforms.",
    initials: "RS",
    stats: {
      years: "6+",
      apps: "40+",
      storeApps: "10+",
      companies: "5+",
    },
    strengths: [
      {
        icon: "Smartphone",
        title: "Mobile & Cross-Platform",
        description: "React Native, Expo, iOS & Android",
      },
      {
        icon: "Monitor",
        title: "Web & Frontend",
        description: "React, Next.js, Tailwind CSS",
      },
      {
        icon: "Server",
        title: "Backend & APIs",
        description: "Node.js, Express",
      },
      {
        icon: "Cloud",
        title: "Cloud & DevOps",
        description: "Firebase, CI/CD",
      },
      {
        icon: "Bot",
        title: "AI & Automation",
        description: "OpenAI, Claude, Gemini APIs",
      },
      {
        icon: "Package",
        title: "Product Delivery",
        description: "End-to-end app development",
      },
    ],
  },

  // ============================================
  // SKILLS SECTION
  // ============================================
  skills: [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Mobile",
      items: [
        "React Native (Expert)",
        "Expo",
        "React Navigation",
        "Redux",
        "Zustand",
        "AsyncStorage",
        "Hermes",
        "CodePush",
        "Deep Linking",
      ],
    },
    {
      category: "Web",
      items: ["React.js", "Next.js (SSR/SSG)", "Tailwind CSS", "Bootstrap", "SEO Optimization"],
    },
    {
      category: "Backend & APIs",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Firebase",
        "Socket.io",
        "WebRTC",
        "PubNub",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "MongoDB",
        "PostgreSQL",
        "SQLite",
        "Git",
        "GitHub",
        "CI/CD",
        "Vercel",
        "Sentry",
      ],
    },
    {
      category: "Payments",
      items: ["Stripe", "Razorpay", "In-App Purchases (IAP)"],
    },
    {
      category: "AI & Automation",
      items: [
        "OpenAI API",
        "Gemini API",
        "Anthropic Claude",
        "AI Prompt Engineering",
        "Chrome Extensions",
      ],
    },
  ],

  // ============================================
  // WORK EXPERIENCE
  // ============================================
  experience: [
    {
      company: "QubixCode",
      location: "Remote",
      role: "Senior Software Developer & Team Lead",
      period: "Aug 2024 – Present",
      type: "Full-time",
      highlights: [
        "Leading end-to-end development of scalable mobile applications using React Native, Node.js, and Firebase with 99.9% uptime",
        "Managing a team of 5+ developers, conducting 50+ code reviews monthly, and ensuring best practices across 10+ concurrent projects",
        "Designed modular architecture improving development speed by 40% and reducing deployment time from 2 hours to 30 minutes",
        "Integrated OpenAI and Claude APIs into 4 production apps, increasing user engagement by 60% through AI-powered features",
        "Reduced crash rate from 2.5% to 0.3% and improved app performance by 45% through memory optimization and network caching",
        "Collaborated with 15+ clients across US, UK, and India to translate complex business requirements into technical solutions",
        "Delivered 8+ production apps with 50K+ combined downloads across App Store and Play Store, maintaining 4.5+ star ratings",
      ],
      techStack: ["React Native", "Node.js", "Firebase", "AWS", "REST APIs", "OpenAI APIs", "CI/CD"],
      liveLinks: [
        "https://scanzen.app/",
        "https://photofy.app/",
        "https://cardlyx.com/",
        "https://tryfitnow.app/",
      ],
    },
    {
      company: "Cohort Social (Hind Social Pvt. Ltd.)",
      location: "Ahmedabad",
      role: "React Native Developer – Mobile Team Lead",
      period: "Mar 2024 – Jul 2024",
      type: "Full-time · Product",
      highlights: [
        "Developed and maintained large-scale social networking platform serving 500+ active users with live streaming and real-time chat",
        "Implemented performance optimizations reducing app load time by 35% and memory usage by 25%",
        "Built 50+ reusable UI components reducing development time by 30% for new features across iOS and Android",
        "Integrated LiveKit video streaming, Firebase push notifications, and Sentry analytics increasing user session time by 45%",
        "Successfully deployed white-label apps for 3 different clients with custom branding and feature sets",
        "Led mobile team of 3 developers, owned complete App Store and Play Store release cycle with zero failed deployments",
      ],
      techStack: ["React Native", "Next.js", "Firebase", "Socket.io", "LiveKit", "Sentry"],
    },
    {
      company: "AIS Technolabs Pvt. Ltd.",
      location: "Remote",
      role: "Senior React Native Developer",
      period: "Sep 2023 – Feb 2024",
      type: "Full-time",
      highlights: [
        "Led development of enterprise and startup applications from concept to deployment",
        "Built secure authentication systems and payment gateways for fintech and e-commerce platforms",
        "Developed real-time features and data synchronization systems for high-traffic applications",
        "Improved API performance and reduced response time by 40% through caching and optimization",
        "Mentored junior developers and standardized coding practices across the frontend team",
        "Worked on high-traffic platforms including ERP, fintech, and booking systems",
      ],
      techStack: ["React Native", "Next.js", "Node.js", "Firebase", "MongoDB", "Stripe", "REST APIs"],
    },
    {
      company: "Devstree IT Services Pvt. Ltd.",
      location: "Ahmedabad",
      role: "Senior React Native Developer",
      period: "Mar 2022 – Jul 2023",
      type: "Full-time",
      highlights: [
        "Delivered multiple client projects across healthcare, logistics, and social media domains",
        "Designed scalable app architecture supporting future feature expansion and white-labeling",
        "Integrated third-party SDKs and payment systems (Razorpay, Stripe, IAP)",
        "Improved app stability through advanced debugging, monitoring, and performance profiling",
      ],
      techStack: ["React Native", "Firebase", "Node.js", "REST APIs", "Razorpay", "Stripe", "IAP"],
    },
    {
      company: "Keypress IT Services",
      location: "India",
      role: "React Native Developer",
      period: "Sep 2020 – Feb 2022",
      type: "Full-time",
      highlights: [
        "Developed and maintained cross-platform mobile applications for various clients",
        "Implemented core features including authentication, notifications, and real-time data sync",
        "Participated in full development lifecycle from planning to App Store and Play Store deployment",
      ],
      techStack: ["React Native", "JavaScript", "Firebase", "REST APIs"],
    },
  ],

  // ============================================
  // PROJECTS
  // ============================================
  projects: [
    {
      name: "Hind Social",
      category: ["mobile", "web"],
      platforms: ["Android", "iOS", "Web"],
      shortDescription:
        "A cultural social networking platform for Indian communities with 500+ active users. Real-time messaging, live group events, and white-label support.",
      fullDescription:
        "Hind Social is more than just a social networking platform — it is a digital sanctuary for individuals, organizations, and communities who resonate with Indian culture, values, and heritage. Built with the essence of Bharatiyata, features social media video photo posting, real-time chat group, live group event functionality, white-label application.",
      role: "Senior React Native Developer & Mobile Team Lead",
      highlights: [
        "Built complete mobile apps from scratch; led team and owned store releases",
        "Implemented real-time chat, group events, and live streaming using Socket.io and LiveKit",
        "Optimized performance and fixed production-critical bugs achieving high crash-free sessions",
      ],
      techStack: ["React Native", "Firebase", "Socket.io", "Node.js", "LiveKit", "Sentry"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=in.com.hindsocial",
        appStore: "https://apps.apple.com/in/app/hind-social/id6747740317",
      },
      featured: true,
    },
    {
      name: "SurgeOn – Surgery Unified",
      category: ["mobile"],
      platforms: ["Android", "iOS"],
      shortDescription:
        "A private, encrypted social media platform connecting surgeons worldwide for knowledge sharing, networking, and medical content collaboration.",
      fullDescription:
        "SurgeOn connects surgeons from all subspecialties worldwide to help them learn, network, and share knowledge using a purpose-built, private, and fully encrypted social media platform. Features real-time messaging, medical content sharing, live streaming, and seamless user experience.",
      role: "Senior React Native Developer",
      highlights: [
        "Built stable, secure mobile app with real-time messaging and encrypted medical content sharing",
        "Implemented live streaming and managed App Store/Play Store deployments with rigorous QA",
      ],
      techStack: ["React Native", "Firebase", "Socket.io", "Node.js", "PubNub"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.surgeon",
        appStore: "https://apps.apple.com/us/app/surgeon-surgery-unified/id1524410956",
      },
      featured: true,
    },
    {
      name: "ScanZen.app",
      category: ["web", "ai"],
      platforms: ["Web"],
      shortDescription:
        "An AI-powered SaaS product scanner with OpenAI integration, payment processing, SEO optimization, and analytics dashboard.",
      fullDescription:
        "ScanZen is an AI-powered SaaS product scanner application with OpenAI integration, Stripe payment processing, SEO optimization, sitemap generation, and analytics dashboard. Built as a solo full-stack project from scratch.",
      role: "Full Stack Developer – Solo Owner",
      highlights: [
        "Designed and built complete UI/UX and full-stack architecture as sole developer",
        "Integrated OpenAI APIs for AI-powered scanning, Stripe payments, analytics, and SEO",
      ],
      techStack: ["Next.js", "TypeScript", "OpenAI API", "Stripe", "Vercel"],
      links: {
        live: "https://scanzen.app",
      },
      featured: true,
    },
    {
      name: "Odoo Community Mobile App",
      category: ["mobile"],
      platforms: ["Android", "iOS"],
      shortDescription:
        "Feature-rich ERP mobile app for Odoo users. Recognized among Top 5 Most Popular Odoo Apps with push notifications, custom branding, and geolocation.",
      role: "React Native Developer",
      highlights: [
        "Built real-time data access, push notifications, and customizable branding features",
        "Achieved Top 5 Most Popular ranking in the Odoo app ecosystem",
      ],
      techStack: ["React Native", "Firebase", "Odoo API"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.kits.odoo_mobile_app",
        appStore: "https://apps.apple.com/us/app/odoo-community-mobile-app/id1612801192",
      },
      featured: true,
    },
    {
      name: "GAuto Drive",
      category: ["mobile"],
      platforms: ["Android", "iOS"],
      shortDescription:
        "Ride-hailing app with real-time matching, live tracking, Razorpay payments, and in-app chat across multiple Indian cities.",
      fullDescription:
        "GAuto Drive is a comprehensive ride-hailing platform that connects drivers and passengers across multiple Indian cities. The app features real-time GPS tracking, dynamic pricing algorithms, secure payment processing through Razorpay, and seamless in-app communication. Built with scalable architecture to handle high traffic and real-time location updates with optimized battery usage.",
      role: "React Native Developer",
      highlights: [
        "Implemented real-time GPS tracking with optimized battery consumption",
        "Built dynamic fare calculation system with distance and time-based pricing",
        "Integrated Razorpay payment gateway with wallet and UPI support",
        "Developed in-app chat system with push notifications for driver-passenger communication",
        "Optimized app performance for handling concurrent ride requests in multiple cities"
      ],
      techStack: ["React Native", "Firebase", "Node.js", "Socket.io", "Google Maps API", "Razorpay"],
      featured: false,
    },
    {
      name: "Jackpot Aruba",
      category: ["web"],
      platforms: ["Web"],
      shortDescription:
        "Online lottery platform with Pick 3/4/5 games, ticket purchasing, and Stripe payment gateway.",
      role: "Frontend Developer",
      techStack: ["Next.js", "Stripe"],
      links: {
        live: "https://jackpotaruba.com/",
      },
      featured: false,
    },
    {
      name: "SatSport News",
      category: ["mobile"],
      platforms: ["Android"],
      shortDescription:
        "Real-time sports news app with live notifications, deep linking, and CricBuzz API integration.",
      fullDescription:
        "SatSport News delivers real-time sports updates and live cricket scores through CricBuzz API integration. The app features push notifications for breaking news, deep linking for content sharing, and offline reading capabilities. Built with performance optimization for handling high-frequency data updates during live matches.",
      role: "React Native Developer",
      highlights: [
        "Integrated CricBuzz API for live cricket scores and real-time match updates",
        "Implemented smart push notification system with user preference settings",
        "Built deep linking architecture for seamless content sharing across platforms",
        "Developed offline reading mode with local data caching for poor network conditions",
        "Optimized app performance for handling frequent data updates during live sports events"
      ],
      techStack: ["React Native", "Firebase", "Deep Linking", "Socket.io", "CricBuzz API"],
      featured: false,
    },
    {
      name: "Hyypp",
      category: ["mobile"],
      platforms: ["Android", "iOS"],
      shortDescription:
        "Brand-influencer matching platform with social media insights, follower analytics, and OAuth authentication.",
      fullDescription:
        "Hyypp is an innovative platform that connects brands with relevant influencers through advanced matching algorithms. The app analyzes social media metrics, engagement rates, and audience demographics to suggest optimal brand-influencer partnerships. Features include campaign management, performance tracking, and secure payment processing.",
      role: "React Native Developer",
      highlights: [
        "Built influencer discovery system with advanced filtering by niche, engagement, and audience demographics",
        "Integrated OAuth authentication for Instagram, TikTok, and YouTube API access",
        "Developed analytics dashboard showing engagement rates, reach metrics, and audience insights",
        "Implemented campaign management system with milestone tracking and automated payments",
        "Created matching algorithm to suggest optimal brand-influencer partnerships based on compatibility scores"
      ],
      techStack: ["React Native", "Firebase", "OAuth", "Social Media APIs", "Analytics"],
      featured: false,
    },
    {
      name: "Master Charge",
      category: ["mobile"],
      platforms: ["Android", "iOS"],
      shortDescription:
        "Find nearby charging stations for phones, laptops, and electronic devices with real-time availability.",
      role: "React Native Developer",
      techStack: ["React Native Expo", "Firebase", "OAuth"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=uk.co.mastercharge.station",
        appStore: "https://apps.apple.com/in/app/mastercharge-ltd/id1672741927",
      },
      featured: false,
    },
    {
      name: "Avira Gold",
      category: ["mobile"],
      platforms: ["Android"],
      shortDescription:
        "Jewellery e-commerce app with catalogue, custom filters, Razorpay payments, and invoice generation.",
      role: "React Native Developer",
      techStack: ["React Native", "Firebase", "Razorpay"],
      featured: false,
    },
    {
      name: "Photofy.app",
      category: ["web"],
      platforms: ["Web"],
      shortDescription: "Creative media application with AI-enhanced photo features.",
      role: "Frontend Developer",
      techStack: ["Next.js", "React.js"],
      links: {
        live: "https://photofy.app/",
      },
      featured: false,
    },
    {
      name: "Cardlyx.com",
      category: ["web"],
      platforms: ["Web"],
      shortDescription: "Digital card creation and sharing platform.",
      role: "Frontend Developer",
      techStack: ["Next.js", "React.js"],
      links: {
        live: "https://cardlyx.com/",
      },
      featured: false,
    },
    {
      name: "TryFitNow.app",
      category: ["web", "ai"],
      platforms: ["Web"],
      shortDescription: "Virtual try-on application for clothing and accessories using AI.",
      role: "Full Stack Developer",
      techStack: ["Next.js", "AI APIs"],
      links: {
        live: "https://tryfitnow.app/",
      },
      featured: false,
    },
  ],

  // ============================================
  // CERTIFICATIONS
  // ============================================
  certifications: [
    {
      name: "Build a Web App with React and Firebase",
      provider: "Udemy",
      link: "https://ude.my/UC-46403c3f-bc9a-4e87-8f41-b37d6ed8c21f/",
    },
    {
      name: "Web Design for Web Developers",
      provider: "Udemy",
      link: "https://ude.my/UC-71945a6a-99e9-418e-9a28-02eaa47870b1/",
    },
    {
      name: "The Complete JavaScript Course 2020",
      provider: "Udemy",
      link: "https://ude.my/UC-d18b7b80-07aa-4137-9f75-175e0a6f2d00/",
    },
    // {
    //   name: "Complete Python Bootcamp",
    //   provider: "Udemy",
    // },
  ],

  // ============================================
  // CONTACT SECTION
  // ============================================
  contact: {
    heading: "Let's Work Together",
    subtitle:
      "Open to remote roles, contract work, and long-term collaborations. Message me to discuss your project or opportunity.",
    email: "rajansavaliyawork@gmail.com",
    phone: "+91 6354701809",
    github: "https://github.com/Rajan-Savaliya",
    linkedin: "https://www.linkedin.com/in/rajansavaliya/",
    formAction: "", // Add Formspree/EmailJS URL here, or leave empty for mailto fallback
  },
};

export default portfolioData;
