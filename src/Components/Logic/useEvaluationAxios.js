import { useState, useEffect } from "react";
import axios from "axios";

const useEvaluationAxios = ({ Clas = Clas, rollNo = rollNo }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let Params = `class=${Clas}&rollno=${rollNo}&Button1=Submit`;

    axios({
      method: "post",
      url: "http://evaluation.mec.ac.in/",
      data: Params,
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    })
      .then(response => setData(response))
      .catch(error => console.log(error));
  }, [Clas, rollNo]);

  return data;
};

export default useEvaluationAxios;
