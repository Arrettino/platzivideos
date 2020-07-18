import React from 'react';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/pics/user-icon.png';
import logoPlatziVideo from '../assets/pics/logo-platzi-video-BW2.png';

function Header() {
  return (
    <header className='header'>
      <img className='header__img' src={logoPlatziVideo} alt='Platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href='/'>Cuenta</a></li>
          <li><a href='/'>Cerrar Sesión</a></li>
        </ul>
      </div>
    </header>

  );
}

export default Header;
