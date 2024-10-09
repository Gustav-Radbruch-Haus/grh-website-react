import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useParams} from "react-router-dom";

// Example data
// TODO: Replace this with a call from the FAQ-Database
const FAQData = [
    {
        question: "What is the return policy?",
        answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order has shipped, you will receive an email with a tracking number and a link to track your package."
    },
    {
        question: "Can I purchase items again?",
        answer: "Yes, simply log in to your account and reorder your desired items."
    },
    // Add more questions and answers here
];

function FAQAccordion() {
    const { category } = useParams(); // Just to check if the category variable is used
    return (
        <div>
            {FAQData.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography variant="h6">{item.question} - Category {category}</Typography>
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
}

export default FAQAccordion;