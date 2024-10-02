import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("Course List component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the five different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
    
    expect(wrapper.find("tbody").children()).toHaveLength(3);
    wrapper.find("tbody").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
  });
});