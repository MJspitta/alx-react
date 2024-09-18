import React from 'react';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
import close_button from '../assets/close-icon.png';
import PropTypes from 'prop-types';


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
        const { displayDrawer, listNotifications } = this.props;
        const closeBtnStyle = {
            position: 'absolute',
            top: 10,
            right: 10,
            border: 'none',
            background: 'none',
        };

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
                                        <NotificationItem 
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={this.markAsRead}
                                            id={notification.id}
                                        />
                                    ))
                                )}
                            </ul>
                            <button style={closeBtnStyle} aria-label='Close' onClick={() => console.log("Close button has been clicked")}>
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
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;