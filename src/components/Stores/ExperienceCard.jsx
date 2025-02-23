import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

export function StoreCard({ experience }) {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/experience/${experience.id}`);
    };
    return (
        <Card sx={{ maxWidth: 400 }} onClick={handleCardClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={store.image}
                    alt={experience.name}
                />
                <CardContent>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                            {experience.isNew && <Badge badgeContent="NEW" color="primary" />}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                {store.beds} BEDS &bull; {store.baths} BATHS
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                        {experience.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        ${experience.price}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Rating readOnly value={experience.rating} size="small" />
                        <Typography variant="body2" color="textSecondary" component="p" ml={1}>
                            {experience.reviews} reviews
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
