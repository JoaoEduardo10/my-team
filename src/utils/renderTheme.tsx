import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/globals-styles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import { Provider } from 'react-redux';
import { store } from './mockStore';

const mockRouet = (children: React.ReactNode, path?: string) => {
  return createBrowserRouter([
    {
      path: path ?? '/',
      element: children
    }
  ]);
};

export const renderTheme = (
  children: React.ReactNode,
  path?: string
) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RouterProvider router={mockRouet(children, path)} />
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};
