import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { CombinedSelector } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';
import { Provider } from 'react-redux';
import { store } from '../../utils/mockStore';

export default {
  title: 'CombinedSelector',
  component: CombinedSelector,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Story />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    )
  ]
} as Meta;

export const Tamplate = () => {
  return <CombinedSelector />;
};
