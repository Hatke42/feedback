import { useEffect, useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackRating from "./FeedbackRating";
import FeedbackContext from "./FeedbackProvider";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, editFeedback, updateFeedback } =
    useContext(FeedbackContext);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const buttonDisabled = (btnDisabled = true, msg) => {
    setIsDisabled(btnDisabled);
    setMessage(msg);
  };

  const addNewFeedback = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (editFeedback.edit) {
        updateFeedback(editFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setRating(null);
    }
  };

  useEffect(() => {
    const textLen = text?.trim().length;
    if (textLen > 0 && textLen < 10) {
      buttonDisabled(true, "Please enter atleast 10 characters");
    } else {
      textLen && buttonDisabled(false, null);
    }
  }, [text]);

  useEffect(() => {
    if (editFeedback.edit) {
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  return (
    <Card>
      <h2>How would you like to rate us ?</h2>
      <FeedbackRating select={setRating} selected={rating} />
      <form onSubmit={addNewFeedback}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write your review :)"
            value={text}
          />
          <Button type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}

export default FeedbackForm;
