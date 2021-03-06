import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A Senha é obrigatória'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <strong>SUA SENHA</strong>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="*********"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
