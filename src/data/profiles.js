import rachanaImg from "../assets/Rachana.png";
import dipImg from "../assets/dip.png";
import shusilImg from "../assets/shusil.png";
import biplavImg from "../assets/biplav.png";
import kamalImg from "../assets/kamal.png";
import kumarImg from "../assets/kumar.png";
import ganeshImg from "../assets/ganesh.png";
import mamataImg from "../assets/mamata.png";


export const profiles = {
  rachana: {
    username: "rachana",
    name: "Rachana Mandal",
    roles: ["Frontend Web Developer", "Photographer", "Graphic Designer"],
    description:
      "Creative Frontend Developer passionate about building modern, responsive, and engaging web experiences.",
    subtitle: "Who am I?",
    image: rachanaImg,
    cv: "/cv/rachana.pdf",
    about: [
      "Hello! I'm Rachana Mandal, a creative Frontend Web Developer, Photographer, and Graphic Designer.",
      "I love transforming ideas into stunning and interactive digital experiences.",
      "My goal is to continuously learn, grow, and deliver high-quality digital solutions."
    ],
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Photoshop", level: 70 },
      { name: "Graphic Design", level: 75 }
    ],
    portfolio: [
      {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with React.",
        image: "/portfolio/rachana-portfolio.jpg"
      },
      {
        title: "E-commerce Website",
        description: "An online store with shopping cart and product management.",
        image: "/portfolio/rachana-ecommerce.jpg"
      }
    ],
    contact: {
      location: "Nepal",
      email: "rachanamandal100@email.com",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        email: "mailto:rachanamandal100@email.com"
      }
    }
  },

  dipprakash: {
    username: "dipprakash",
    name: "Dip Prakash",
    roles: ["Videographer", "Photographer", "Editor"],
    description:
      "Professional videographer and photographer with a strong passion for cinematic storytelling. I specialize in capturing moments and transforming them into visually powerful content that connects emotionally with the audience. My focus is on quality, creativity, and storytelling through every frame.",
    subtitle: "Who am I?",
    image: dipImg,
    cv: "/cv/dip.pdf",
    about: [
      "Hello! I'm Dip Prakash, a creative Videographer, Photographer, and Editor.",
      "I love capturing stories through cinematic video and expressive photography.",
      "My goal is to create visually powerful content that connects emotionally."
    ],
    skills: [
      { name: "Video Editing", level: 90 },
      { name: "Photography", level: 85 },
      { name: "Premiere Pro", level: 80 },
      { name: "After Effects", level: 75 },
      { name: "Lightroom", level: 70 },
      { name: "Creative Direction", level: 75 }
    ],
    portfolio: [
      {
        title: "Wedding Cinematic Film",
        description: "Complete wedding video shoot and cinematic edit.",
        image: "/portfolio/dip-wedding.jpg"
      }
    ],
    contact: {
      location: "Nepal",
      email: "dipprakash@email.com",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        email: "mailto:dipprakash@email.com"
      }
    }
  },

  shusil: {
    username: "shusil",
    name: "Shushil Bandari",
    roles: ["Videographer", "Video Editor", "Photo Editor", "Graphic Designer"],
    description:
      "Creative visual artist specializing in videography, video editing, photo editing, and graphic design. Passionate about storytelling through powerful visuals.",
    subtitle: "Who am I?",
    image: shusilImg, 
    cv: "/cv/shusil.pdf",
    about: [
      "Hello! I'm Shusil Bandari, a creative Videographer, Video Editor, Photo Editor, and Graphic Designer.",
      "I love turning raw footage and images into compelling visual stories.",
      "My goal is to create high-quality, impactful visuals that engage and inspire audiences."
    ],
    skills: [
      { name: "Videography", level: 90 },
      { name: "Video Editing", level: 88 },
      { name: "Photo Editing", level: 85 },
      { name: "Graphic Design", level: 80 },
      { name: "Premiere Pro", level: 85 },
      { name: "After Effects", level: 80 },
      { name: "Photoshop", level: 82 },
      { name: "Lightroom", level: 78 }
    ],
    portfolio: [
      {
        title: "Cinematic Short Film",
        description: "A cinematic short film with professional color grading and storytelling.",
        image: "/portfolio/shusil-film.jpg"
      },
      {
        title: "Social Media Promo Video",
        description: "High-engagement promotional video created for social media platforms.",
        image: "/portfolio/shusil-promo.jpg"
      },
      {
        title: "Photo Editing Collection",
        description: "Before-and-after photo retouching and color correction work.",
        image: "/portfolio/shusil-photo.jpg"
      },
      {
        title: "Graphic Design Showcase",
        description: "Creative posters, banners, and branding designs.",
        image: "/portfolio/shusil-graphics.jpg"
      }
    ],
    contact: {
      location: "Nepal",
      email: "shusilbandari@email.com",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        email: "mailto:shusilbandari@email.com"
      }
    }
  },
   biplav: {
    username: "biplav",
    name: "Biplav Thapa",

    // Roles required for Profile.jsx
    roles: ["Full Stack Developer", "Frontend Developer", "Backend Developer"],

    description:
      "Passionate Full Stack Developer skilled in building scalable and efficient web applications with modern technologies.",

    subtitle: "Who am I?",
    image: biplavImg,
    cv: "/cv/biplav.pdf",

    about: [
      "Hello! I'm Biplav Thapa, a Full Stack Developer from Sindhuli-Ratamata.",
      "I enjoy creating efficient and responsive web applications using modern web technologies.",
      "My goal is to continuously learn, grow, and deliver high-quality digital solutions."
    ],

    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 }
    ],

    portfolio: [
      {
        title: "E-commerce Web App",
        description: "A modern e-commerce platform with full shopping cart and user management.",
        image: "/portfolio/biplav-ecommerce.jpg"
      },
      {
        title: "Task Management App",
        description: "A full stack task manager for organizing projects and tasks.",
        image: "/portfolio/biplav-taskapp.jpg"
      }
    ],

    contact: {
      location: "Sindhuli-Ratamata, Nepal",
      email: "biplavthapa@email.com",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        email: "mailto:biplavthapa@email.com"
      }
    }
  },
   kamal: {
    username: "kamal",
    name: "Kamal Bayalkoti",

    roles: [
      "Graphic Designer",
      "Photo Editor",
      "Content Creator",
      "Office Manager"
    ],

    description:
      "Creative designer and content creator, managing office operations and delivering high-quality visual content.",

    subtitle: "Who am I?",
    image: kamalImg,
    cv: "/cv/kamal.pdf",

    about: [
      "Hello! I'm Kamal Bayalkoti, a passionate Graphic Designer and Photo Editor.",
      "I also create engaging content and manage office operations at NLT Production Office.",
      "My goal is to support the team with creative visuals and smooth office workflows."
    ],

    skills: [
      { name: "Graphic Design", level: 85 },
      { name: "Photo Editing", level: 80 },
      { name: "Content Creation", level: 75 },
      { name: "Office Management", level: 70 },
      { name: "Photoshop", level: 82 },
      { name: "Illustrator", level: 80 }
    ],

    portfolio: [
      {
        title: "Branding Design",
        description: "Logo and branding materials designed for clients.",
        image: "/portfolio/kamal-branding.jpg"
      },
      {
        title: "Content Graphics",
        description: "Social media and marketing graphics.",
        image: "/portfolio/kamal-content.jpg"
      }
    ],

    contact: {
      location: "Sindhuli, Nepal",
      email: "kamalbayalkoti@email.com",
      social: {
        github: "#",
        linkedin: "#",
        instagram: "#",
        email: "mailto:kamalbayalkoti@email.com"
      }
    }
  },
   kumar: {
    username: "kumar",
    name: "Kumar Dulal",

    roles: [
      "Founder & CEO – NLT Productions",
      "Senior IT Professional",
      "Content Creator",
      "Educator"
    ],

    description:
      "Founder and CEO of NLT Productions with strong expertise in software development, digital media production, and IT education. Leading creative and technical teams while contributing to academic institutions.",

    subtitle: "Who am I?",

    image: kumarImg,
    cv: "/cv/kumar-dulal.pdf",

    about: [
      "Hello! I'm Kumar Dulal, Founder and CEO of NLT Productions and a senior IT professional.",
      "I specialize in software development, digital marketing, and complete photo & video production workflows.",
      "Alongside my entrepreneurial journey, I work as an IT faculty member, guiding students and professionals in technology and creative fields.",
      "My vision is to build impactful digital products, support innovation, and lead creative teams with clarity and purpose."
    ],

    skills: [
      { name: "React", level: 70 },
      { name: "React Native", level: 70 },
      { name: "Node.js", level: 70 },
      { name: "SQL", level: 70 },
      { name: "HTML & CSS", level: 75 },
      { name: "Video Production", level: 80 },
      { name: "Digital Marketing", level: 75 },
      { name: "Content Strategy", level: 80 }
    ],

    experience: [
      {
        company: "NLT Productions",
        role: "Founder & CEO / Content Creator",
        duration: "May 2022 – Present",
        industry: "Advertising / Marketing / PR",
        responsibilities: [
          "Managing photo and video production projects",
          "Handling pre-production, shooting, and post-production",
          "Overseeing creative direction and branding",
          "Client communication and project execution"
        ]
      },
      {
        company: "Nepal Leadership Technology Pvt. Ltd.",
        role: "Executive Director",
        duration: "January 2020 – Present",
        industry: "Information Technology (Software)",
        responsibilities: [
          "Providing overall leadership and company direction",
          "Making key corporate decisions",
          "Overseeing software development projects",
          "Supporting team growth and innovation"
        ]
      },
      {
        company: "Sindhuli Community Technical Institute",
        role: "B.Ed. IT Faculty Member",
        duration: "October 2023 – Present",
        industry: "Education / IT",
        responsibilities: [
          "Teaching IT fundamentals and applied technology",
          "Guiding students in practical IT usage"
        ]
      },
      {
        company: "Sindhuli College of Hotel Management",
        role: "IT Assistant",
        duration: "April 2022 – Present",
        industry: "Education / Media",
        responsibilities: [
          "Managing website and social media content",
          "SEO research and implementation",
          "System and software maintenance"
        ]
      }
    ],

    portfolio: [
      {
        title: "Food Delivery & Courier Service App",
        description:
          "A multi-country service application providing food delivery and courier solutions across 40 countries.",
        image: "/portfolio/kumar-food-app.jpg"
      }
    ],

    contact: {
      location: "Sindhuli, Nepal",
      email: "kumar@nltproductions.com",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
        email: "mailto:kumar@nltproductions.com"
      }
    }
  },
  ganesh: {
  username: "ganesh",
  name: "Ganesh Kawaju Shrestha",

  // Clear senior advisory role
  roles: ["Office Technical Advisor", "Senior Full Stack Developer"],

  description:
    "Senior Technical Advisor and Full Stack Developer who guides the organization with strategic technical decisions, system architecture planning, and long-term technology vision to ensure scalable and high-quality solutions.",

  subtitle: "Who am I?",
  image: ganeshImg,
  cv: "/cv/ganesh.pdf",

  about: [
    "Hello! I'm Ganesh Kawaju Shrestha, the Technical Advisor at NLT Production Office.",
    "I guide the team in making sound technical decisions, designing system architectures, and following industry best practices.",
    "My role focuses on mentoring developers, improving code quality, and ensuring that projects are scalable, secure, and future-ready."
  ],

  skills: [
    { name: "Technical Advisory", level: 92 },
    { name: "Full Stack Development", level: 90 },
    { name: "System Architecture", level: 88 },
    { name: "Backend Development", level: 85 },
    { name: "Frontend Development", level: 80 },
    { name: "API Design", level: 82 },
    { name: "Team Mentorship", level: 90 }
  ],

  // Safe for portfolio page
  portfolio: [],

  contact: {
    location: "Nepal",
    email: "ganesh@email.com",
    social: {
      linkedin: "#",
      github: "#"
    }
  }
},
mamata: {
  username: "mamata",
  name: "Mamata Bayalkoti",

  roles: [
    "Office Support Staff",
    "Office Environment & Decor Coordinator",
    "Beauty Makeup Artist"
  ],

  description:
    "Dedicated office support professional responsible for office hospitality management, workspace organization and decoration, and providing professional beauty makeup services for creative and media productions.",

  subtitle: "Who am I?",
  image: mamataImg, // ensure image is imported
  cv: "",

  about: [
    "Hello! I'm Mamata Bayalkoti, a committed member of the NLT Production Office support team.",
    "I contribute to smooth office operations through hospitality coordination, workspace organization, and visual presentation.",
    "In addition, I work as a Beauty Makeup Artist, supporting photo shoots, video productions, and creative media projects."
  ],

  skills: [
    { name: "Office Operations Support", level: 90 },
    { name: "Workspace Decoration & Management", level: 85 },
    { name: "Professional Beauty Makeup", level: 88 },
    { name: "Creative Styling", level: 80 },
    { name: "Team Coordination & Support", level: 92 }
  ],

  portfolio: [
    {
      title: "Makeup & Styling Support for Media Projects",
      description:
        "Provided professional beauty makeup and styling assistance for office-based photo shoots and video production projects.",
      image: "/portfolio/mamata-makeup.jpg"
    }
  ],

  contact: {
    location: "Sindhuli, Nepal",
    email: "",
    social: {}
  }
}


};
