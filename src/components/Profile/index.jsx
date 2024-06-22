// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    setUserData(userDoc.data());
                }
            }
        };

        fetchUserData();
    }, [user]);

    if (!user) {
        return (
            <Container>
                <Typography variant="h5">You need to log in to view your profile.</Typography>
            </Container>
        );
    }

    if (!userData) {
        return (
            <Container>
                <Typography variant="h5">Loading profile...</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>Profile</Typography>
                <Typography variant="h6">Name: {userData.name}</Typography>
                <Typography variant="h6">Email: {userData.email}</Typography>
                <Button variant="contained" color="primary" component={Link} to={`/user-comments/${user.uid}`}>
                    View My Comments
                </Button>
            </Box>
        </Container>
    );
};

export default Profile;
