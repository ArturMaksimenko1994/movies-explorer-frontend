import React from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './../Form/Form';
import FormLabel from './../FormLabel/FormLabel';
import FormInput from './../FormInput/FormInput';
import FormSubmitBtn from './../FormSubmitBtn/FormSubmitBtn';

import * as auth from './../../utils/auth.js';

import { useFormWithValidation } from '../../utils/validation';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const Register = (props) => {

    const validation = useFormWithValidation();

    const navigate = useNavigate();

    function logUp(token) {
        localStorage.setItem("token", token);
        props.handleLogin();
        navigate('/', { replace: true });
    }

    //регистрация пользователя
    const handleSubmit = (e) => {
        e.preventDefault();
        // здесь обработчик регистрации
        auth.register(validation.values.name, validation.values.email, validation.values.password)
            .then((res) => {
                if (res.token) {
                    logUp(res.token)
                } 
            }).catch(() => {
                props.openErrorPopup()
            }
            )
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormLabel label="Имя" name={'name'}>
                <FormInput
                    type="text"
                    inputName={'name'}
                    nameId={'nameRegister'}
                    value={validation.values.value}
                    onChange={validation.handleChange}
                    minLength="5"
                />
                <ErrorMessage isActive={validation.errors.name} message={`Введите имя`} />
            </FormLabel>

            <FormLabel label="E-mail" name={'email'}>
                <FormInput
                    type="email"
                    inputName={'email'}
                    nameId={'emailRegister'}
                    value={validation.values.value}
                    onChange={validation.handleChange}
                    maxLength="40"
                />
                <ErrorMessage isActive={validation.errors.email} message={`Введите корректный email`} />
            </FormLabel>

            <FormLabel label="Пароль" name={'password'}>
                <FormInput
                    type="password"
                    inputName={'password'}
                    nameId={'passwordRegister'}
                    minLength="5"
                    maxLength="200"
                    value={validation.values.value}
                    onChange={validation.handleChange}
                />
                <ErrorMessage isActive={validation.errors.password} message={`Введите пароль`} />
            </FormLabel>

            <FormSubmitBtn isValid={validation.isValid} text={'Зарегистрироваться'} />
        </Form>
    );
}

export default Register;
