import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../react/src/app.jsx';
// import OverallRatings from '../react/src/overallRatings.jsx';
// import Restaurants from '../react/src/restaurants.jsx';
// import ReviewsList from '../react/src/reviewsList.jsx';

Enzyme.configure({ adapter: new Adapter() });

function setupApp() {
  const props = {placeholder: 'test', value: 'test value' };
  const enzymeWrapper = shallow(<App {...props} />);

  return { enzymeWrapper, props}
}

describe('App Component', () => {
  test('should render correctly', () => {
    expect(Enzyme.shallow(<App />)).toMatchSnapshot();
  });
});
