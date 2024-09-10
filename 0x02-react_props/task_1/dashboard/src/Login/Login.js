import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <React.Fragment>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <div className='email-pass'>
                    <label for='email'>Email:</label>
                    <input type='email' id='email' />
                    <label for='password'>Password:</label>
                    <input type='password' id='password' />
                    <button>OK</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;