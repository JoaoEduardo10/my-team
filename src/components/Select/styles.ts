import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    padding: 1rem;
    width: 100%;
    border: none;
    outline: none;
    border: 0.1rem solid #222;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    font-weight: bold;
  `}
`;

export const Option = styled.option`
  ${() => css`

  `}
`;
