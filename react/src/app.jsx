import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { OverallRatings } from './overallRatings.jsx';
import { ReviewsList } from './reviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetch(callback) {
    $.ajax({
      url: '/restaurants/:id/reviews',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        callback(data);
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
      <div>
        <h1>Review Component</h1>
          <OverallRatings />

          <table>
            <ReviewsList reviews={this.state.data}/>
          </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));