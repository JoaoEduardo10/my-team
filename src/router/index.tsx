import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { PriviteRouter } from './priviteRoute';


export const router = createBrowserRouter([
  {
    path: '/',
    element:  <PriviteRouter />
  },
  {
    path: '/login',
    element: <Login />
  }
]);
