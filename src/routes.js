import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Stores from './components/Stores';
import ExperienceDetail from './components/Experiences/ExperienceDetail';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import UserComments from './components/UserComments';
import ExperienceForm from './components/Experiences/ExperienceForm';
import UploadForm from './components/Merchants/UploadForm';
import MerchantRegister from './components/MerchantRegister';
import dynamicRoutesPromise from './components/InfoContent/routes';
import eventRoutesPromise from './components/Event/routes';
import ContactPage from "./components/Contact";

const staticRoutes = [
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Stores />
            </PrivateRoute>
        ),
    },
    { path: '/experience/:id', element: (<ExperienceDetail />) },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/experience-upload', element: <ExperienceForm /> },
    { path: '/merchant-register', element: <MerchantRegister /> },
    { path: '/merchant-upload', element: <UploadForm /> },
    { path: '/contact', element: <ContactPage /> },
    {
        path: '/profile',
        element: (
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
        ),
    },
    {
        path: '/user-comments/:userId',
        element: (
            <PrivateRoute>
                <UserComments />
            </PrivateRoute>
        ),
    },
];

// Merge static and dynamic routes
const loadRoutes = async () => {
    const dynamicRoutes = await dynamicRoutesPromise;
    const eventRoutes = await eventRoutesPromise;
    return [...staticRoutes, ...dynamicRoutes, ...eventRoutes];
};

export default loadRoutes;
