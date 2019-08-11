import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const renderRoute = route => (
  <Route
    key={route.name}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

const Redirecter = route => (
  <Route
    key={route.name}
    path={route.path}
    render={() => <Redirect to={route.redirectTo} />}
  />
);

function RouteManager(route, token) {
  const isAuthenticated = !!token;
  if (route.authType === 'authenticated' && isAuthenticated) {
    return renderRoute(route);
  } else if (route.authType === 'authenticated' && !isAuthenticated) {
    return Redirecter(route);
  } else if (route.authType === 'unAuthenticated' && isAuthenticated) {
    return Redirecter(route);
  } else if (route.authType === 'unAuthenticated' && !isAuthenticated) {
    return renderRoute(route);
  } else {
    return renderRoute(route);
  }
}

export default RouteManager;
