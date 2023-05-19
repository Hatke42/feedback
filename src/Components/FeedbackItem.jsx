import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./FeedbackProvider";

function FeedbackItem({ feedback }) {
  const { handleClose, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      {/* rating */}
      <div className="num-display">{feedback.rating}</div>
      <button
        onClick={() => {
          handleClose(feedback.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(feedback)} className="edit">
        <FaEdit color="purple" />
      </button>
      {/* text */}
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

export default FeedbackItem;
