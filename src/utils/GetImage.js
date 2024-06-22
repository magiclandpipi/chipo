import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const getBookingImages = async (bookingId) => {
    const imagesRef = collection(db, 'experiences', bookingId, 'images');
    const imagesSnapshot = await getDocs(imagesRef);
    const images = imagesSnapshot.docs.map((doc) => doc.data().url);

    return images;
};

export default getBookingImages;
