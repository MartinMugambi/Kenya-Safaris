import './App.css';
import SignInPage from './pages/sigin/sigin_page';
import SignUpPage from './pages/signup/signup_page';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';

function App() {
  return (
    <Router>
    <div className="App">     
     <Routes>
       <Route path='/signin'  element= {<SignInPage />}/>
       <Route path ='/' element= {<SignUpPage />} />
       <Route path = '/home' element= {<Home />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
