import React from "react";
import RestaurantChef from '../../assets/restaurant chef B.jpg'

const ConfirmBooking = () => {
    return (
        <section id="booking_confirmed_section">
            <h1>
                Reservation confirmed
            </h1>
            <h2>See you there!</h2>
            <img src={RestaurantChef} />
        </section>
    )
}

export default ConfirmBooking