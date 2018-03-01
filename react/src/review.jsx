import React from 'react';
import ReviewsList from './reviewsList.jsx';

const Review = (props) => {
  return (
    <tr>
      <td>
        {props.reviewEntry.restaurantReviews.forEach(review => {
          return review.review;
        })
      }
      </td>
    </tr>
  )
}

export default Review;