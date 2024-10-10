import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Body Section With Margin Bottom component", () => {
  it("apply margin bottom to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual('<div class="bodySection"><h2>test title</h2></div>');
  });
});