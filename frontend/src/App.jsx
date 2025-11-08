import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import RegistrationHome from './pages/Registration/RegistrationHome';
import CodeOfConduct from './pages/Registration/CodeOfConduct';
import Program from './pages/Program';
import TravelHome from './pages/Travel/TravelHome';
import Venue from './pages/Travel/Venue';
import Sponsors from './pages/Sponsors';
import ErrorPage from './pages/ErrorPage';
import BackgroundCarousel from './components/BackgroundCarousel';

export default function App(){ 
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
          <Header />
          <Navbar />
        </div>
        <BackgroundCarousel />
        <div className="flex-grow relative">
          <Routes>
            <Route path="/" element={
              <div className="overflow-x-hidden">
                <Home />
              </div>
            } />
            <Route path="/registration" element={<RegistrationHome/>} />
            <Route path="/registration/code-of-conduct" element={<CodeOfConduct/>} />
            <Route path="/program" element={<Program/>} />
            <Route path="/travel" element={<TravelHome/>} />
            <Route path="/travel/venue" element={<Venue/>} />
            <Route path="/sponsors" element={<Sponsors/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}