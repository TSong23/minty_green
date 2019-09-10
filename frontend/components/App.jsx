import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header className="login-signup">
      <h1 >Minty Green</h1>
      <GreetingContainer />
    
    </header>
    <br/>
    <div>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>

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