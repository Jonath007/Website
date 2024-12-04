import React from 'react';
import { BookOpen, Users, School } from 'lucide-react';
import image from "./college.jpg";

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Excellence in Education',
      description: [
        '-> To Equip student with critical thinking, problem-solving skills, and innovative teaching strategies to meet diverse learning needs.',
        '-> To train the student towards achieving excellence on academic, social, moral, and cultural fronts.',
      ],
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: [
        '-> Highly qualified teachers with years of practical experience.',
        
      ],
    },
    {
      icon: School,
      title: 'Peaceful Environment',
      description: [
        '-> Rural campus to enhance focus and learning.',
        
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[600px]">
        <img
          src={image}
          alt="University Campus"
          className="w-full h-full object-contain"
        />
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <ul className="text-gray-600 text-left">
                  {feature.description.map((point, idx) => (
                    <li key={idx} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
