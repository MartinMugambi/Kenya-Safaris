import './header.css';
import safari from '../../assets/images/safari.png';
const Header = () =>{
    return(
        <header className="header">
          <div className="header__title">
          <h2>Kenya Safaris</h2>
           <img src={safari} alt="logo" />
          </div>
          <div className="header__button">
           <button>Sigin</button>
          </div>
        </header>
    );
}

export default Header;