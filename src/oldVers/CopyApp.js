import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import { NavBar } from "./components/NavBar";
// import { Footer } from './views/Footer'
import { Home } from '../views/Home'
import { Profile } from "../views/Profile";
import { ExternalApi } from "./views/ExternalApi";
import ProtectedRoute from "../auth/protected-route";

// import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
   return <div>Loading...</div>
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {/* <NavBar /> */}
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <Route path='*' component={() => '404 NOT FOUND'} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;



// import './App.css';
// import LoginButton from './component/LoginButton';
// import LogoutButton from './component/LogoutButton';
// import { Profile } from './component/Profile';
// import { useAuth0 } from '@auth0/auth0-react'

// function App() {
//   const { isLoading } = useAuth0
//   if (isLoading) return <div>Loading...</div>
//   return (
//     <>
//         <LoginButton />
//         <LogoutButton />
//         <Profile />
//     </>
//   );
// }

// export default App;
