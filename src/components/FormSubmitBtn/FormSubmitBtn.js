import React from 'react';
import './FormSubmitBtn.css';

function FormSubmitBtn({ text, isValid }) {

  let styles = isValid ? 'form-submit-btn form-submit-btn_active' : 'form-submit-btn'

  return (
    <button
      disabled={!isValid}
      onSubmit={(e) => e.preventDefault} type="submit"
      className={styles}>
      {text}
    </button>
  );
}

export default FormSubmitBtn;
