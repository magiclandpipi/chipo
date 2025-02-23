import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import loadRoutes from './routes';

function App() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {

        loadRoutes().then(setRoutes);
    }, []);

    return (
        <Router>
            <Header/>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
