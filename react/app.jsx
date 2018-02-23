import React from 'react';
import ReactDOM from 'react-dom';
import { overallRatings } from './overallRatings.jsx';
import { reviewsList } from './reviewsList.jsx';
import { review } from './review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Helloo
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));