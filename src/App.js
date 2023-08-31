import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='register' element={<RegisterPage/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin/:id' element={<Coin/>}/>
            </Routes>
            {/*<Navbar/>*/}
        </>
    );
}

export default App;
