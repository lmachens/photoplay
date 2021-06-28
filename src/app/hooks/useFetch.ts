import { useEffect, useState } from 'react';

function useFetch<T>(
  url: string
): {
  data: T | null;
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
} {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);
  const isLoading = data === null;

  function refetch() {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => setErrorMessage(error.toString()));
  }

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, isLoading, errorMessage, refetch };
}

export default useFetch;
