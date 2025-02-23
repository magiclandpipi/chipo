import React, { useState } from "react";
import PropTypes from "prop-types";
import {Box, Grid, IconButton, Modal} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageCarousel = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const visibleImages = 5;
    const speed = 3;
    const shown_length = 8;

    const handleNext = () => {
        if (currentIndex + speed < shown_length - 3) {
            setCurrentIndex(currentIndex + speed);
        } else {
            setCurrentIndex(shown_length - 3);
        }
    };

    // Handle previous button click
    const handlePrev = () => {
        if (currentIndex - speed >= 0) {
            setCurrentIndex(currentIndex - speed);
        } else {
            setCurrentIndex(0);
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1200px",
                position: "relative",
                margin: "auto",
                overflow: "hidden",
                borderRadius: "10px",
            }}
        >
            {/* Carousel Wrapper */}
            <Box
                sx={{
                    display: "flex",
                    transform: `translateX(-${currentIndex * (100 / visibleImages)}%)`,
                    transition: "transform 0.5s ease-in-out",
                    gap: "10px", // Spacing between images
                }}
            >
                {imageUrls.slice(0, shown_length).map((url, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: `0 0 calc(100% / ${visibleImages})`,
                            height: "200px",
                            backgroundImage: `url(${url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "8px",
                        }}
                    />
                ))}
                <Box
                    sx={{
                        flex: `0 0 calc(100% / ${visibleImages})`,
                        height: "200px",
                        backgroundColor: "#1976d2",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: "bold",
                    }}
                    onClick={handleOpenModal}
                >
                    See All Images
                </Box>
            </Box>

            {/* Navigation Buttons */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        height: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        overflow: "auto",
                    }}
                >
                    <h2>All Images</h2>
                    <Grid container spacing={2}>
                        {imageUrls.map((url, index) => (
                            <Grid item xs={4} sm={3} key={index}>
                                <Box
                                    sx={{
                                        height: "200px",
                                        backgroundImage: `url(${url})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        borderRadius: "8px",
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </Box>
    );
};

ImageCarousel.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
