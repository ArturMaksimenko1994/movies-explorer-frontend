import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function TheUserExists(props){
    return(
        <ErrorPopup text={`Пользователь создан`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default TheUserExists;