import "./Home.css";
import homebannervideo from './assets/video banner.mp4';
import img1 from './assets/bmw1.jpg';
import img2 from './assets/triumph1.jpg';
import bmw3 from './assets/bmw3.jpg';
import { useNavigate } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";
function Home() {
    const navigate=useNavigate();
  return (
    <>
        <section className="hero">
          <video className="hero-video" autoPlay muted loop >
            <source src={homebannervideo} type="video/mp4" />
          </video>
          <div className="hero-content">
            <p className="hero-label">EXPLORE WITHOUT LIMITS</p>
            <h1>
              Built for Bigger
              <br />
              <span>Horizons.</span>
            </h1>
            <p className="hero-description">
              Discover your next motorcycle adventure.
              Designed for those who dare to go further.
            </p>
          </div>
        </section>
        <div className="home-intro">
            <h1>WELCOME TO THE <span className="ventspan"> VENTURES</span></h1>
            <h2>WHERE EVERY STORY SPARKS A JOURNEY </h2>
        </div>

        <div className="home-bike-container">
          <div className="home-bike-img">
            <div className="bike-card">
              <img src={img1} className="biker-img" alt="Motorcycle" />
              <p>Offering you the perfect ride</p>
            </div>

            <div className="bike-card">
              <img src={img2} className="biker-img" alt="Motorcycle" />
              <p>The experience wrapped in the throttle</p>
            </div>
          </div>
        </div>

        <div className="home-text-img">
            <div className="home-text-img-block">
                <h1>Ventures - one of the most powerful bike showroom </h1>
                <button className="reach-btn" onClick={() => navigate("/contact")} >Reach Us <FaBullhorn/></button>
            </div>
            <img src={bmw3}></img>
        </div>
    </>

  );
}

export default Home;
