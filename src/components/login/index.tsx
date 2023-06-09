import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import { BackgroundConteiner } from '../BackgroundConteiner';
import { Input } from '../input';
import img from '../../images/background-login.jpg';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { ErrorMessage } from '../ErrorMessage';
import { Loading } from '../Loading';
import { Button } from '../Button';

export const Login = () => {
  const { signIn, singed } = useContext(AuthContext);
  const [valueKey, setValueKey] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    const response = await signIn(valueKey);
    setLoading(false);


    if(!response) {
      setError(true);
      setErrorMessage('Api-Key invalido!');
    }
  };

  if(singed) {
    return <Navigate to={'/'} />;
  }

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
        <a href="https://www.api-football.com/documentation-v3" target="_blank" rel="external noreferrer">Adiquira a sua chave Key aque!</a>
      </Styled.Form>
    </BackgroundConteiner>
  );
};
