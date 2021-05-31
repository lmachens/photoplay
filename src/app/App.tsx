import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/movie/:name">
          <MovieDetails />
        </Route>
        <Route path="/help">
          <p>Help</p>
        </Route>
      </Switch>
      <Switch></Switch>
    </BrowserRouter>
  );
}

export default App;
