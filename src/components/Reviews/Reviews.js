import React from "react";
import useReviews from "../Hooks/Hooks";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [reviews] = useReviews();

  return (
    <div className="review">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review}/>
      ))}
    </div>
  );
};

export default Reviews;
