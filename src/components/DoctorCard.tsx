import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DoctorProps {
  id: number;
  name: string;
  specialization: string;
  image: string;
  availability: string;
}

const DoctorCard: React.FC<DoctorProps> = ({ id, name, specialization, image, availability }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/doctor/${id}`)}
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-center text-gray-600">{specialization}</p>
      <p className={`text-center mt-2 font-medium ${availability.includes('Available') ? 'text-green-600' : 'text-red-500'}`}>
        {availability}
      </p>
    </div>
  );
};

export default DoctorCard;
