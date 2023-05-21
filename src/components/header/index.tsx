import * as Styled from './styles';
import logo from '../../images/logo.png';
import { Button } from '../Button';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

export const Header = () => {
  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Styled.Header>
      <Styled.Conteiner>
        <Styled.ConteinerLogo>
          <img src={logo} alt="logo" />
        </Styled.ConteinerLogo>
        <Styled.Heading>Meu Time</Styled.Heading>
      </Styled.Conteiner>
      <Styled.Conteiner>
        <Button onClick={handleSignOut} text='Sair' />
      </Styled.Conteiner>
    </Styled.Header>
  );
};
