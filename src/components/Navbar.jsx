import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    const goTop = () => {
        window.scrollTo({
            top: (0, 0), behavior: "smooth",
        });
    };

    const openMobile = () => {
        setMobile(!mobile);
    };

    return (<>
        <nav className={sticky ? "sticky-nav" : ""}>
            <div className="navbar">
                <Link to="/">
                    <p onClick={goTop}>COINDOM</p>
                </Link>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#market">Market</a>
                    </li>
                    <li>
                        <a href="#choose-us">Choose Us</a>
                    </li>
                    <li>
                        <a href="#join">Join</a>
                    </li>
                </ul>
                <span>
                        {isAuth
                            ? <div style={{display: 'flex'}}>
                                <p style={{fontSize: 14.5, marginRight: '10px'}}>{email}</p>
                                <FontAwesomeIcon icon={faRightFromBracket} onClick={() => dispatch(removeUser())} shake
                                                 size="l" style={{color: "#ffffff", cursor: 'pointer'}}/>
                            </div>
                            : <div>
                                <Link to={'/login'}>
                                    <button className='btn-signup'>Sign Up</button>
                                </Link>
                            </div>}
                    {/* mobile */}
                    <i
                        onClick={openMobile}
                        className="fa-solid fa-bars-staggered hamburger-menu"
                    ></i>
          </span>
            </div>
        </nav>

        {/* mobile nav */}
        <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
            <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
            <ul>
                <li onClick={openMobile}>
                    <a href="#home">Home</a>
                </li>
                <li onClick={openMobile}>
                    <a href="#market">Market</a>
                </li>
                <li onClick={openMobile}>
                    <a href="#choose-us">Choose Us</a>
                </li>
                <li onClick={openMobile}>
                    <a href="#join">Join</a>
                </li>
            </ul>
        </div>
    </>);
}

export default Navbar;