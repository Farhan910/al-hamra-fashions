import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { name, img, reviews } = review;
  return (
    <div>
      <div className="card">
        <img className="images" src={img} alt={img} />
        <h2>Name: {name}</h2>

        <h4>
          Ratings :
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStarHalfStroke} />
        </h4>
        <p>Comment : {reviews}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
