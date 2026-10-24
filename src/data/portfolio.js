import {
  SiGit,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { OrbitVisual, FormaVisual } from "../components/ProjectVisuals";

// Personalize your name, public contact details, and links here.
export const profile = {
  name: "Mekah",
  github: "https://github.com/Mekah09",
  email: "", // Add your public email to enable direct email contact.
};

// Replace these illustrative concepts with your own projects and case studies.
export const projects = [
  {
    id: "orbit",
    name: "Orbit",
    category: "Applications",
    type: "Productivity platform",
    line: "Less busywork. More meaningful work.",
    description:
      "A focused workspace concept that brings projects, tasks, and team conversations into one calm, considered interface.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    scope: [
      "Product direction",
      "Interface design",
      "Application architecture",
    ],
    challenge:
      "Work gets fragmented across too many tools. Orbit explores how a single, focused dashboard could help a team see what matters and move work forward.",
    approach:
      "A clear project overview, compact task boards, and a restrained visual hierarchy keep the next action in focus. The proposed architecture pairs a React interface with a Node.js API and relational data model.",
    Visual: OrbitVisual,
  },
  {
    id: "forma",
    name: "Forma",
    category: "Web experiences",
    type: "E-commerce experience",
    line: "Considered objects. Effortless discovery.",
    description:
      "An editorial storefront concept for everyday objects, balancing a warm visual identity with a clear path from discovery to purchase.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    scope: ["Art direction", "Responsive storefront", "Shopping experience"],
    challenge:
      "Online shopping can feel noisy and impersonal. Forma imagines a quieter storefront where thoughtful objects and clear product information take the lead.",
    approach:
      "Generous space, an earthy palette, and an editorial product layout create a more considered browsing experience. The proposed build includes accessible product discovery, a persistent cart, and a secure checkout integration.",
    Visual: FormaVisual,
  },
];

export const skills = [
  {
    name: "React",
    Icon: SiReact,
    detail: "Interfaces that feel intuitive.",
    category: "FRONTEND",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    detail: "Clarity at every layer.",
    category: "LANGUAGE",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    detail: "The engine behind the experience.",
    category: "BACKEND",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    detail: "Thoughtful, responsive details.",
    category: "STYLING",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    detail: "A reliable home for your data.",
    category: "DATABASE",
  },
  {
    name: "Git",
    Icon: SiGit,
    detail: "Better work, built together.",
    category: "WORKFLOW",
  },
];
