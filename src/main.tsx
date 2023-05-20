import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals-styles.ts';
import { theme } from './styles/theme.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import { AuthProvider } from './context/auth.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
