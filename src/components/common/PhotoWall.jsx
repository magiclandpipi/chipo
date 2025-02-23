import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PhotoWall = ({ images }) => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const navigate = useNavigate();
    const location = useLocation()

    const handleOpen = (index) => {
        // setCurrentImage(index);
        // setOpen(true);

        navigate(`${location.pathname}/images`);
    };

    const handleClose = () => setOpen(false);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Box>
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
                    <Box sx={{
                        maxWidth: 800,
                        width: '100%',
                        height: '80vh',
                        bgcolor: 'white',
                        p: 3,
                        boxShadow: 24,
                        outline: 'none',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
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
    );
};

PhotoWall.propTypes = {
    images: PropTypes.array.isRequired
};

export default PhotoWall;
