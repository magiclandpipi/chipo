// src/components/AddReview.js
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { TextField, Button, Rating, Box } from '@mui/material';

const AddReview = ({ experienceId }) => {
  const { currentUser } = useAuth();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const reviewsCollection = collection(db, 'experiences', experienceId, 'reviews');
    await addDoc(reviewsCollection, {
      userId: currentUser.uid,
      userName: currentUser.email, // Or use a display name if available
      rating,
      comment,
      timestamp: Timestamp.fromDate(new Date())
    });

    setRating(0);
    setComment('');
  };

  return (
    <Box mt={4}>
      <form onSubmit={handleSubmit}>
        <Rating
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          precision={1}
        />
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          margin="normal"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">Submit Review</Button>
      </form>
    </Box>
  );
};

export default AddReview;
