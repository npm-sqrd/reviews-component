import React from 'react';
import ReactDOM from 'react-dom';
import { OverallRatings } from './overallRatings.jsx';
import { ReviewsList } from './reviewsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  fetch() {
    $.ajax({
      url: '/data',
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
      },
      error: () => {
        console.log(error);
      }
    });
  }
  
  componentDidMount() {
    this.fetch();
  }



  // handleClick() {
  //   this.setState({
  //     data: data
  //   });
  // }


  render () {
    return (
      <Table>
      <h1>hello</h1>
        <TableHeader>
          <OverallRatings />
        </TableHeader>
      </Table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));