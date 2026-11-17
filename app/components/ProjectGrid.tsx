/* eslint-disable @next/next/no-img-element */
import { showcaseProjects } from "../data/projects";

export function ProjectGrid() {
  return (
    <div className="project-list">
      {showcaseProjects.map((project) => (
        <article className="project-row" key={project.id} id={project.id}>
          <div className={`project-mark project-mark-${project.id}`} aria-hidden="true">
            {"logo" in project ? (
              <img src={project.logo} width="48" height="48" alt="" />
            ) : (
              <span>{project.mark}</span>
            )}
          </div>
          <div>
            <p className="eyebrow">{project.category}</p>
            <h2>{project.name}</h2>
            <p className="project-description">{project.description}</p>
          </div>
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} (opens in a new tab)`}
            data-track="open_project"
          >
            Visit site <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}
