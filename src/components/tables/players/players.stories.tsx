import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Players, PlayersProps } from '.';
import { GlobalStyles } from '../../../styles/globals-styles';
import { theme } from '../../../styles/theme';
import { mockPlayers } from './mock';

export default {
  title: 'Players',
  component: Players,
  args: {
    players: mockPlayers
  } as PlayersProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = (agrs: PlayersProps) => {
  return <Players {...agrs} />;
};
