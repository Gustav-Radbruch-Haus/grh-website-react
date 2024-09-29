import React, { useState } from 'react';
import { Grid, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import RoomCard from './RoomCard';

const initialRooms = [
    { id: 1, name: 'Gym', hours: '9-10', status: 'Has keys', picture: 'Gym picture', availability: 'Available' },
    { id: 2, name: 'Bileceller', hours: '24/7', status: 'Keys', picture: 'Bileceller picture', availability: 'Available' },
    { id: 3, name: 'Lounge', hours: '24/7', status: 'Open to visit', picture: 'Lounge picture', availability: 'Available' },
    { id: 4, name: 'Study Room', hours: '8-22', status: 'Has keys', picture: 'Study Room picture', availability: 'Available' },
];

function RoomsOverview() {
    const [rooms, setRooms] = useState(initialRooms);
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [bookingHistory, setBookingHistory] = useState([]);

    const handleOpen = (room) => {
        setSelectedRoom(room);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterStatus(event.target.value);
    };

    const handleConfirmOpen = () => {
        setConfirmOpen(true);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
    };

    const handleBook = () => {
        const updatedRooms = rooms.map(room =>
            room.id === selectedRoom.id ? { ...room, availability: 'Booked' } : room
        );
        setRooms(updatedRooms);
        setBookingHistory([...bookingHistory, { room: selectedRoom.name, date: new Date() }]);
        setOpen(false);
        setConfirmOpen(false);
    };

    const filteredRooms = rooms.filter(room =>
        room.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterStatus === '' || room.availability === filterStatus)
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" gutterBottom>
                Rooms Overview
            </Typography>
            <Box sx={{ mb: 3 }}>
                <TextField
                    label="Search rooms"
                    variant="outlined"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    sx={{ mr: 2 }}
                />
                <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                    <InputLabel>Availability</InputLabel>
                    <Select
                        value={filterStatus}
                        onChange={handleFilterChange}
                        label="Availability"
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="Available">Available</MenuItem>
                        <MenuItem value="Booked">Booked</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={3}>
                {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} onOpen={handleOpen} />
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{selectedRoom?.name}</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AccessTimeIcon sx={{ mr: 1 }} />
                        <Typography>Hours: {selectedRoom?.hours}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <VpnKeyIcon sx={{ mr: 1 }} />
                        <Typography>Status: {selectedRoom?.status}</Typography>
                    </Box>
                    <Box sx={{ height: 200, bgcolor: 'grey.300', my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography>{selectedRoom?.picture}</Typography>
                    </Box>
                    <Typography variant="body2" gutterBottom>
                        Additional details about the room would go here. This could include capacity,
                        available equipment, rules for use, etc.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleConfirmOpen}
                        disabled={selectedRoom?.availability === 'Booked'}
                    >
                        Book
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={confirmOpen} onClose={handleConfirmClose}>
                <DialogTitle>Confirm Booking</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to book {selectedRoom?.name}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose}>Cancel</Button>
                    <Button onClick={handleBook} variant="contained" color="primary">
                        Confirm Booking
                    </Button>
                </DialogActions>
            </Dialog>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>Booking History</Typography>
                <List>
                    {bookingHistory.map((booking, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`${booking.room}`}
                                secondary={`Booked on ${booking.date.toLocaleString()}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

export default RoomsOverview;