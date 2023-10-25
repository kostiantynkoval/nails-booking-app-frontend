import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

export const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const submitReview = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }

  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          How would you rate the overall experience?
        </h3>
        <div>
          {
            [1,2,3,4,5].map(index => (
              <button
                key={index}
                type="button"
                className={`${index <= ((rating && hover) || hover) ? 'text-yellowColor' : 'text-gray-400'}
                            bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar/>
              </button>
            ))
          }
        </div>
      </div>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your feedback or suggestions
        </h3>
        <textarea
          className="border border-solid border-[#0066FF34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          name="feedbackMessage"
          id="feedbackMessage"
          rows={5}
          onChange={e => setReviewText(e.target.value)}
        />
      </div>
      <button type="submit" className="btn" onClick={submitReview}>
        Submit Feedback
      </button>
    </form>
  );
};