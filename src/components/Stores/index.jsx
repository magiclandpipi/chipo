import { StoreCard } from './storeCard'
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';
import {useFetchStores} from './hooks.js';

const Stores = () => {
  const { stores, loading } = useFetchStores();

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }
  return (
    <Container>
      <Grid container spacing={2}>
        {stores.map((store, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StoreCard store={store} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Stores
