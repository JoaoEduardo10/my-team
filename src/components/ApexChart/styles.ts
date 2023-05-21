import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
  ${({ theme }) => css`

    background: ${theme.colors.white};
  `}
`;

export const Div = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

