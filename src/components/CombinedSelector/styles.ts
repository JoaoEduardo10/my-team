import styled, { css } from 'styled-components';

export const Conteiner = styled.section`
  ${({ theme }) => css`
    margin-top: .5rem;
    width: 100%;
    padding: ${theme.padding.small};
    height: 10rem;
    background-color: ${theme.colors.white};
    border: 0.3rem solid ${theme.colors.lightBlue};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.padding.small};

  `}
`;

export const ConteinerSelect = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.small};
  `}
`;

export const Heading = styled.h2`
  ${() => css`
    text-align: center;
  `}
`;
