import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import RoomsOverview from './components/RoomsOverview';
import Bookings from './components/Bookings';
import ItemBooking from './components/ItemBooking';
import UpcomingEvents from './components/UpcomingEvents';
import './grhBookingTool.css';

function GrhBookingTool() {
    return (
        <Router>
            <Header />
            <Container sx={{ mt: 2 }}>
                <Routes>
                    <Route path="/" element={<RoomsOverview />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/items" element={<ItemBooking />} />
                    <Route path="/events" element={<UpcomingEvents />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default GrhBookingTool;