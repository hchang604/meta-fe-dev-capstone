import React from "react";
import restaurantFood from '../../assets/restaurantfood.jpg'
import greekSalad from '../../assets/greek_salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon_dessert.jpg'

const Home = () => {
    return (
        <>
            <section id="hero_section">
                <div id="hero_section_background" />
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean<br />restaurant, focused on traditional recipes<br />served with a modern twist</p>

                    <button>Reserve a Table</button>
                </div>
                <img src={restaurantFood} />
            </section>

            <section id="specials_section">
                <div>
                    <div id="specials_header_container">
                        <h1>This weeks specials</h1>
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
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home