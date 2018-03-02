import React from 'react';
import ReviewEntry from './reviewEntry.jsx';


const ReviewsList = (props) => {

    return (
    <div>
      {props.reviews.map(review => {
        return (
          <ReviewEntry review={review} />
        )
      })}
    </div>
  );
}

export { ReviewsList };