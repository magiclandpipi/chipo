// src/components/Description.jsx
import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Rating,
    CircularProgress, Button, Modal, IconButton, Divider, Avatar
} from '@mui/material';
import ReviewList from '../Review/ReviewList';
import AddReview from '../Review/AddReview';
import {collection, doc, getDoc, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../firebase';
import './Description.css';


const ExperienceDetail = ({experience, experienceId}) => {

    const [averageRating, setAverageRating] = useState(5);
    const [reviewCount, setReviewCount] = useState(0);
    const [merchant, setMerchant] = useState(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsCollection = collection(db, 'experiences', experienceId, 'reviews');
            const reviewsSnapshot = await getDocs(reviewsCollection);
            const reviewsList = reviewsSnapshot.docs.map(doc => doc.data());
            if (reviewsList.length) {
                const totalRating = reviewsList.reduce((sum, review) => sum + review.rating, 0);
                setAverageRating(totalRating / reviewsList.length);
            }
            setReviewCount(reviewsList.length);
        };

        const fetchMerchantInfo = async (merchantId) => {
            const merchantsRef = collection(db, 'merchants');
            const q = query(merchantsRef, where('uid', '==', merchantId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const merchantDoc = querySnapshot.docs[0];
                setMerchant(merchantDoc.data());
                return merchantDoc.id;
            } else {
                console.error('No matching merchant document found.');
                return null;
            }
        };

        fetchReviews();
        if (experience.merchantId) {
            fetchMerchantInfo(experience.merchantId);
        }
    }, [experienceId]);



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <Typography variant="h4" className="description-title" gutterBottom>
                    {experience.name}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                    <Rating readOnly value={averageRating} precision={0.1} />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                        {averageRating.toFixed(1)} ({reviewCount} reviews)
                    </Typography>
                </Box>
                {merchant && (
                    <Box className="merchant-info" sx={{ my: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, position: 'relative' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Typography variant="h6">{merchant.name}</Typography>
                                <Rating readOnly value={merchant.rating} size="small" />
                                <Typography variant="body2" color="textSecondary">
                                    {merchant.contact}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {expanded ? merchant.description : `${merchant.description.substring(0, 100)}...`}
                                </Typography>
                                <Button onClick={() => setExpanded(!expanded)} variant="text">
                                    {expanded ? 'Read less' : 'Read more'}
                                </Button>
                            </Grid>
                        </Grid>
                        <Avatar
                            src={merchant.profilePicture}
                            alt={merchant.name}
                            sx={{ position: 'absolute', top: 16, right: 16, width: 56, height: 56 }}
                        />
                    </Box>
                )}
                <Divider sx={{ my: 2 }} />
            </Grid>
            <Grid item xs={12} md={7}>
                <Typography variant="h6" gutterBottom>Description</Typography>
                <Typography variant="body1" gutterBottom>{experience.description}</Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" gutterBottom>Details</Typography>
                <Typography variant="body1" gutterBottom>{experience.beds} BEDS &bull; {experience.baths} BATHS</Typography>
                <Typography variant="body1" gutterBottom>Price: ${experience.price} / wk</Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" mt={2}>
                    <Rating readOnly value={experience.rating} size="large" />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                        {experience.reviews} reviews
                    </Typography>
                    <ReviewList experienceId={experienceId} />
                    <AddReview experienceId={experienceId} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default ExperienceDetail;
