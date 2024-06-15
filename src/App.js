// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import Stores from './components/Stores';
import { initializeApp } from 'firebase/app';
import { firebaseApp } from './firebase';
import ExperienceDetail from './components/Stores/ExperienceDetail';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Stores />
          </PrivateRoute>
        }
        />
        <Route
        path="/experience/:id"
        element={
          <PrivateRoute>
            <ExperienceDetail />
          </PrivateRoute>
        }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
