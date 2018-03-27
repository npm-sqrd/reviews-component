import React from 'react';
import ReviewEntry from './reviewEntry';

const ReviewsList = props => (
  <div>
    {props.reviews.map(review => <ReviewEntry review={review} id={review.id} />)}
  </div>
);

export default ReviewsList;
