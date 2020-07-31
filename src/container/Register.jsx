import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

function Register({ registerRequest, history }) {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    registerRequest(form);
    history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleRegister}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleChange}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleChange}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleChange}
            />
            <button type='submit' className='button'>
              Registrarme
            </button>
          </form>
          <Link to='login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
