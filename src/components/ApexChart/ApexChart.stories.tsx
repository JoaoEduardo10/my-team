import { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { ApexChart, ApexChartProps } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';
import { mockResult } from '../tables/result/mock';

export default {
  title: 'ApexChart',
  component: ApexChart,
  args: {
    graphic: mockResult.goals.against.minute
  } as ApexChartProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const Tamplate = (agrs: ApexChartProps) => {
  return <ApexChart {...agrs} />;
};
