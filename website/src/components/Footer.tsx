import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>Pakalavari palli Village, Chandragiri Mandal, Chittoor (dt), Andhra Pradesh - 517112</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-400" />
            <span>+91 9505579347</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-400" />
            <span>montessoricoe@gmail.com</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}