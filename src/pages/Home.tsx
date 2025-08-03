import React, { useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import doctorsData from '../data/doctors.json';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredDoctors = doctorsData.filter((doc) =>
    doc.name.toLowerCase().includes(query.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Doctors</h1>
      <SearchBar query={query} onChange={setQuery} />
      <div className="grid gap-4 md:grid-cols-2">
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} {...doc} />
        ))}
      </div>
    </div>
  );
};

export default Home;
