import React from 'react';

export default function About() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[100px]">
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Montessori College of Education, B. Ed
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Established in 2012
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Affiliated to: Sri Venkateswara University, Tirupati
          </p>
        </div>

        
      </div>
    </div>
  );
}