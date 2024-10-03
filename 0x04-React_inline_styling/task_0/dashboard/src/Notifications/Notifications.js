import React from 'react';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

class Notifications extends React.Component {
    constructor(props) {
        super(props);

        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.length > this.props.listNotifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <React.Fragment>
                <div className='flex-menu'>
                    <div className='menuItem'>
                        <p>Your notifications</p>
                    </div>
                    {this.props.displayDrawer && (
                        <div className='Notifications'>
                            <p>Here is the list of notifications</p>
                            {this.props.listNotifications && this.props.listNotifications.length > 0 ? (    
                                <ul>
                                    {this.props.listNotifications.map((val, idx) => (
                                        <NotificationItem key={val.id} type={val.type} value={val.value} html={val.html} markAsRead={this.markAsRead} id={val.id} />
                                    ))}
                                </ul>  
                            ) : (
                                <ul>
                                    <NotificationItem type="default" value="No new notification for now" />
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

}


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;