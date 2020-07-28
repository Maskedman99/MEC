import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

const useAxios = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data))
      .catch(error => {
        if (error.response) {
          //The request was made and the server responded with a status code that falls out of the range of 2xx
          Alert.alert(
            'Error',
            `Sorry, sever responses with ${error.response.status}. Try again later.`,
            [],
            {
              cancelable: true
            }
          );
        } else if (error.request) {
          //The request was made but no response was received, `error.request`
          Alert.alert('Error', 'Check your connection', [], {cancelable: true});
        } else {
          // Something happened in setting up the request and triggered an Error
          Alert.alert('Error', JSON.stringify(error.message, [], {cancelable: true}));
        }
      });
  }, [url]);

  return data;
};
export default useAxios;
