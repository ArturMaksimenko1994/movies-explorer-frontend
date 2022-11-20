import React from 'react';

import Form from './../Form/Form';
import FormLabel from './../FormLabel/FormLabel';
import FormInput from './../FormInput/FormInput';
import FormErrorMessage from './../FormErrorMessage/FormErrorMessage';
import FormSubmitBtn from './../FormSubmitBtn/FormSubmitBtn';

const Register = () => (
    <Form>

        <FormLabel label="Имя" name={'name'}>
            <FormInput
                type="text"
                inputName={'name'}
            />
        </FormLabel>

        <FormLabel label="E-mail" name={'email'}>
            <FormInput
                type="email"
                inputName={'email'}
            />
        </FormLabel>

        <FormLabel label="Пароль" name={'password'}>
            <FormInput
                type="password"
                inputName={'password'}
            />
        </FormLabel>

        <FormErrorMessage />

        <FormSubmitBtn
            text={'Зарегистрироваться'}
        />
    </Form>
);

export default Register;
