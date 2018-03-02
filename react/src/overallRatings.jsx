import React from 'react';

<<<<<<< HEAD
class OverallRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  } 



  render() {
    return (
      <div>
        Restaurant's Ratings and Reviews:
        Overall Rating:
      </div>
    );
  };
=======
const OverallRatings = (props) => {
  return (
    <div>{props.restaurants.map(restaurant => {
      return(
        <div>{restaurant.restaurantName} Ratings and Reviews: </div>
        )
      })} 
    </div>   
  )
>>>>>>> ReactUpdates
}

export { OverallRatings };