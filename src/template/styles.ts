import styled, { css } from 'styled-components';

export const Conteiner = styled.div<{ img: string }>`
  ${({ theme, img }) => css`
    background-image: url(${img});
    background-size: cover;
    height: 100vh;

    ${theme.media_screen_size.phone} {
      height: 100%;
    }
    ${theme.media_screen_size.tablet} {
      height: 110vh;
    }

    ${theme.media_screen_size.lapTop} {
      height: 110%;
    }
  `}
`;
