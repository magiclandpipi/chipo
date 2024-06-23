import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db, auth } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { uploadImages } from '../../utils/uploadImages';
import {
    Box,
    Button,
    TextField,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Checkbox,
    ListItemText, Grid, CircularProgress
} from '@mui/material';

const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
];

const ExperienceForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [images, setImages] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const user = auth.currentUser; // Get the current user
            if (!user) {
                throw new Error('No authenticated user');
            }

            const merchantId = user.uid; // Use the current user's UID as the merchantId

            const experienceRef = await addDoc(collection(db, 'experiences'), {
                ...data,
                merchantId, // Add merchantId to the experience data
                languages: selectedLanguages.join(', '),
            });

            if (images.length > 0) {
                const imageUrls = await uploadImages(images, experienceRef.id);
                const imagesCollection = collection(db, 'experiences', experienceRef.id, 'images');
                for (const url of imageUrls) {
                    await addDoc(imagesCollection, { url });
                }
            }

            reset();
            setImages([]);
            setImagePreviews([]);
            setSelectedLanguages([]);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
        setLoading(false);
    };

    const handleLanguageChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedLanguages(
            typeof value === 'string' ? value.split(', ') : value,
        );
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    ////length, language, price, categories, things to bring

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom>
                Create Experience
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    {...register('name', { required: true })}
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    {...register('description', { required: true })}
                />
                <TextField
                    fullWidth
                    label="Subtitle"
                    variant="outlined"
                    margin="normal"
                    {...register('subtitle', { required: true })}
                />
                <TextField
                    fullWidth
                    label="Length"
                    variant="outlined"
                    margin="normal"
                    {...register('length', { required: true })}
                />
                <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    margin="normal"
                    {...register('price', { required: true })}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Languages</InputLabel>
                    <Select
                        multiple
                        value={selectedLanguages}
                        onChange={handleLanguageChange}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {languages.map((language) => (
                            <MenuItem key={language} value={language}>
                                <Checkbox checked={selectedLanguages.indexOf(language) > -1} />
                                <ListItemText primary={language} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    Upload Images
                    <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleImageChange}
                    />
                </Button>
                {imagePreviews.length > 0 && (
                    <Grid container spacing={2} sx={{ my: 2 }}>
                        {imagePreviews.map((src, index) => (
                            <Grid item xs={4} key={index}>
                                <img src={src} alt={`Preview ${index}`} style={{ width: '100%' }} />
                            </Grid>
                        ))}
                    </Grid>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <CircularProgress />
                    </Box>
                )}
            </form>
        </Box>
    );
};

export default ExperienceForm;
