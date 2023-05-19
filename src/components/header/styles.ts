import styled, { css } from 'styled-components';

import { Button } from '../Button/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.padding.small};
    background-color: ${theme.colors.white};
    width: 100%;
    height: 10rem;
    border-bottom: .7rem solid ${theme.colors.lightGreen};
    display: flex;
  `}
`;

export const Conteiner = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: ${theme.padding.small};

    ${theme.media_screen_size.phone} {
      ${Button} {
        width: 7rem;
      }
    }

    &:nth-child(1) {
      flex: 2;
    }
  `}
`;

export const ConteinerLogo = styled.div`
  ${({ theme }) => css`
    height: 5rem;
    width: 5rem;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`

  `}
`;
