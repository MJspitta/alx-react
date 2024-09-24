import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';


describe("Notifications component", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li")).toHaveLength(3);
  });

  it("it renders correct text", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
});