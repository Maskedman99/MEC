import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

const useEvaluationAxios = (clas, rollNo) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let params = `class=${clas}&rollno=${rollNo}&Button1=Submit`;

    axios({
      method: 'post',
      url: 'http://evaluation.mec.ac.in/',
      data: params,
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    })
      .then(response => setData(response))
      .catch(error => {
        if (error.response) {
          //The request was made and the server responded with a status code that falls out of the range of 2xx
          Alert.alert(
            'Error',
            `Sorry, sever responses with ${error.response.status}. Try again later.`,
            [],
            {cancelable: true}
          );
        } else if (error.request) {
          //The request was made but no response was received, `error.request`
          Alert.alert('Error', 'Check your connection', [], {cancelable: true});
        } else {
          // Something happened in setting up the request and triggered an Error
          Alert.alert('Error', JSON.stringify(error.message), [], {cancelable: true});
        }
      });
  }, [clas, rollNo]);

  return data;
};

export default useEvaluationAxios;
