import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';

const MerchantRegister = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            await addDoc(collection(db, 'merchants'), {
                uid: user.uid,
                email: data.email,
                name: data.name,
            });
            reset();
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom>Merchant Registration</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    {...register('name', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    {...register('email', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    margin="normal"
                    {...register('password', { required: true })}
                    disabled={loading}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Register'}
                </Button>
            </form>
        </Box>
    );
};

export default MerchantRegister;
