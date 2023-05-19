import { Meta} from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { ErrorMessage, ErrorMessageProps } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  args: {
    message: 'um test'
  } as ErrorMessageProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = (agrs: ErrorMessageProps) => {
  return <ErrorMessage {...agrs} />;
};
