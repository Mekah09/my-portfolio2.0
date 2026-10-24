import { useEffect, useId, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiGithub,
  FiImage,
  FiX,
} from "react-icons/fi";

function ProjectImage({ image, projectName, index, thumbnail = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full min-h-20 flex-col items-center justify-center gap-3 bg-[#eeece6] px-4 py-8 text-center text-muted">
        <FiImage aria-hidden="true" size={thumbnail ? 16 : 30} />
        {!thumbnail && <p className="text-sm">This image is unavailable.</p>}
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={
        thumbnail
          ? ""
          : image.alt || `${projectName} — project image ${index + 1}`
      }
      loading={thumbnail ? "lazy" : "eager"}
      decoding="async"
      onError={() => setFailed(true)}
      className={
        thumbnail
          ? "h-full w-full object-cover"
          : "max-h-[58dvh] min-h-40 w-full object-contain"
      }
    />
  );
}

function ProjectGallery({ project, images, activeImage, onSelect, galleryId }) {
  if (!images.length) {
    if (project.Visual) return <project.Visual />;
    return (
      <div className="flex aspect-[1.8] items-center justify-center rounded-2xl border border-line bg-lilac/25 text-muted">
        <div className="flex flex-col items-center gap-3">
          <FiImage aria-hidden="true" size={30} />
          <p className="text-sm">Project images coming soon.</p>
        </div>
      </div>
    );
  }

  const currentImage = images[activeImage];
  const caption =
    currentImage.caption ||
    currentImage.alt ||
    `${project.name} — image ${activeImage + 1}`;

  return (
    <div role="region" aria-label={`${project.name} project gallery`}>
      <figure className="overflow-hidden rounded-2xl border border-line bg-white/70">
        <div
          id={galleryId}
          className="flex min-h-40 items-center justify-center overflow-hidden bg-[#efede8]"
        >
          <ProjectImage
            key={currentImage.src}
            image={currentImage}
            projectName={project.name}
            index={activeImage}
          />
        </div>
        <figcaption className="flex min-h-16 items-center justify-between gap-4 border-t border-line px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p
              className="text-[11px] leading-5 text-muted"
              aria-live="polite"
              aria-atomic="true"
            >
              {caption}
            </p>
            <p className="mt-0.5 text-[10px] text-muted">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
          {images.length > 1 && (
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                aria-label="Previous project image"
                aria-controls={galleryId}
                onClick={() =>
                  onSelect((activeImage - 1 + images.length) % images.length)
                }
                className="grid size-9 place-items-center rounded-full border border-line text-ink transition hover:border-accent hover:bg-lilac/40"
              >
                <FiArrowLeft aria-hidden="true" size={16} />
              </button>
              <button
                type="button"
                aria-label="Next project image"
                aria-controls={galleryId}
                onClick={() => onSelect((activeImage + 1) % images.length)}
                className="grid size-9 place-items-center rounded-full border border-line text-ink transition hover:border-accent hover:bg-lilac/40"
              >
                <FiArrowRight aria-hidden="true" size={16} />
              </button>
            </div>
          )}
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Choose a project image"
        >
          {images.map((image, index) => (
            <button
              type="button"
              key={`${image.src}-${index}`}
              aria-label={`Show image ${index + 1}${image.caption ? `: ${image.caption}` : ""}`}
              aria-pressed={activeImage === index}
              aria-controls={galleryId}
              onClick={() => onSelect(index)}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${activeImage === index ? "border-accent opacity-100" : "border-transparent opacity-65 hover:opacity-100"}`}
            >
              <ProjectImage
                key={image.src}
                image={image}
                projectName={project.name}
                index={index}
                thumbnail
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function externalUrl(url) {
  return typeof url === "string" && /^https?:\/\//i.test(url) ? url : null;
}

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const id = useId();
  const titleId = `${id}-title`;
  const galleryId = `${id}-gallery`;
  const images = (project.images || []).filter(
    (image) => image && typeof image.src === "string" && image.src.trim(),
  );
  const liveUrl = externalUrl(project.liveUrl);
  const sourceUrl = externalUrl(project.sourceUrl);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  function handleGalleryKeys(event) {
    const isEditing =
      event.target instanceof HTMLElement &&
      (event.target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName));
    if (
      isEditing ||
      images.length < 2 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    )
      return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveImage(
        (current) => (current - 1 + images.length) % images.length,
      );
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveImage((current) => (current + 1) % images.length);
    }
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialogRef.current.close();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={closeOnBackdrop}
      onKeyDown={handleGalleryKeys}
      aria-labelledby={titleId}
      className="project-dialog fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-3xl border border-line bg-canvas p-0 text-ink shadow-2xl backdrop:bg-[#1f1d27]/60 backdrop:backdrop-blur-sm"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-canvas/95 px-6 py-4 backdrop-blur-md sm:px-9">
        <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-muted">
          A closer look /{" "}
          {project.isConcept ? "concept study" : "project details"}
        </span>
        <button
          type="button"
          autoFocus
          onClick={() => dialogRef.current.close()}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition hover:border-accent hover:bg-white"
          aria-label="Close project details"
        >
          <FiX aria-hidden="true" size={20} />
        </button>
      </div>
      <div className="p-6 sm:p-9">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs text-accent">{project.type}</p>
            <h2
              id={titleId}
              className="text-[clamp(38px,6vw,52px)] font-medium tracking-[-.055em]"
            >
              {project.name}
              <span className="text-accent">.</span>
            </h2>
          </div>
          {project.isConcept && (
            <span className="rounded-full border border-line px-3 py-1 text-[10px] text-muted">
              Independent concept
            </span>
          )}
        </div>
        <ProjectGallery
          project={project}
          images={images}
          activeImage={activeImage}
          onSelect={setActiveImage}
          galleryId={galleryId}
        />
        <p className="mt-8 text-xl leading-relaxed tracking-tight">
          {project.description}
        </p>
        {!!project.stack?.length && (
          <div className="my-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1.5 text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {(liveUrl || sourceUrl) && (
          <div className="mb-7 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-xs font-medium text-white transition hover:bg-accent"
              >
                Visit live project
                <FiArrowUpRight aria-hidden="true" size={16} />
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 text-xs font-medium transition hover:border-accent hover:text-accent"
              >
                <FiGithub aria-hidden="true" size={15} />
                View source
                <FiArrowUpRight aria-hidden="true" size={15} />
              </a>
            )}
          </div>
        )}
        {(project.challenge || project.approach) && (
          <div className="grid gap-7 border-t border-line pt-7 sm:grid-cols-2">
            {project.challenge && (
              <div>
                <h3 className="mb-3 font-semibold">The challenge</h3>
                <p className="text-sm leading-7 text-muted">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.approach && (
              <div>
                <h3 className="mb-3 font-semibold">
                  {project.isConcept ? "The direction" : "The approach"}
                </h3>
                <p className="text-sm leading-7 text-muted">
                  {project.approach}
                </p>
              </div>
            )}
          </div>
        )}
        {!!project.features?.length && (
          <div className="mt-8 border-t border-line pt-7">
            <h3 className="mb-4 font-semibold">
              {project.isConcept ? "Planned highlights" : "Project highlights"}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-6 text-muted"
                >
                  <FiCheck
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-accent"
                    size={16}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.outcome && (
          <div className="mt-8 border-t border-line pt-7">
            <h3 className="mb-3 font-semibold">
              {project.isConcept ? "The intention" : "The outcome"}
            </h3>
            <p className="text-sm leading-7 text-muted">{project.outcome}</p>
          </div>
        )}
        {(project.scope?.length || project.isConcept) && (
          <div className="mt-8 rounded-xl bg-lilac/45 p-5">
            <p className="mb-2 text-xs font-semibold">
              {project.isConcept ? "Concept scope" : "My contribution"}
            </p>
            <p className="text-sm leading-6 text-muted">
              {project.scope?.length ? `${project.scope.join(" · ")}. ` : ""}
              {project.isConcept
                ? "This is an illustrative product study, not a live client project."
                : ""}
            </p>
          </div>
        )}
      </div>
    </dialog>
  );
}
