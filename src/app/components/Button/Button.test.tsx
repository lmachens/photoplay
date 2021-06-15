import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders Start Button', () => {
  render(<Button>Start</Button>);
  expect(screen.getByRole('button').innerHTML).toBe('Start');
});

test('calls onClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me!</Button>);

  fireEvent.click(screen.getByRole('button'));

  expect(handleClick).toBeCalled();
});
