import React from 'react';
import style from './Filter.css';

const Filter = ({ value, onFilterChange }) => {
  return (
    <label className="inputStyle">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
      />
    </label>
  );
};

export default Filter;
