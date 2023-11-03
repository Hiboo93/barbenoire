import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  //state
  const [userFirstName, setUserFirstName] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserFirstName("");
    navigate(`home/${userFirstName}`);
  };

  const handleChange = (event) => {
    setUserFirstName(event.target.value);
  };

  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez BARBE NOIRE !</h1>
      <h2>Connectez-vous:</h2>
      <input
        value={userFirstName}
        onChange={handleChange}
        type="text"
        placeholder="Entre votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
      <Link to="/home">Vers order page</Link>
    </form>
  );
}
