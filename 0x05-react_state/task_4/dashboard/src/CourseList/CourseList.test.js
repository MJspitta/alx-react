import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the five different rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Foo" />));
    });
    
    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).html()).toEqual("<tr class=\"normal_y7r86x\"><td>ES6</td><td>60</td></tr>");
    expect(wrapper.find("tbody").childAt(1).html()).toEqual("<tr class=\"normal_y7r86x\"><td>Webpack</td><td>20</td></tr>");
    expect(wrapper.find("tbody").childAt(2).html()).toEqual("<tr class=\"normal_y7r86x\"><td>React</td><td>40</td></tr>");
  });

  it("renders correctely when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).html()).toEqual("<tr class=\"normal_y7r86x\"><td>ES6</td><td>60</td></tr>");
    expect(wrapper.find("tbody").childAt(1).html()).toEqual("<tr class=\"normal_y7r86x\"><td>Webpack</td><td>20</td></tr>");
    expect(wrapper.find("tbody").childAt(2).html()).toEqual("<tr class=\"normal_y7r86x\"><td>React</td><td>40</td></tr>");
  });
});