import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
