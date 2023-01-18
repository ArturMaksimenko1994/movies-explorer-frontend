import React from 'react';
import './FormInput.css';

function FormInput({ type, inputName, nameId, value, onChange,minLength,maxLength }) {

  return (
    <input
      className={"form-input"}
      type={type}
      name={inputName}
      id={nameId}
      value={value}
      onChange={onChange}
      required
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}

export default FormInput;
