// src/components/ExperienceDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDoc, doc, collection, getDocs} from 'firebase/firestore';
import { db } from '../../firebase';
import {
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  CircularProgress, Button, Modal, IconButton
} from '@mui/material';
import ReviewList from '../Review/ReviewList';
import AddReview from '../Review/AddReview';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './ExperienceDetail.css';


const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchExperience = async () => {
      const experienceRef = doc(db, 'experiences', id);
      const experienceSnap = await getDoc(experienceRef);
      if (experienceSnap.exists()) {
        setExperience(experienceSnap.data());
        const imagesRef = collection(db, 'experiences', id, 'images');
        const imagesSnap = await getDocs(imagesRef);
        const imagesList = imagesSnap.docs.map(doc => doc.data().url);
        setImages(imagesList);
      }
      setLoading(false);
    };

    fetchExperience();
  }, [id]);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (!experience) {
    return (
      <Container>
        <Typography variant="h5">Experience not found.</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Box my={4}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5 }}>
          <Box className="photo-wall">
            {images.slice(0, 5).map((url, index) => (
                <div className={`photo-${index + 1}`} key={index}>
                  <img
                      src={url}
                      alt={`Experience ${index}`}
                      onClick={() => handleOpen(index)}
                  />
                  {index === 3 && images.length > 5 && (
                      <Button variant="contained" className="show-all-button" onClick={() => handleOpen(0)}>
                        Show all {images.length} photos
                      </Button>
                  )}
                </div>
            ))}
          </Box>
          <Modal open={open} onClose={handleClose}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Box sx={{ maxWidth: 800, width: '100%', height: '80vh', bgcolor: 'white', p: 3, boxShadow: 24, outline: 'none', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton sx={{ position: 'absolute', top: 8, right: 8 }} onClick={handleClose} className="modal-icon-button">
                  <CloseIcon />
                </IconButton>
                <IconButton sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)' }} onClick={handlePrev} className="modal-icon-button">
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)' }} onClick={handleNext} className="modal-icon-button">
                  <ArrowForwardIosIcon />
                </IconButton>
                <img src={images[currentImage]} alt={`Experience ${currentImage}`} style={{ maxHeight: '100%', objectFit: 'contain' }} />
              </Box>
            </Box>
          </Modal>
        </Box>
        <Typography variant="h4" gutterBottom>{experience.name}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Description</Typography>
            <Typography variant="body1" gutterBottom>{experience.description}</Typography>
            <Typography variant="h6" gutterBottom>Details</Typography>
            <Typography variant="body1" gutterBottom>{experience.beds} BEDS &bull; {experience.baths} BATHS</Typography>
            <Typography variant="body1" gutterBottom>Price: ${experience.price} / wk</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <Rating readOnly value={experience.rating} size="large" />
              <Typography variant="body2" color="textSecondary" ml={1}>
                {experience.reviews} reviews
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
