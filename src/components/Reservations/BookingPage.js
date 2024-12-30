import React, { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../API/api";
import { useNavigate } from "react-router-dom";

const BookingPage = (props) => {
    const handleSubmit = () => {
        setFormSubmitted(true)
    }

    return (
        <>
            <h1>Book Now</h1>
            <BookingForm availableTimes={props.availableTimes} onAvailableTimesChange={props.onAvailableTimesChange} onSubmit={handleSubmit} />
        </>
    )
}

export default BookingPage

const BookingForm = (props) => {
    const [date, setDate] = useState('yyyy-mm-dd')
    const [guestCount, setGuestCount] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit()

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
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <input aria-label="choose date" type="date" id="res-date" name="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label for="res-time">Choose time</label>
            <select aria-label="choose time" id="res-time" name="res-time">
                {props.availableTimes.map((time) => <option key={time}>{time}</option>)}
            </select>
            <label for="guests">Number of guests</label>
            <input aria-label="number of guests" type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}