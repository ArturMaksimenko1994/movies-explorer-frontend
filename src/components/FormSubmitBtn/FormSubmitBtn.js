import React from 'react';
import './FormSubmitBtn.css';

function FormSubmitBtn({ text }) {
  return (
    <button type="submit" className={"form-submit-btn"}>
      {text}
    </button>
  );
}

export default FormSubmitBtn;
