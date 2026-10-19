import { useEffect, useState } from "react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["certification", "Certifications"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function initialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function Nav() {
  const [theme, setTheme] = useState(initialTheme);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const light = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Oscar<span>.dev</span>
      </a>
      <ul className={`nav-link ${open ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "on" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-tools">
        <button
          className="theme"
          onClick={() => setTheme(light ? "dark" : "light")}
          aria-label={`Switch to ${light ? "dark" : "light"} mode`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {light ? (
              <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5Z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
              </>
            )}
          </svg>
          <span>{light ? "Dark" : "Light"}</span>
        </button>
        <button
          className={`menu ${open ? "x" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i />
          <i />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
