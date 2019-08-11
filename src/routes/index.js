import { lazy } from 'react';
import Home from '../pages/Home';
import { isLocalhost } from '../utils/helpers';

const lazyImport = filePath =>
  lazy(() =>
    new Promise((resolve, reject) => {
      if (isLocalhost()) {
        filePath === './error'
          ? setTimeout(reject, 1000)
          : setTimeout(resolve, 1000);
      } else {
        resolve();
      }
    })
      .then(() => {
        return import('../pages/' + filePath);
      })
      .catch(err => {
        console.log('error', err);
        return import('../pages/NotFound');
      })
  );

const SignUp = lazyImport('SignUp');
const SignIn = lazyImport('SignIn');
const Dashboard = lazyImport('Dashboard');

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'signin',
    component: SignIn,
    exact: true,
    path: '/SignIn',
    authType: 'unAuthenticated',
    redirectTo: '/dashboard'
  },
  {
    name: 'signup',
    component: SignUp,
    exact: true,
    path: '/signup',
    authType: 'unAuthenticated',
    redirectTo: '/dashboard'
  },
  {
    name: 'dashboard',
    component: Dashboard,
    exact: true,
    path: '/dashboard',
    authType: 'authenticated',
    redirectTo: '/'
  }
];
