import { useState } from "react";
import "./FeedBack.css";

export default function FeedBack() {
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleFeedback = (e) => {
    setFeedback(e.target.value.trim());
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFeedback("");
    setRating(5);
  };

  return (
    <div className="container">
      <div className="form">
        <h1>This is feedback form sample</h1>
        <form onSubmit={handleForm}>
          <fieldset className="fields">
            <div className="rating">
              <label htmlFor="range">
                Rating: <RatingStars stars={rating} />{" "}
              </label>
              <input
                type="range"
                name="rating"
                id="range"
                min={0}
                max={10}
                value={rating}
                onChange={handleRating}
              />
            </div>
            <div className="feedback">
              <label htmlFor="area">
                Give Feedback on service: {500 - feedback.length} characters
              </label>
              <textarea
                name="feedback"
                id="area"
                cols="30"
                rows="10"
                value={feedback}
                onChange={handleFeedback}
              ></textarea>
            </div>
            <button disabled={!(feedback.length >= 5)} type="submit">
              Submit Feedback
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

function RatingStars({ stars }) {
  let star = "";

  for (let i = 1; i <= stars; i++) {
    star += "⭐";
  }

  return <span>{star}</span>;
}
