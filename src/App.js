import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';
import RouteManager from './components/RouteManager';
import { getToken } from './utils/helpers';

const App = () => {
  const token = getToken();

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Router>
        <React.Fragment>
          <Switch>
            <Switch>{routes.map(route => RouteManager(route, token))}</Switch>
          </Switch>
        </React.Fragment>
      </Router>
    </Suspense>
  );
};

export default App;
