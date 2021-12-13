import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import "./index.css";

ReactDOM.render (
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Auth0Provider } from '@auth0/auth0-react'
// import { BrowserRouter as Router } from 'react-router-dom'

// ReactDOM.render(
//   <Router>
//     <Auth0Provider
//       domain='dev-j4gs758k.eu.auth0.com'
//       clientId='GatUFMLfgwVZKaPP5btMLLFp17x5VuGb'
//       redirectUri={window.location.origin}
//     >
//       <App />
//     </Auth0Provider>
//   </Router>,
//   document.getElementById('root')
// );

