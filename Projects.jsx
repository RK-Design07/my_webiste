import { PROJECTS } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal><span className="section-tag">03. Projects</span></Reveal>
        <Reveal delay={80}><h2 className="section-title">Selected work.</h2></Reveal>
        <Reveal delay={150}><p className="section-sub">Real projects with real impact — from production SaaS platforms to open-source tooling.</p></Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="proj-card">
                <div className={"proj-banner " + p.banner}>{p.emoji}</div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="proj-links">
                    <a href={p.demo} target="_blank" rel="noreferrer">Live Demo ↗</a>
                    <a href={p.code} target="_blank" rel="noreferrer">&lt;/&gt; Code</a>
                  </div>
                  <div className="chip-row">
                    {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
