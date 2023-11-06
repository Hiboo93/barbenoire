import React from 'react'
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>
        <img src="/images/Logobarbenoire.jpg" alt="" />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  //background: blue;
  /* background: url("/images/Logobarbenoire.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%; */

  img {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  
`;
