import { useId, useState } from "react";
import { FiArrowUpRight, FiImage } from "react-icons/fi";

function PreviewImage({ image, name, thumbnail = false }) {
  const [unavailable, setUnavailable] = useState(false);

  if (unavailable) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#eeece6] text-muted">
        <FiImage aria-hidden="true" size={thumbnail ? 18 : 28} />
        {!thumbnail && (
          <span className="px-5 text-center text-xs">
            Project preview unavailable
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={thumbnail ? "" : image.alt || `${name} website preview`}
      loading={thumbnail ? "lazy" : "eager"}
      decoding="async"
      onError={() => setUnavailable(true)}
      className="h-full w-full object-cover object-top"
    />
  );
}

function PreviewPlaceholder({ name, unavailable = false }) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#eeece6] px-6 text-center">
      <span className="font-editorial text-[clamp(52px,8vw,84px)] italic leading-none tracking-[-.055em] text-ink">
        {name}
        <span className="text-accent">.</span>
      </span>
      <span className="mt-5 text-[10px] uppercase tracking-[.18em] text-muted">
        {unavailable
          ? "Project preview unavailable"
          : "Full-stack web application"}
      </span>
    </div>
  );
}

function liveAddress(url) {
  if (typeof url !== "string" || !/^https?:\/\//i.test(url)) return null;
  try {
    return new URL(url);
  } catch {
    return null;
  }
}

export default function ProjectShowcase({ project }) {
  const [activeImage, setActiveImage] = useState(0);
  const galleryId = useId();
  const images = (project.images || []).filter(
    (image) => image && typeof image.src === "string" && image.src.trim(),
  );
  const imageIndex = Math.min(activeImage, Math.max(0, images.length - 1));
  const image = images[imageIndex];
  const liveUrl = liveAddress(project.liveUrl);
  const preview = image ? (
    <PreviewImage key={image.src} image={image} name={project.name} />
  ) : (
    <PreviewPlaceholder name={project.name} />
  );

  return (
    <article className="grid items-center gap-7 rounded-3xl border border-line bg-canvas p-4 sm:gap-9 sm:p-6 lg:grid-cols-[7fr_5fr] lg:gap-12 lg:p-7">
      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_35px_-25px_#29272d45]">
          <div className="flex h-10 items-center justify-between gap-3 border-b border-line bg-[#faf9f6] px-4">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-[#d9d5db]" />
              <span className="size-1.5 rounded-full bg-[#d9d5db]" />
              <span className="size-1.5 rounded-full bg-[#d9d5db]" />
            </span>
            <span className="truncate font-mono text-[9px] text-muted">
              {liveUrl ? liveUrl.hostname : project.name}
            </span>
            <span className="w-8 text-right font-mono text-[9px] text-muted">
              {images.length > 1
                ? `${String(imageIndex + 1).padStart(2, "0")}/${String(images.length).padStart(2, "0")}`
                : ""}
            </span>
          </div>
          {liveUrl ? (
            <a
              id={galleryId}
              href={liveUrl.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name} live demo (opens in new tab)`}
              className="group relative block aspect-[1.5] overflow-hidden bg-[#eeece6] outline-offset-[-4px]"
            >
              {preview}
              <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-line bg-canvas/95 text-ink shadow-sm transition group-hover:bg-ink group-hover:text-white">
                <FiArrowUpRight aria-hidden="true" size={17} />
              </span>
            </a>
          ) : (
            <div
              id={galleryId}
              className="aspect-[1.5] overflow-hidden bg-[#eeece6]"
            >
              {preview}
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div
            role="group"
            aria-label={`${project.name} screenshots`}
            className="mt-3 flex gap-2 overflow-x-auto pb-1"
          >
            {images.map((item, index) => (
              <button
                type="button"
                key={`${item.src}-${index}`}
                aria-label={`View ${project.name} screenshot ${index + 1}${item.caption ? `: ${item.caption}` : ""}`}
                aria-pressed={imageIndex === index}
                aria-controls={galleryId}
                onClick={() => setActiveImage(index)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${imageIndex === index ? "border-accent opacity-100" : "border-line opacity-65 hover:opacity-100"}`}
              >
                <PreviewImage image={item} name={project.name} thumbnail />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="px-2 pb-3 sm:px-2 sm:py-4 lg:px-0 lg:pr-5">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.16em] text-accent">
          {project.type || "Full-stack web application"}
        </p>
        <h3 className="text-[clamp(40px,5vw,57px)] font-medium leading-none tracking-[-.06em]">
          {project.name}
          <span className="text-accent">.</span>
        </h3>
        <p className="mb-7 mt-5 max-w-[330px] text-[14px] leading-[1.9] text-muted">
          {project.description}
        </p>
        {liveUrl && (
          <a
            href={liveUrl.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo (opens in new tab)`}
            className="group inline-flex items-center gap-7 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-xs font-medium text-white transition hover:bg-accent"
          >
            Live demo
            <span className="grid size-8 place-items-center rounded-full bg-lilac text-ink transition group-hover:rotate-[-10deg]">
              <FiArrowUpRight aria-hidden="true" size={17} />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
