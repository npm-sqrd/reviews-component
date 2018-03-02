import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import css from './reviews.css';
import OverallRatings from './overallRatings.jsx';
import Restaurants from './restaurants.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      restaurantName: '',
    }
    this.fetch = this.fetch.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }

  fetch() {
    $.ajax({
      url: `/restaurants/90976`,
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

  fetchAll() {
    $.ajax({
      url: '/restaurants',
      method: 'GET',
      // contentType: 'application/json',
      success: (data) => {
        console.log('data ------>', data);
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
    // this.fetchAll();
  }


  render () {
    return (
      <div>
        <h1>Review Component</h1>
        <OverallRatings restaurants={this.state.data}/>
        <Restaurants restaurantsList={this.state.data}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));