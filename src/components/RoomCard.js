import React from 'react';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function RoomCard({ room, onOpen }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Item>
                <Typography variant="h6" gutterBottom>{room.name}</Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">{room.hours}</Typography>
                </Box>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <VpnKeyIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">{room.status}</Typography>
                </Box>
                <Box sx={{ height: 100, bgcolor: 'grey.300', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography>{room.picture}</Typography>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => onOpen(room)}
                    fullWidth
                    disabled={room.availability === 'Booked'}
                >
                    {room.availability === 'Booked' ? 'Booked' : 'View Details'}
                </Button>
                <Typography
                    variant="body2"
                    sx={{
                        mt: 1,
                        color: room.availability === 'Available' ? 'green' : 'red'
                    }}
                >
                    {room.availability}
                </Typography>
            </Item>
        </Grid>
    );
}

export default RoomCard;