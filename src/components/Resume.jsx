import { useEffect, useId, useRef, useState } from "react";
import { FiArrowUpRight, FiFileText, FiPrinter, FiX } from "react-icons/fi";
import { profile, projects, skills } from "../data/portfolio";
import "./resume-print.css";

const skillGroups = [
  {
    label: "Frontend & styling",
    categories: ["FRONTEND", "STYLING", "LANGUAGE"],
  },
  { label: "Backend & database", categories: ["BACKEND", "DATABASE"] },
  { label: "Tools & collaboration", categories: ["WORKFLOW", "TOOLS"] },
];

function ResumeContent({ preview = false }) {
  const headingId = useId();
  const phoneDigits = profile.phone.replace(/\D/g, "");
  const contacts = [
    profile.email && { label: profile.email, href: `mailto:${profile.email}` },
    profile.phone && {
      label: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    },
    profile.location && { label: profile.location },
  ].filter(Boolean);
  const configuredSocials = Object.entries({
    GitHub: profile.socials?.github || profile.github,
    LinkedIn: profile.socials?.linkedin,
    X: profile.socials?.x,
    Facebook: profile.socials?.facebook,
    WhatsApp:
      profile.socials?.whatsapp ||
      (phoneDigits ? `https://wa.me/${phoneDigits}` : ""),
  }).filter(([, url]) => url);
  const groupedSkills = skillGroups.map((group) => ({
    ...group,
    entries: skills.filter((skill) =>
      group.categories.includes(skill.category),
    ),
  }));
  const otherSkills = skills.filter(
    (skill) =>
      !skillGroups.some((group) => group.categories.includes(skill.category)),
  );
  if (otherSkills.length)
    groupedSkills.push({ label: "Additional skills", entries: otherSkills });

  return (
    <article
      className="resume-sheet bg-white text-[#29272d]"
      aria-labelledby={headingId}
    >
      <header className="resume-header border-b-2 border-[#78539c] pb-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#78539c]">
          <span>Curriculum vitae</span>
          {profile.nickname && (
            <span className="text-[#6d6971]">
              Also known as {profile.nickname}
            </span>
          )}
        </div>
        <h1
          id={headingId}
          className="text-[32px] font-semibold leading-[1.1] tracking-[-.05em] sm:text-[40px]"
        >
          {profile.name}
        </h1>
        <p className="mt-2 text-[16px] text-[#78539c]">
          {profile.role || "Full-stack web developer"}
        </p>
        {contacts.length > 0 && (
          <div className="resume-contact mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#514b59]">
            {contacts.map((contact) =>
              contact.href ? (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="underline decoration-[#cfc6d9] underline-offset-3"
                >
                  {contact.label}
                </a>
              ) : (
                <span key={contact.label}>{contact.label}</span>
              ),
            )}
          </div>
        )}
        {configuredSocials.length > 0 && (
          <div className="resume-socials mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-[#514b59]">
            {configuredSocials.map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 underline decoration-[#cfc6d9] underline-offset-3"
              >
                {label}
                <FiArrowUpRight aria-hidden="true" size={10} />
              </a>
            ))}
          </div>
        )}
      </header>

      <section
        className="resume-section mt-6"
        aria-label="Professional summary"
      >
        <h2 className="resume-section-title">Profile</h2>
        <p className="mt-2 text-[12px] leading-[1.8] text-[#514b59]">
          {profile.summary ||
            "Full-stack web developer focused on responsive websites and complete web applications. I work across HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap on the frontend, with Node.js, Express.js, and MongoDB on the backend. I use Git and GitHub to manage code and collaborate."}
        </p>
      </section>

      <section className="resume-section mt-6" aria-label="Technical skills">
        <h2 className="resume-section-title">Technical skills</h2>
        <dl className="mt-3 space-y-3">
          {groupedSkills
            .filter((group) => group.entries.length)
            .map((group) => (
              <div
                key={group.label}
                className="grid gap-1 text-[11px] leading-[1.7] sm:grid-cols-[145px_1fr]"
              >
                <dt className="font-semibold">{group.label}</dt>
                <dd className="text-[#514b59]">
                  {group.entries.map((skill) => skill.name).join(" · ")}
                </dd>
              </div>
            ))}
        </dl>
      </section>

      <section className="resume-section mt-6" aria-label="Selected projects">
        <h2 className="resume-section-title">Selected projects & concepts</h2>
        <div className="mt-3 space-y-4">
          {projects.map((project) => (
            <div key={project.id || project.name} className="resume-project">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13px] font-semibold">{project.name}</h3>
                <span className="text-[9px] uppercase tracking-wider text-[#6d6971]">
                  {project.isConcept === false
                    ? project.type || "Web application"
                    : "Independent concept study"}
                </span>
              </div>
              <p className="mt-1.5 text-[11px] leading-[1.7] text-[#514b59]">
                {project.description}
              </p>
              <p className="mt-1.5 text-[10px] leading-[1.6] text-[#6d6971]">
                <span className="font-semibold">
                  {project.isConcept === false ? "Stack" : "Proposed stack"}:
                </span>{" "}
                {project.stack.join(" · ")}
              </p>
            </div>
          ))}
        </div>
        {projects.some((project) => project.isConcept !== false) && (
          <p className="mt-3 text-[9px] leading-[1.6] text-[#6d6971]">
            Concept studies describe product directions, not employment or
            completed client projects.
          </p>
        )}
      </section>

      <footer className="resume-footer mt-7 flex flex-wrap items-center justify-between gap-2 border-t border-[#e5e2de] pt-3 text-[9px] text-[#6d6971]">
        <span>
          {profile.name} · {profile.role || "Full-stack web developer"}
        </span>
        {profile.github && (
          <a href={profile.github} className="break-all">
            {profile.github.replace(/^https?:\/\//, "")}
          </a>
        )}
        {preview && (
          <span className="resume-preview-note basis-full pt-2 text-[9px]">
            Choose “Print / Save PDF” to open your browser’s print options.
          </span>
        )}
      </footer>
    </article>
  );
}

function ResumePreview({ onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      aria-label={`${profile.name} résumé preview`}
      className="resume-dialog fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-[850px] overflow-y-auto rounded-2xl border border-line bg-[#f3f0f5] p-0 text-ink shadow-2xl backdrop:bg-[#1f1d27]/65 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-line bg-canvas/95 px-5 py-4 backdrop-blur-md sm:px-7">
        <span className="text-[10px] font-semibold uppercase tracking-[.14em] text-muted">
          Résumé, at a glance
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[11px] font-medium text-white transition hover:bg-accent"
          >
            <FiPrinter aria-hidden="true" size={14} />
            Print / Save PDF
          </button>
          <button
            type="button"
            autoFocus
            onClick={() => dialogRef.current.close()}
            aria-label="Close résumé preview"
            className="grid size-9 place-items-center rounded-full border border-line bg-canvas transition hover:bg-white"
          >
            <FiX aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
      <div className="p-3 sm:p-7">
        <div className="overflow-hidden rounded-lg border border-line shadow-sm">
          <ResumeContent preview />
        </div>
      </div>
    </dialog>
  );
}

export function ResumeButton({ className = "", children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ||
          "inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-[11px] font-medium transition hover:border-accent hover:text-accent"
        }
      >
        {children || (
          <>
            <FiFileText aria-hidden="true" size={15} />
            View résumé
          </>
        )}
      </button>
      {open && <ResumePreview onClose={() => setOpen(false)} />}
    </>
  );
}

export default function ResumeDocument() {
  return (
    <div className="resume-print">
      <ResumeContent />
    </div>
  );
}
