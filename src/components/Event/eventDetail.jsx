import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {
    Typography,
    Grid,
    Divider, Box, Button, Modal, IconButton, Rating, Avatar, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getS3Files } from '../../utils/getS3Files';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {awsConfig} from "../../utils/awsConfig";
import ImageGallerySlider from "../common/ImageSlider";
import PhotoWall from "../common/PhotoWall";



const EventDetail = ({eventMeta}) => {
    const [expanded, setExpanded] = useState(false);
    const [imageFiles, setImageFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedAccordion, setExpandedAccordion] = useState(null);
    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        const fetchS3Images = async () => {
            try {
                const files = await getS3Files(eventMeta.photoWallPrefix);  // Fetch files from 'events/incense' folder
                setImageFiles(files.map((f)=>getImageUrl(f)));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching S3 files:', error);
                setLoading(false);
            }
        };

        fetchS3Images();
    }, []);

    useEffect(() => {
        // Fetch images for each experience when the component mounts
        const fetchExperienceImages = async () => {
            const newImageUrls = {};
            for (const experience of eventMeta.experiences) {
                const urls = await generateImageUrlsWithPrefix(experience.imagePrefix);
                newImageUrls[experience.id] = urls;
            }
            setImageUrls(newImageUrls);
        };

        fetchExperienceImages();
    }, [eventMeta]);

    const getImageUrl = (fileKey) =>
        `https://${awsConfig.bucketName}.s3.${awsConfig.region}.amazonaws.com/${fileKey}`;

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? index : null); // Update state only if necessary
    };

    const generateImageUrlsWithPrefix = async (prefix) => {
        try {
            const files = await getS3Files(prefix);  // Fetch files from 'events/incense' folder
            return files.map((f) => getImageUrl(f));
        } catch (error) {
            console.error('Error fetching S3 files:', error);
            return [];
        }
    }

    return (
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            paddingLeft: '10vw',
            paddingRight: '10vw',
            alignItems: 'flex-start'
        }} spacing={2}>
            <Grid item xs={12} md={10}>
                <Typography variant="h4" className="description-title" gutterBottom>
                    {eventMeta.title}
                </Typography>
                <Typography variant="subtitle" color="textSecondary" gutterBottom>
                    {eventMeta.subtitle || "An unforgettable experience awaits!"}
                </Typography>
                <Divider sx={{my: 2}}/>
            </Grid>
            <Grid item xs={12} md={10}>
                <PhotoWall
                    images={imageFiles ||[]}
                />
            </Grid>
            <Grid container spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingTop: '1vw'
            }}>
                <Grid item xs={12} md={6}>
                    {/*description*/}
                    {eventMeta.description.map((item, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            gutterBottom
                            dangerouslySetInnerHTML={{ __html: item }}
                        />
                    ))}
                    <Divider sx={{my: 2}}/>
                    <Typography variant="h5" gutterBottom>What You Can Do :</Typography>
                    {eventMeta.experiences && eventMeta.experiences.map((experience, index) => (
                        <Box key={index} sx={{my: 3}}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="h6" gutterBottom>
                                    {experience.title}
                                </Typography>
                                <Typography variant="body1" gutterBottom sx={{ paddingRight: '10%' }}>
                                    <strong>Price: $</strong>{experience.price}
                                </Typography>
                            </Box>
                            <Typography variant="body" gutterBottom>
                                {experience.content.map((c) => (
                                    <Typography
                                        key={index}
                                        variant="body1"
                                        gutterBottom
                                        dangerouslySetInnerHTML={{ __html: c }}
                                    />
                                ))}
                            </Typography>
                            {
                                experience.highlights && experience.highlights.length > 0 && (
                                    <ul>
                                        {experience.highlights.map((c, index) => (
                                            <li>
                                                <Typography
                                                    key={index}
                                                    variant="body1"
                                                    gutterBottoms
                                                    dangerouslySetInnerHTML={{ __html: c }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }
                            {imageUrls[experience.id] && (
                                <ImageGallerySlider imageUrls={imageUrls[experience.id]} />
                            )}
                            <Divider sx={{my: 2}}/>
                        </Box>
                    ))}

                </Grid>
                <Grid item xs={12} md={3} sx={{
                    position: 'sticky',
                    top: '5px', // Adjust the distance from the top as needed
                    zIndex: 1,
                    backgroundColor: 'white',
                }}>
                    <Box className="merchant-info"
                         sx={{my: 4, p: 2, border: '1px solid #ccc', borderRadius: 2, position: 'relative'}}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Typography variant="h6">Available Cities & Locations</Typography>
                                {eventMeta.cities.map((city, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="h6">{city.name}</Typography>
                                        <Accordion
                                            expanded={expandedAccordion === index}
                                            onChange={handleAccordionChange(index)}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`panel${index}-content`}
                                                id={`panel${index}-header`}
                                            >
                                                <Typography variant="subtitle1">Available Locations</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    {city.stores.map((store) => (
                                                        <Grid item xs={12}>
                                                            <Typography variant="h6">{store.storeName}</Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {store.address}
                                                            </Typography>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Divider sx={{my: 2}}/>
                                    </Box>
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Divider sx={{my: 2}}/>
        </Grid>
    );
};

EventDetail.defaultProps = {
    eventMeta: {}
};

EventDetail.propTypes = {
    eventMeta: PropTypes.object.isRequired
};

export default EventDetail;
