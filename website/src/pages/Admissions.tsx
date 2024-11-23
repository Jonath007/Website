import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Admissions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Admissions Office</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-lg text-gray-700">Pakalavari palli, Chandragiri Mandal, Andhra Pradesh</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-lg text-gray-700">+91 9505579347</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <span className="text-lg text-gray-700">montessoricoe@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}