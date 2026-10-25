import { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLayers,
  FiMenu,
  FiMail,
  FiPhone,
  FiX,
} from "react-icons/fi";
import HeroScene from "./components/HeroScene";
import { profile, projects, skills } from "./data/portfolio";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactForm from "./components/ContactForm";
import SocialLinks from "./components/SocialLinks";
import ResumeDocument, { ResumeButton } from "./components/Resume";

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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
    };
  }, []);

  const navigation = [
    ["work", "Work"],
    ["about", "About"],
    ["stack", "Stack"],
  ];

  return (
    <>
      <div className="site-shell">
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
              aria-label={`${profile.name} home`}
              className="flex items-center gap-2.5"
            >
              <Asterisk className="size-7 text-accent" />
              <span className="text-[25px] font-bold tracking-[-.07em]">
                {profile.nickname}
                <span className="text-accent">.</span>
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
              <span className="hidden items-center gap-2 rounded-full border border-line bg-white/40 px-3.5 py-2 text-[10px] font-medium tracking-wide xl:flex">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full rounded-full bg-[#769b67] opacity-45 motion-safe:animate-ping" />
                  <span className="relative size-1.5 rounded-full bg-[#769b67]" />
                </span>
                Open to opportunities
              </span>
              <ResumeButton className="hidden items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[11px] font-medium transition hover:border-accent hover:text-accent sm:inline-flex" />
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
              <div className="py-3">
                <ResumeButton />
              </div>
            </nav>
          )}
        </header>
        <main id="main">
          <section
            id="home"
            className="page-shell pb-7 pt-14 sm:pt-18 lg:pt-21"
          >
            <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
              <div className="relative z-10">
                <div className="mb-7 flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.17em] text-muted">
                  <span className="h-px w-6 bg-accent" />
                  Full-stack web developer. Creator at heart.
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
                  <span className="font-semibold text-ink">{profile.name}</span>{" "}
                  — a full-stack web developer connecting thoughtful design with
                  clean code. I build for the people on the other side of the
                  screen.
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
                  <ResumeButton />
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
                  aria-label={`${profile.name} on GitHub (opens in new tab)`}
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
                {skills
                  .filter((skill) => skill.featured)
                  .map(({ name, Icon }) => (
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
              <SectionLabel number="01">Selected work</SectionLabel>
              <h2 className="section-heading mb-9 mt-6">
                Projects<span className="text-accent">.</span>
              </h2>
              <div className="grid gap-6">
                {projects.map((project) => (
                  <ProjectShowcase key={project.id} project={project} />
                ))}
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
                  I’m {profile.name}, also known as {profile.nickname} — a
                  full-stack web developer. I build responsive websites with
                  HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap,
                  and develop backend systems with Node.js, Express.js, and
                  MongoDB. I also bring SEO skills to create discoverable web
                  experiences. From the first layout to the last API response, I
                  enjoy making the whole experience work together.
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
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
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
            <div className="grid items-start gap-6 lg:grid-cols-[.95fr_1.05fr]">
              <div className="relative overflow-hidden rounded-3xl bg-[#27252b] px-7 py-10 text-canvas sm:px-10 sm:py-12">
                <Asterisk className="pointer-events-none absolute -right-12 top-12 size-60 rotate-12 text-lilac/8" />
                <SectionLabel number="04" light>
                  Let’s start a conversation
                </SectionLabel>
                <h2 className="relative mt-8 text-[clamp(40px,4vw,56px)] font-medium leading-[1.08] tracking-[-.055em]">
                  Let’s make
                  <br />
                  <span className="font-editorial font-normal italic text-[#c8b5e2]">
                    something matter.
                  </span>
                </h2>
                <p className="relative mt-5 max-w-[350px] text-[13px] leading-7 text-white/75">
                  A new role, a web project, or a good conversation. Tell me
                  what you have in mind.
                </p>
                <div className="relative mt-9 border-t border-white/15 pt-6">
                  <p className="text-[17px] font-medium tracking-tight">
                    {profile.name}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/75">
                    {profile.nickname} · {profile.role}
                  </p>
                  <div className="mt-5 space-y-3 text-xs text-white/80">
                    <div className="flex items-center gap-3">
                      <FiMail aria-hidden="true" size={16} />
                      {profile.email ? (
                        <a
                          href={`mailto:${profile.email}`}
                          className="break-all underline-offset-4 hover:underline"
                        >
                          {profile.email}
                        </a>
                      ) : (
                        <span>Email available on request</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <FiPhone aria-hidden="true" size={16} />
                      {profile.phone ? (
                        <a
                          href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
                          className="underline-offset-4 hover:underline"
                        >
                          {profile.phone}
                        </a>
                      ) : (
                        <span>Phone available on request</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="relative mt-8">
                  <SocialLinks light />
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
        <footer className="page-shell">
          <div className="grid gap-8 border-t border-line py-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <a href="#home" className="inline-flex items-center gap-2">
                <Asterisk className="size-5 text-accent" />
                <span className="text-[20px] font-bold tracking-[-.06em]">
                  {profile.nickname}.
                </span>
              </a>
              <p className="mt-3 text-xs font-medium">{profile.name}</p>
              <p className="mt-1 text-[11px] text-muted">{profile.role}</p>
            </div>
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[.16em] text-muted">
                Find me around the web
              </p>
              <SocialLinks />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-[10px] text-muted">
            <p>
              © {new Date().getFullYear()} {profile.name}. Built with care.
            </p>
            <a
              href="#home"
              className="flex items-center gap-2 transition hover:text-accent"
            >
              Back to top <FiArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </footer>
      </div>
      <ResumeDocument />
    </>
  );
}

export default App;
