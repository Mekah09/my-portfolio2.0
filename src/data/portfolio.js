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
import nookImage from "../assets/images/nook.webp";
import recipesImage from "../assets/images/recepies.webp";
import eeImage from "../assets/images/EE.webp";

export const profile = {
  name: "Abdulhakeem Adesola Zakariyau",
  nickname: "MekahTheDev",
  role: "Full-stack web developer",
  email: "zakariyauabdulhakeem32@gmail.com",
  phone: "+2349053618574", 
  location: "Osogbo, Osun State, Nigeria",
  github: "https://github.com/Mekah09",
  socials: {
    github: "https://github.com/Mekah09",
    linkedin: "",
    x: "https://x.com/hakeemzakariyau?s=11",
    facebook: "",
    whatsapp: " https://wa.me/2349053618574",
  },
  summary:
    "Full-stack web developer building responsive interfaces and practical backend systems. I work with HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Node.js, Express.js, and MongoDB, with Git and GitHub at the heart of my workflow. I also apply SEO skills to build discoverable web experiences.",
};

export const projects = [
  {
    id: "1",
    name: "Nook",
    type: "Full-stack e-commerce",
    isConcept: false,
    description: "A full-stack e-commerce website with buyer and seller login.",
    liveUrl: "https://nook-pearl-six.vercel.app",
    stack: ["reactjs", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    images: [{ src:nookImage }],
  },
  {
    id: "2",
    name: "AKS Recipes",
    type: "Frontend recipe app",
    isConcept: false,
    description: "A recipe app built with React.js and Tailwind CSS, allowing users to search for recipes and view details, including ingredients and instructions, got the recipes from dummyjson.com.",
    liveUrl: "https://aks-recipes.vercel.app",
    stack: ["React.js", "Tailwind CSS"],
    images: [{
      src: recipesImage,
    }],
  },
    {
    id: "3",
    name: "Everyday Elegance",
    type: "Frontend e-commerce website",
    isConcept: false,
    description: "A responsive e-commerce website built with HTML5, Tailwind CSS, and Javascript allowing users to browse products, add items to the cart, and proceed to checkout, got the products from dummyjson.com.",
    liveUrl: "https://aks-recipes.vercel.app",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    images: [{
      src: eeImage,
    }],
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
