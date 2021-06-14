import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchField from './SearchField';

test('renders SearchField', () => {
  render(<SearchField placeholder="Hello" value="" onChange={jest.fn()} />);
  expect(screen.getByRole('textbox')).toHaveProperty('placeholder', 'Hello');
});

test('calls onChange with value', () => {
  const handleChange = jest.fn();
  render(
    <SearchField placeholder="Keyword..." value="" onChange={handleChange} />
  );

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'cars' } });
  expect(handleChange).toBeCalledWith('cars');
});
