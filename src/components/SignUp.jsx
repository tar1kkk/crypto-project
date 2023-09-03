import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import React, {useEffect} from 'react';
import MyForm from "./MyForm";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import toast from "react-hot-toast";

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {email} = useAuth();
    const onModal = () => {
        toast.success('Success auth!');
    }
    useEffect(() => {
        onModal();
    }, [email]);



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
            .catch((error)=>{
                console.log(error)
            })
    }

    return (
        <MyForm title='Register' handleClick={handleRegister}/>
    );
}

export default SignUp;