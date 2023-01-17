import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function TheUserExists(props){
    return(
        <ErrorPopup text={`Пользователь уже существует`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default TheUserExists;