import { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';


export const PriviteRouter = () => {
  const { singed } = useContext(AuthContext);


  return singed ? <Home /> : <Navigate to={'/login'} />;
};
