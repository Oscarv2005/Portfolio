import { useState } from "react";
import "./index.css";
import airtraffic from "./images/Airtraffic.png";

// Free screenshot service (WordPress mShots). Used only if the local image is missing.
const shot = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=500`;

// Tries the local image, then a live-site screenshot, then a styled placeholder.
function Thumb({ project }) {
  const sources = [project.image, project.live && shot(project.live)].filter(
    Boolean,
  );
  const [i, setI] = useState(0);
  if (i >= sources.length) {
    return <div className="thumb-fallback">{project.title}</div>;
  }
  return (
    <img
      src={sources[i]}
      alt={`${project.title} preview`}
      loading="lazy"
      onError={() => setI(i + 1)}
    />
  );
}

function Project() {
  const projects = [
    {
      title: "FinTrack Dashboard",
      image: "/images/fintrack.png",
      live: "https://fintrack-inv.netlify.app/",
      repo: "https://github.com/Oscarv2005/FineTrack",
      text: "A personal finance dashboard to track income, expenses and savings with interactive visualizations.",
      tags: ["React", "MySQL", "Python", "Flask"],
    },
    {
      title: "Airtraffic Dashboard",
      image: "/src/images/Airtraffic.png",
      repo: "https://github.com/Oscarv2005/Air-Traffic-Dashboard",
      text: "Interactive dashboard for air traffic data visualization and analysis.",
      tags: ["Excel", "DAX", "Power BI"],
    },
    {
      title: "Stack Predict",
      image: "/images/stack-predict.png",
      live: "https://stack-predict-front.vercel.app/",
      repo: "https://github.com/Oscarv2005/StackPredict-front",
      text: "A machine learning model to predict the tech stack based on a project description using NLP.",
      tags: ["Python", "Scikit-learn", "Flask", "React", "Node.js", "Pandas"],
    },
  ];

  return (
    <div className="block projects">
      <div className="block-head">
        <h2>ls projects</h2>
      </div>
      <div className="project-type">
        {projects.map((p) => (
          <article className="cards" key={p.title}>
            <Thumb project={p} />
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="card-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Project;
