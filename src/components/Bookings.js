import React from 'react';
import { Typography, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

const rooms = [
    { name: 'Bar', details: 'Capacity: 50 people' },
    { name: 'Tea room', details: 'Cozy space for small gatherings' },
    // Add more rooms as needed
];

function Bookings() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Room Bookings
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <List>
                        {rooms.map((room, index) => (
                            <ListItem key={index} divider>
                                <ListItemText
                                    primary={room.name}
                                    secondary={room.details}
                                />
                                <Button variant="contained" color="primary">
                                    Book
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Booking Details
                    </Typography>
                    <Typography variant="body1">
                        Select a room to view availability and make a booking.
                    </Typography>
                    {/* Add a calendar or booking form here */}
                </Grid>
            </Grid>
        </div>
    );
}

export default Bookings;