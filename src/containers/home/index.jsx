import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import Bhavya from "../../images/Bhavya_bansalScreenshot_2024-11-24_130754-removebg-preview.png"

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div id="Div">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Bhavya Bansal
          <br />
          Chief Technology Officer 
          <br />
          @Persist Venture
        </h1>
      </div>


      <div id="image-Bhavya">
        <img src={Bhavya} alt="" />
      </div>
      </div>


      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
