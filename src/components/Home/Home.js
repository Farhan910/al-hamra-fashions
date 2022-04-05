import React from "react";
import "./Home.css";
import pic from "../../../src/img/image.jpg";
import HomeReview from "../HomeReview/HomeReview";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div>
          <h1 className="home-left">
            AL - HAMRA <br /> FASHION GALLERY
          </h1>
          <h4 className="container ms-5">This website contains the price of each dress and the rules <br/> of how to order it. We have all kinds of high quality dresses, <br/>  which are not available anywhere else.This dress works really well</h4>
        </div>

        <div className="home-right mt-5">
          <img src={pic} alt="" />
        </div>
      </div>

      <div>
        <h2 className=" review-container  text-center">Reviews</h2>
      </div>
      <HomeReview></HomeReview>

      <button
        onClick={() => navigate("/reviews")}
        className="btn btn-success ms-5"
      >
       See All Reviews
      </button>
    </div>
  );
};

export default Home;
