import './form.css';
import axios from 'axios';
import { useReducer, useState} from 'react';
import { TailSpin } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Forms = () =>{

  const CREATOR = 'CREATOR';
  const TITLE = 'TITLE';
  const DESCRIPTION = 'DESCRIPTION';
  const PICTURE = 'PICTURE';
   const initialState = {
    creator: '',
    title: '',
    description: '',
    picture: null,
     
}
   const reducer = (state =initialState, action) =>{
    switch(action.type){
       case CREATOR:
           return {
               ...state,
              creator: state.creator = action.payload,
           }
           case TITLE:
           return {
               ...state,
              title: state.title = action.payload,
           }
           case DESCRIPTION:
           return {
               ...state,
              description: state.description = action.payload,
           }
           case PICTURE:
           return {
               ...state,
              picture: state.picture = action.payload,
           }
            default: return state;
    }
}
const [inputState, dispatch] = useReducer(reducer, initialState);
const creatorEvent = (event) =>{
  dispatch({type:CREATOR, payload: event.target.value});
}
const titleEvent = (event) =>{
    dispatch({type:TITLE, payload: event.target.value});
  }

  const descriptionEvent = (event) =>{
    dispatch({type:DESCRIPTION, payload: event.target.value});
  }
  const pictureEvent = (event) =>{
    dispatch({type:PICTURE, payload: event.target.files[0]});
  }

  const [loading, setLoading] = useState(false);
  const submit = (event) =>{
      event.preventDefault();
      const data = new FormData();
      data.append("creator",inputState.creator);
      data.append("title",inputState.title);
      data.append("description",inputState.description);
      data.append("picture",inputState.picture);
      setLoading(true);
      axios.post('https://moringa-test.herokuapp.com/api/posts', data).then(response =>{
          alert('post added Successful');
          setLoading(false);
      }).catch(err =>{
         console.log(err);
      })
  }
 
  const clear =(e) =>{
    
    inputState.creator = '';
    inputState.title= '';
    inputState.description = '';
    inputState.picture = null;
  }
    

    return(
        <>
          <form encType='multipart/form-data' className='post__safari'>
           <h3>Share your Safari</h3>
           <input type= 'text' placeholder='creator' onChange={creatorEvent} required/>
           <input type= 'text' placeholder='title' onChange={titleEvent} required/>
           <textarea rows="4" cols="100" onChange={descriptionEvent} placeholder='description'>

           </textarea>
            <div className='post__safari__btn'>
            <input type='file' name= 'file' onChange={pictureEvent} required/>
            </div>
           <button onClick={submit} className='btn-1'> {loading && <TailSpin className='load'
    heigth="20"
    width="20"
    color='#f5a700'
  />}Submit</button>
           <button onClick={clear} className='btn-2'>clear</button>
         </form>
        </>
    );
}

export default Forms;