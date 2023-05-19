import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    height: 100vh;
  `}
`;
