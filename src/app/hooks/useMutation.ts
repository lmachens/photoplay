import { useState } from 'react';

// https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useMutation<T extends (...args: any[]) => any>(
  action: T
): {
  data: Awaited<ReturnType<T>> | null;
  isLoading: boolean;
  errorMessage: string | null;
  mutate: (...args: Parameters<T>) => void;
} {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<Awaited<ReturnType<T>> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function mutate(...args: Parameters<T>) {
    try {
      setIsLoading(true);
      setData(null);
      const result = await action(...args);
      setData(result);
    } catch (error) {
      setErrorMessage(error.toString());
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, errorMessage, mutate };
}

export default useMutation;
