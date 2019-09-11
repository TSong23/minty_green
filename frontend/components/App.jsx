import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import SplashImage from './session_form/splash_image';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Link} from 'react-router-dom';

let icon_path = '/';

const App = () => (
  
  <div>
    <header className="splash_top_nav">
      <Link to={`${icon_path}`}>mintgreen</Link>
      <GreetingContainer />
    
    </header>
    <br/>

    <Switch>
      {/* <Route exact path="/login" component={SplashImage}/> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>  

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