import React from 'react';
import {AppBar, Typography, Button, IconButton, Container, Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Search, SearchIconWrapper, StyledInputBase, StyledMenuButton, ToolbarContainer} from './style'; // Import styled components
import { useAuth } from '../../contexts/AuthContext';
import { NestedMenuItem } from "mui-nested-menu";

const Header = () => {
  const { currentUser, logout } = useAuth(); // Use the authentication context
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Container>
          <ToolbarContainer>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
            BlueCara
          </Typography>
          <Button
              aria-controls="simple-menu"
              style={{ textTransform: "none" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              color="inherit"
          >
            Experiences
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleItemClick}
            >
              <NestedMenuItem label={"Art & Culture"} parentMenuOpen={open}>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/tea">Tea Experience</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/enamel">Enameling Experience</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/calligraphy">Calligraphy & Painting</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/seal">Seal Carving</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/pottery">Pottery Experience</StyledMenuButton></MenuItem>
              </NestedMenuItem>
              <NestedMenuItem label={"Wellness & Relaxation"} parentMenuOpen={open}>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/spa">Chinese SPA</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/ear-picking">Chinese Ear Picking</StyledMenuButton></MenuItem>
              </NestedMenuItem>
              <NestedMenuItem label={"Traditional Rituals & Lifestyle"} parentMenuOpen={open}>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/tea">Tea Experience</StyledMenuButton></MenuItem>
                <MenuItem><StyledMenuButton color="inherit" component={Link} to="/incense">Aroma Experience</StyledMenuButton></MenuItem>
              </NestedMenuItem>
            </Menu>
          </Button>
          <StyledMenuButton color="inherit" component={Link} to="/listings">Cities</StyledMenuButton>
          <StyledMenuButton color="inherit" component={Link} to="/listings">Guide</StyledMenuButton>
          <StyledMenuButton color="inherit" component={Link} to="/about">About</StyledMenuButton>
          <StyledMenuButton color="inherit" component={Link} to="/contact">Contact</StyledMenuButton>
          {/*<Search>*/}
          {/*  <SearchIconWrapper>*/}
          {/*    <SearchIcon />*/}
          {/*  </SearchIconWrapper>*/}
          {/*  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />*/}
          {/*</Search>*/}
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
        </ToolbarContainer>
        </Container>
      </AppBar>
  );
};

export default Header;
