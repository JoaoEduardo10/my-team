import { Meta} from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BackgroundConteiner, BackgroundConteinerProps } from '.';
import { GlobalStyles } from '../../styles/globals-styles';
import { theme } from '../../styles/theme';
import img from '../../../public/images/background-login.jpg';

export default {
  title: 'BackgroundConteiner',
  component: BackgroundConteiner,
  args: {
    children: <div style={{ background: '#fff', width: '50%', height: '50%', }}>test</div>,
    img: img,
  } as BackgroundConteinerProps,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    )
  ]
} as Meta;

export const WithImg = (agrs: BackgroundConteinerProps) => {
  return <BackgroundConteiner {...agrs} />;
};

export const NotImg = (agrs: BackgroundConteinerProps) => {
  return <BackgroundConteiner {...agrs} img='' />;
};
