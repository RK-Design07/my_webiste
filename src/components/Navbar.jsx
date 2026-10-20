import { useState, useEffect } from "react";
import { PROFILE } from "../data.js";

const links = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (const id of links) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) setActive(id);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav>
      <div className="nav-inner">
        <a href="#home" className="logo">&lt;{PROFILE.firstName}<span> /&gt;</span></a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <ul className={"nav-links" + (open ? " open" : "")}>
          {links.map((l) => (
            <li key={l}>
              <a href={"#" + l} className={active === l ? "active" : ""} onClick={() => setOpen(false)}>
                {l[0].toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
          <a className="cta" href="#contact">Hire Me</a>
        </ul>
      </div>
    </nav>
    
  );
}
