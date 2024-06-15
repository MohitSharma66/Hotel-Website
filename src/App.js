// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import CardComponentsPage from './Components/CardComponentsPage';
import RegistrationPage from './Components/RegistrationPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/explore" element={<CardComponentsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
