import { PROFILE } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>Designed &amp; built by <a href="#home">{PROFILE.name}</a> with React · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
