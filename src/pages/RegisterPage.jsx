import {Link} from "react-router-dom";
import SignUp from "../components/SignUp";


function RegisterPage() {
    return (
        <div className='hero-section default-section'>
            <div className='choose-container'>
                <h1 style={{fontSize: 48, color: 'white', marginBottom: '30px'}}>Register</h1>
                <SignUp/>
                <p style={{fontSize: 20, color: 'white'}}>
                    Already have an account? <Link style={{color: 'grey'}} to='/login'>Sign In</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;