import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
    return (
        <table id='CourseList' className={css(styles.courseList)}>
            <thead>
                <CourseListRow textFirstCell="Available couses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length === 0 ? (
                    <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                ) : (
                    listCourses.map((course) => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                    ))
                )}
                {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}
            </tbody>
        </table>
    );
};

const styles = StyleSheet.create({
    courseList: {
        width: "90%",
        border: "1px solid #d3d3d3",
        margin: "2rem auto",
    },
});

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;