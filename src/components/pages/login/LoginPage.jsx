import styled from 'styled-components';
import LoginForm from './LoginForm.jsx';

export default function LoginPage() {

  //affichage
  return (
    <LoginPageStyled>
      <LoginForm/>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  position: relative;
  background: url("/images/BGBW2barbenoire.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;


  /* ::before {
    content: '';
    background: url("/images/BGBW2barbenoire.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  } */

`;