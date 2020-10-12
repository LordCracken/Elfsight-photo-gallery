  import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async() => {
      try {
        const json = await fetch(url);
        const res = await json.json();
        setResponse(res);
      } catch(err) {
        setError(err);
      }
    })();
  }, []);

  return { response, error };
};