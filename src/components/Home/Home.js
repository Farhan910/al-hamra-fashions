import React from "react";
import "./Home.css";
import pic from "../../../src/img/image.jpg";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  
  
  return (
    <div>
      <div className="home">
        <div className="home-left">
          <h1>
            Hi this is AL - HAMRA <br /> FASHION GALLERY
          </h1>
          
        </div>

        <div className="home-right">
          <img src={pic} alt="" />
        </div>
        
      </div>
      <button className="btn">hire me </button>
      

      <HomeReview></HomeReview>

      
    </div>
  );
};

export default Home;
