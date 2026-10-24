import { useState } from "react";

export default function ProjectCover({ project }) {
  const [failed, setFailed] = useState(false);
  const cover = project.images?.[0];
  if (cover && !failed)
    return (
      <img
        src={cover.src}
        alt={cover.alt || `${project.name} project preview`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="aspect-[1.52] w-full rounded-2xl object-cover"
      />
    );
  if (project.Visual) return <project.Visual />;
  return (
    <div className="grid aspect-[1.52] place-items-center rounded-2xl border border-line bg-lilac/40 p-6 text-center">
      <div>
        <p className="text-3xl font-medium tracking-tight">{project.name}</p>
        <p className="mt-3 text-sm text-muted">
          {project.type || "Full-stack web project"}
        </p>
      </div>
    </div>
  );
}
