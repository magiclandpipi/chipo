import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { auth, db, storage } from '../../firebase';
import {collection, addDoc, doc, getDoc, updateDoc, setDoc, query, getDocs, where} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
    ListItemText,
    CircularProgress,
    Avatar
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
    const { register, handleSubmit, reset, setValue } = useForm();
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [merchant, setMerchant] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const fetchMerchant = async () => {
            const user = auth.currentUser;
            if (user) {
                const merchantRef = doc(db, 'merchants', user.uid);
                const merchantSnap = await getDoc(merchantRef);
                if (merchantSnap.exists()) {
                    setMerchant(merchantSnap.data());
                    setValue('name', merchantSnap.data().name);
                    setValue('description', merchantSnap.data().description);
                    setValue('address', merchantSnap.data().address);
                    setValue('rating', merchantSnap.data().rating);
                    setValue('phoneNumber', merchantSnap.data().phoneNumber);
                    setSelectedLanguages(merchantSnap.data().languages.split(', '));
                }
            }
        };

        fetchMerchant();
    }, [setValue]);

    const onSubmit = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const user = auth.currentUser;
            let profilePictureURL = null;

            // Upload the profile picture to Firebase Storage if it exists
            if (profilePicture) {
                const storageRef = ref(storage, `profilePictures/${user.uid}/${profilePicture.name}`);
                await uploadBytes(storageRef, profilePicture);
                profilePictureURL = await getDownloadURL(storageRef);
            }

            const merchantData = {
                ...data,
                languages: selectedLanguages.join(', '),
                profilePicture: profilePictureURL || (merchant && merchant.profilePicture) || '',
            };

            // Query the collection to find the document with the matching uid
            const merchantsRef = collection(db, 'merchants');
            const q = query(merchantsRef, where('uid', '==', user.uid));
            const querySnapshot = await getDocs(q);

            let docId;
            if (querySnapshot.empty) {
                // No matching document found, create a new one
                const newDocRef = await addDoc(merchantsRef, {
                    uid: user.uid,
                    ...merchantData,
                });
                docId = newDocRef.id;
            } else {
                // Update the existing document
                const existingDocRef = querySnapshot.docs[0].ref;
                await updateDoc(existingDocRef, merchantData);
                docId = existingDocRef.id;
            }

            if (images.length > 0) {
                const imageUrls = await uploadImages(images, docId, "merchants");
                const imagesCollection = collection(db, 'merchants', docId, 'images');
                for (const url of imageUrls) {
                    await addDoc(imagesCollection, { url });
                }
            }

            reset();
            setImages([]);
            setImagePreviews([]);
            setProfilePicture(null);
            setSelectedLanguages([]);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    };



    const handleLanguageChange = (event) => {
        const { target: { value } } = event;
        setSelectedLanguages(
            typeof value === 'string' ? value.split(', ') : value,
        );
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setImages(files);

        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'white' }}>
            <Typography variant="h4" gutterBottom>
                {merchant ? 'Update Merchant Info' : 'Add Merchant'}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    {...register('name', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    {...register('description', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    margin="normal"
                    {...register('address', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Rating"
                    variant="outlined"
                    type="number"
                    inputProps={{ step: "0.1", min: "0", max: "5" }}
                    margin="normal"
                    {...register('rating', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    margin="normal"
                    {...register('phoneNumber', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Things To Know"
                    variant="outlined"
                    margin="normal"
                    {...register('ThingsToKnow', { required: true })}
                    disabled={loading}
                />
                <TextField
                    fullWidth
                    label="Cancellation Policy"
                    variant="outlined"
                    margin="normal"
                    {...register('cancellationPolicy', { required: true })}
                    disabled={loading}
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                        {imagePreviews.map((src, index) => (
                            <Avatar key={index} src={src} sx={{ width: 100, height: 100 }} variant="rounded" />
                        ))}
                    </Box>
                )}
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ my: 2 }}
                >
                    Upload Profile Picture
                    <input
                        type="file"
                        hidden
                        onChange={handleProfilePictureChange}
                    />
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : (merchant ? 'Update' : 'Submit')}
                </Button>
            </form>
        </Box>
    );
};

export default UploadForm;

