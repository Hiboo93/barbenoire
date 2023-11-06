import styled from 'styled-components';
import LoginForm from './LoginForm.jsx';
import Logo from '../../reusable-ui/Logo.js';

export default function LoginPage() {

  //affichage
  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm/>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
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
  }
`;