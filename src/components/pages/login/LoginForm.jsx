import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo.js";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="title">
        <h1>Bienvenue chez BARBE NOIRE !</h1>
      </div>
      
      <div className="subtitle">
        <h2>Connectez-vous:</h2>
      </div>

      <div className="input">
        <input
          value={userFirstName}
          onChange={handleChange}
          type="text"
          placeholder="Entre votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </div>

      {/* <Link to="/home">Vers order page</Link> */}
      <div className="logo">
        <Logo/>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  //background-color: green;
  color: white;
  position: absolute;
  right: 0px;
  top: 15%;
  width: 34%;
  height: 64%;

  .title {
    padding-left: 6%;
  }

  .subtitle {
    //position: absolute;
    position: relative;
    padding-left: 6%;
    top: 3%;
  }

  .input {
    position: relative;
    padding-left: 6%;
    top: 7%;
  }

  .logo {
    position: relative;
    top: 14%;
    height: 68%;
    //background: blue;
  }
`;
