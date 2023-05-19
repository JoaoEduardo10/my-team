import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { BackgroundConteiner } from '../BackgroundConteiner';
import { Input } from '../input';
import img from '../../../public/images/background-login.jpg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { ErrorMessage } from '../ErrorMessage';
import { Loading } from '../Loading';
import { Button } from '../Button';

export const Login = () => {
  const navegate = useNavigate();
  const { signIn, singed, key } = useContext(AuthContext);
  const [valueKey, setValueKey] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(key) {
      navegate('/');
    }
  }, [key]);

  useEffect(() => {
    const time = setTimeout(() => {
      if(errorMessage) {
        setErrorMessage('');
      }
    }, 5500);

    return () => clearTimeout(time);
  }, [errorMessage]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!valueKey) {
      setError(true);
      setErrorMessage('adicione uma Api-Key');

      return;
    }

    if(!signIn) return;

    setLoading(true);
    const response = await signIn(valueKey);
    setLoading(false);

    if(!response) {
      setError(true);
      setErrorMessage('Api-Key invalido!');
    }

    if(singed) {
      navegate('/');
    }

  };

  return (
    <BackgroundConteiner img={img}>
      <Styled.Form role='form' onSubmit={handleSubmit}>
        {
          error && <ErrorMessage message={errorMessage} />
        }
        { loading && <Loading /> }
        <Styled.Heading>Login De Usuario</Styled.Heading>
        <Styled.ConteinerInput>
          <Input
            name='Api Key'
            type='text'
            handleGetValue={(value) => setValueKey(value)}
          />
        </Styled.ConteinerInput>
        <Button text='Entrar' />
        <a href="https://api-sports.io/documentation/basketball/v1" target="_blank" rel="external noreferrer">Adiquira a sua chave Key aque!</a>
      </Styled.Form>
    </BackgroundConteiner>
  );
};
