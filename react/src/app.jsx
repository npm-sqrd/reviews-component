import React from 'react';
import $ from 'jquery';
import OverallRatings from './overallRatings.jsx';
import Restaurants from './restaurants.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: [],
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const env = process.env.aws ? process.env.aws : '';
    $.ajax({
      url: `${env}/restaurants/${this.state.id}`,
      method: 'GET',
      success: (data) => {
        this.setState({
          data: data,
        });
      },
      error: (error) => {
        console.log('error: ', error);
      },
    });
  }


  render() {
    return (
      <div className='appBox'>
        <OverallRatings restaurants={this.state.data} />
        <Restaurants restaurantsList={this.state.data} />
      </div>
    );
  }
}

export default App;
