import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function RegisterModalPopap(props){
    return(
        <ErrorPopup text={`Регистрация прошла успешно`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default RegisterModalPopap;