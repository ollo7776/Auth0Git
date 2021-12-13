import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from './views/Home'
import { Profile } from "./views/Profile";
import { Gallery } from './views/Gallery'
import ProtectedRoute from "./auth/protected-route";
import { JavaApps } from "./views/JavaApps";
import { DecodeQRCode } from "./views/JavaApps/DecodeQRCode";
// import { Ausfall } from "./views/Ausfall";
// import { DrSchiffbruch } from "./views/Schiffbruch";
// import { DienstBoerse } from "./views/DienstBoerse";
import './styles/style.css'

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <ProtectedRoute path="/profile" component={Profile} />
      {/* <ProtectedRoute path="/ausfall" component={Ausfall} /> */}
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/java-apps" exact component={JavaApps} />
      <Route path="/decodeqrcode" exact component={DecodeQRCode} />
      {/* <Route path="/dienst-boerse" exact component={DienstBoerse} /> */}
      <Route path='*' component={() => '404 NOT FOUND'} />
    </Switch>

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
