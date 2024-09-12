import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';


class NotificationItem extends React.Component {
    render() {
        const { type, value, html, markAsRead, id } = this.props;

        return (
            <div>
                {type && value ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li> : null}
                {html ? <li data-urgent="true" dangerouslySetInnerHTML={{ __html: html }}></li> : null}
            </div>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.string,
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