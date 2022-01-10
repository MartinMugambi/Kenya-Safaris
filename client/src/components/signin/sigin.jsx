import siginIcon from '../../assets/images/password.png';
// import MailIcon from '@material-ui/icons/Mail';
import './sigin.css';
const Sigin = () =>{
 return (
     <section className="sigin">
      <div className="sigin__section">
        <div className='sigin__section__logo'>
        <img src={siginIcon} alt='sigin__icon' />
        </div>
        <form className='sigin__form'>
        <h3>Sign in</h3>
        <input type='text' placeholder='Email address *'  required></input> 
        <input type= 'password' placeholder='Password *' required />
        <button>SIGN IN</button>
        <p>Don't have an account? <span >Sign Up</span></p> 
        </form>
      </div>
     </section >
 );
}

export default Sigin;