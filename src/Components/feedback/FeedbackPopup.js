import React, { useState } from "react";
import "./feedbackPopup.css";

const FeedbackPopup = ({ isOpen, onClose, onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState("");

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3>Submit Your Feedback</h3>
        <textarea
          placeholder="Tell us how to improve..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <div className="popup-buttons">
          <button onClick={() => onSubmitFeedback(feedback)}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;
