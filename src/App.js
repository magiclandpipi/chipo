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
import Index from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import UserComments from './components/UserComments';
import ExperienceForm from './components/Experiences/ExperienceForm';
import UploadForm from './components/Merchants/UploadForm';

function App() {
  return (
    <Router>
      <Index />
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
      <Route path="/experience-upload" element={<ExperienceForm />} />
      <Route path="/merchant-upload" element={<UploadForm />} />
      <Route
          path="/profile"
          element={
              <PrivateRoute>
                  <Profile />
              </PrivateRoute>
          }
      />
      <Route
          path="/user-comments/:userId"
          element={
              <PrivateRoute>
                  <UserComments />
              </PrivateRoute>
          }
      />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
