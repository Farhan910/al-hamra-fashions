import React from "react";
import "./Home.css";
import pic from "../../../src/img/image.jpg";
import HomeReview from "../HomeReview/HomeReview";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="mb-5">
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

      <HomeReview></HomeReview>

      <button onClick={() => navigate("/reviews")} className="btn btn-success">Reviews</button>
    </div>
  );
};

export default Home;
