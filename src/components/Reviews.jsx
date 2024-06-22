import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "./services/api";
import ReviewsElement from "./ReviewsElement";

export const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchReviews(moviesId);
      console.log(data);
      setReviews(data);
    };
    getReviews();
  }, [moviesId]);

  if (!reviews) return <h2>Loading...</h2>;

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsElement reviews={reviews} />
      ) : (
        <p className="text-sky-500">
          Sorry, we don`t have any reviews for this movie
        </p>
      )}
    </>
  );
};
export default Reviews;
