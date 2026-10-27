import "./About.css";
import jawa from "./assets/aboutjawa.png";
import re from "./assets/aboutroyal.avif";
import kawasaki from "./assets/aboutkawasaki.png";
import triumph from "./assets/abouttriumph.webp";
import yamaha from "./assets/aboutyamaha.webp";

function About() {
  return (
    <section className="about-container">
      <div className="brand-card royal-enfield">
        <div className="vertical-line"></div>
        <img src={re} alt="Royal Enfield logo" />
        <div className="brand-info">
          <h2>Royal Enfield</h2>
          <p>
            Royal Enfield is an Indian motorcycle manufacturer
            and a division of Eicher Motors Limited, headquartered
            in Chennai, Tamil Nadu. Founded in 1901 in Redditch,
            England, it is the oldest motorcycle brand in
            continuous production.
          </p>
        </div>
      </div>

      <div className="brand-card jawa">
        <div className="vertical-line"></div>
        <div className="brand-info">
          <h2>JAWA</h2>
          <p>
            Jawa Moto is a historic Czech motorcycle manufacturer
            founded in 1929 by František Janeček in Prague.
            The brand continues its motorcycle manufacturing
            heritage with its distinctive classic styling.
          </p>
        </div>
        <img src={jawa} alt="JAWA logo" />
      </div>

      <div className="brand-card triumph">
        <div className="vertical-line"></div>
        <img src={triumph} alt="Triumph logo" />
        <div className="brand-info">
          <h2>Triumph</h2>
          <p>
            Triumph Motorcycles Limited is a British motorcycle
            manufacturer established in 1983 by John Bloor.
            It continues the Triumph motorcycle lineage, which
            dates back to 1902.
          </p>
        </div>
      </div>

      <div className="brand-card yamaha">
        <div className="vertical-line"></div>
        <div className="brand-info">
          <h2>Yamaha</h2>
          <p>
            Yamaha Motor is a Japanese manufacturer operating
            in motorcycles and marine products. It is known
            for its wide range of motorcycles, from everyday
            rides to high-performance machines.
          </p>
        </div>
        <img src={yamaha} alt="Yamaha logo" />
      </div>

      <div className="brand-card kawasaki">
        <div className="vertical-line"></div>
        <img src={kawasaki} alt="Kawasaki logo" />
        <div className="brand-info">
          <h2>Kawasaki</h2>
          <p>
            Kawasaki Motors produces motorcycles, including
            the Ninja sport-bike series, as well as ATVs and
            personal watercraft. It is part of the wider
            Kawasaki industrial group.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;