import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("Notification Item component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders correct html by passing dummy", () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it("renders correct html from test props", () => {
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>')
  });
});

describe("onclick event acts as it should", () => {
  it("should call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();
    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();
  });
});