export const projects = [
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
  },

  {
    slug: "mysqlCompass",
    name: "MySQL Compass",
    isFeatured: false,
    tagline: "GUI tool for managing MySQL databases",
    description: "GUI tool for managing and visualizing MySQL databases",
    thumbnail: "/images/compass2.png",
    concept:
      "Inspired by MongoDB Compass, this tool offers an intuitive interface to visualize, edit, and manage MySQL data efficiently with user-friendly features.",
    highlights: [
      {
        text: "Visual database explorer",
        imgSrc: "/images/compass2.png",
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
    stack: ["React.js", "GSAP"],
  },

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
  },
];
