import React from 'react';
import ReviewsList from './reviewsList.jsx';

const OverallRatings = (props) => {
    return (
      <div>Overall Rating: {props.rating}</div>
    );
};

export default OverallRatings;