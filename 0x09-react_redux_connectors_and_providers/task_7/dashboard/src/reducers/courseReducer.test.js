import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActionTypes";
import { coursesNormalizer } from "../schema/courses";
import { Map } from "immutable";

describe("Testing courseReducer", () => {
  it("Test that the default state returns an empty array", () => {
    const res = courseReducer();
    expect(res.toJS()).toStrictEqual([]);
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const action = {
      type: actions.FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    };
    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];
    const res = courseReducer(undefined, action);
    expect(res.toJS()).toStrictEqual(expected);
  });

  it("Test that SELECT_COURSE returns the data with the right item updated", () => {
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expected = coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ]);
    const state = Map(
      coursesNormalizer([
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: true,
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40,
        },
      ])
    );
    const res = courseReducer(state, action);
    expect(res.toJS()).toStrictEqual(expected);
  });

  it("Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    const action = {
      type: actions.UNSELECT_COURSE,
      index: 1,
    };

    const expected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const state = Map(
      coursesNormalizer([
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40,
        },
      ])
    );

    const res = courseReducer(state, action);
    expect(res.toJS()).toStrictEqual(expected);
  });
});
