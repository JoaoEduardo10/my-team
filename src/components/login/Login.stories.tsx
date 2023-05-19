import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import {Login } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Login',
  component: Login,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    ),
    withRouter
  ]
} as Meta;

export const TamplateLogin = () => {
  return <Login  />;
};
