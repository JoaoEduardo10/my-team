import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    width: 17rem;
    padding: ${theme.padding.small};
    background-image: linear-gradient(to right, ${theme.colors.lightBlue}, ${theme.colors.lightGreen});
    border-radius: 0.7rem;
    color: ${theme.colors.white};
    font-size: ${theme.padding.small};
    font-weight: bold;
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      background-image: none;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: .1rem solid ${theme.colors.lightBlue};
    }
  `}
`;
