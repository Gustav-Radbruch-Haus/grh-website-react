// src/grhBookingTool.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import RoomsOverview from './components/RoomsOverview';
import Bookings from './components/Bookings';
import ItemBooking from './components/ItemBooking';
import UpcomingEvents from './components/UpcomingEvents';
import FAQOverview from "./components/FAQOverview";
import FAQAccordion from "./components/FAQAccordion";
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
                        <Route path="/faq" element={<FAQOverview />} />
                        <Route path="/faq/:category" element={<FAQAccordion />} />
                    </Routes>
                </Container>
            </Router>
    );
}

export default GrhBookingTool;