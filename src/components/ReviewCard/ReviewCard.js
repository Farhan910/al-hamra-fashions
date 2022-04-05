import React from "react";

const ReviewCard = ({ review }) => {
  const { name, id, img, ratings } = review;
  return (
    <div>
      <div className="card">
        <img className="images" src={img} alt={img} />
        <h2>name: {name}</h2>

        <h3>id: {id}</h3>
        <h4>Ratings : {ratings} stars</h4>
      </div>
    </div>
  );
};

export default ReviewCard;
