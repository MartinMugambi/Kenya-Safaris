import { LOADING, FETCH_DATA, ERROR } from "./types";
import axios from "axios";

const url ='https://moringa-test.herokuapp.com/api/posts';

 

export const loading = () =>{
    return {
        type: LOADING,
    }
}

export const fecthdata = (data) =>{
    return {
       type: FETCH_DATA,
       payload: data,
    }
}

export const err = (error) =>{
    return {
        type: ERROR,
         payload: error,
    }
}

export const  data = () => {
    return (dispatch) =>{
      dispatch(loading);
      axios.get(url).then(response =>{
        const data = response.data;
        dispatch(fecthdata(data));
      }).catch(error =>{
        const msg = error.message;
        dispatch(err(msg))
      })
    }
}