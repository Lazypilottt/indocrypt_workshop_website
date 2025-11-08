import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function TravelHome(){
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow px-8 pb-12 pt-[140px]">
        <div className="mt-8 flex gap-4">
          <Link to="/travel/venue" className="tech-card">Venue</Link>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
