import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from './views/Home'
import { Profile } from "./views/Profile";
import { Grafiken } from './views/Grafiken'
import ProtectedRoute from "./auth/protected-route";
import { JavaApps } from "./views/JavaApps";
import { DecodeQRCode } from "./views/JavaApps/DecodeQRCode";
import { Validate24hours } from "./views/JavaApps/Validate24hours";
import { WorkingDays } from "./views/JavaApps/WorkingDays";
import { HumanTime } from "./views/JavaApps/HumanTime";
import { Meetings } from "./views/JavaApps/Meetings";
import { CalendarWeek } from "./views/JavaApps/CalendarWeek";
import { Letters } from "./views/JavaApps/Letters";

// import { Ausfall } from "./views/Ausfall";
// import { DrSchiffbruch } from "./views/Schiffbruch";
// import { DienstBoerse } from "./views/DienstBoerse";
import './styles/style.css'
import { UnluckyDays } from "./views/JavaApps/UnluckyDays";
import { Spielchen } from "./views/JavaApps/Spielchen";

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
      <Route path="/grafiken" component={Grafiken} />
      <Route path="/java-apps" component={JavaApps} />
      <Route path="/decodeqrcode" component={DecodeQRCode} />
      <Route path="/validate24hours" component={Validate24hours} />
      <Route path='/humantime' component={HumanTime} />
      <Route path='/WorkingDays' component={WorkingDays} />
      <Route path='/meetings' component={Meetings} />
      <Route path='/calendarweek' component={CalendarWeek} />
      <Route path='/unluckydays' component={UnluckyDays} />
      <Route path='/spielchen' component={Spielchen} />
      <Route path='/letters' component={Letters} />
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
