import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../selectors/user';

// User can only access those routes if they are not logged in.
function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
}

export default PrivateRoute;
