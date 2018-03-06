import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';
import OverallRatings from './overallRatings.jsx';
import Restaurants from './restaurants.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: []
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    $.ajax({
      url: `http://localhost:3000/restaurants/${this.state.id}`,
      method: 'GET',
      success: (data) => {
        console.log('data: ', data);
        this.setState({
          data: data,
        })
      },
      error: (error) => {
        console.log('error: ', error);
      }
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render () {
    return (
      <div>
        <OverallRatings restaurants={this.state.data}/>
        <Restaurants restaurantsList={this.state.data}/>
      </div>
    );
  }
}

export default App;
