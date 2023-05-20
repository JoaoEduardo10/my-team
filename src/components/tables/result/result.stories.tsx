import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Result, ResultProps } from '.';
import { GlobalStyles } from '../../../styles/globals-styles';
import { theme } from '../../../styles/theme';
import { mockResult } from './mock';

export default {
  title: 'Result',
  component: Result,
  args: {
    result: mockResult
  } as ResultProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = (agrs: ResultProps) => {
  return <Result {...agrs} />;
};
