import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFooterCopy, getFullYear } from '../utils/utils';


describe("footer component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});