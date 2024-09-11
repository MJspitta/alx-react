import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import PropTypes from 'prop-types';


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
            {displayDrawer ? (
                <div className='disp-draw-flex'>
                    <div className='menuItem'>
                        <p>Your notifications</p>
                    </div>
                    <div className='Notifications'>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {listNotifications.length === 0 ? (
                                <NotificationItem type="default" value="No new notification for now" />
                            ) : (
                                listNotifications.map((notification) => (
                                    <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
                                ))
                            )}
                            {/* <NotificationItem type="default" value="New course available" />
                            <NotificationItem type="urgent" value="New resume available" />
                            <NotificationItem type="urgent" html={getLatestNotification()} /> */}
                        </ul>
                        <button style={closeBtnStyle} aria-label='Close' onClick={closeBtn}>
                            <img src={close_button} alt='close button' />
                        </button>
                    </div>
                </div>
                
            ) : (
                <div className='menuItem disp-draw-flex'>
                    <p>Your notifications</p>
                </div>
            )}
            
        </React.Fragment>
        
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}