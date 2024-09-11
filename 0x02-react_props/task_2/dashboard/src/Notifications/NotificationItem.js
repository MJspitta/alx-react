import React from 'react';
import './Notifications.css';

const NotificationItem = ({ type, value, html }) => {
    return (
        <div>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li data-urgent="true" dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </div>
    );
};

export default NotificationItem;