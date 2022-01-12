import { useReducer,useState } from 'react';
import siginIcon from '../../assets/images/password.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './signup.css';
import { TailSpin } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const SignUp = () =>{
  const FIRSTNAME = 'FIRSTNAME';
  const LASTNAME = 'LASTNAME';
  const USERNAME = 'USERNAME';
  const PASSWORD = 'PASSWORD';
  const CONFIRMPASSWORD= 'CONFIRMPASSWORD';

   const navigate = useNavigate();

   const navigate2 = useNavigate();

   

   const navigationToPage = () =>{
     navigate('/signin');
   }
    const initialState = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmPassword: '',
    }

    const reducer = (state =initialState, action) =>{
        switch(action.type){
          case FIRSTNAME:
               return {
                   ...state,
                  firstname: state.firstname = action.payload,
               }
               case LASTNAME:
               return {
                   ...state,
                  lastname: state.lastname = action.payload,
               }
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
               case CONFIRMPASSWORD:
               return {
                   ...state,
                  confirmPassword: state.confirmPassword = action.payload,
               }
        }
    }
    const [inputState, dispatch] = useReducer(reducer, initialState);

    const firstNameEvent = (event) =>{
      dispatch({type:FIRSTNAME, payload: event.target.value});
    }
    const lastNameEvent = (event) =>{
      dispatch({type:LASTNAME, payload: event.target.value});
    }
    const usernamevent = (event) =>{
      dispatch({type:USERNAME, payload: event.target.value});
    }
    const passwordEvent = (event) =>{
        dispatch({type:PASSWORD, payload: event.target.value});
      }
      const confirmPasswordEvent = (event) =>{
        dispatch({type:CONFIRMPASSWORD, payload: event.target.value});
      }

      const [loading, setLoading] = useState(false);
      const submit = (e) =>{
        e.preventDefault();
            setLoading(true);
           axios.post('https://moringa-test.herokuapp.com/api/register', {
              firstname: inputState.firstname,
              lastname: inputState.lastname,
              username: inputState.username,
              password: inputState.password,
           }).then(response =>{
            
             if(inputState.password !== inputState.confirmPassword || inputState.firstname === '' || inputState.lastname === '' || inputState.password === '' || inputState.confirmPassword ===''){
                alert('check passowrd or no epmpty field allowed');
                setLoading(false);
             } else {
              setLoading(false);
              navigate2('/signin');
             }
              
              console.log(response.data);
           }).catch(err =>{
            
             console.warn(err);
           })
         
      }
    return(
        <section className='signup'> 
        <div className="signup__section">
        <div className='signup__section__logo'>
        <img src={siginIcon} alt='signup__icon' />
        </div>
        <form className='signup__form'>
        <h3>Sign up</h3>
        <div className='signup__form__input'>
        <input type='text' placeholder='First Name *' onChange={firstNameEvent} required></input> 
        <input type= 'text' placeholder='Last Name *' onChange={lastNameEvent} required />
        </div>
        <div className='signup__form__register'>
        <input type='text' placeholder='Username *' onChange={usernamevent}  required></input> 
        <input type= 'password' placeholder='Password *' onChange={passwordEvent} required />
        <input type= 'password' placeholder=' Reapeat password *' onChange={confirmPasswordEvent} required />
        </div>
        <button onClick={submit}>  {loading && <TailSpin className='load'
    heigth="20"
    width="20"
    color='#f5a700'
  />}Register</button>
        <p>Already  have an account? <span onClick={navigationToPage} >Sign In</span></p> 
        </form>
        </div>
        </section>
    );
}

export default SignUp;