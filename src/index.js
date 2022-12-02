import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='dev-bgdnygo8ok28igty.uk.auth0.com'
    clientId='BUSzSxgxmQGGPBIUQnGU4pDFMq8SoEaY'
    redirectUri={window.location.origin}
    audience='https://dev-bgdnygo8ok28igty.uk.auth0.com/api/v2/'
    scope='read:current_user update:current_user_metadata'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
