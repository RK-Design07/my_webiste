import { EXPERIENCE } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal><span className="section-tag">04. Experience</span></Reveal>
        <Reveal delay={80}><h2 className="section-title">Where I've worked.</h2></Reveal>
        <Reveal delay={150}>
          <div className="timeline" style={{ marginTop: 40 }}>
            {EXPERIENCE.map((e) => (
              <div className="t-item" key={e.company}>
                <span className="t-date">{e.period}</span>
                <h3>{e.role}</h3>
                <h4>{e.company}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
