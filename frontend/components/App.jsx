import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  
  <div>
  <Switch>
    <ProtectedRoute exact path="/"/> 
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Redirect from="*" to='/' />
  </Switch>
  </div>  
);

export default App;










