import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        props.logIn(e.target.elements.email.value, e.target.elements.password.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (email !== "" && password !== "") {
            setEnableSubmit(true);
        } else {
            if (enableSubmit !== false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);

    return (
        <React.Fragment>
            <div className={css(styles.appBody)}>
                <p className={css(styles.p)}>Login to access the full dashboard</p>
                <form className={css(styles.emailPass)} onSubmit={handleLoginSubmit}>
                    <div className={css(styles.inputField)}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' className={css(styles.input)} value={email} onChange={handleChangeEmail} />
                    </div>
                    <div className={css(styles.inputField)}>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' name='password' className={css(styles.input)} value={password} onChange={handleChangePassword} />
                    </div>
                    {/* <button className={css(styles.okButton)}>OK</button> */}
                    <input className={css(styles.okButton)} type="submit" value="OK" disabled={!enableSubmit} />
                </form>
            </div>
        </React.Fragment>
    );
};

Login.propTypes = {
    logIn: PropTypes.func,
};

const styles = StyleSheet.create({
    appBody: {
        padding: "20px 0",
    },
    p: {
        marginBottom: "20px",
    },
    emailPass: {
        display: "flex",
        gap: "10px",
        '@media only screen and (max-width: 900px)': {
            flexDirection: "column",
        },
    },
    okButton: {
        padding: "0 8px",
        width: "50px",
        height: "35px",
        backgroundColor: "white",
        borderColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        '@media only screen and (max-width: 900px)': {
            border: "3px solid orange",
        },
    },
    inputField: {
        '@media only screen and (max-width: 900px)': {
            display: "flex",
            gap: "10px",
        }
    },
    input: {
        '@media only screen and (max-width: 900px)': {
            // display: "none",
        }
    }
});

export default Login;