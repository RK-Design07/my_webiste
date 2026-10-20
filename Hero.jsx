import { useState, useEffect } from "react";
import { PROFILE } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = PROFILE.roles[roleIdx];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        setTyped(full.slice(0, typed.length + 1));
        if (typed.length + 1 === full.length) setTimeout(() => setDeleting(true), 1600);
      } else {
        setTyped(full.slice(0, typed.length - 1));
        if (typed.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % PROFILE.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <Reveal>
          <div className="hero-badge"><span className="pulse-dot"></span> Available for new projects</div>
        </Reveal>
        <Reveal delay={100}>
          <h1>Hi, I'm <span className="grad">{PROFILE.name}</span><br />I build things for the web.</h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="hero-role"><span className="typed">{typed}</span><span className="cursor">&nbsp;</span></div>
        </Reveal>
        <Reveal delay={300}>
          <p className="lead">Full stack developer crafting performant, scalable applications — from elegant React interfaces to resilient cloud backends. Let's turn your idea into production-ready software.</p>
        </Reveal>
        <Reveal delay={400}>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
        </Reveal>
        <Reveal delay={500}>
          <div className="socials">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" title="GitHub">⌥</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">in</a>
            <a href={PROFILE.twitter} target="_blank" rel="noreferrer" title="Twitter">𝕏</a>
            <a href={"mailto:" + PROFILE.email} title="Email">✉</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
