import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashPage from './session_form/splash_page';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link} from 'react-router-dom';

let icon_path = '/';

const App = () => (
  
  <div>
  
    <Route exact path="/" component={SplashPage}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />


    <footer>
      <h3>
        <ul>
          <li>Portfolio Site</li>
          <li>Linked In</li>
          <li>GitHub</li>
        </ul>
      </h3>
    </footer>

  </div>  
);

export default App;