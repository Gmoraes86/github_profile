/* eslint-disable @typescript-eslint/no-explicit-any */
const baseURL = import.meta.env.VITE_HOST_API;

export const ApiService = (requestConfig?: RequestInit | undefined) => {
  const fetchConfig = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    ...requestConfig,
  };

  return {
    get: async function <T = any>(endpoint: string): Promise<T> {
      const response = await fetch(baseURL + endpoint, fetchConfig);
      return response.json() as Promise<T>;
    },
  };
};
