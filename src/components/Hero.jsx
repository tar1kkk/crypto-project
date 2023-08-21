import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Btc from '../images/hero/bitcoin.png';
import Eth from '../images/hero/ethereum.png';
import {Link} from "react-router-dom";
import {fetchItems} from "../redux/slices/itemsSlice";

function Hero() {
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.itemsSlice);
    const quantity = 4;

    async function fetchData() {
        dispatch(fetchItems({
            quantity,
        }));
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-content__text">
                        <img className="btc-float" src={Btc} alt="floating-el"/>
                        <h1>
                            Track and Trade
                            <br/> <span>Crypto currencies</span>
                        </h1>
                        <img className="eth-float" src={Eth} alt="floating-el"/>
                    </div>

                    {/* mobile btn */}
                    <a className="mobile-btn-hero" href="#market">
                        See Prices <i className="fa-solid fa-angle-down"></i>
                    </a>

                    <div className="coin-slider">
                        {/*{coinsLoad && <span className="loader"></span>}*/}
                        {items.map((item) => (
                            <Link
                                to={`/coin/${item.id}`}
                                key={item.id}
                                className="slider-coin"
                            >
                                <img src={item?.image} alt={item?.name}/>
                                <p className="slider-coin__name">
                                    {item?.name}{" "}
                                    <span
                                        className={
                                            "slider-coin__price " +
                                            (item.price_change_percentage_24h <= 0
                                                ? "red-text"
                                                : "green-text")
                                        }
                                    >
                      {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                    </span>
                                </p>
                                <p className="slider-coin__price">
                                    {"$ " + item.current_price?.toFixed(2)}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;