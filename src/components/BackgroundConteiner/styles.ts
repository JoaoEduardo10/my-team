import styled, { DefaultTheme, css } from 'styled-components';

const setBackground = (theme: DefaultTheme, img?: string) => css`
  ${img ? css`
    background-image: ${`url(${img})`};
    background-size: cover;
    background-position: center;
  ` : css`
    background-color: ${theme.colors.lightGreen};
  `}
`;

export const Conteiner = styled.main<{ img?: string }>`
  ${({ theme, img }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    ${setBackground(theme, img)}
  `}
`;
