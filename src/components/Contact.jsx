import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle, Twitter } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }
    
    console.log("Form Data Submitted:", formData);
    // Simulate API Call
    setIsSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSent(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container reveal">
      <span className="section-label">CONTACT</span>
      <h2 className="section-title">
        LET'S <span className="highlight">CONNECT</span>
      </h2>

      <div className="grid-2" style={{ alignItems: "stretch" }}>
        <div className="glass reveal" style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "1.4rem", marginBottom: "2.5rem" }}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <a
              href="mailto:adnanashraf7205@gmail.com"
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
                  background: "rgba(255,255,255,0.03)"
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
                href="https://x.com/it_adnan83"
                target="_blank"
                rel="noopener noreferrer"
                className="glass"
                aria-label="X (Twitter) Profile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-light)",
                  transition: "0.3s ease",
                  background: "rgba(255,255,255,0.03)"
                }}
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com/adnanashraf-code"
                target="_blank"
                rel="noopener noreferrer"
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
                  background: "rgba(255,255,255,0.03)"
                }}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/adnanashraf20/"
                target="_blank"
                rel="noopener noreferrer"
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
                  background: "rgba(255,255,255,0.03)"
                }}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="glass reveal" style={{ padding: "3rem", display: "flex", flexDirection: "column" }}>
          {isSent ? (
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              textAlign: 'center'
            }}>
              <CheckCircle size={60} color="#22c55e" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--glass-border)",
                    padding: "1rem",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "1rem",
                    marginBottom: 0
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--glass-border)",
                    padding: "1rem",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "1rem",
                    marginBottom: 0
                  }}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                required
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
                  flexGrow: 1
                }}
              ></textarea>

              <button
                type="submit"
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
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
