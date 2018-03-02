import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
<<<<<<< HEAD
import { OverallRatings } from './overallRatings.jsx';
import { ReviewsList } from './reviewsList.jsx';
=======
// import css from './reviews.css';
import OverallRatings from './overallRatings.jsx';
import Restaurants from './restaurants.jsx';

>>>>>>> ReactUpdates

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
<<<<<<< HEAD
          <OverallRatings />

          <table>
            <ReviewsList reviews={this.state.data}/>
          </table>
=======
        <OverallRatings restaurants={this.state.data}/>
        <Restaurants restaurantsList={this.state.data}/>
>>>>>>> ReactUpdates
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));