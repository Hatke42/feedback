import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({ item: {}, edit: false });
  const [isLoading, setIsloading] = useState(true);
  //update feedback
  const updateFeedback = async (id, updatedItem) => {
    const item = await (
      await fetch(`/feedbacks/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      })
    ).json();
    console.log(item);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedbacks?_sort=id&_order=desc");
    const data = await response.json();
    setFeedback(data);
    setIsloading(false);
  };

  const handleClose = async (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      await fetch(`feedbacks/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    // newFeedback.id = uuidv4();
    console.log(newFeedback);
    const response = await fetch("/feedbacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    console.log(data);
    setFeedback([data, ...feedback]);
  };

  const handleEdit = (feedback) => {
    setEditFeedback({
      item: feedback,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleClose,
        addFeedback,
        handleEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
