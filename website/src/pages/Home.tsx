import React from 'react';
import { BookOpen, Users,  School} from 'lucide-react';
import image from "./college.jpg";


export default function Home() {
  const features = [
    { icon: BookOpen, title: 'Excellence in Education', description: ' ' },
    { icon: Users, title: 'Experienced Faculty', description: ' ' },
    { icon: School, title: 'Peaceful Environment', description: ' ' },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
      <img
          src={image}// Use the imported image
          alt="University Campus"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Montessori B. Ed College</h1>
            
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center justify-center">
          {features.map((Feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <Feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{Feature.title}</h3>
              <p className="text-gray-600">{Feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
