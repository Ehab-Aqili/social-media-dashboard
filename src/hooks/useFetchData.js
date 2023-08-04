import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useFetchData = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
console.log(url)
  useEffect(() => {
    setLoading(true);
    setError(null);

    // const config = {
    //   params: {
    //     email: email,
    //   },
    // };

    // axios.get(url, {
    //   headers: {
    //     Authorization: `bearer ${token}`
    //   }
    // }).then((response) => {
    //     setData(response.data);
    //     setLoading(false);
    //   }).catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //     navigate('/login');
    //   });
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `bearer ${token}`
          }
        }).catch((err) => {
          if (err && err.response) {
            setError(err.response.data);
            setLoading(false);
            navigate('/login');
          }
          // navigate('/login');
        });
        if (response && response.data) {
          console.log(response.data)
          setData(response.data);
          setLoading(false);
        }


      } catch (error) {
        console.error('Error fetching user data:', error);

      }
    }
    fetchData()
  }, [navigate, token, url]);
  return { data, loading, error };
};

export default useFetchData;
