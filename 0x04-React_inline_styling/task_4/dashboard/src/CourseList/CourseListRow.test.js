import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List Row Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">test</th>');
  });

  it("render 2 cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />)
    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
  });
});