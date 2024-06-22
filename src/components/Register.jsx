// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
      });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleRegister}>
        <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
