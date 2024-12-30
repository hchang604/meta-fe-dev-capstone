import React from "react";
import restaurantFood from '../../assets/restaurantfood.jpg'

const Home = () => {
    return (
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
    )
}

export default Home