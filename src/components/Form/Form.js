import React from 'react';
import './Form.css';

function Form({ children, onSubmit }) {
  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;