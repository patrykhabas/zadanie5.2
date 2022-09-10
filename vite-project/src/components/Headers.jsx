import React from 'react';
import { formatText } from '../utils/utils';

export const Header = ({ text }) => {
  return <h2>{formatText(text)}:</h2>;
};
