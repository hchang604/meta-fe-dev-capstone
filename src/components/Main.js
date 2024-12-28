import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';

const Main = () => {
    return <main>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </main>
}

export default Main