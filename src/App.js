import React, { createContext, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Background from './Components/Background/Background';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">

            <Background></Background>

          </Route>

          <Route path="/home">
            <Background></Background>
          </Route>


          <PrivateRoute path="/register/:cardName">
            <Register></Register>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>

          </Route>
          <Route path="/registration">
            <Registration></Registration>

          </Route>




        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
