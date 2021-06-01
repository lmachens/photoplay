import { useEffect, useState } from 'react';

function useFetch<T>(
  url: string
): {
  data: T | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);
  const isLoading = data === null;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => setErrorMessage(error.toString()));
  }, []);

  return { data, isLoading, errorMessage };
}

export default useFetch;
