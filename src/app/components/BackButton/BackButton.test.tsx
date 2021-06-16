import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BackButton from './BackButton';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

/**
 * https://testing-library.com/docs/example-react-router/
 */
test('renders Start BackButton', () => {
  const history = createMemoryHistory({
    initialEntries: ['/register', '/login'],
    initialIndex: 1,
  });

  render(
    <Router history={history}>
      <BackButton />
    </Router>
  );

  expect(history.location.pathname).toBe('/login');
  fireEvent.click(screen.getByRole('button'));
  expect(history.location.pathname).toBe('/register');
});
