import React from 'react';
import './FormInput.css';

function FormInput({ type, inputName }) {

  return (
    <input
      className={"form-input"}
      type={type}
      name={inputName}
      required
    />
  );
}

export default FormInput;
