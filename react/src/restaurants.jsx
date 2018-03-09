import React from 'react';
import ReviewsList from './reviewsList.jsx';

const Restaurants = (props) => {
  return (
    <div>
      {props.restaurantsList.map(restaurant => {
        return (
          <ReviewsList reviews={restaurant.restaurantReviews} />
        )
      })}
    </div>
  );
};

export default Restaurants;
