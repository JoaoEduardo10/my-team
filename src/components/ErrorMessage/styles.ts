import styled, { css } from 'styled-components';

const stripeAnimation = (errorMessage: string) => css`
  ${errorMessage && css`
    animation: stripe 6s ease-in-out;

    @keyframes stripe {
      0% {
        width: 100%;
      }
      100% {
        width: 0%;
      }
    }

  `}
`;

const errorMessageAnimatio = (errorMessage: string) => css`
  ${errorMessage ? css`
    animation: errorMessageAnimatio 1s ease-in-out;

    @keyframes errorMessageAnimatio {
      0%{
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }


  `: css`
    visibility: hidden;
    opacity: 0;

    animation: encodeError 1.5s ease-in-out;

    @keyframes encodeError {
      0%{
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
      }

      25% {
        transform: translateX(-20%);
      }
      100% {
        transform: translateX(200%);
        visibility: hidden;
        opacity: 0;
      }
    }
  `}
`;

export const Conteiner = styled.div<{ errorMessage: string }>`
  ${({ theme, errorMessage }) => css`
    position: relative;
    background-color: red;
    height: 5rem;
    width: 30rem;
    display: flex;
    align-items: center;
    padding: ${theme.padding.small};
    gap: ${theme.padding.small};
    border-radius: 0.7rem;

    ${errorMessageAnimatio(errorMessage)}
  `}
`;

export const ConteinerMessage = styled.div`
  ${() => css`
    position: absolute;
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 1rem;
    }

    &:nth-child(1) {
      &::before {
        position: absolute;
        right: 9%;
        content: "";
        background: ${theme.colors.lightGreen};
        width: .2rem;
        height: 4rem;
      }
    }
  `}
`;

export const Stripe = styled.div<{ errorMessage: string }>`
  ${({ theme, errorMessage }) => css`
    position: absolute;
    bottom: 0;
    height: .3rem;
    left: 0;
    background: ${theme.colors.lightBlue};
    border-radius: 1rem;

    ${stripeAnimation(errorMessage)}
  `}
`;
