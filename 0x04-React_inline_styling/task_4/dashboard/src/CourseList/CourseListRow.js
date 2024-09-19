import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    const styleRow = isHeader ? { backgroundColor: '#deb5b545' } : { backgroundColor: '#f5f5f5ab' };

    return (
        <tr style={styleRow}>
            {isHeader ? (
                textSecondCell === null ? (
                    <th className={css(styles.th)} colSpan={2}>{textFirstCell}</th>
                ) : (
                    <>
                        <th className={css(styles.alLeft)}>{textFirstCell}</th>
                        <th className={css(styles.alLeft)}>{textSecondCell}</th>
                    </>
                )
            ) : (
                <>
                    <td className={css(styles.td)}>{textFirstCell}</td>
                    <td className={css(styles.td)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
};

const styles = StyleSheet.create({
    th: {
        borderBottom: "2px solid #d3d3d3",
    },
    alLeft: {
        textAlign: "left",
    },
    td: {
        padding: "8px 0",
    },
});

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;