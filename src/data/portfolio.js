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
import { OrbitVisual, FormaVisual } from "../components/ProjectVisuals";

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

// Replace these concept studies with your work. Add as many projects and images as needed.
// Images live in public/projects/ and use a path starting with /projects/.
// images: [{ src: "/projects/my-project/home.jpg", alt: "Descriptive screenshot text", caption: "Homepage on desktop" }]
// Set isConcept: false for completed projects; add real liveUrl/sourceUrl values to show links.
export const projects = [
  {
    id: "orbit",
    name: "Orbit",
    category: "Applications",
    type: "Productivity platform",
    isConcept: true,
    line: "Less busywork. More meaningful work.",
    description:
      "A focused workspace concept that brings projects, tasks, and team conversations into one calm, considered interface.",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    scope: [
      "Product direction",
      "Interface design",
      "Application architecture",
    ],
    challenge:
      "Work gets fragmented across too many tools. Orbit explores how a single, focused dashboard could help a team see what matters and move work forward.",
    approach:
      "A clear project overview, compact task boards, and a restrained visual hierarchy keep the next action in focus. The proposed full-stack build combines a responsive JavaScript interface with a Node.js and Express.js API and MongoDB for project data.",
    features: [
      "A single overview of active projects and priorities",
      "Task boards organized around a team's workflow",
      "Responsive layouts for everyday devices",
    ],
    images: [
      {
        src: "/projects/orbit/overview.svg",
        alt: "Orbit concept illustration showing a project workspace and task boards",
        caption: "Workspace overview — concept illustration",
      },
      {
        src: "/projects/orbit/detail.svg",
        alt: "A closer look at the Orbit concept project dashboard",
        caption: "Project board details — concept illustration",
      },
    ],
    liveUrl: "",
    sourceUrl: "",
    outcome: "",
    Visual: OrbitVisual,
  },
  {
    id: "forma",
    name: "Forma",
    category: "Web experiences",
    type: "E-commerce experience",
    isConcept: true,
    line: "Considered objects. Effortless discovery.",
    description:
      "An editorial storefront concept for everyday objects, balancing a warm visual identity with a clear path from discovery to purchase.",
    stack: ["JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    scope: ["Art direction", "Responsive storefront", "Shopping experience"],
    challenge:
      "Online shopping can feel noisy and impersonal. Forma imagines a quieter storefront where thoughtful objects and clear product information take the lead.",
    approach:
      "Generous space, an earthy palette, and an editorial product layout create a more considered browsing experience. The proposed build includes product discovery, a persistent cart, and a Node.js, Express.js, and MongoDB backend.",
    features: [
      "Editorial product discovery and detailed product pages",
      "A consistent experience across mobile and desktop",
      "A considered cart and checkout flow",
    ],
    images: [
      {
        src: "/projects/forma/overview.svg",
        alt: "Forma concept illustration showing a furniture storefront",
        caption: "Storefront overview — concept illustration",
      },
      {
        src: "/projects/forma/detail.svg",
        alt: "A closer look at the Forma concept editorial product layout",
        caption: "Editorial product details — concept illustration",
      },
    ],
    liveUrl: "",
    sourceUrl: "",
    outcome: "",
    Visual: FormaVisual,
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
