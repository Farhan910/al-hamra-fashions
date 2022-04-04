import React from "react";
import Reviews from "../Reviews/Reviews";
import "./Home.css";

const Home = (props) => {
  const {img} = props.dress;
  return (
    <div>
      <div className="home">
        <div className="home-left">
          <h1>
            Hi this is AL - HAMRA <br /> FASHION GALLERY
          </h1>
        </div>

        <div className="home-right">
          <img src={img} alt="" />
        </div>
        
      </div>
      <button className="btn">hire me </button>

      <Reviews></Reviews>
    </div>
  );
};

export default Home;
