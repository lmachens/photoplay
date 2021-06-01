import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Profile from './pages/Profile/Profile';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route exact path="/movie/:name">
          <MovieDetails />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;
