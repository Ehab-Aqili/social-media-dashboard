import { useEffect, useState } from "react";
import axios from "axios";
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // const config = {
    //   params: {
    //     email: email,
    //   },
    // };

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetchData;
