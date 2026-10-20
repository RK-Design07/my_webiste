import { useState } from "react";
import { PROFILE } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    // Opens the user's email client with a pre-filled message (no backend needed).
    const subject = encodeURIComponent("Portfolio contact from " + form.name);
    const body = encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")");
    window.location.href = "mailto:" + PROFILE.email + "?subject=" + subject + "&body=" + body;
    setStatus("✅ Opening your email client…");
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal><span className="section-tag">05. Contact</span></Reveal>
        <Reveal delay={80}><h2 className="section-title">Let's build something together.</h2></Reveal>
        <div className="contact-grid" style={{ marginTop: 40 }}>
          <Reveal delay={150}>
            <div className="contact-info">
              <p>Have a project in mind, a role to fill, or just want to say hi? My inbox is always open — I'll get back to you within 24 hours.</p>
              <div className="contact-line"><span className="ico">✉</span><a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a></div>
              <div className="contact-line"><span className="ico">📱</span><span>{PROFILE.phone}</span></div>
              <div className="contact-line"><span className="ico">📍</span><span>{PROFILE.location}</span></div>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Jane Doe" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" placeholder="jane@company.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project…" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message →</button>
              <div className="form-status">{status}</div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
