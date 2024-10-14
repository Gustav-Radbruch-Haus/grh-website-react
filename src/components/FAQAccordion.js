// src/components/FAQAccordion.js
import React, { useEffect, useState, useContext } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from "react-router-dom";
import config from "../config";
import { LanguageContext } from '../context/LanguageContext'; // Ensure correct import

const FAQAccordion = () => {
    const { category } = useParams();
    const { language } = useContext(LanguageContext); // Access the global language
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch(`${config.baseURL}/api/public/faq/categories/${language}/${category}/faqs`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFaqs();
    }, [language, category]);

    return (
        <div>
            {faqs.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography variant="h6">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQAccordion;