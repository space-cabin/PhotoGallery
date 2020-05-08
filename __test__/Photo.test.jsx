import React from 'react';
import { shallow, mount } from 'enzyme';

import Photo from '../client/components/Photo';
import { photos } from './mock';

// 14 photos in mock obj
describe('<App />', () => {
  it('should set the background image as given url', () => {
    let url = 'https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/210.jpg';
    let wrapper = shallow(<Photo className="photo-0" photo={photos[0]} />);
    expect(wrapper.find('.photo-0').html()).toBe(`<div class="photo-0" style="background-image:url(${url})"></div>`);
    
    url = 'https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/96.jpg';
    wrapper = shallow(<Photo className="photo-1" photo={photos[1]} />);
    expect(wrapper.find('.photo-1').html()).toBe(`<div class="photo-1" style="background-image:url(${url})"></div>`);
  });
});
