import { SKILLS } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal><span className="section-tag">02. Skills</span></Reveal>
        <Reveal delay={80}><h2 className="section-title">My tech arsenal.</h2></Reveal>
        <Reveal delay={150}><p className="section-sub">A balanced toolkit across the entire stack — chosen for reliability, performance, and developer joy.</p></Reveal>
        <div className="skills-wrap">
          {SKILLS.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="skill-card">
                <h3><span className="icon">{s.icon}</span>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="chip-row">
                  {s.items.map((it) => <span key={it} className={"chip " + s.color}>{it}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
