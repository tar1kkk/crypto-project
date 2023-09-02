import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/slices/itemsSlice";
import axios from "axios";

function MarketUpdate() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const paginationButtons = [];
    const quantity = 10;


    async function fetchData() {
        setIsLoading(true);
        const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${quantity}&page=${currentPage}&sparkline=false`);
        setItems(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [currentPage]);
    for (let i = 1; i <= 5; i++) {
        paginationButtons.push(
            <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={i === currentPage ? "activePagi" : ""}
            >
                {i}
            </button>
        );
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const scrollMarket = () => {
        window.scrollTo({
            top: window.pageYOffset - 800,
            behavior: "smooth",
        });
    };

    const scrollTop = () => {
        window.scrollTo({top: (0, 0), behavior: "smooth"});
    };

    return (
        <>
            <section id="market" className="market-section">
                <div className="container">
                    <div className="market-content">
                        <h2>Market Update</h2>
                        <div className="market-content__coin-list">
              v              <div className="market-content__coin-list__top">
                                <p>Coin</p>
                                <p>Price</p>
                                <p>24h Change</p>
                                <p>Market Cap</p>
                            </div>
                            <div
                                onLoad={() => setIsLoading(false)}
                                className="market-content__coin-list__row"
                            >
                                {isLoading && <span className="loader"></span>}
                                {items.map((item) => (
                                    <Link
                                        onClick={scrollTop}
                                        to={`/coin/${item.id}`}
                                        className="coin-row"
                                        key={item.id}
                                    >
                    <span>
                      <img src={item.image} alt={item.name}/> {item.name}
                    </span>
                                        <p>{"$ " + item.current_price.toFixed(2)}</p>
                                        <p
                                            className={
                                                "slider-coin__price " +
                                                (item.price_change_percentage_24h >= 0
                                                    ? "green-text"
                                                    : "red-text")
                                            }
                                        >
                                            {item.price_change_percentage_24h?.toFixed(2) + " %"}
                                        </p>
                                        <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div
                            onClick={scrollMarket}
                            className="market-content__coin-list__pagination"
                        >
                            {paginationButtons}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default MarketUpdate;