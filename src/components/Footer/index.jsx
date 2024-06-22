import React from 'react';
import { Container, Grid, Typography, Link, Box, TextField, Button } from '@mui/material';
import { FooterContainer } from './style'; // Import styled components
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <FooterContainer>
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Quick Links
                        </Typography>
                        <Link href="#" variant="body1" display="block" gutterBottom>
                            Privacy Policy
                        </Link>
                        <Link href="#" variant="body1" display="block" gutterBottom>
                            Terms of Service
                        </Link>
                        <Link href="#" variant="body1" display="block" gutterBottom>
                            Contact Us
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Email: info@mybookingsite.com
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Phone: +1 234 567 890
                        </Typography>
                        <Box mt={2}>
                            <FacebookIcon fontSize="large" />
                            <TwitterIcon fontSize="large" />
                            <InstagramIcon fontSize="large" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            Newsletter
                        </Typography>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        &copy; {new Date().getFullYear()} MyBookingSite. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
