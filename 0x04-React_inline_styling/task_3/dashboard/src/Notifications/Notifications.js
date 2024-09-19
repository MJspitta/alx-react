import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
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
                    <div className={css(styles.displayDrawFlex)}>
                        <div className='menuItem'>
                            <p>Your notifications</p>
                        </div>
                        <div className={css(styles.notifications)}>
                            <p>Here is the list of notifications</p>
                            <ul className={css(styles.ul)}>
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
                                <img className={css(styles.closeBtn)} src={close_button} alt='close button' />
                            </button>
                        </div>
                    </div>
                    
                ) : (
                    <div className={css(styles.menuItem)}>
                        <p>Your notifications</p>
                    </div>
                )}
                
            </React.Fragment>
            
        );
    }
}

const styles = StyleSheet.create({
    notifications: {
        border: "1px dashed #e0354b",
        padding: "16px",
        position: "relative",
        marginTop: "10px",
        '@media screen only and (max-width: 900px)': {
            
        }
    },
    closeBtn: {
        width: "20px",
        height: "20px",
    },
    ul: {
        margin: "20px 32px",
        '@media screen only and (max-width: 900px)': {
            
        }
    },
    displayDrawFlex: {
        position: "relative",
        right: "1.5%",
        '@media screen only and (max-width: 900px)': {
            
        }
    },
    menuItem: {
        position: "fixed",
        right: "1.5%",
        textAlign: "right",
    }
});

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

export default Notifications;