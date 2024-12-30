import React, {useEffect, useReducer} from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import BookingPage from './Reservations/BookingPage';
import ConfirmBooking from './Reservations/ConfirmBooking';
import OrderOnline from './OrderOnline/OrderOnline';
import About from './About/About';

export const updateTimes = (state, action) => {

  return {
    ...state,
    availableTimes: action.availableTimes
  }
}

export const initializeTimes = () => {
  return {
    availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  }
}

const Main = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes())

    function handleChangeAvailableTimes(newTimes) {
      dispatch({availableTimes: newTimes})
    }

    return <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<BookingPage availableTimes={state.availableTimes} onAvailableTimesChange={handleChangeAvailableTimes} />} />
        <Route path="/reservation_confirmed" element={<ConfirmBooking />} />
        <Route path="/orderonline" element={<OrderOnline />} />
      </Routes>
    </main>
}

export default Main