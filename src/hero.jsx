
import { useEffect, useState } from "react";
import "./index.css";
import Avatar from "./Avatar";

const roles = [
  "Data Storyteller",
  "React Developer",
  "ML Explorer",
];

const facts = [
  [3, "Projects"],
  [3, "Certifications"],
  [4, "Year B.Tech"],
];

function useTyped(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let w = 0;
    let c = 0;
    let del = false;
    let id;

    const tick = () => {
      const word = words[w];

      c += del ? -1 : 1;
      setText(word.slice(0, c));

      let d = del ? 40 : 85;

      if (!del && c === word.length) {
        del = true;
        d = 1500;
      } else if (del && c === 0) {
        del = false;
        w = (w + 1) % words.length;
        d = 300;
      }

      id = setTimeout(tick, d);
    };

    id = setTimeout(tick, 600);

    return () => clearTimeout(id);
  }, [words]);

  return text;
}

function Count({ to }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let i = 0;

    const id = setInterval(() => {
      i += 1;
      setN(i);

      if (i >= to) {
        clearInterval(id);
      }
    }, 350);

    return () => clearInterval(id);
  }, [to]);

  return <>{n}</>;
}

function Hero() {
  const role = useTyped(roles);

  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="status">
          <i /> System online: ready to build
        </p>

        <h1>
          <span className="line">hello_world, I am</span>
          <span className="line l2">Oscar Vishnoi</span>
        </h1>

        <p className="role">
          A <b>{role}</b>
          <u />
        </p>

        <p className="hero-text">
          B.Tech CSE student at Lovely Professional University.
          I build data dashboards, web apps and machine learning
          tools.
        </p>

        <div className="hero-actions">
          <a className="btn" href="#projects">
            run projects.exe
          </a>

          <a
            className="btn btn-ghost"
            href="/Oscar_Vishnoi_CV.pdf"
            download="Oscar_Vishnoi_CV.pdf"
          >
            download_cv.pdf
          </a>
        </div>

        <dl className="facts">
          {facts.map(([n, l]) => (
            <div key={l}>
              <dt>
                <Count to={n} />+
              </dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero-visual">
        <div className="blob" />

        <Avatar />

        <p className="code c1">
          {"<Developer />"}
        </p>

        <p className="code c2">
          const goal = "learn";
        </p>

        <p className="code c3">
          git push origin main
        </p>
      </div>
    </div>
  );
}

export default Hero;
