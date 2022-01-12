import './header.css';
import safari from '../../assets/images/safari.png';
import {useNavigate} from 'react-router-dom'
const Header = () =>{
  const navigate = useNavigate();

   const navigationToPage = () =>{
     navigate('/signin')
   }
    return(
        <header className="header">
          <div className="header__title">
          <h2>Kenya Safaris</h2>
           <img src={safari} alt="logo" />
          </div>
          <div className="header__button">
           <button onClick={navigationToPage}>Sigin</button>
          </div>
        </header>
    );
}

export default Header;