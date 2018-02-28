import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import css from './reviews.css';
import OverallRatings from './overallRatings.jsx';
import ReviewsList from './reviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      restaurantName: '',
    }
  }

  fetch(callback) {
    $.ajax({
      url: '/restaurants/:id',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        // callback(data);
        this.setState({
          data: data,
        })
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  componentDidMount() {
    this.fetch();
  }


  render () {
    return (
      <div className='app'>
        <h1>Review Component</h1>
          <div>{this.state.restaurantName} Ratings and Reviews:</div>
          <OverallRatings ratings={this.state.data}/>

          Reviews:
          <table>
            <ReviewsList reviews={this.state.data}/>
          </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));