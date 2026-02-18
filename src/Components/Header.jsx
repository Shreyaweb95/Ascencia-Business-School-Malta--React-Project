import { NavLink } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <nav className="navbar">

      <div className="logo-box">
        <strong>ASCENCIA</strong>
        <span>MALTA</span>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Ascencia Malta</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/living">Living in Malta</NavLink></li>
        <li><NavLink to="/quality">Quality Assurance</NavLink></li>
        <li><NavLink to="/fees">Fees</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
      </ul>

      <NavLink to="/contact" className="contact-btn">
        CONTACT US
      </NavLink>

    </nav>
  );
}
