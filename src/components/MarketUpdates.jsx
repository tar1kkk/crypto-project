import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems} from "../redux/slices/itemsSlice";

function MarketUpdate() {
    const dispatch = useDispatch();
    const {items, status} = useSelector(state => state.itemsSlice);
    const [currentPage, setCurrentPage] = useState([]);
    const paginationButtons = [];
    const quantity = 4;


    async function fetchData() {
        await dispatch(fetchItems({
            quantity,
        }))
    }

    useEffect(() => {
        fetchData();
    }, []);
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
                            <div className="market-content__coin-list__top">
                                <p>Coin</p>
                                <p>Price</p>
                                <p>24h Change</p>
                                <p>Market Cap</p>
                            </div>
                            <div
                                // onLoad={() => setApiLoad(false)}
                                className="market-content__coin-list__row"
                            >
                                {/*{status === 'loading' ? <span className="loader"></span>: ''}*/}
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