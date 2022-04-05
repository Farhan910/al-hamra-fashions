import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  const { name, id, img } = review;
  return (
    <div>
      <div className="card">
        <img className="images" src={img} alt={img} />
        <h2>name: {name}</h2>

        <h3>id: {id}</h3>
        <h4>
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStar} />
          <FontAwesomeIcon className="icon-color" icon={faStarHalfStroke} />
        </h4>
      </div>
    </div>
  );
};

export default ReviewCard;
