import React from 'react';
import { useParams } from 'react-router-dom';
import doctors from '../data/doctors.json';
import AppointmentForm from '../components/AppointmentForm';

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  if (!doctor) return <p className="p-4">Doctor not found.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto" />
      <h2 className="text-2xl text-center mt-4">{doctor.name}</h2>
      <p className="text-center text-gray-600">{doctor.specialization}</p>
      <p className="text-center mt-2">{doctor.availability}</p>

      <h3 className="mt-6 mb-2 text-lg font-semibold">Book Appointment</h3>
      <AppointmentForm doctorName={doctor.name} />
    </div>
  );
};

export default DoctorProfile;
