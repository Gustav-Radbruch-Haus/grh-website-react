import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FAQCard from "./FAQCard";

const FAQOverview = () => {
    const categories = [
        { name: "Internet", image: "/images/internet-router-question-person-cable-chaos.png", link: "/faq/internet" },
        { name: "House Management", image: "/images/broken-sink-chaos-room.png", link: "faq/house-management" },
        { name: "Apartment", image: "/images/broken-sink-chaos-room.png", link: "/faq/apartment" },
        { name: "Billing", image: "/images/broken-sink-chaos-room.png", link: "/faq/billing" },
        { name: "Facilities", image: "/images/broken-sink-chaos-room.png", link: "/faq/facilities" },
        { name: "Maintenance", image: "/images/broken-sink-chaos-room.png", link: "/faq/maintenance" }
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom>
                Frequently Asked Questions
            </Typography>
            <Grid container spacing={3}>
                {categories.map((category, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <FAQCard
                            category={category.name}
                            image={category.image}
                            link={category.link}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FAQOverview;