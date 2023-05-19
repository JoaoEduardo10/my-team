import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Loading } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';

export default {
  title: 'Loading',
  component: Loading,
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
  return <Loading />;
};
