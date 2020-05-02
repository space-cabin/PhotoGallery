import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import App from '../client/components/App.jsx';

describe('<App />', () => {
  it('renders at least five <Photo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Photo).length >= 5).to.equal(true);
  });
});
