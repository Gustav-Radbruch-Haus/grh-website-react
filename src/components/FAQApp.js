import React from 'react';
import ReactDOM from 'react-dom';
import FAQAccordion from './FAQAccordion';

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

function App() {
    return (
        <div>
            <FAQAccordion data={FAQData} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));