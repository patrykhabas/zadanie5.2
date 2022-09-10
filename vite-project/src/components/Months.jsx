import React from 'react';
import { months } from '../data/months';

export const Months = () => {
  return (
    <ul>
      {months.map((month) => (
        <li key={month}>{month}</li>
      ))}
    </ul>
  );
};
