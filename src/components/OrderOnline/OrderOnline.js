import React from "react";
import greekSalad from '../../assets/greek_salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon_dessert.jpg'

const OrderOnline = () => {
    return (
        <section id="specials_section">
            <div>
                <div id="specials_header_container">
                    <h2>This weeks specials</h2>
                    <button>Online Menu</button>
                </div>
                <div id="special_cards">
                    <article>
                        <img src={greekSalad} />
                        <div className="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <button>Order Now</button>
                        </div>
                    </article>
                    <article>
                        <img src={bruchetta} />
                        <div className="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>

                            <button>Order Now</button>
                        </div>
                    </article>
                    <article >
                        <img src={lemonDessert} />
                        <div className="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            </p>
                            <button>Order Now</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default OrderOnline