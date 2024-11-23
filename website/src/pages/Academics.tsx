import React from 'react';
import { Clock } from 'lucide-react';

export default function Academics() {
  const courses = [
    { 
      name: 'Bachelor of Education', 
      duration: '2 years', 
      description: 'Focus on teaching methodologies, educational psychology, and classroom management' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Academic Programs</h2>
        <div className="grid grid-cols-1 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
              <div className="flex items-center text-gray-600 mb-3">
                <Clock className="h-5 w-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
