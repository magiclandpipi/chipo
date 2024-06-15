// src/components/ExperienceDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Box,
  Container,
  Typography,
  Grid,
  CardMedia,
  Rating,
  CircularProgress
} from '@mui/material';
import ReviewList from '../Review/ReviewList';
import AddReview from '../Review/AddReview';

const ExperienceDetail = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStore = async () => {
      const docRef = doc(db, 'stores', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setStore(docSnap.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchStore();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (!store) {
    return (
      <Container>
        <Typography variant="h5">Experience not found.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>{store.title}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={store.image}
              alt={store.title}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Description</Typography>
            <Typography variant="body1" gutterBottom>{store.description}</Typography>
            <Typography variant="h6" gutterBottom>Details</Typography>
            <Typography variant="body1" gutterBottom>{store.beds} BEDS &bull; {store.baths} BATHS</Typography>
            <Typography variant="body1" gutterBottom>Price: ${store.price} / wk</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <Rating readOnly value={store.rating} size="large" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                {store.reviews} reviews
              </Typography>
              <ReviewList experienceId={id} />
              <AddReview experienceId={id} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ExperienceDetail;
