import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Minty Green</h1>
      <GreetingContainer />
    
    </header>
    <br/>
    <div>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
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