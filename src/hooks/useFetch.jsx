import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetch() {
      setError(null);
      setData(null);
      try {
        const response = await fetch(URL);

        if (response.ok === false) {
          throw new Error("A network error occured!");
        }

        const posts = await response.json();
        setData(posts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    handleFetch();
  }, [URL]);

  return { data, isLoading, error };
};

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const json = await response.json();
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

export default useFetch;
