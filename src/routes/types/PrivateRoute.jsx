import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../selectors/user';

// User can only access those routes if they are logged in.
function PrivateRoute({ component: Component, render: Render, ...rest }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? (
        Render ? (
          Render(props)
        ) : Component ? (
          <Component {...props} />
        ) : null
      ) : (
        <Redirect to="/login" />
      ))}
    />
  );
}

export default PrivateRoute;
