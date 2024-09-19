import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
        <React.Fragment>
            <div className={css(styles.appBody)}>
                <p className={css(styles.p)}>Login to access the full dashboard</p>
                <div className={css(styles.emailPass)}>
                    <div className={css(styles.inputField)}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' className={css(styles.input)} />
                    </div>
                    
                    <div className={css(styles.inputField)}>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' className={css(styles.input)} />
                    </div>
                    
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
        '@media only screen and (max-width: 900px)': {
            flexDirection: "column",
        }
    },
    okButton: {
        padding: "0 8px",
        width: "50px",
        height: "35px",
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        '@media only screen and (max-width: 900px)': {
            border: "3px solid orange",
        }
    },
    inputField: {
        '@media only screen and (max-width: 900px)': {
            display: "flex",
            gap: "10px",
        }
    },
    input: {
        '@media only screen and (max-width: 900px)': {
            display: "none",
        }
    }
});

export default Login;