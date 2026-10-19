import { useEffect } from "react";
import Hero from "./hero";
import Nav from "./navbar";
import Project from "./Projects";
import About from "./About";
import Skill from "./skill";
import Certif from "./certification";
import Edu from "./education";
import Contact from "./contact";
import "./index.css";

function App() {
  useEffect(() => {
    const sel =
      ".block-head,.about-photo,.about-body,.about-side li,.ledger-row,.skill-marquee,.cards,.certif-card,.ed,.contact-note,.contact-card a";
    const els = [...document.querySelectorAll(sel)];
    els.forEach((el) => {
      el.classList.add("reveal");
      el.style.setProperty(
        "--d",
        `${[...el.parentElement.children].indexOf(el) * 100}ms`,
      );
    });
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          el.classList.add("in", "seen");
          io.unobserve(el);
          // Hand the element back to its normal hover styles once it has entered.
          setTimeout(() => el.classList.remove("reveal", "in"), 1400);
        }),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));

    const bar = document.querySelector(".progress");
    const onScroll = () => {
      const h = document.documentElement;
      bar.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    };
    const onMove = (e) => {
      const t = e.target.closest?.(".spot");
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${e.clientX - r.left}px`);
      t.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    onScroll();
    document
      .querySelectorAll(
        ".cards,.certif-card,.ledger-row,.ed,.contact-card a,.about-side li",
      )
      .forEach((el) => el.classList.add("spot"));
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="progress" />
      <Nav />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="certification">
          <Certif />
        </section>

        <section id="education">
          <Edu />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
