import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../API/api";
import { useNavigate } from "react-router-dom";
import RestaurantImg from '../../assets/restaurant.jpg'

const BookingPage = (props) => {
    return (
        <section id="book_now_section">
            <img src={RestaurantImg} />
            <BookingForm availableTimes={props.availableTimes} onAvailableTimesChange={props.onAvailableTimesChange} />
        </section>
    )
}

export default BookingPage

const BookingForm = (props) => {
    const [date, setDate] = useState('yyyy-mm-dd')
    const [guestCount, setGuestCount] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')

    const [isValidDate, setIsValidDate] = useState(true)
    const [isValidTime, setIsValidTime] = useState(true)
    const [isValidGuestCount, setIsValidGuestCount] = useState(true)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!isValidDate || !isValidGuestCount || !isValidTime) {
            return
        }

        if(submitAPI()) {
            setDate('yyyy-mm-dd')
            setGuestCount(1)
            setOccasion('Birthday')

            navigate('/reservation_confirmed')
        }
    }

    useEffect(() => {
        if(date === 'yyyy-mm-dd') {
            props.onAvailableTimesChange([])
            return
        }

        const getAvailableTimes = async () => {
            const times = fetchAPI(new Date(date))
            props.onAvailableTimesChange(times)
        }
        getAvailableTimes()
    }, [date])


    return (
        <form id="form" style={{display: 'grid', maxWidth: '500px', gap: '20px', maxHeight: '1000px'}} onSubmit={handleSubmit}>
            <h2>Book Now</h2>
            <label for="res-date">Choose date</label>
            <input aria-label="choose date" type="date" id="res-date" name="res-date" value={date} onChange={(e) => {
                setDate(e.target.value)
                setIsValidDate(e.target.value !== 'yyyy-mm-dd')
            }} />
            {!isValidDate && <p>Please select valid date</p>}

            <label for="res-time">Choose time</label>
            <select aria-label="choose time" id="res-time" name="res-time" onChange={(e) => {
                setIsValidTime(e.target.value.length > 0)
            }}>
                {props.availableTimes.map((time) => <option key={time}>{time}</option>)}
            </select>
            {!isValidTime && <p>Please select valid time</p>}

            <label for="guests">Number of guests</label>
            <input aria-label="number of guests" type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guestCount} onChange={(e) => {
                setGuestCount(e.target.value)
                setIsValidGuestCount(e.target.value > 0)
            }} />
            {!isValidGuestCount && <p>Please enter a valid guest count</p>}

            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button disabled={date === 'yyyy-mm-dd'} type="submit">Make Your reservation</button>
        </form>
    )
}