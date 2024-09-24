import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import close_button from '../assets/close-icon.png';


export default function Notifications() {
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
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button style={closeBtnStyle} aria-label='Close' onClick={closeBtn}>
                <img src={close_button} alt='close button' />
            </button>
        </div>
    );
}