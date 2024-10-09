import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FAQCard({ category, image, link }) {
    return (
        <Item>
            <Typography variant="h5" gutterBottom>{category}</Typography>
            <Box sx={{
                height: 150,
                bgcolor: 'grey.300',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src={image}
                    alt={category}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover' // Ensure the image covers the box appropriately
                    }}
                />
            </Box>
            <Button
                variant="contained"
                color="primary"
                href={link}
                fullWidth
            >
                Learn More
            </Button>
        </Item>
    );
}

export default FAQCard;