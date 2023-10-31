//import logo from "../public/Logobarbenoire.jpg"
import { useState } from 'react';
import './App.css';
import LoginPage from './components/pages/LoginPage.jsx';

function App() {
  const [userFirstName, setUserFirstName] = useState("Bob");
  const [userLastName, setUserLastName] = useState("Dupond");
  const [userMail, setUserMail] = useState("dupondbob@gmail.com");

  return (
    <LoginPage />
  );
}

export default App;
