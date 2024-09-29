import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const items = [
    { name: 'Kayaks', info: 'Available for day trips' },
    { name: 'Chess set', info: 'For use in common areas' },
    // Add more items as needed
];

function ItemBooking() {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Item Booking
            </Typography>
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.info}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Book
                                </Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ItemBooking;