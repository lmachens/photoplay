import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import RegisterForm from './pages/Register/Register';
import Cast from './pages/Cast/Cast';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Homescreen from './pages/Homescreen/Homescreen';
import Login from './pages/Login/Login';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';
import styles from './App.module.css';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: Homescreen, exact: true },
  { path: '/movie/:id', Component: MovieDetails },
  { path: '/forgotpassword', Component: ForgotPassword },
  { path: '/login', Component: Login },
  { path: '/register', Component: RegisterForm },
  { path: '/cast/:name', Component: Cast },
  { path: '/show/:id', Component: TVShowDetails },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
