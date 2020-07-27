import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/pics/user-icon.png';
import logoPlatziVideo from '../assets/pics/logo-platzi-video-BW2.png';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logoPlatziVideo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li><Link to='/'>Cuenta</Link></li>
          <li><Link to='/'>Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>

  );
}

export default Header;
