import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../firebase';
import firebase from 'firebase/app';

const Login = () => {
    return (
        <div id = "login-page">
            <div id = "login-card">
                <h2> Welcome to the CHAT!</h2>

                <div 
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In using Google Account
                </div>

                <br /> <br/>

                <div 
                    className='login-button facebook'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign In using Facebook Account
                </div>
            </div>
        </div>
    );
}

export default Login;