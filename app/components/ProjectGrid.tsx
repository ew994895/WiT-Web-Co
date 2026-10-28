/* eslint-disable @next/next/no-img-element */
import { showcaseProjects } from "../data/projects";

function ProjectBrand({ id }: { id: string }) {
  if (id === "leads") return <span className="product-brand"><span className="lead-brand-icon" aria-hidden="true">W</span><span>WiT Lead Finder</span></span>;
  if (id === "games") return (
    <span className="product-brand games-brand" aria-label="Witty Games">
      <img src="/projects/witty-games-logo.svg" width="52" height="52" alt="" />
      <span>witty<span>games</span></span>
    </span>
  );
  if (id === "roster") return (
    // Reuse the product's existing HTML/CSS wordmark, rather than invent a logo.
    <span className="product-brand roster-brand" aria-label="Roster IQ">
      <span className="roster-brand-icon" aria-hidden="true">R</span>
      <span>ROSTER<span>IQ</span></span>
    </span>
  );
  return (
    <span className="product-brand portfolio-brand" aria-label="Witty’s Website">
      <img src="/projects/wittys-logo.svg" width="52" height="52" alt="" />
      <span>Witty’s Website</span>
    </span>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "leads") return <div className="lead-map-art" aria-hidden="true"><div className="map-road" /><span className="map-pin pin-one">W</span><span className="map-pin pin-two">↗</span><span className="map-pin pin-three">✳</span><span className="map-caption">SEARCH LOCAL. FIND POSSIBILITY.</span></div>;
  if (id === "games") return (
    <div className="game-playground" aria-hidden="true">
      <div className="playground-ring ring-a" /><div className="playground-ring ring-b" />
      <span className="playground-note">PICK YOUR NEXT FAVORITE</span>
      <div className="game-tile tile-chess"><img src="/projects/chess.svg" width="160" height="160" alt="" /><span>Chess</span></div>
      <div className="game-tile tile-racer"><img src="/projects/rider-racer.svg" width="160" height="160" alt="" /><span>Rider Racer</span></div>
      <div className="game-tile tile-putt"><img src="/projects/pocket-putt.svg" width="160" height="160" alt="" /><span>Pocket Putt</span></div>
      <div className="game-tile tile-shape"><img src="/projects/shape-royale.svg" width="160" height="160" alt="" /><span>Shape Royale</span></div>
      <span className="playground-caption">A LITTLE LESS SCROLLING. A LITTLE MORE PLAYING.</span>
    </div>
  );
  if (id === "roster") return (
    <div className="roster-playbook" aria-hidden="true">
      <div className="field-lines" /><span className="field-position position-x">×</span><span className="field-position position-o">○</span>
      <svg viewBox="0 0 460 190"><path d="M35 150H165Q210 150 210 105V70Q210 35 260 35H400M375 12l28 23-28 23" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="7 8" /></svg>
      <div className="playbook-labels"><span>Rankings</span><span>Trades</span><span>Your league</span></div>
    </div>
  );
  return (
    <div className="portfolio-emblem" aria-hidden="true">
      <span className="emblem-orbit" /><img src="/projects/wittys-logo.svg" width="220" height="220" alt="" />
      <span className="portfolio-caption">ALWAYS BUILDING SOMETHING.</span>
    </div>
  );
}

export function ProjectGrid() {
  return (
    <div className="product-gallery">
      {showcaseProjects.map((project, index) => (
        <article className={`product-feature feature-${project.id}`} key={project.id} id={project.id}>
          <a className="product-feature-link" href={project.url} target="_blank" rel="noopener noreferrer" data-track="open_project" aria-label={`${project.linkLabel} — ${project.name} (opens in a new tab)`}>
            <div className="product-copy">
              <div className="product-topline"><ProjectBrand id={project.id} /><span className="product-index">0{index + 1}</span></div>
              <p className="product-category">{project.category}</p>
              <h2>{project.headline}</h2>
              <p className="product-description">{project.description}</p>
              <span className="product-action">{project.linkLabel}<span className="product-arrow" aria-hidden="true">↗</span></span>
            </div>
            <ProjectVisual id={project.id} />
          </a>
        </article>
      ))}
    </div>
  );
}
