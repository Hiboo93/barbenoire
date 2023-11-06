import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

export default function Home() {
  const { userFirstName } = useParams()

  return (
    <HomeStyled>
      <div>Bonjour {userFirstName}</div>
      <Link to={"/"} ><button>Déconnexion</button></Link>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  height: 100vh;
  position: relative;
  background: url("/images/BGBWbarbenoire.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
