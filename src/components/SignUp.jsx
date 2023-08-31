import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import React from 'react';
import Form from "./Form";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/');
            })
            .catch(console.error)
    }

    return (
        <Form title='Register' handleClick={handleRegister}/>
    );
}

export default SignUp;