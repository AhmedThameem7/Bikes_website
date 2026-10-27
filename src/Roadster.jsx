import roadsterbannervideo from './assets/video banner.MP4';
import './Roadster.css';
import roadsterbike from './assets/roadsterbike.webp';
import road1 from './assets/road1.png';
import road2 from './assets/road2.webp';
import road3 from './assets/road3.jpg';
import roadsterpart1 from './assets/roadsterdisplay.png';
import roadsterpart2 from './assets/roadsterengine.png';
import roadsterpart3 from './assets/roadsterweight.png';

function Roadster() {
  return (
    <>
      <section className="roadster-banner-container">
        <video className="roadster-banner-video" autoPlay muted loop playsInline>
          <source src={roadsterbannervideo} type="video/mp4" />
        </video>
        <div className="roadster-content">
          <p className="roadster-label">ROADSTER</p>
          <h1>Only for those who <span>Dares</span></h1>
        </div>
      </section>
      <div className="history">
        <div className="roadster-polygon"></div>
        <img src={roadsterbike} alt="Roadster motorcycle" />
        <p>Since 1929, a name that stirred hearts and turned heads. Chosen by those who don’t ride to escape but to feel more alive. Roadster wasn’t just something they rode. It's history with style, power and presence. And that’s roadster for you!</p>
      </div>
      <div className="road_show">
        <div className="road_img1">
          <img src={road1} alt="42 Bobber motorcycle" />
          <h2>42 BOBBER</h2>
        </div>
        <div className="road_img2">
          <img src={road2} alt="42 FJ motorcycle" />
          <h2>42 FJ</h2>
        </div>
      </div>
      <img src={road3} className="road_img3" alt="Roadster motorcycle" />
      <h1 className="perks_roadster">Perks of the Roadster bikes</h1>
      <div className="roadster_parts_container">
        <div className="road_part1">
          <img src={roadsterpart1} alt="LCD display" />
          <h1>LCD Display</h1>
          <p>It shows real-time data like speed, battery level, distance travelled, power consumption, and pedal-assist level. Choosing the right display enhances your riding experience and helps you manage battery life effectively.</p>
        </div>
        <div className="road_part2">
          <img src={roadsterpart2} alt="Twin cylinder engine" />
          <h1>Twin Cylinder Engine</h1>
          <p>The Twin Cylinder engine makes the performance of the bike. This liquid absorbs heat from internal passages and transfers it to a radiator, where airflow dissipates the thermal energy before the fluid returns to the engine.</p>
        </div>
        <div className="road_part3">
          <img src={roadsterpart3} alt="Big motorcycle tyres" />
          <h1>Big Tyres</h1>
          <p>It has big size of 1200 mm of tyre size which increases the stability of the bike to the next level. Bigger the size more the stability of bike. Stability will make the bike to ride balancly without any distortion on the road side of the travel.</p>
        </div>
      </div>
    </>
  );
}

export default Roadster;
