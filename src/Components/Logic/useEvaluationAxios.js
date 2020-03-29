import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';

const useEvaluationAxios = ({Clas = Clas, rollNo = rollNo}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let Params = `class=${Clas}&rollno=${rollNo}&Button1=Submit`;

    axios({
      method: 'post',
      url: 'http://evaluation.mec.ac.in/',
      data: Params,
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    })
      .then(response => setData(response))
      .catch(e => Alert.alert('Error', e.message));
  }, [Clas, rollNo]);

  return data;
};

export default useEvaluationAxios;
