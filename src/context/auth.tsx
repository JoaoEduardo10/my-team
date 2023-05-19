import { createContext, useEffect, useState } from 'react';
import { authUser } from '../utils/fetch';

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextProps = {
  key: string
  singed: boolean
  signIn: (api_key: string) => Promise<boolean>
}

const mockSinIn = async (key: string) => {
  return Promise.resolve(true);
};

export const AuthContext = createContext<AuthContextProps>({ key: '', singed: false, signIn: mockSinIn });

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [key, setKey] = useState('');
  const [logged, setLogged] = useState(false);
  const token = localStorage.getItem('@Auth:token');

  useEffect(() => {
    if(key && token) {
      setLogged(true);
      return;
    }

    setLogged(false);
  }, [key, token]);

  useEffect(() => {
    const loadingLoginStore = async () => {
      const api_key = localStorage.getItem('@Auth:token') as string;

      const data = await authUser(api_key);

      if(data.errors.token == 'Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.') {
        return ;
      }

    };
    loadingLoginStore();
  }, []);

  const signIn  = async (api_key: string) => {
    const data = await authUser(api_key);

    if(data.errors.token == 'Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.') {
      return false;
    }

    setKey(api_key);
    localStorage.setItem('@Auth:token', api_key);
    return true;
  };

  return (
    <AuthContext.Provider value={{ key, singed: logged, signIn }}>
      { children }
    </AuthContext.Provider>
  );
};
