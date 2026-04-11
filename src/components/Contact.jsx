import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="container reveal">
      <span className="section-label">CONTACT</span>
      <h2 className="section-title">
        LET'S <span className="highlight">CONNECT</span>
      </h2>

      <div className="grid-2">
        <div className="reveal">
          <p style={{ fontSize: "1.4rem", marginBottom: "2.5rem" }}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <a
              href="mailto:adnanashraf7205@gamil.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                className="glass"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-cyan)",
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    display: "block",
                  }}
                >
                  Email Me
                </span>
                <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                  adnanashraf7205@gmail.com
                </span>
              </div>
            </a>

            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
              <a
                href="https://github.com/adnanashraf-code"
                target="_blank"
                rel="noreferrer"
                className="glass"
                aria-label="GitHub Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-light)",
                  transition: "0.3s ease",
                }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/adnanashraf20/"
                target="_blank"
                rel="noreferrer"
                className="glass"
                aria-label="LinkedIn Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-light)",
                  transition: "0.3s ease",
                }}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <form className="glass reveal" style={{ padding: "3rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--glass-border)",
                padding: "1rem",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--glass-border)",
                padding: "1rem",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem",
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--glass-border)",
              padding: "1rem",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          />
          <textarea
            placeholder="Message"
            rows="5"
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--glass-border)",
              padding: "1rem",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "1rem",
              marginBottom: "2rem",
              resize: "none",
            }}
          ></textarea>

          <button
            type="button"
            className="btn-primary"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
