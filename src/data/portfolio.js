import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FiSearch } from "react-icons/fi";

// Edit your public details here. Empty contact fields are never replaced with fake data.
export const profile = {
  name: "Abdulhakeem Adesola Zakariyau",
  nickname: "MekahTheDev", // Replace this with your preferred nickname.
  role: "Full-stack web developer",
  email: "", // e.g. your public contact email
  phone: "", // Include a country code, e.g. +234…; also enables the phone link.
  location: "",
  github: "https://github.com/Mekah09",
  socials: {
    github: "https://github.com/Mekah09",
    linkedin: "",
    x: "",
    facebook: "",
    whatsapp: "", // https://wa.me/<country-code-and-number>, or derived from phone.
  },
  summary:
    "Full-stack web developer building responsive interfaces and practical backend systems. I work with HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Node.js, Express.js, and MongoDB, with Git and GitHub at the heart of my workflow. I also apply SEO skills to build discoverable web experiences.",
};

// Add projects here with a brief description, live-demo URL, and real website screenshots.
// images: [{ src: "/projects/nook/storefront.webp", alt: "Nook storefront", caption: "Storefront" }]
export const projects = [
  {
    id: "nook",
    name: "Nook",
    type: "Full-stack e-commerce",
    isConcept: false,
    description: "A full-stack e-commerce website with buyer and seller login.",
    liveUrl: "https://nook-pearl-six.vercel.app",
    stack: [],
    // Real site screenshots will be added when the environment can access the domain.
    images: [],
  },
];

export const skills = [
  {
    name: "HTML",
    Icon: SiHtml5,
    detail: "Accessible, semantic foundations.",
    category: "FRONTEND",
  },
  {
    name: "CSS",
    Icon: SiCss,
    detail: "Responsive layouts, down to the detail.",
    category: "STYLING",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    detail: "Interactions with purpose.",
    category: "LANGUAGE",
    featured: true,
  },
  {
    name: "React.js",
    Icon: SiReact,
    detail: "Reusable components. Intuitive interfaces.",
    category: "FRONTEND",
    featured: true,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    detail: "Custom interfaces, built with care.",
    category: "STYLING",
    featured: true,
  },
  {
    name: "Bootstrap",
    Icon: SiBootstrap,
    detail: "Flexible, consistent web experiences.",
    category: "STYLING",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    detail: "The engine behind the experience.",
    category: "BACKEND",
    featured: true,
  },
  {
    name: "Express.js",
    Icon: SiExpress,
    detail: "Clear routes. Practical APIs.",
    category: "BACKEND",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    detail: "Flexible data for growing ideas.",
    category: "DATABASE",
    featured: true,
  },
  {
    name: "Git",
    Icon: SiGit,
    detail: "Every change, thoughtfully tracked.",
    category: "WORKFLOW",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    detail: "A home for code and collaboration.",
    category: "WORKFLOW",
    featured: true,
  },
  {
    name: "SEO",
    Icon: FiSearch,
    detail: "Websites built to be discovered.",
    category: "SEO",
  },
];
