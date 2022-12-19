import "../App.css";
import Facebook from "./img/facebook.png";
import Instagram from "./img/Instagram.png";
import GitHub from "./img/GitHub.png"
function Footer() {
  return (
    <footer className="footer">
      <div>
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed/v1/place?q=Vico+Garzia,+Aci+Catena,+CT,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
      <div className="grid">
        <div className="col reveal">
          <h4 className="normal-text tw">Indirizzo</h4>
          <p>
            Aci Catena <br />
            Catania, 95022
          </p>
        </div>
        <div className="col reveal">
          <h4 className="normal-text tw">Email</h4>
          <p>angelo961996@gmail.com</p>
        </div>
        <div className="col reveal">
          <h4 className="normal-text tw">Telefono</h4>
          <p>345-390-1754</p>
        </div>
        <div className="col reveal">
          <h4 className="normal-text tw">Social</h4>
          <div>
            <img src={Facebook} alt="facebook" />
            <a href="https://it-it.facebook.com/angelo.pappalardo.10">
              Facebook
            </a>
          </div>
          <div>
            <img src={Instagram} alt="Instagram" />
            <a href="https://www.instagram.com/angelo_pappalardo96/">
              Instagram
            </a>
          </div>
          <div>
            <img src={GitHub} alt="GitHub" />
            <a href="https://github.com/AngeloPappalardo">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
