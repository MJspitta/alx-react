import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe("App Component", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });

  it("renders a div with class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toBeDefined();
  });

  it("renders a div with class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toBeDefined();
  });

  it("renders a div with class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toBeDefined();
  });
});