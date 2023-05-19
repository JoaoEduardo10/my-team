import styled, { css } from 'styled-components';

export const Loading = styled.div`
  ${() => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const CircleOne = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    border: 0.5rem solid ${theme.colors.lightGreen};
    border-top: 0.5rem solid transparent;

    animation: circleOne 1s ease-in-out infinite;

    @keyframes circleOne {
      0%{
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `}
`;

export const CircleTwo = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.5rem solid ${theme.colors.lightBlue};
    border-bottom: 0.5rem solid transparent;

    animation: circleTwo .5s ease-in-out infinite;

    @keyframes circleTwo {
      0%{
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  `}
`;
