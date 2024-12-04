import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* College Name */}
        <h1 className="text-3xl font-bold text-gray-800">Montessori College of Education</h1>
        
        {/* Navigation Tabs */}
        <nav className="flex space-x-8 mr-20">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/admissions" className="text-gray-600 hover:text-blue-600 transition-colors">Admissions</Link>
          <Link to="/academics" className="text-gray-600 hover:text-blue-600 transition-colors">Academics</Link>
          <Link to="/faculty" className="text-gray-600 hover:text-blue-600 transition-colors">Faculty</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
        </nav>
      </div>
    </header>
  );
}
