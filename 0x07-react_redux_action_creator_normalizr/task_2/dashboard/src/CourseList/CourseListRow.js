import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const styleRow = isHeader ? { backgroundColor: '#deb5b545' } : { backgroundColor: '#f5f5f5ab' };
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    setChecked(!checked);
  };

  return (
    <tr style={styleRow} className={checked ? css(styles.rowChecked) : ""}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(styles.thcenter)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.td)}>
            <input type="checkbox" onChange={handleCheckChange} />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const styles = StyleSheet.create({
  thcenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: 3,
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow;