import sportsvideobanner from './assets/video banner sports.webm';
import './Sports.css';
import sportsbike from './assets/sportsbike.jpg';
import aprilla1 from './assets/aprilla1.webp';
import aprilla2 from './assets/aprilla2.webp';
import aprilla3 from './assets/aprilla3.webp';
import sportspart1 from './assets/sportsbrake.png';
import sportspart2 from './assets/sportsengine.png';
import sportspart3 from './assets/sportsquickshifter.png';

function Sports() {
  return (
    <>
      <section className="sports-banner-container">
        <video className="sports-banner-video" autoPlay muted loop playsInline>
          <source src={sportsvideobanner} type="video/webm" />
        </video>
        <div className="sports-content">
          <p className="sports-label">SPORTS</p>
          <h1>Feel the <span>Speed</span> Own the Road</h1>
        </div>
      </section>
      <section className="sportsbike_container1">
        <img src={sportsbike} alt="Sports motorcycle" />
        <h1>Feel the <span>Adrenaline</span> Rush through the throttle</h1>
      </section>
      <section className="aprilla_container">
        <img src={aprilla2} className="aprimg2" alt="Aprilia sports motorcycle" />
        <div className="aprilla_container_inside">
          <img src={aprilla1} className="aprimg1" alt="Sports motorcycle detail" />
          <img src={aprilla3} className="aprimg3" alt="Sports motorcycle detail" />
        </div>
      </section>
      <h1 className="perks_sports">PERFORMANCE THAT MATTERS</h1>
      <section className="sports_parts_container">
        <div className="sports_part1">
          <img src={sportspart1} alt="Advanced brakes" />
          <div className="sports_part_text">
            <span>01 / CONTROL</span>
            <h1>Advanced Brakes</h1>
            <p>Twin disc brakes make the bike stop in a fraction of a second. This system converts kinetic energy into heat energy, allowing effective deceleration and superior heat dissipation compared to drum brakes.Twin disc brakes deliver reliable stopping power and better control at high speeds. They help convert the motorcycle’s kinetic energy into heat through friction, allowing the bike to slow down effectively. Their larger braking surface helps manage heat during repeated braking, while providing a more confident and controlled riding experience.</p>
          </div>
        </div>
        <div className="sports_part2">
          <img src={sportspart2} alt="Liquid cooled engine" />
          <div className="sports_part_text">
            <span>02 / POWER</span>
            <h1>Liquid Cooled Engine</h1>
            <p>The liquid cooled engine improves bike performance. Coolant absorbs heat from internal passages and transfers it to a radiator, where airflow dissipates the thermal energy before the fluid returns to the engine.</p>
          </div>
        </div>
        <div className="sports_part3">
          <img src={sportspart3} alt="Quick shifter" />
          <div className="sports_part_text">
            <span>03 / PRECISION</span>
            <h1>Quick Shifter</h1>
            <p>A quick shifter allows faster gear changes with minimal interruption to power delivery, helping create a smoother and more responsive sports riding experience.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sports;
