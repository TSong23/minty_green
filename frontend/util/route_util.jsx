import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter} from 'react-router-dom';
import SplashPage from '../components/splash_home/splash_page';
import HomePageContainer from '../components/splash_home/home_page_container';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
        // redirect to dashboard
      )
  )} />
)

// HomeMain {...props} should be the info from search bar.
const Protected = ({ path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <HomePageContainer {...props} />
    ) : (
        <SplashPage/>
      )
  )} />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
