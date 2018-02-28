import React from 'react';
import ReviewsList from './reviewsList.jsx';

const Review = (props) => {
  return (
    <tr>
      <td>{props.review.restaurantReviews}</td>
    </tr>
  )
}

export default Review;