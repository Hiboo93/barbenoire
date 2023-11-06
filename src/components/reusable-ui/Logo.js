import React from 'react'
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled></LogoStyled>
  )
}

const LogoStyled = styled.div`
  //background: blue;
  background: url("/images/Logobarbenoire.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  
  //background-repeat: no-repeat;
  //max-height: fit-content;
  //height: fit-content;
  //background-size: cover;
  
  
`;
