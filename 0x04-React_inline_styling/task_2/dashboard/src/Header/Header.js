import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton-logo.jpg';


const Header = () => {
    return (
        <div className={css(styles.appHeader)}>
            <img src={holberton_logo} alt="Holberton Logo" className={css(styles.logo)} />
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
        margin: "0 auto",
    },
    logo: {
        width: "200px",
    }
});

export default Header;