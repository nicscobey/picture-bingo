import "./home.css";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Nic_image from '../imgs/Nic.jpg'

const Home = () => {
  return (
    <div className="home-page page" id="home">
      <div className="home-left">
        <h1>Nic Scobey</h1>
        <h2 className="hero-text">
          Software Engineer
        </h2>
        <h2 className="hero-text">
          Technical Educator
        </h2>
        <h2 className="hero-text">
          Developer Advocate
        </h2>
        <div className="display-flex">
        <a href="https://drive.google.com/file/d/15yYCde2zrdW2WEYnCpzoU4PUu2m8_cNv/view?usp=sharing" target="_blank">
            <PrimaryButton text={"View Resume"} />
          </a>
          {/* <SecondaryButton text={"hi"} /> */}
        </div>
      </div>
      <div className="home-right"> 
        <div className="blue-box" />
        <div className="yellow-box" />
        <img src={Nic_image} id="home-img"/>
      </div>
    </div>
  );
};

export default Home;
