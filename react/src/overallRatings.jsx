import React from 'react';

const OverallRatings = (props) => {
  return (
    <div>
      {props.restaurants.map(restaurant => {
      return (
        <div>
          <div className='restaurantName'>
            {restaurant.restaurantName} Ratings and Reviews
            <div className='overallrating'>
              <span className='graph'>
                <ul className='bargraph'>
                  5<li className="reddeep"></li>
                  4<li className="redpink"></li>
                  3<li className="pink"></li>
                  2<li className="orangered"></li>
                  1<li className="orange"></li>
                </ul>
              </span>
              <span className='ratingNum'>4.5</span>
              <span className='overall'>Overall Rating</span>
              <div className='stars'><span>☆</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className='mood'><span>Food: 4.7</span> | <span>Service: 4.5</span> | <span>Ambience: 4.0</span> | <span>Value: 4.2</span>  <span>Noise: Loud</span></div>
              <div className='recommendText'><i className="glyphicon glyphicon-thumbs-up"></i> 96% would recommend it to a friend</div>
              <div className='reviewsCount'>928 reviews</div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default OverallRatings;
