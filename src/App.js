import { useState } from 'react';
import './App.css';

function App() {
  const [userFirstName, setUserFirstName] = useState("Bob");
  const [userLastName, setUserLastName] = useState("Dupond");
  const [userMail, setUserMail] = useState("dupondbob@gmail.com");

  return (
    <div>
      <h1>Bienvenue chez BARBE NOIRE !</h1>
      <form>
        <div className='sign-in'>
          <h2>Connectez-vous:</h2>
          <input type="text" placeholder='Entre votre prénom...' required />
          <button type='submit'>Accédez à votre espace</button>
        </div>
        <div className='sign-up'>
          <h2>Creer un compte:</h2>
          <input type="text" placeholder='Entre votre nom...' />
          <input type="text" placeholder='Entre votre prénom...' />
          <input type="text" placeholder='Entre votre email...' />
          <input type="text" placeholder='Entre un mot de passe...' />
          <input type="text" placeholder='Confirmer mot de passe' />
          <button type='submit'>Comfirmer</button>
        </div>
      </form>
    </div>
  );
}

export default App;
