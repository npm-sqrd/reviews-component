import React from 'react';
import ReviewsList from './reviewsList';

const Restaurants = props => (
  <div>
    {props.restaurantsList.map(restaurant => <ReviewsList reviews={restaurant.restaurantReviews} id={restaurant.id} />)}
  </div>
);

export default Restaurants;
