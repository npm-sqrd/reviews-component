import React from 'react';
import ReviewsList from './reviewsList.jsx';

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
}

export { OverallRatings };