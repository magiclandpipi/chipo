import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
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
    ListItemText
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

const UploadForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [images, setImages] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const onSubmit = async (data) => {
        try {
            const merchantRef = await addDoc(collection(db, 'merchants'), {
                ...data,
                languages: selectedLanguages.join(', '),
            });
            if (images.length > 0) {
                const imageUrls = await uploadImages(images, merchantRef.id, "merchants");
                const imagesCollection = collection(db, 'merchants', merchantRef.id, 'images');
                for (const url of imageUrls) {
                    await addDoc(imagesCollection, { url });
                }
            }
            reset();
            setImages([]);
            setSelectedLanguages([]);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const handleLanguageChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedLanguages(
            typeof value === 'string' ? value.split(', ') : value,
        );
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom>
                Add Merchant
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
                    label="Address"
                    variant="outlined"
                    margin="normal"
                    {...register('address', { required: true })}
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
                        onChange={(e) => setImages(Array.from(e.target.files))}
                    />
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default UploadForm;
