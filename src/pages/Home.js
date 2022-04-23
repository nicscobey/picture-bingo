import "./home.css";

const Home = () => {
  return (
    <div className="home-page page">
      <div className="hero">
        <h1 className="hero-text">
          FIRSTNAME LASTNAME
          <h3 className="hero-title">Software Engineer</h3>
          {/* <div className="learn-more">Learn more</div> */}
        </h1>
        <div class="wrap">
          <button class="button">Learn More</button>
        </div>
        <a href="#" class="animated-button6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Button10
        </a>
      </div>
    </div>
  );
};

export default Home;
