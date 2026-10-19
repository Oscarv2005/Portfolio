import "./index.css";

function Skill() {
  const skills = [
    {
      category: "Languages",
      items: ["C++", "C", "Python", "JavaScript", "React", "HTML5", "CSS3"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Seaborn",
        "Flask",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Visual Studio Code",
        "Jupyter Notebook",
        "Git/GitHub",
        "Power BI",
        "Hadoop",
        "MySQL",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Quick Learning",
        "Time Management",
        "Adaptability",
      ],
    },
  ];
  const tech = skills.slice(0, 3).flatMap((s) => s.items);
  const rows = [tech, [...tech].reverse()];

  return (
    <div className="block skill-section">
      <div className="block-head">
        <h2>stack --list</h2>
      </div>
      <div className="skill-ledger">
        {skills.map((skill) => (
          <div className="ledger-row" key={skill.category} tabIndex={0}>
            <h3>{skill.category}</h3>
            <ul className="ledger-items">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skill-marquee" aria-hidden="true">
        {rows.map((row, r) => (
          <div className={`marquee-track ${r ? "rev" : ""}`} key={r}>
            {[...row, ...row].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
