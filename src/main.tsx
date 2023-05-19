import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals-styles.ts';
import { theme } from './styles/theme.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import { AuthProvider } from './context/auth.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
