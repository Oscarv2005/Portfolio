import { useEffect, useState } from "react";
import oscar from "./images/oscar.png"; // your real photo

// Your photo, animated: 3D tilt that follows the mouse, spinning rings,
// orbiting tech badges, a scan-line and a waving hand.
// If the photo can't load, your initials show instead.
function Avatar() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = document.querySelector(".avatar");
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      el.style.setProperty("--ry", `${x * 36}deg`);
      el.style.setProperty("--rx", `${-y * 36}deg`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="avatar" role="img" aria-label="Oscar Vishnoi">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="av-photo">
        {failed ? (
          "OV"
        ) : (
          <img src={oscar} alt="" onError={() => setFailed(true)} />
        )}
      </div>
      <div className="orbit">
        <b>JS</b>
        <b>Py</b>
        <b>⚛</b>
      </div>
      <span className="wave">👋</span>
    </div>
  );
}

export default Avatar;
