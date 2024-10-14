import React from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
    return (
        <div className={css(styles.appHeader)}>
            <img src={holberton_logo} alt="Holberton Logo" className={css(styles.appLogo)} />
            <h1>School dashboard</h1>
        </div>
    );
};

const styles = StyleSheet.create({
    appHeader: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#e0354b",
        borderBottom: "5px solid #e0354b",
        margin: "0 auto 32px",
    },
    appLogo: {
        width: "200px",
    },
});

export default Header;