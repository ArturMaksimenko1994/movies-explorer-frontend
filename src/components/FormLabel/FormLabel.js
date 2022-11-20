import React from 'react';
import './FormLabel.css';

const FormLabel = ({ name, label, children }) => (
  <label className="form-label" htmlFor={name}>
    <span className="form-label__text">{label}</span>
    {children}
  </label>
);

export default FormLabel;