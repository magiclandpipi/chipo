import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Gallery from 'react-photo-gallery';
import { Box, Typography, Modal, Button } from '@mui/material';
import Carousel, { Modal as ModalGallery, ModalGateway } from 'react-images';

const ImageGallery = ({ imagesList }) => {
    const [photos, setPhotos] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            const imagesRef = collection(db, 'experiences', experienceId, 'images');
            const imagesSnap = await getDocs(imagesRef);
            const imagesList = imagesSnap.docs.map(doc => ({
                src: doc.data().url,
                width: 4, // Adjust the width and height based on your actual image dimensions
                height: 3
            }));
            setPhotos(imagesList);
        };

        fetchImages();
    }, [experienceId]);

    const openLightbox = (event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>Photo Gallery</Typography>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <ModalGallery onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </ModalGallery>
                ) : null}
            </ModalGateway>
        </Box>
    );
};

export default ImageGallery;
