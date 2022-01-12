import siginIcon from '../../assets/images/password.png';
// import MailIcon from '@material-ui/icons/Mail';
import './sigin.css';
import {useNavigate} from 'react-router-dom';
import { useReducer,useState } from 'react';
import axios from 'axios';
import { TailSpin } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Sigin = () =>{
  const navigate = useNavigate();

   const navigationToPage = () =>{
     navigate('/')
   }
   const navigate2 = useNavigate();

   const USERNAME = 'USERNAME';
   const PASSWORD = 'PASSWORD';
   const initialState = {
    username: '',
    password: '',
     
}
   const reducer = (state =initialState, action) =>{
    switch(action.type){
       case USERNAME:
           return {
               ...state,
              username: state.username = action.payload,
           }
           case PASSWORD:
           return {
               ...state,
              password: state.password = action.payload,
           }
            default: return state;
    }
}
const [inputState, dispatch] = useReducer(reducer, initialState);
const usernamevent = (event) =>{
  dispatch({type:USERNAME, payload: event.target.value});
}
const passwordEvent = (event) =>{
    dispatch({type:PASSWORD, payload: event.target.value});
  }

  const [loading, setLoading] = useState(false);
  const submit = (e) =>{
    e.preventDefault();
        setLoading(true);
       axios.post('https://moringa-test.herokuapp.com/api/login', {
          username: inputState.username,
          password: inputState.password,
       }).then(response =>{
          console.log(response.status);
          setLoading(false);
          navigate2('/home');
       }).catch(err =>{
          if(err){
            setLoading(false);
            alert('check if password or username is correct');
          }
       })
     
  }
     
 return (
     <section className="sigin">
      <div className="sigin__section">
        <div className='sigin__section__logo'>
        <img src={siginIcon} alt='sigin__icon' />
        </div>
        <form className='sigin__form'>
        <h3>Sign in</h3>
        <input type='text' placeholder='username *'  onChange={usernamevent} required></input> 
        <input type= 'password' placeholder='Password *' onChange={passwordEvent} required />
        <button onClick={submit}>{loading && <TailSpin   
    heigth="20"
    width="20"
    color='#f5a700'
  />}SIGN IN</button>
        <p>Don't have an account? <span onClick={navigationToPage}>Sign Up</span></p> 
        </form>
      </div>
     </section >
 );
}

export default Sigin;