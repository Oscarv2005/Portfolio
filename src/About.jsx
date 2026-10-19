import "./index.css";
import oscar from "./images/oscar.png";

function About() {
  return (
    <div className="block about">
      <div className="block-head">
        <h2>whoami: a student who ships</h2>
      </div>
      <figure className="about-photo">
        <img
          src={oscar}
          alt="Oscar Vishnoi"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <figcaption>Oscar Vishnoi, B.Tech CSE, LPU</figcaption>
      </figure>
      <div className="about-body">
        <p>
          I'm Oscar, a B.Tech CSE student at Lovely Professional University
          (2023–2027). I enjoy software development and data science, and I
          learn best by building real applications.
        </p>
        <p>
          Every project is a chance to pick up a new tool and write cleaner code
          than last time.
        </p>
        <a className="btn btn-sm" href="#education">
          cd education
        </a>
      </div>
      <ul className="about-side">
        <li>Curiosity</li>
        <li>Creativity</li>
        <li>Discipline</li>
        <li>Better code</li>
      </ul>
    </div>
  );
}

export default About;
