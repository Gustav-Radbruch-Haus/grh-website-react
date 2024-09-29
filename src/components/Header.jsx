import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    GRH Booking Site
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
                <Button color="inherit" component={Link} to="/items">Items</Button>
                <Button color="inherit" component={Link} to="/events">Events</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;