import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
    return (
        <Container maxWidth="md" sx={{ padding: '20px' }}>
            <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="h5" paragraph>
                    Welcome to BlueCara! We specialize in providing unique cultural experiences in China for travelers. Our mission is to connect visitors with authentic, local experiences that enrich their understanding of Chinese culture.
                </Typography>
            </Box>

            <Box sx={{ marginBottom: '40px' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to create meaningful and memorable experiences that allow travelers to immerse themselves in the culture and traditions of China. We offer hands-on experiences that showcase the beauty of Chinese art, history, and lifestyle.
                </Typography>
            </Box>

            <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                    Our Values
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Authenticity:</strong> We prioritize real, immersive experiences that bring the true spirit of China to our guests.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Integrity:</strong> We value honesty and transparency in everything we do, from the experiences we offer to our customer service.
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Community:</strong> We are passionate about fostering a sense of community between travelers and the local culture.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;
