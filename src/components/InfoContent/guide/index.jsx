import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import PropTypes from "prop-types";

const InfoContent = ({ title, paragraphs, imageUrl }) => {
    return (
        <Container maxWidth="md" sx={{ padding: 3 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    {title}
                </Typography>

                {/* Image at the top */}
                <img
                    src={imageUrl}
                    alt={title}
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '16px', height: '300px' }}
                />

                {/* Paragraphs */}
                {paragraphs.map((text, index) => (
                    <Typography variant="body1" paragraph key={index}>
                        {text}
                    </Typography>
                ))}
            </Paper>
        </Container>
    );
};

InfoContent.defaultProps = {
    title: 'Default Title',
    paragraphs: [],
    imageUrl: ''
};

InfoContent.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: '',
};

export default InfoContent;
