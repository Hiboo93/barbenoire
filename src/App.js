//import logo from "../public/Logobarbenoire.jpg"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Home from './components/pages/home/Home.jsx';
import LoginPage from './components/pages/login/LoginPage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
  );
}

export default App;
