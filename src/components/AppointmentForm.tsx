import React, { useState } from 'react';

interface Props {
  doctorName: string;
}

const AppointmentForm: React.FC<Props> = ({ doctorName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && dateTime) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <p className="text-green-600 font-semibold mt-4">Appointment booked with {doctorName}!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Patient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
