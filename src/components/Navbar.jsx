import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png';
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/"  onClick={() => setOpen(false)}>
        <img className="logo" src={logo}/>
      </Link>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${open ? "show" : ""}`}>

        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="/adventure" onClick={() => setOpen(false)}>
          Adventure
        </Link>

        <Link to="/roadster" onClick={() => setOpen(false)}>
          Roadster
        </Link>

        <Link to="/sports" onClick={() => setOpen(false)}>
          Sports
        </Link>

        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>

        <Link
          to="/contact"
          className="contact-btn"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
