import React from 'react';
import {Link} from "react-router-dom";
import Login from "../components/Login";

function LoginPage(props) {
    return (
        <div className='hero-section default-section'>
            <div className='choose-container '>
                <h1 style={{fontSize: 48, color: 'white', marginBottom: '30px'}}>Login</h1>
                <Login/>
                <p style={{fontSize: 20, color: 'white'}}>
                    Or <Link style={{color: 'grey'}} to='/register'>register</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;