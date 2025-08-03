import React from 'react';

interface Props {
  query: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search by name or specialization..."
    value={query}
    onChange={(e) => onChange(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />
);

export default SearchBar;
