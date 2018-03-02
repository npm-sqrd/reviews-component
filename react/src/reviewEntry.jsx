import React from 'react';

const ReviewEntry = (props) => {
 return (
    <div>
      <div>Username: {props.review.username}</div>
      <div>City: {props.review.city}</div>
      <div>Dined Date: {props.review.dinedDate}</div>
      <div>Review: {props.review.review}</div>
    </div>
  );

}


export default ReviewEntry;