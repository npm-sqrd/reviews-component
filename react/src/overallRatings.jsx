import React from 'react';

const OverallRatings = (props) => {
  return (
    <div>
      {props.restaurants.map(restaurant => {
      return(
      <div>
        <div className='restaurantName'>{restaurant.restaurantName} Ratings and Reviews </div>
        <div className='overallrating'>3.0 Overall Rating</div>
      </div>   
        )
      })} 
    </div>
  )
}

export default OverallRatings;