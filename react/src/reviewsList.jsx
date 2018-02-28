import React from 'react';
import Review from './review.jsx';

const ReviewsList = (props) => {
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

export default ReviewsList;