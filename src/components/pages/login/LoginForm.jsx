import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo.js";
import { BsPersonCircle } from "react-icons/bs"

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

      <div className="input-with-icon">
        <BsPersonCircle className="icon"/>
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

  .input-with-icon {
    background-color: transparent;
    position: relative;
    padding-left: 6%;
    top: 7%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    


    .icon {
      //border: 1px solid yellow;
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      //background: blue;
      border: none;
      outline: none;
      height: 25px;

    }
  }

  .logo {
    position: relative;
    top: 14%;
    height: 68%;
    //background: blue;
  }
`;
