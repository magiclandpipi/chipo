// src/components/UserComments.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path if necessary
import { Container, List, ListItem, ListItemText, Typography, CircularProgress, Divider } from '@mui/material';

const UserComments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('UserId:', userId);
        const fetchComments = async () => {
            try {
                const experiencesRef = collection(db, 'stores');
                const experiencesSnapshot = await getDocs(experiencesRef);

                if (experiencesSnapshot.empty) {
                    console.log('No experiences found.');
                } else {
                    console.log('Experiences found:', experiencesSnapshot.size);
                }

                const allComments = [];

                for (const experienceDoc of experiencesSnapshot.docs) {
                    const experienceId = experienceDoc.id;
                    console.log('ExperienceId:', experienceId);
                    const reviewsRef = collection(db, 'experiences', experienceId, 'reviews');
                    const q = query(reviewsRef, where('userId', '==', userId));
                    const reviewsSnapshot = await getDocs(q);

                    if (reviewsSnapshot.empty) {
                        console.log(`No reviews found for experience ${experienceId}.`);
                    } else {
                        console.log(`Reviews found for experience ${experienceId}:`, reviewsSnapshot.size);
                    }

                    reviewsSnapshot.docs.forEach((doc) => {
                        console.log(`Review data for experience ${experienceId}:`, doc.data());
                        allComments.push({ id: doc.id, experienceId, ...doc.data() });
                    });
                }

                setComments(allComments);
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [userId]);

    if (loading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>My Comments</Typography>
            <List>
                {comments.map((comment) => (
                    <React.Fragment key={comment.id}>
                        <ListItem>
                            <ListItemText
                                primary={comment.comment}
                                secondary={new Date(comment.timestamp.seconds * 1000).toLocaleString()}
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Container>
    );
};

export default UserComments;
