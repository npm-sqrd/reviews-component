import React from 'react';
import ReviewsList from './reviewsList';

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
