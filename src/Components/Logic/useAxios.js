import {useState, useEffect, Alert} from 'react';
import axios from 'axios';

const useAxios = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .catch(err => Alert.alert(err.message));
  }, [url]);

  return data;
};
export default useAxios;
