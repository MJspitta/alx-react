import React from 'react';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


export default function Notifications({ displayDrawer, listNotifications }) {
    const closeBtnStyle = {
        position: 'absolute',
        top: 10,
        right: 10,
        border: 'none',
        background: 'none',
    }
    function closeBtn() {
        console.log("Close button has been clicked");
    }
    return (
        <React.Fragment>
            <div className='flex-menu'>
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className='Notifications'>
                        <p>Here is the list of notifications</p>
                        {listNotifications && listNotifications.length > 0 ? (    
                            <ul>
                                {listNotifications.map(({ id, html, type, value }) => (
                                    <NotificationItem key={id} type={type} value={value} html={html} />
                                ))}
                            </ul>  
                        ) : (
                            <ul>
                                <NotificationItem value="No new notification for now" />
                            </ul>
                        )}
                        <button style={closeBtnStyle} aria-label='Close' onClick={closeBtn}>
                            <img src={close_button} alt='close button' />
                        </button>
                    </div>
                )}
            </div>
        </React.Fragment>
        
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};