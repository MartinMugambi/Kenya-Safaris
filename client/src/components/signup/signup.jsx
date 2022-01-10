import siginIcon from '../../assets/images/password.png';
import './signup.css';
const SignUp = () =>{
    return(
        <section className='signup'> 
        <div className="signup__section">
        <div className='signup__section__logo'>
        <img src={siginIcon} alt='signup__icon' />
        </div>
        <form className='signup__form'>
        <h3>Sign up</h3>
        <div className='signup__form__input'>
        <input type='text' placeholder='First Name *'  required></input> 
        <input type= 'text' placeholder='Last Name *' required />
        </div>
        <div className='signup__form__register'>
        <input type='text' placeholder='Email address *'  required></input> 
        <input type= 'password' placeholder='Password *' required />
        <input type= 'password' placeholder=' Reapeat password *' required />
        </div>
        <button>Register</button>
        <p>Already  have an account? <span >Sign In</span></p> 
        </form>
        </div>
        </section>
    );
}

export default SignUp;