import styled, { css } from 'styled-components';
import { Loading } from '../Loading/styles';

export const Conteiner = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.padding.extra_small};
    padding: ${theme.padding.small};
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${Loading} {
      position: fixed;
      top: 0%;
      left: 0%;
    }
  `}
`;
