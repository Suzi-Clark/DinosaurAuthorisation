import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-0ynzls7dh5xjmgl5.eu.auth0.com"
    clientId="aSmGkT5aNHLqDtimKe8xIhN2E3rl8RWg"
    redirectUri={window.location.origin}
    audience='https://dev-0ynzls7dh5xjmgl5.eu.auth0.com/api/v2/'
    scope='read:current_user update:current_user_metadata'
  >
    <App />
  </Auth0Provider>,
);