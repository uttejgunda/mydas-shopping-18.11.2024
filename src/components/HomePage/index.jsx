import NavBar from "../NavBar";
import "./index.css";

const HomePage = () => (
  <>
    <NavBar />
    <div className="home-con">
      <div className="home-desc-content">
        <h1>
          Clothes That Get YOU
          <br />
          Noticed
        </h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button>Shop Now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="man-sitting"
      />
    </div>
  </>
);

export default HomePage;
