import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import loadRoutes from './routes';

import './App.css'

function App() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {

        loadRoutes().then(setRoutes);
    }, []);

    return (
        <Router>
            <Header/>
            <main>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </main>
            <Footer/>
        </Router>
);
}

export default App;
