import React from 'react';

const ReviewEntry = (props) => {
 return (
    <div className='reviewsList'>
      <div className='user'>Username: {props.review.username} (City: {props.review.city})</div>
      <div className='ratings'>Rating: {props.review.rating} Dined on {props.review.dinedDate}</div>
      <div className='review'>Review: {props.review.review}</div>
    </div>
  );

}


export default ReviewEntry;