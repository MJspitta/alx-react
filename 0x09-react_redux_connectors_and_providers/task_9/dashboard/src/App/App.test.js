/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import { createStore } from "redux";
import uiReducer from "../reducers/uiReducer";

describe("App Test", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const store = createStore(uiReducer);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("Renders App Component without crashing", () => {
    expect(wrapper.exists());
  });

  it("App component contains the Notification Component", () => {
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("App component contains the Header Component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it("App component contains the Login Component", () => {
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("App component contains the Footer Component", () => {
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("<App />", () => {
  it("mapStateToProps returns the right object when the user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
});

// const listCourses = [
//   { id: 1, name: "ES6", credit: 60 },
//   { id: 2, name: "Webpack", credit: 20 },
//   { id: 3, name: "React", credit: 40 },
// ];

// const listNotifications = [
//   { id: 1, type: "default", value: "New course available" },
//   { id: 2, type: "urgent", value: "New resume available" },
//   { id: 3, type: "urgent", html: getLatestNotification() },
// ];

// beforeAll(() => {
//   // Mock the alert function
//   window.alert = jest.fn();

//   StyleSheetTestUtils.suppressStyleInjection();
// });

// afterAll(() => {
//   // Restore the original alert function
//   window.alert.mockRestore();

//   StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
// });

// describe("rendering components", () => {
//   it("renders App component without crashing", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.exists()).toBe(true);
//   });

//   it("contains Notifications component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.find(Notifications)).toHaveLength(1);
//   });

//   it("contains Header component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<Header />)).toBe(true);
//   });

//   it("contains Login component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.find(Login)).toHaveLength(1);
//   });

//   it("contains Footer component", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<Footer />)).toBe(true);
//   });

//   it("checks CourseList is not rendered", () => {
//     const wrapper = shallow(<App />);

//     expect(wrapper.contains(<CourseList />)).toBe(false);
//   });
// });

// describe("when isLogged in is true", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.state().user).toEqual(user);

//   it("checks Login is not rendered", () => {
//     expect(wrapper.contains(<Login />)).toBe(false);
//   });

//   it("checks CourseList is rendered", () => {
//     expect(wrapper.find(CourseList)).toHaveLength(0);
//   });

//   it(`Tests that the logIn function updates user's state correctly`, () => {
//     const wrapper = mount(
//       <AppContext.Provider value={{ user, logOut }}>
//         <App />
//       </AppContext.Provider>
//     );

//     const myUser = {
//       email: "testy@gmail.com",
//       password: "testy",
//       isLoggedIn: true,
//     };

//     expect(wrapper.state().user).toEqual(user);
//     const instance = wrapper.instance();
//     instance.logIn(myUser.email, myUser.password);
//     expect(wrapper.state().user).toEqual(myUser);
//     wrapper.unmount();
//   });

//   it(`Tests that the logOut function updates user's state correctly`, () => {
//     const wrapper = mount(
//       <AppContext.Provider value={{ user, logOut }}>
//         <App />
//       </AppContext.Provider>
//     );

//     const myUser = {
//       email: "testy@gmail.com",
//       password: "testy",
//       isLoggedIn: true,
//     };

//     expect(wrapper.state().user).toEqual(user);
//     const instance = wrapper.instance();
//     instance.logOut();
//     expect(wrapper.state().user).toEqual(user);
//     wrapper.unmount();
//   });
// });

// describe("testing state of App.js", () => {
//   it("displayDrawer initial value should be set to false", () => {
//     const wrapper = mount(<App />);

//     expect(wrapper.state().displayDrawer).toBe(false);
//   });

//   it("should set displayDrawer to true after calling handleDisplayDrawer", () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleDisplayDrawer();

//     expect(wrapper.state().displayDrawer).toBe(true);
//   });

//   it("should set displayDrawer to false after calling handleHideDrawer", () => {
//     const wrapper = shallow(<App />);
//     wrapper.instance().handleHideDrawer();

//     expect(wrapper.state().displayDrawer).toBe(false);
//   });
// });

// describe("markNotificationAsRead works as intended", () => {
//   it(`verify that markNotificationAsRead works as intended, deletes the notification with the passed id from the listNotifications array`, () => {
//     const context = {
//       user: {
//         ...user,
//       },
//       logOut: jest.fn(),
//       listNotifications: [
//         { id: 1, type: "default", value: "New course available" },
//         { id: 2, type: "urgent", value: "New resume available" },
//         { id: 3, html: { __html: jest.fn() }, type: "urgent" },
//       ],
//     };

//     const wrapper = mount(
//       <AppContext.Provider value={context}>
//         <App />
//       </AppContext.Provider>
//     );

//     const instance = wrapper.instance();

//     instance.markNotificationAsRead(3);

//     expect(wrapper.state().listNotifications).toEqual([
//       { id: 1, type: "default", value: "New course available" },
//       { id: 2, type: "urgent", value: "New resume available" },
//     ]);

//     expect(wrapper.state().listNotifications.length).toBe(2);
//     expect(wrapper.state().listNotifications[3]).toBe(undefined);

//     wrapper.unmount();
//   });
// });
