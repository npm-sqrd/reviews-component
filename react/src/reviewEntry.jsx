import React from 'react';

const ReviewEntry = (props) => {
  return (
    <div>
      <div className="ratings">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>|
        Rating: {props.review.rating} | Username: {props.review.username} | City: {props.review.city} | Dined on {props.review.dinedDate.slice(0, 10)}
      </div>
      <div className="review">
          {props.review.review}
        <div className="wasThisUseful">Was this review useful to you?<span> Yes. No. Report</span></div>
      </div>
    </div>
  );
};

export default ReviewEntry;
