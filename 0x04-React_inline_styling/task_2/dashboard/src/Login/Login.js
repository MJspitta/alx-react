import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}>
                <p className={css(styles.p)}>Login to access the full dashboard</p>
                <div className={css(styles.emailPass)}>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' />
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' />
                    <button className={css(styles.okButton)}>OK</button>
                </div>
            </div>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    appBody: {
        padding: "40px",
    },
    p: {
        marginBottom: "10px",
    },
    emailPass: {
        display: "flex",
        gap: "10px",
    },
    okButton: {
        padding: "0 8px",
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    input: {
        margin: "10px",
    },
});

export default Login;