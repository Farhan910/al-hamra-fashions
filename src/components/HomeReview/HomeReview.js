import useReviews from "../Hooks/Hooks";
import ReviewCard from "../ReviewCard/ReviewCard";

import "./HomeReview.css";

const HomeReview = () => {
  const [reviews] = useReviews();
  

  return (
    <div className="home-review">
      {reviews.slice(0,3).map((review) => (
        <ReviewCard key={review.id} review={review}/>
      ))}
    </div>
  );
};

export default HomeReview;
