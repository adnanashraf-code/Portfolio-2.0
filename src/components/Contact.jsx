import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2, Twitter, Sparkles, ArrowUpRight } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container reveal" style={{ position: "relative" }}>
      <span className="section-label">GET IN TOUCH</span>
      <h2 className="section-title">
        LET'S <span className="highlight">CONNECT.</span>
      </h2>

      <div className="grid-2" style={{ gap: "1.5rem", alignItems: "stretch" }}>
        {/* Left Column: Direct Info & Social Pills */}
        <div
          className="card glass contact-card-enhanced"
          style={{
            padding: "1.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "20px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "#fff",
                lineHeight: "1.25",
                marginBottom: "0.8rem",
              }}
            >
              Have a project in mind? Let's build something extraordinary.
            </h3>

            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Whether you want to discuss a new application, ask about my work, or explore potential collaborations — I'd love to hear from you.
            </p>
          </div>

          <div>
            {/* Email Card Button */}
            <a
              href="mailto:adnanashraf7205@gmail.com"
              className="contact-email-box"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                borderRadius: "14px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--glass-border)",
                textDecoration: "none",
                color: "#fff",
                marginBottom: "1.2rem",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "rgba(6, 182, 212, 0.15)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary-cyan)",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    display: "block",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Direct Email
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: "700", color: "#fff" }}>
                  adnanashraf7205@gmail.com
                </span>
              </div>
              <ArrowUpRight size={16} style={{ color: "var(--primary-cyan)" }} />
            </a>

            {/* Social Pills */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              {[
                { name: "Twitter / X", icon: Twitter, url: "https://x.com/it_adnan83" },
                { name: "GitHub", icon: Github, url: "https://github.com/adnanashraf-code" },
                { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/adnanashraf20/" },
              ].map((soc, sIdx) => {
                const SocIcon = soc.icon;
                return (
                  <a
                    key={sIdx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.name}
                    className="contact-social-pill"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.7rem",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--text-light)",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <SocIcon size={16} />
                    <span>{soc.name.split(" ")[0]}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div
          className="card glass contact-card-enhanced"
          style={{
            padding: "1.8rem",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
          }}
        >
          {isSent ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                textAlign: "center",
                padding: "1.5rem 0",
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                  background: "rgba(34, 197, 94, 0.15)",
                  border: "2px solid #22c55e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#22c55e",
                  boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
                }}
              >
                <CheckCircle2 size={35} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff" }}>
                Message Received!
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "320px" }}>
                Thank you for reaching out. I've received your message and will respond as quickly as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#fff", marginBottom: "1.2rem" }}>
                Send a Message <Sparkles size={16} style={{ color: "var(--primary-gold)", display: "inline", marginLeft: "4px" }} />
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div className="contact-input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="contact-styled-input"
                  />
                </div>
                <div className="contact-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="contact-styled-input"
                  />
                </div>
              </div>

              <div className="contact-input-wrapper" style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="contact-styled-input"
                />
              </div>

              <div className="contact-input-wrapper" style={{ marginBottom: "1.2rem", flexGrow: 1, display: "flex" }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows="4"
                  required
                  className="contact-styled-input"
                  style={{ resize: "none", flexGrow: 1 }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary contact-send-btn"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  cursor: isSubmitting ? "wait" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={16} className="send-btn-icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
