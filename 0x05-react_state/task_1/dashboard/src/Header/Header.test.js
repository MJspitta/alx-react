import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe("Header component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("render h1 and img tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toBe(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toBe(true);
  });

});