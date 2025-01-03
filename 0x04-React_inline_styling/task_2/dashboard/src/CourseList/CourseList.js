import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.tableStyle)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  tableStyle: {
    margin: "2em auto 15em",
    width: "100%",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
  },
  th: {
    borderBottom: "1px solid #ddd",
    width: "70%",
  },
  td: {
    width: "70%",
  },
  tr: {
    ":nth-child(2)": {
      textAlign: "left",
    },
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;