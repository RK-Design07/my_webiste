import { PROFILE } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal><span className="section-tag">01. About</span></Reveal>
        <Reveal delay={80}><h2 className="section-title">A developer who ships.</h2></Reveal>
        <div className="about-grid" style={{ marginTop: 40 }}>
          <Reveal delay={150}>
            <div className="stat-grid">
              {PROFILE.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={250} className="about-text">
            {PROFILE.bio.map((p, i) => (
              <p key={i}><strong>{i === 0 ? "Hey! " : ""}</strong>{p}</p>
            ))}
            <div className="btn-row" style={{ marginTop: 10 }}>
              <a className="btn btn-primary" href="/resume.pdf" target="_blank">Download Résumé</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
