import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
    return (
        <div>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent="true" dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </div>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
}

NotificationItem.defaultProps = {
    type: "default",
}

export default NotificationItem;