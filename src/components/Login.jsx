import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import MyForm from "./MyForm";
import toast, {Toaster} from "react-hot-toast";
import {useAuth} from "../hooks/use-auth";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {email} = useAuth();
    const onModal = () => {
        toast.success('Success auth!');
    }
    useEffect(() => {
        onModal();
    }, [email]);
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
        <MyForm
            title='Sign In'
            handleClick={handleLogin}
        />
    );
}

export default Login;