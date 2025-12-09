import { NavLink } from "react-router-dom";
import "./Nav.css";

export function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-links">
        <a href="#home"> Home</a>|
        <a href="#projects"> Projects</a>|
        <a href="#about"> About</a>
      </div>
      <div className="Nav-spacer" />
      <a href="/myPortfolio/Resume - Noam SABBAN.pdf" download>
        <button type="button">Download my Resume</button>
      </a>
    </div>
  );
}
