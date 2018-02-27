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
      <ReviewsList />
    );
  }
}

export { OverallRatings };