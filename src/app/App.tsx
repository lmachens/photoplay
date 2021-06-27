import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import RegisterForm from './pages/Register/Register';
import Cast from './pages/Cast/Cast';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Homescreen from './pages/Homescreen/Homescreen';
import Login from './pages/Login/Login';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import TVShowDetails from './pages/TVShowDetails/TVShowDetails';
import MobileLayout from './components/MobileLayout/MobileLayout';
import Profile from './pages/Profile/Profile';
import FavouritePage from './pages/FavouritePage/FavouritePage';

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
  { path: '/profile', Component: Profile },
  { path: '/favorites', Component: FavouritePage },
];

function App(): JSX.Element {
  return (
    <MobileLayout>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </MobileLayout>
  );
}

export default App;
