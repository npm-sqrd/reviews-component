import React from 'react';
import axios from 'axios';
import OverallRatings from './overallRatings';
import Restaurants from './restaurants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: [],
    };
    // this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    // this.fetch();
    axios.get(`/restaurants/${this.state.id}`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <OverallRatings restaurants={this.state.data} />
        <Restaurants restaurantsList={this.state.data} />
      </div>
    );
  }
}

export default App;
