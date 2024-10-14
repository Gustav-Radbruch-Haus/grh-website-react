// src/components/FAQOverview.jsx
import React, { useEffect, useState, useContext } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import FAQCard from "./FAQCard";
import config from "../config";
import { LanguageContext } from '../context/LanguageContext'; // Ensure correct path

const FAQOverview = () => {
    const [categories, setCategories] = useState([]);
    const { language } = useContext(LanguageContext); // Access the global language

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // TODO: Move BASE-URL to global value!
                const response = await fetch(`${config.baseURL}/api/public/faq/categories/${language}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data.map(item => ({
                    name: item.title,
                    image: item.image,
                    link: item.link,
                    description: item.description
                })));
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [language]);

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