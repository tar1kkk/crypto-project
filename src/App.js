import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/coin/:id' element={<Coin/>}/>
            </Routes>
        </>
    );
}

export default App;
