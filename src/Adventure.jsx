import adventurebannervideo from './assets/advbannervideo.webm';
import './Adventure.css';
import advbikeimg2 from './assets/bmw2.jpg';
import advbikeimg1 from './assets/honda.jpg';
import advvert1 from './assets/advvert1.webp';
import advvert2 from './assets/advvert2.webp';
import adventureparts1 from './assets/adventurebrake.webp';
import adventureparts2 from './assets/adventureengine.webp';
import adventureparts3 from './assets/adventurelight.webp';

function Adventure() {
  return (
    <>
      <section className="adventure-banner-container">
        <video className="adv-banner-video" autoPlay muted loop>
          <source src={adventurebannervideo} type="video/webm" />
        </video>
        <div className="adv-content">
          <h1 className="adv-label">ADVENTURE</h1>
          <p>This is for Adventurous Roads</p>
        </div>
      </section>
      <div className="shape-container">
        <div className="adv-bike-feature">
          <div className="polygon-shape"></div>
          <img src={advbikeimg1} className="bike-imgadv" alt="Motorcycle" />
        </div>
        <h1>Wanna Experience the<br />Adventure with us?</h1>
      </div>
      <div className="advbike2container">
        <img src={advbikeimg2} className="advbikeimg2" alt="Adventure motorcycle" />
        <h1>Explore the<br />mountains<br />with our bikes</h1>
      </div>
      <div className="adv-bike-container">
        <div className="adv-bike-img">
          <div className="adv-bike-card">
            <img src={advvert1} className="adv-biker-img" alt="Adventure motorcycle" />
            <div className="adv-bike-overlay">
              <p>Ride without us is nothing</p>
            </div>
          </div>
          <div className="adv-bike-card">
            <img src={advvert2} className="adv-biker-img" alt="Motorcycle riding experience" />
            <div className="adv-bike-overlay">
              <p>Enjoy the adventure in every seconds</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="perks">Perks of the Adventure bikes</h1>
      <div className="adventure_parts_container">
        <div className="adv_part1">
          <img src={adventureparts1} alt="Advanced brakes" />
          <h1>Advanced Brakes</h1>
          <p>Twin disc brakes make the bike to stop in fraction of seconds.This system converts the kinetic energy into heat energy, and allowing for the effective deceleration and superior heat dissipation compared to drum brakes.</p>
        </div>
        <div className="adv_part2">
          <img src={adventureparts2} alt="Liquid cooled engine" />
          <h1>Liquid Cooled Engine</h1>
          <p>The liquid cooled engine increase the performance of bike.This liquid absorbs heat from internal passages and transfers it to a radiator, where airflow dissipates thermal energy before the fluid returns to the engine.</p>
        </div>
        <div className="adv_part3">
          <img src={adventureparts3} alt="Twin powerful headlights" />
          <h1>Twin powerful head light</h1>
          <p>The twin head light make the visibility of the road. Dual headlights offer three-dimensional visibility, helping drivers better judge distance and speed, though some note they can be mistaken for distant cars.</p>
        </div>
      </div>
    </>
  );
}

export default Adventure;