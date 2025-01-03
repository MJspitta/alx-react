import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <>
        {type && value ? <li className={type === "default" ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
        {html ? <li className={css(styles.urgent)} onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
    marginBottom: "4px",
  },
  urgent: {
    color: "red",
    marginBottom: "4px",
  },
});


NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0
};

export default NotificationItem;