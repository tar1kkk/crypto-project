import React from 'react';
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <Form
            title='Sign In'
            handleClick={handleLogin}
        />
    );
}

export default Login;