import React, { useContext } from 'react';
import holberton_logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const Header = () => {
    const { user, logOut } = useContext(AppContext);

    return (
        <>
            <div className={css(styles.appHeader)}>
                <img src={holberton_logo} alt="Holberton Logo" className={css(styles.appLogo)} />
                <h1>School dashboard</h1>
            </div>

            {user.isLoggedIn && (
                <section id="logoutSection" className={css(styles.greetings)}>
                    Welcome<strong> {user.email} </strong>
                    <em>
                        <a href="#" onClick={(e) => { e.preventDefault(); logOut(); }}>(logout)</a>
                    </em>
                </section>
            )}
        </>
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
    greetings: {
        marginBottom: "32px",
    },
});

export default Header;