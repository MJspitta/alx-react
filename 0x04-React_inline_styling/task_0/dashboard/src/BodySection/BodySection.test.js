import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe("BodySection component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the correct title in the h2 tag", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find("h2").text()).toEqual("test title");
  });

  it("should render the correct children inside the BodySection", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find("p").text()).toEqual("test children node");
  });
});
