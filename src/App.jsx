import { useEffect, useRef, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiGithub,
  FiLayers,
  FiMenu,
  FiX,
} from "react-icons/fi";
import HeroScene from "./components/HeroScene";
import { profile, projects, skills } from "./data/portfolio";

function Asterisk({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 3v58M3 32h58M11.5 11.5l41 41m0-41-41 41"
        stroke="currentColor"
        strokeWidth="10"
      />
    </svg>
  );
}

function SectionLabel({ number, children, light = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] ${light ? "text-white/55" : "text-muted"}`}
    >
      <span className={light ? "text-lilac" : "text-accent"}>{number}</span>
      <span className={`h-px w-7 ${light ? "bg-white/20" : "bg-ink/20"}`} />
      {children}
    </p>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    dialogRef.current.showModal();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      aria-labelledby="project-title"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border border-line bg-canvas p-0 text-ink shadow-2xl backdrop:bg-[#1f1d27]/60 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-canvas/95 px-6 py-4 backdrop-blur-md sm:px-9">
        <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-muted">
          A closer look / concept study
        </span>
        <button
          autoFocus
          onClick={() => dialogRef.current.close()}
          className="grid size-10 place-items-center rounded-full border border-line transition hover:bg-white"
          aria-label="Close project details"
        >
          <FiX aria-hidden="true" size={20} />
        </button>
      </div>
      <div className="p-6 sm:p-9">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs text-accent">{project.type}</p>
            <h2
              id="project-title"
              className="text-5xl font-medium tracking-[-.055em]"
            >
              {project.name}
              <span className="text-accent">.</span>
            </h2>
          </div>
          <span className="rounded-full border border-line px-3 py-1 text-[10px] text-muted">
            Independent concept
          </span>
        </div>
        <project.Visual />
        <p className="mt-8 text-xl leading-relaxed tracking-tight">
          {project.description}
        </p>
        <div className="my-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="grid gap-7 border-t border-line pt-7 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold">The challenge</h3>
            <p className="text-sm leading-7 text-muted">{project.challenge}</p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">The direction</h3>
            <p className="text-sm leading-7 text-muted">{project.approach}</p>
          </div>
        </div>
        <div className="mt-8 rounded-xl bg-lilac/45 p-5">
          <p className="mb-2 text-xs font-semibold">Concept scope</p>
          <p className="text-sm leading-6 text-muted">
            {project.scope.join(" · ")}. This is an illustrative product study,
            not a live client project.
          </p>
        </div>
      </div>
    </dialog>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All work");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      clearTimeout(copyTimeout.current);
    };
  }, []);

  async function copyContact() {
    try {
      await navigator.clipboard.writeText(profile.email || profile.github);
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = profile.email
        ? `mailto:${profile.email}`
        : profile.github;
    }
  }

  const visibleProjects =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);
  const navigation = [
    ["work", "Work"],
    ["about", "About"],
    ["stack", "Stack"],
  ];

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-ink px-5 py-3 text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur-xl">
        <div className="page-shell flex h-[86px] items-center justify-between gap-5">
          <a
            href="#home"
            aria-label="Mekah home"
            className="flex items-center gap-2.5"
          >
            <Asterisk className="size-7 text-accent" />
            <span className="text-[25px] font-bold tracking-[-.07em]">
              mekah<span className="text-accent">.</span>
            </span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 md:flex"
          >
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                className={`relative py-2 text-[13px] transition hover:text-accent ${activeSection === id ? "text-accent" : "text-muted"}`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-[13px] text-muted transition hover:text-accent"
            >
              Contact <FiArrowUpRight aria-hidden="true" size={14} />
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 rounded-full border border-line bg-white/40 px-3.5 py-2 text-[10px] font-medium tracking-wide sm:flex">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-[#769b67] opacity-45 motion-safe:animate-ping" />
                <span className="relative size-1.5 rounded-full bg-[#769b67]" />
              </span>
              Open to opportunities
            </span>
            <button
              className="grid size-10 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FiX aria-hidden="true" size={20} />
              ) : (
                <FiMenu aria-hidden="true" size={20} />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="border-t border-line bg-canvas px-6 py-4 md:hidden"
          >
            {[...navigation, ["contact", "Contact"]].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-lg last:border-0"
              >
                {label}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main">
        <section id="home" className="page-shell pb-7 pt-14 sm:pt-18 lg:pt-21">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.17em] text-muted">
                <span className="h-px w-6 bg-accent" />
                Developer by craft. Creator at heart.
              </div>
              <h1 className="text-[clamp(50px,7vw,94px)] font-medium leading-[1.06] tracking-[-.065em]">
                Turning ideas
                <br />
                into digital
                <br />
                <span className="font-editorial font-normal italic tracking-[-.045em] text-accent">
                  experiences.
                </span>
                <svg
                  viewBox="0 0 46 46"
                  className="mb-1 ml-3 inline-block size-8 -rotate-12 text-accent sm:size-10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 39 39 6M7 6h32v32"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                </svg>
              </h1>
              <p className="mt-7 max-w-[385px] text-[15px] leading-[1.85] text-muted">
                Hi, I’m{" "}
                <span className="font-semibold text-ink">{profile.name}</span> —
                a full-stack developer connecting thoughtful design with clean
                code. I build for the people on the other side of the screen.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-7">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-6 rounded-full bg-ink py-2.5 pl-6 pr-2.5 text-[12px] font-medium text-white transition hover:bg-accent"
                >
                  Explore my work
                  <span className="grid size-8 place-items-center rounded-full bg-lilac text-ink transition group-hover:rotate-[-35deg]">
                    <FiArrowDown aria-hidden="true" size={16} />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-[12px] font-medium"
                >
                  Let’s talk{" "}
                  <FiArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[540px] pb-2 lg:-mr-3">
              <HeroScene />
            </div>
          </div>
          <div className="mt-12 flex items-center justify-between border-b border-line pb-6 lg:mt-17">
            <a
              href="#work"
              className="flex items-center gap-3 text-[9px] uppercase tracking-[.15em] text-muted"
            >
              <FiArrowDown aria-hidden="true" size={13} /> Scroll to explore
            </a>
            <div className="flex items-center gap-4">
              <span className="hidden text-[9px] uppercase tracking-[.13em] text-muted sm:block">
                A little creativity. A lot of intention.
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted transition hover:text-accent"
                aria-label="Mekah on GitHub (opens in new tab)"
              >
                <FiGithub aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </section>
        <div className="page-shell pb-10 pt-3 sm:pb-16">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
            <p className="shrink-0 text-[9px] font-semibold uppercase leading-5 tracking-[.16em] text-muted">
              The tools behind
              <br className="hidden sm:block" /> the possibilities
            </p>
            <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-6 text-muted">
              {skills.slice(0, 5).map(({ name, Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-[12px] font-medium transition hover:text-accent"
                >
                  <Icon aria-hidden="true" size={21} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section
          id="work"
          className="border-y border-line bg-white/45 py-17 sm:py-22"
        >
          <div className="page-shell">
            <SectionLabel number="01">Selected explorations</SectionLabel>
            <div className="mb-9 mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="section-heading">
                Small details.
                <br />
                <span className="font-editorial font-normal italic text-accent">
                  Big difference.
                </span>
              </h2>
              <p className="max-w-[305px] text-[13px] leading-7 text-muted">
                A collection of ideas brought into focus.
                <br />
                Thoughtfully designed. Built to be useful.
              </p>
            </div>
            <div
              className="mb-8 flex flex-wrap gap-2"
              role="group"
              aria-label="Filter projects"
            >
              {["All work", "Applications", "Web experiences"].map(
                (category) => (
                  <button
                    key={category}
                    aria-pressed={filter === category}
                    onClick={() => setFilter(category)}
                    className={`rounded-full border px-4 py-2 text-[10px] font-medium transition ${filter === category ? "border-ink bg-ink text-white" : "border-line bg-transparent text-muted hover:border-accent hover:text-accent"}`}
                  >
                    {category}
                    <span
                      className={`ml-2 ${filter === category ? "text-white/50" : "text-muted"}`}
                    >
                      {category === "All work" ? "02" : "01"}
                    </span>
                  </button>
                ),
              )}
            </div>
            <div
              className="grid gap-x-7 gap-y-10 md:grid-cols-2"
              aria-live="polite"
            >
              {visibleProjects.map((project) => (
                <article
                  key={project.id}
                  className="group motion-safe:animate-reveal"
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="block w-full rounded-2xl text-left outline-offset-4"
                    aria-label={`View ${project.name} concept study`}
                  >
                    <div className="overflow-hidden rounded-2xl transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-ink/8">
                      <project.Visual />
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <h3 className="text-[24px] font-medium tracking-[-.04em]">
                            {project.name}
                            <span className="text-accent">.</span>
                          </h3>
                          <span className="rounded-full border border-line px-2 py-0.5 text-[8px] uppercase tracking-wider text-muted">
                            Concept study
                          </span>
                        </div>
                        <p className="text-[12px] text-muted">{project.line}</p>
                      </div>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <FiArrowUpRight aria-hidden="true" size={19} />
                      </span>
                    </div>
                  </button>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] text-muted after:mx-2 after:text-muted after:content-['/'] last:after:content-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
              <p className="text-[11px] text-muted">
                The process is just as important as the pixels.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 text-[11px] font-medium"
              >
                Follow what I’m building{" "}
                <FiGithub aria-hidden="true" className="ml-1" size={15} />
                <FiArrowUpRight
                  aria-hidden="true"
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  size={14}
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="page-shell py-18 sm:py-24">
          <SectionLabel number="02">A little about me</SectionLabel>
          <div className="mt-8 grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-24">
            <div>
              <h2 className="section-heading">
                A builder at heart.
                <br />A problem solver
                <br />
                <span className="font-editorial font-normal italic text-accent">
                  by nature.
                </span>
              </h2>
              <div className="relative mt-9 max-w-[380px] overflow-hidden rounded-2xl border border-[#e1d9eb] bg-[#ece6f3] px-7 py-7">
                <Asterisk className="absolute -right-5 -top-7 size-39 rotate-12 text-[#dcd1e9]" />
                <span className="relative text-[10px] font-semibold uppercase tracking-[.15em] text-accent">
                  The way I see it
                </span>
                <p className="relative mt-4 max-w-[260px] font-editorial text-[31px] leading-[1.15] text-[#51415e]">
                  “Great software should feel simple. Even when it isn’t.”
                </p>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-[19px] leading-[1.7] tracking-[-.025em]">
                I care as much about how a product{" "}
                <span className="font-editorial text-[24px] italic text-accent">
                  feels
                </span>{" "}
                as how it works.
              </p>
              <p className="mb-8 mt-4 text-[13px] leading-[1.95] text-muted">
                I’m {profile.name}, a developer with a curiosity for the whole
                picture — from the first sketch to the last API response. I
                enjoy turning complex problems into clear, approachable
                experiences and finding the small details that make them feel
                right.
              </p>
              <div className="divide-y divide-line">
                {[
                  {
                    Icon: FiLayers,
                    name: "Thoughtful by design",
                    text: "Clear interfaces. Purposeful interactions. People first.",
                  },
                  {
                    Icon: FiCode,
                    name: "Connected from end to end",
                    text: "From responsive frontends to the systems behind them.",
                  },
                  {
                    Icon: FiArrowUpRight,
                    name: "Always a work in progress",
                    text: "Learning, iterating, and asking a better next question.",
                  },
                ].map(({ Icon, name, text }, index) => (
                  <div key={name} className="flex items-center gap-4 py-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-white/50 text-accent">
                      <Icon aria-hidden="true" size={18} />
                    </span>
                    <div>
                      <h3 className="text-[12px] font-semibold">{name}</h3>
                      <p className="mt-1 text-[11px] leading-5 text-muted">
                        {text}
                      </p>
                    </div>
                    <span className="ml-auto font-mono text-[9px] text-muted">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="stack"
          className="border-y border-line bg-[#eeece6]/50 py-17 sm:py-21"
        >
          <div className="page-shell">
            <SectionLabel number="03">My toolkit</SectionLabel>
            <div className="mb-9 mt-6 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="section-heading">
                The right tools.
                <br />
                <span className="font-editorial font-normal italic text-accent">
                  The bigger picture.
                </span>
              </h2>
              <p className="max-w-[300px] text-[13px] leading-7 text-muted">
                Technology is the starting point.
                <br />
                What we create with it is what matters.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {skills.map(({ name, Icon, detail, category }) => (
                <div
                  key={name}
                  className="group rounded-xl border border-line bg-canvas p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className="text-ink/75 transition group-hover:text-accent"
                      size={27}
                    />
                    <span className="text-[7px] tracking-[.08em] text-muted">
                      {category}
                    </span>
                  </div>
                  <h3 className="text-[12px] font-semibold">{name}</h3>
                  <p className="mt-2 text-[10px] leading-[1.7] text-muted">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="page-shell py-18 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#27252b] px-7 py-11 text-canvas sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-12 top-1/2 size-[330px] -translate-y-1/2 rounded-full border border-white/8" />
            <div className="pointer-events-none absolute -right-3 top-1/2 size-[250px] -translate-y-1/2 rounded-full border border-white/8" />
            <Asterisk className="pointer-events-none absolute -right-2 top-14 size-45 rotate-12 text-lilac/8 sm:right-12 sm:top-10 sm:size-60" />
            <SectionLabel number="04" light>
              Something in mind?
            </SectionLabel>
            <div className="relative mt-7 flex flex-col justify-between gap-9 md:flex-row md:items-end">
              <div>
                <h2 className="text-[clamp(42px,5vw,66px)] font-medium leading-[1.08] tracking-[-.055em]">
                  Let’s make
                  <br />
                  <span className="font-editorial font-normal italic text-[#c8b5e2]">
                    something matter.
                  </span>
                </h2>
                <p className="mt-5 max-w-[350px] text-[12px] leading-7 text-white/55">
                  An interesting role, a new project, or a good conversation.
                  <br className="hidden sm:block" /> I’d love to hear what
                  you’re thinking.
                </p>
              </div>
              <div className="relative flex shrink-0 flex-col items-start gap-4 md:items-end">
                <a
                  href={
                    profile.email ? `mailto:${profile.email}` : profile.github
                  }
                  target={profile.email ? undefined : "_blank"}
                  rel={profile.email ? undefined : "noreferrer"}
                  className="group flex items-center gap-8 rounded-full bg-lilac py-3 pl-6 pr-3 text-[12px] font-semibold text-ink transition hover:bg-white"
                >
                  {profile.email ? "Say hello" : "Let’s connect on GitHub"}
                  <span className="grid size-9 place-items-center rounded-full bg-ink/8">
                    <FiArrowUpRight
                      aria-hidden="true"
                      size={20}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
                <button
                  onClick={copyContact}
                  className="flex items-center gap-2 text-[10px] text-white/60 transition hover:text-white"
                >
                  {copied ? (
                    <FiCheck aria-hidden="true" size={13} />
                  ) : (
                    <span className="relative mr-1 inline-block size-2.5 rounded-[2px] border border-current after:absolute after:left-1 after:top-1 after:size-2.5 after:rounded-[2px] after:border after:border-current" />
                  )}
                  {copied
                    ? "Copied to clipboard"
                    : profile.email
                      ? "Copy email address"
                      : "Copy GitHub profile"}
                </button>
                <span role="status" className="sr-only">
                  {copied ? "Contact link copied to clipboard" : ""}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-shell">
        <div className="flex flex-col items-start justify-between gap-5 border-t border-line py-7 sm:flex-row sm:items-center">
          <a href="#home" className="flex items-center gap-2">
            <Asterisk className="size-4 text-accent" />
            <span className="text-[17px] font-bold tracking-[-.06em]">
              mekah.
            </span>
          </a>
          <p className="text-[9px] tracking-wide text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with care & a
            little caffeine.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-[10px] text-muted transition hover:text-accent"
          >
            Back to top <FiArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </footer>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default App;
