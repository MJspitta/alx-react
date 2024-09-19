import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import './Notifications.css';
import PropTypes from 'prop-types';


class NotificationItem extends React.PureComponent {
    render() {
        const { type, value, html, markAsRead, id } = this.props;

        return (
            <div>
                {type && value ? <li className={type === "default" ? css(styles.default) : css(styles.urgent)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
                {html ? <li className={css(styles.urgent)} onClick={() => markAsRead(id)} data-urgent="true" dangerouslySetInnerHTML={{ __html: html }}></li> : null}
            </div>
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
        html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => {
        console.log("empty function");
    },
    id: 0,
}

export default NotificationItem;