import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Search, SearchIconWrapper, StyledInputBase } from './style'; // Import styled components
import { useAuth } from '../../contexts/AuthContext'; // Import the authentication context

const Header = () => {
  const { currentUser, logout } = useAuth(); // Use the authentication context

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            MyBookingSite
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/listings">Listings</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
          {currentUser ? (
              <>
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
                <IconButton edge="end" color="inherit" component={Link} to="/profile">
                  <AccountCircleIcon />
                </IconButton>
              </>
          ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Header;
