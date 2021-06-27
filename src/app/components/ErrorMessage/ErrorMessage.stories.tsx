import React from 'react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Component/ErrorMessage',
  component: ErrorMessage,
};

export const TextOnly = (): JSX.Element => (
  <ErrorMessage>Something bad happend</ErrorMessage>
);
export const WithButton = (): JSX.Element => (
  <ErrorMessage>
    Something bad happend <button>Try again</button>
  </ErrorMessage>
);
