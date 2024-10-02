import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


export default function Notifications({ displayDrawer }) {
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
                <div className='flex-menu'>
                    <div className='menuItem'>
                        <p>Your notifications</p>
                    </div>
                    <div className='Notifications'>
                        <p>Here is the list of notifications</p>
                        <ul>
                            <NotificationItem type="default" value="New course available" />
                            <NotificationItem type="urgent" value="New resume available" />
                            <NotificationItem type="urgent" html={getLatestNotification()} />
                        </ul>
                        <button style={closeBtnStyle} aria-label='Close' onClick={closeBtn}>
                            <img src={close_button} alt='close button' />
                        </button>
                    </div>
                </div>
            ) : (
                <div className='flex-menu'>
                    <div className='menuItem'>
                        <p>Your notifications</p>
                    </div>
                </div>
            )}

        </React.Fragment>
        
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
    displayDrawer: false
};