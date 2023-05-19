import { useContext } from "react";
import FeedbackContext from "./FeedbackProvider";

function FeedbackStats() {
  const { feedback: feedbacks } = useContext(FeedbackContext);
  const calcAvgRating = () => {
    let average =
      feedbacks.reduce((prev, curr) => prev + curr.rating, 0) /
      feedbacks.length;
    return average.toFixed(1);
  };
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating : {calcAvgRating()}</h4>
    </div>
  );
}

export default FeedbackStats;
