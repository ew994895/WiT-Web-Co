import Image from "next/image";
import { showcaseProjects } from "../data/projects";

export function ProjectGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "demo-grid demo-grid-compact" : "demo-grid"}>
      {showcaseProjects.map((project, index) => (
        <article className="demo-card" key={project.name}>
          <a
            className="demo-image"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            data-track="open_project"
            aria-label={`Open ${project.name} in a new tab`}
          >
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <span className="demo-launch">{project.linkLabel} ↗</span>
          </a>
          <div className="demo-copy">
            <div className="demo-meta"><span>0{index + 1}</span><small>{project.label}</small></div>
            <p>{project.category}</p>
            <h3>{project.name}</h3>
            <p className="demo-description">{project.description}</p>
            <div className="tag-row" aria-label={`${project.name} capabilities`}>
              {project.services.map((service) => <span key={service}>{service}</span>)}
            </div>
            <a className="text-link" href={project.url} target="_blank" rel="noreferrer" data-track="open_project">
              {project.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
