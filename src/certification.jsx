import "./index.css";

// Turns a Google Drive "view" link into an image URL the <img> tag can load.
const driveImage = (id) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
const driveView = (id) => `https://drive.google.com/file/d/${id}/view`;

function Certif() {
  const certificates = [
    {
      title: "Cloud Computing",
      heading: "NPTEL",
      id: "1uIFVSRkzzOIaYx1cWd9e-8954P-2Wlo1",
    },
    {
      title: "OCI 2025 Certified AI Foundation Associate",
      heading: "Oracle",
      id: "1jppHNmSUNr6FcLnFt5BBkwCKBLog4oXr",
    },
    {
      title: "Essentials Automation Professional",
      heading: "Automation Anywhere",
      id: "13Pq9ZA1vJ7jSdphJ9g5srfUD9g1v8niP",
    },
  ];

  return (
    <div className="block certs">
      <div className="block-head">
        <h2>cat certifications.log</h2>
      </div>
      <div className="certif-container">
        {certificates.map((c) => (
          <div className="certif-card" key={c.title}>
            <div>
              <h3>{c.title}</h3>
              <h4>{c.heading}</h4>
              <a href={driveView(c.id)} target="_blank" rel="noreferrer">
                View certificate
              </a>
            </div>
            <img
              src={driveImage(c.id)}
              alt={`${c.title} certificate`}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certif;
