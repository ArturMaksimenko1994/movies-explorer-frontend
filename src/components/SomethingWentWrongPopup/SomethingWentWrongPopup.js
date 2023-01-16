import React from 'react';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function SomethingWentWrongPopup(props){
    return(
        <ErrorPopup text={`Во время запроса произошла ошибка. Пожалуйста подождите немного ...`} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default SomethingWentWrongPopup;