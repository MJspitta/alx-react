import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("NotificationItem Component", () => {
    it("renders without crashing", () => {
      const wrapper = shallow(<NotificationItem />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders correct html from type="default" and value="test" props', () => {
      const wrapper = shallow(<NotificationItem type="default" value="test" />);
      expect(wrapper.html()).toEqual('<div><li data-notification-type="default">test</li></div>');
    });
  
    it('renders correct html from html="<u>test</u>" props', () => {
      const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
      expect(wrapper.html()).toEqual('<div><li data-urgent="true"><u>test</u></li></div>');
    });
  });