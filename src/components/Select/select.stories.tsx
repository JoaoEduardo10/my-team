import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Select, SelectProps } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';
import { mockContrys, mockLeague, mockSeason, mockTeam } from './mock';

export default {
  title: 'Select',
  component: Select,
  args: {
    arrey: mockContrys,
    type: 'country',
    value: 'country',
    onChange: (value: string) => { console.log(value); },
    loading: false
  } as SelectProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const TamplateCountry = (agrs: SelectProps) => {
  return <Select {...agrs} />;
};

export const TamplateLeague = (agrs: SelectProps) => {
  return <Select {...agrs} arrey={mockLeague} type='league' />;
};

export const TamplateSeason = (agrs: SelectProps) => {
  return <Select {...agrs} arrey={mockSeason} type='season' />;
};

export const TamplateTeam = (agrs: SelectProps) => {
  return <Select {...agrs} arrey={mockTeam} type='team' />;
};

export const TamplateCarregando = (agrs: SelectProps) => {
  return <Select {...agrs} arrey={[]} type='team' loading={true} />;
};
