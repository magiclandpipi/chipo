// src/components/ReviewList.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

const ReviewList = ({ experienceId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsCollection = collection(db, 'experiences', experienceId, 'reviews');
      const reviewsSnapshot = await getDocs(reviewsCollection);
      const reviewsList = reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(reviewsList);
      setLoading(false);
    };

    fetchReviews();
  }, [experienceId]);

  if (loading) {
    return <Typography>Loading reviews...</Typography>;
  }

  return (
    <List>
      {reviews.map(review => (
        <React.Fragment key={review.id}>
          <ListItem>
            <ListItemText
              primary={<Typography variant="h6">{review.userName}</Typography>}
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">{review.comment}</Typography>
                  <Typography variant="body2" color="textSecondary">Rating: {review.rating}</Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ReviewList;
