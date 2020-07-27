import React from 'react';
import googleIcon from '../assets/pics/google-icon.png';
import twitterIcon from '../assets/pics/twitter-icon.png';
import '../assets/styles/components/Login.scss';

function Login() {
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form'>
          <input className='input' type='text' placeholder='Correo' />
          <input className='input' type='password' placeholder='Contraseña' />
          <button type='button' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              <p>Recuérdame</p>
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google Icon' />
            <p>Inicia sesión con Google</p>
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter Icon' />
            <p>Inicia sesión con Twitter</p>
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <a href='/'>Regístrate</a>
        </p>
      </section>
    </section>
  );

}

export default Login;
