export const ReviewsElement = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h5>{review.author}</h5>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default ReviewsElement;
