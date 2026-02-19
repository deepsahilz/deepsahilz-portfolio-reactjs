export const projects = [
  {
    slug: "iris2026",
    name: "IRIS 2026 Techfest",
    isFeatured: true,
    tagline: "Official techfest website and event management platform",
    description: "Official techfest website and event management platform of GNDU, Amritsar",
    thumbnail: "/images/iris_thumbnail.png",
    concept:
      "IRIS is a full-stack event management platform designed to handle registrations, payments, and administration for a large-scale technical fest, focusing on reliability, speed, and a clean user experience.",
    highlights: [
      {
        text: "Dynamic event listing and detailed event pages",
        imgSrc: "/images/iris_thumbnail.png",
        vidSrc: "/videos/iris-walkthrough.mp4",
      },
    ],
    features: [
      "User authentication and protected routes",
      "Event registration with team size validation",
      "UPI QR + Razorpay payment flow",
      "Ticket generation with unique ticket ID",
      "Admin panel for event CRUD",
      "Responsive and minimal UI",
    ],
    stack: ["Next.js", "Supabase", "Full Stack"],
    liveUrl: "https://iris2026.example.com",
    type: "webapp",
  },

  {
    slug: "quickdesk",
    name: "QuickDesk",
    isFeatured: false,
    tagline: "Ticket raising platform",
    description: "A platform for users to raise and manage support tickets efficiently.",
    thumbnail: "/images/quickdesk_thumbnail.png",
    concept: "This project was created as a part of a hackathon organized by odoo X cgc group of colleges. It is a web app that simplifies ticket management for businesses. Packed with clear UI and transparent ticket tracking experience.",
    highlights: [
      { text: "Platform walkthrough", imgSrc: "/images/quickdesk_thumbnail.png", vidSrc: "/videos/quickdesk-walkthrough.mp4" },
    ],
    features: ["Ticket creation", "Status tracking", "Responsive dashboard"],
    stack: ["Nextjs", "Typescript", "PostgreSql","Clerk","Full stack"],
    liveUrl: "https://quickdesk.vercel.app",
    type: "webapp",
  },

  {
    slug: "kreativkid",
    name: "KreativKid",
    isFeatured: true,
    tagline: "Portfolio website for an artist",
    description: "Portfolio website for an artist",
    thumbnail: "/images/kreativkid.png",
    concept:
      "KreativKid is a portfolio website designed to highlight an artist’s creativity through a clean and expressive layout, blending bold visuals and smooth interactions.",
    highlights: [
      {
        text: "Interactive hero section and home page",
        imgSrc: "/images/kreativkid.png",
        vidSrc: "/videos/kreativkid1.mp4",
      },
      {
        text: "Dynamic Gallery with Before-After Image Comparison",
        imgSrc: "/images/kreativkid_work.png",
        vidSrc: "/videos/kreativkid2.mp4",
      },
    ],
    features: [
      "Animated transitions between sections",
      "Responsive and modern layout",
      "Emphasis on visuals with minimal UI distractions",
    ],
    stack: ["React.js", "GSAP","Frontend"],
    liveUrl: "https://kreativkid.example.com",
    type: "website",
  },

  {
    slug: "codexa",
    name: "Codexa",
    isFeatured: true,
    tagline: "Project sharing social media platform",
    description: "Project sharing social media platform",
    thumbnail: "/images/codexa_ss1.jpg",
    concept:
      "Codexa is created to provide a social platform to developers, students, and tech geeks to showcase their projects and learn from others, avoiding the hassle to find inspiration.",
    highlights: [
      {
        text: "Advance SearchBar with history and suggestions",
        imgSrc: "/images/codexa_ss1.jpg",
        vidSrc: "/videos/codexa_searchbar.mp4",
      },
      {
        text: "Comment section with nested replies and likes",
        imgSrc: "/images/codexa_comments.png",
        vidSrc: "/videos/codexa_comments.mp4",
      },
    ],
    features: [
      "Smart search with history and suggestions",
      "Project showcase with image/video previews",
      "Commenting and feedback on projects",
      "Tag-based project categorization and filtering",
      "Like, save, and follow functionality",
      "Add collaborator feature for working teams",
    ],
    stack: ["React.js", "Express.js", "WebSockets", "MongoDB"],
    liveUrl: "https://codexa.example.com",
    type: "webapp",
  },

  {
    slug: "mysqlCompass",
    name: "MySQL Compass",
    isFeatured: false,
    tagline: "GUI tool for managing MySQL databases",
    description: "GUI tool for managing and visualizing MySQL databases",
    thumbnail: "/images/compass_thumbnail.png",
    concept:
      "Inspired by MongoDB Compass, this tool offers an intuitive interface to visualize, edit, and manage MySQL data efficiently with user-friendly features.",
    highlights: [
      {
        text: "Visual database explorer",
        imgSrc: "/images/compass_thumbnail.png",
        vidSrc: "/videos/mysql1.mp4",
      },
    ],
    features: [
      "Smart table viewer with auto row expansion",
      "Edit cells directly or via modals",
      "Search and filter data easily with history",
    ],
    stack: ["React", "Tailwind", "Node.js", "MySQL"],
    isPending: true,
    liveUrl: "https://mysqlcompass.example.com",
    type: "desktop app",
  },


  // --- New Projects ---
  {
    slug: "ochi-clone",
    name: "Ochi Clone",
    isFeatured: false,
    tagline: "Clone of Ochi.design",
    description: "A faithful clone of the actual ochi.design site.",
    thumbnail: "/images/ochi_thumbnail.png",
    concept: "Cloned to learn layout, interactions, and animations from Ochi.design.",
    highlights: [
      { text: "Landing page walkthrough", imgSrc: "/images/ochi_thumbnail.png", vidSrc: "/videos/ochi-walkthrough.mp4" },
    ],
    features: ["Responsive layout", "Animated components", "Clean UI replication"],
    stack: ["React.js", "TailwindCSS","Framer Motion"],
    liveUrl: "https://deepxochi.netlify.app",
    type: "website",
  },
  {
    slug: "rejouice-clone",
    name: "Rejouice Clone",
    isFeatured: false,
    tagline: "Clone of Rejouice site",
    description: "Cloned site to mimic Rejouice functionality and style.",
    thumbnail: "/images/rejouice_thumbnail.png",
    concept: "Learning design replication and interactive elements from Rejouice.",
    highlights: [
      { text: "Landing page walkthrough", imgSrc: "/images/rejouice_thumbnail.png", vidSrc: "/videos/rejouice-walkthrough.mp4" },
    ],
    features: ["Landing page replication", "Hover interactions", "Responsive UI","Optimized image and video load"],
    stack: ["React.js", "TailwindCSS","Framer motion"],
    liveUrl: "https://deepxrejouice.netlify.app",
    type: "website",
  },
  {
    slug: "brainwave",
    name: "Brainwave Landing Page",
    isFeatured: false,
    tagline: "Landing page for Brainwave application",
    description: "Designed a clean and minimal landing page for Brainwave platform.",
    thumbnail: "/images/brainwave_thumbnail.png",
    concept: "Focus on conversions and clear messaging for AI service.",
    highlights: [
      { text: "Landing page hero section", imgSrc: "/images/brainwave_thumbnail.png", vidSrc: "/videos/brainwave-walkthrough.mp4" },
    ],
    features: ["Responsive hero", "CTA buttons", "Simple and clean layout"],
    stack: ["React.js", "TailwindCSS"],
    liveUrl: "https://deepxbrainwave.netlify.app",
    type: "webapp",
  },
  
];
