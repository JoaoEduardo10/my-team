/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { authUser } from '../utils/fetch';

type AuthProviderProps = {
  children: React.ReactNode
}

type AuthContextProps = {
  key: string
  singed: boolean
  signIn: (api_key: string) => Promise<boolean>
  signOut: () => void
}
/* c8 ignore start */
const mockSinIn = async (_key: string) => {
  return Promise.resolve(true);
};
/* c8 ignore stop */
export const AuthContext = createContext<AuthContextProps>({ key: '', singed: false, signIn: mockSinIn, signOut: () => {'aaa';} });

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [key, setKey] = useState('');

  useEffect(() => {
    const loadingLoginStore = async () => {
      const api_key = localStorage.getItem('@Auth:token') as string;
      setKey(api_key);

      const data = await authUser(api_key);

      if(data.errors.token == 'Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.') {
        setKey('');
        return ;
      }

      setKey(api_key);

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

  const signOut = () => {
    setKey('');
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ key, singed: !!key, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
};
