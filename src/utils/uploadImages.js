import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadImages = async (files, id, category) => {
    const uploadPromises = Array.from(files).map(async (file) => {
        const storageRef = ref(storage, `${category}/${id}/${file.name}`);
        console.log(`Uploading ${file.name} to ${storageRef.fullPath}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        console.log(`Uploaded ${file.name} with URL: ${url}`);
        return url;
    });

    return Promise.all(uploadPromises);
};
