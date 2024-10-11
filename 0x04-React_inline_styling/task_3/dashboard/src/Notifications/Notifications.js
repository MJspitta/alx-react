import React from 'react';
import close_button from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const closeBtnStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    border: 'none',
    background: 'none',
};

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
                    <div className={css(styles.menuItem)}>
                        <p>Your notifications</p>
                    </div>
                    {this.props.displayDrawer && (
                        <div className={css(styles.notifications)}>
                            <p>Here is the list of notifications</p>
                            {this.props.listNotifications && this.props.listNotifications.length > 0 ? (    
                                <ul className={css(styles.ul)}>
                                    {this.props.listNotifications.map((val, idx) => (
                                        <NotificationItem key={val.id} type={val.type} value={val.value} html={val.html} markAsRead={this.markAsRead} id={val.id} />
                                    ))}
                                </ul>  
                            ) : (
                                <ul className={css(styles.ul)}>
                                    <NotificationItem type="default" value="No new notification for now" />
                                </ul>
                            )}
                            <button style={closeBtnStyle} aria-label='Close' onClick={closeBtn}>
                                <img src={close_button} alt='close button' width='20px' />
                            </button>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    notifications: {
        border: "1px dashed #e0354b",
        padding: "16px",
        position: "absolute",
        top: "2.5rem",
        right: "1.5%",
        '@media only screen and (max-width: 900px)': {
            display: "block",
            height: "100vh",
            padding: "0",
            marginLeft: "auto",
            marginRight: "auto",
            border: "none",
            fontSize: "20px",
            position: "static",
        }
    },
    ul: {
        margin: "20px 32px",
        '@media only screen and (max-width: 900px)': {
            margin: "20px 0",
        },
    },
    menuItem: {
        textAlign: "right",
        paddingTop: "1rem",
        paddingRight: "1.5%",
        '@media only screen and (max-width: 900px)': {
            visibility: "hidden",
        },
    },
})


Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;