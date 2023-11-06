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
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;