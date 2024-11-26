import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'Polina Chebanova',
    title: 'Co-founder',
    image: 'https://phenomenonstudio.com/wp-content/uploads/2024/09/1.jpg',
    description: `An experienced manager who oversees Innogative customer relations and leads the team behind it. Polina also has deep expertise in design, having created numerous successful products in the past.`,
  },
  {
    name: 'Valerii Filimonov',
    title: 'CEO & Co-founder',
    image: 'https://phenomenonstudio.com/wp-content/uploads/2024/09/2.jpg',
    description: `CEO of Innogative Studio, Valerii brings leadership experience and has helped shape the company into what it is today. His vision drives the company's innovation.`,
  },
  {
    name: 'Yuliia Apanasenko',
    title: 'Head of Product Business Unit',
    image: 'https://phenomenonstudio.com/wp-content/uploads/2024/09/3.jpg',
    description: `Yuliia oversees the product business unit with a keen focus on innovation and product development. She has launched several successful projects.`,
  },
];

const LeadershipTeam = () => {
  const [hoveredMemberIndex, setHoveredMemberIndex] = useState(null);

  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Our leadership <span className="text-orange-500">team</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md p-6 text-center border-2 overflow-hidden transition-all duration-1000 ease-in"
            onMouseEnter={() => setHoveredMemberIndex(index)}
            onMouseLeave={() => setHoveredMemberIndex(null)}
          >
            {/* Front Side: Image and Basic Info */}
            <div
              className={`transition-all duration-1000 ease-in-out transform ${
                hoveredMemberIndex === index ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>

            {/* Back Side: Description */}
            <div
              className={`absolute inset-0 bg-gray-900 text-white p-6 flex flex-col justify-center items-center rounded-2xl transition-all duration-1000 ease-in-out transform ${
                hoveredMemberIndex === index ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{member.title}</p>
              <p className="text-center text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
