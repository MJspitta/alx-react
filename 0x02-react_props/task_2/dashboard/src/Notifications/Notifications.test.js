import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { getLatestNotification } from "../utils/utils";


describe("Notifications component", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").children()).toHaveLength(3);
    expect(wrapper.find("ul").childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
    expect(wrapper.find("ul").childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
    expect(wrapper.find("ul").childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });

  it("it renders correct text", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").prop("children")).toBe("Here is the list of notifications");
  });
});