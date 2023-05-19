import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Header } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = () => {
  return <div style={{ height: '100vh', background: '#d3d3d3' }}><Header /></div>;
};
