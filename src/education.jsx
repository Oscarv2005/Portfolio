import "./index.css";
import lpu from "./images/LPU.png"; // exact filename and case as in src/images

function Edu() {
  const education = [
    {
      institute: "Lovely Professional University",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2023 – 2027",
      logo: lpu,
    },
    {
      institute: "S.R. Public School",
      degree: "Intermediate",
      year: "2018 – 2022",
      logo: "/src/images/SR.png",
    },
  ];

  return (
    <div className="block edu">
      <div className="block-head">
        <h2>git log education</h2>
      </div>
      <div className="educate">
        {education.map((item) => (
          <div className="ed" key={item.institute}>
            <img
              src={item.logo}
              alt=""
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
            <div>
              <h3>{item.institute}</h3>
              <h4>{item.degree}</h4>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edu;
