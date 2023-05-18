import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Input, InputProps } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';

export default {
  title: 'Input',
  component: Input,
  args: {
    name: 'test',
    type: 'text',
    handleGetValue: (value) => { console.log(value); }
  } as InputProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = (agrs: InputProps) => {
  return <Input {...agrs} />;
};
