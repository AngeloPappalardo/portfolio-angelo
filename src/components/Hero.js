import background from "./img/img-portfolio.png"
import img from "./img/angelo.png"
import "../App.css";
import LightSpeed from "react-reveal/LightSpeed"
function Hero() {
  return (
    <section id="home">
      <div className="hero" style={{background: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div className="container-img"><img src={img} alt="angelo" /></div>
      <div className="hero__content reveal">
        <LightSpeed left>
        <p className="intro-text">Junior Developer</p>
        <h1 className="big-text">Pappalardo Angelo</h1>
        </LightSpeed>
      </div>
    </div>
    </section>
  );
}
export default Hero;
