import React from 'react';

const OverallRatings = (props) => {
  return (
    <div>{props.restaurants.map(restaurant => {
      return(
        <div>{restaurant.restaurantName} Ratings and Reviews: </div>
        )
      })} 
    </div>   
  )
}

export default OverallRatings;