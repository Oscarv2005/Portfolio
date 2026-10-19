import "./index.css";

function Contact() {
  // Details taken from your CV
  const items = [
    {
      label: "Email",
      value: "oscarvishnoi0@gmail.com",
      href: "mailto:oscarvishnoi0@gmail.com",
      icon: "/images/email.png",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/oscar-vishnoi",
      href: "https://www.linkedin.com/in/oscar-vishnoi/",
      icon: "/images/linkedin.png",
    },
    {
      label: "GitHub",
      value: "github.com/Oscarv2005",
      href: "https://github.com/Oscarv2005",
      icon: "/images/github.png",
    },
  ];

  return (
    <>
      <div className="block contact">
        <div className="block-head">
          <h2>ping me</h2>
        </div>
        <p className="contact-note">
          Have an idea, an internship or a project in mind? Send a message and I
          will get back to you.
        </p>
        <div className="contact-card">
          {items.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
              <img
                src={c.icon}
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <span>
                <b>{c.label}</b>
                {c.value}
              </span>
            </a>
          ))}
        </div>
      </div>
      <footer className="footer">
        <b>
          OSCAR <span>VISHNOI</span>
        </b>
        <span>Made with React</span>
        <span>© 2026 Oscar Vishnoi. All rights reserved.</span>
      </footer>
    </>
  );
}

export default Contact;
