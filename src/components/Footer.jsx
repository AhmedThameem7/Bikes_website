import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" >
            <img className="footer-logo" src={logo}/>
          </Link>

          <p>
            Built for bigger horizons.
            Discover motorcycles that inspire
            every journey and adventure.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram size={19} />
            </a>

            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebookF size={19} />
            </a>

            <a href="https://www.youtube.com/" aria-label="YouTube">
              <FaYoutube size={19} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Motorcycles</h3>
          <Link to="/adventure">Adventure</Link>
          <Link to="/roadster">Roadster</Link>
          <Link to="/sports">Sports</Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-cta">
          <p className="footer-label">YOUR NEXT JOURNEY STARTS HERE</p>
          <h2>Find your<br />next adventure.</h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TERRA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
