import styled, { css } from 'styled-components';

import { ConteinerInput as Input } from '../input/styles';
import { ConteinerMessage } from '../ErrorMessage/styles';
import { Loading } from '../Loading/styles';
import { Button } from '../Button/styles';

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;
    width: 50%;
    height: 50%;
    background-color: ${theme.colors.white};
    border-radius: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.padding.small};

    ${ConteinerMessage} {
      top: 0;
    }

    ${Loading} {
      border-radius: 6rem;
      z-index: 4;
    }

    ${Button} {
      margin-bottom: 1rem;
    }

    ${theme.media_screen_size.phone} {
      height: 90%;
      justify-content: start;
    }

    a {
      color: ${theme.colors.black};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        color: ${theme.colors.lightGreen};
        text-decoration: underline;
      }
    }
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;

  ${theme.media_screen_size.phone} {
      margin: ${theme.padding.large} 0;
    }
  `}
`;

export const ConteinerInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.padding.small} 0;
    margin-bottom: ${theme.padding.extra_small};

    ${Input} {
      width: 50%;
    }

    ${theme.media_screen_size.phone} {
      width: 90%;

      ${Input} {
        width: 100%;
      }
    }

  `}
`;


