import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export const useFetchStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStores = async () => {
      const querySnapshot = await getDocs(collection(db, 'stores'));
      const storesList = querySnapshot.docs.map(doc => doc.data());
      setStores(storesList);
      setLoading(false);
    };

    fetchStores();
  }, []);

  return { stores, loading };
};
