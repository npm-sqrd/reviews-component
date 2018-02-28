import React from 'react';
import Review from './review.jsx';

const ReviewsList = (props) => {
  // map over for each review
  return (
    <tbody>
      {props.reviews.map(review => {
        return (
          <Review reviewEntry={review}/>
        )
      })}
    </tbody>
  );
};

export { ReviewsList };