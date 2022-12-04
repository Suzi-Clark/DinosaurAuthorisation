import React from 'react';
import './LoginLogout.css';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
    {!isAuthenticated ? (
      <button id='login' className='logButton' onClick={() => loginWithRedirect()}>
      Log In</button>)
      : (<button id='logout' className='logButton' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out</button>)
    }
    </div>
    )
};

export default LoginButton;
