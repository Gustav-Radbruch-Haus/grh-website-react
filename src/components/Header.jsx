// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext'; // Ensure correct path

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (lang) => {
        setAnchorEl(null);
        if (lang) {
            setLanguage(lang);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    GRH Booking Site
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
                <Button color="inherit" component={Link} to="/items">Items</Button>
                <Button color="inherit" component={Link} to="/events">Events</Button>
                <Button color="inherit" component={Link} to="/faq">FAQs</Button>
                <div className="language-selector" style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <span role="img" aria-label="globe">🌐</span>
                    <span style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleMenuClick}>{language}</span>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleMenuClose(null)}
                    >
                        <MenuItem onClick={() => handleMenuClose('en')}>EN</MenuItem>
                        <MenuItem onClick={() => handleMenuClose('de')}>DE</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;