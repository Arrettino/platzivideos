import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/pics/user-icon.png';
import logoPlatziVideo from '../assets/pics/logo-platzi-video-BW2.png';

function Header({ user, logoutRequest }) {
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    logoutRequest();
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logoPlatziVideo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt='' /> :
            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li><Link to='/'>Cuenta</Link></li>
              <li><Link to='#logout' onClick={handleLogout}>Cerrar Sesión</Link></li>
            </>
          ) : (
            <>
              <li><Link to='/login'>Iniciar Sesión</Link></li>
              <li><Link to='/register'>Registrarse</Link></li>
            </>
          )}
        </ul>
      </div>
    </header>

  );
}

function mapStateToProps(state) {
  return ({
    user: state.user,
  });
}

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
