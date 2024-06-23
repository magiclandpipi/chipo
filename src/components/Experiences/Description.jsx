// src/components/Description.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDoc, doc, collection, getDocs} from 'firebase/firestore';
import { db } from '../../firebase';
import {
    Box,
    Container,
    Typography,
    Grid,
    Rating,
    CircularProgress, Button, Modal, IconButton
} from '@mui/material';
import ReviewList from '../Review/ReviewList';
import AddReview from '../Review/AddReview';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ExperienceDetail.css';


const ExperienceDetail = (experience) => {

    return (
        <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Description</Typography>
            <Typography variant="body1" gutterBottom>{experience.description}</Typography>
            <Typography variant="h6" gutterBottom>Details</Typography>
            <Typography variant="body1" gutterBottom>{experience.beds} BEDS &bull; {experience.baths} BATHS</Typography>
            <Typography variant="body1" gutterBottom>Price: ${experience.price} / wk</Typography>
            <Box display="flex" alignItems="center" mt={2}>
                <Rating readOnly value={experience.rating} size="large" />
                <Typography variant="body2" color="textSecondary" ml={1}>
                    {experience.reviews} reviews
                </Typography>
                <ReviewList experienceId={id} />
                <AddReview experienceId={id} />
            </Box>
        </Grid>
    );
};

export default ExperienceDetail;
