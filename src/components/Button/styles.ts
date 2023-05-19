import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    width: 17rem;
    padding: ${theme.padding.small};
    border-radius: 0.7rem;
    font-size: ${theme.padding.small};
    font-weight: bold;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    background-image: linear-gradient(to right, ${theme.colors.lightBlue}, ${theme.colors.lightGreen});
    color: ${theme.colors.white};

    &:hover {
      background-image: none;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: .1rem solid ${theme.colors.lightBlue};
    }

    ${theme.media_screen_size.phone} {
      &:hover {
        background-image: linear-gradient(to right, ${theme.colors.lightBlue}, ${theme.colors.lightGreen});
        color: ${theme.colors.white};
        border: none;
      }
    }

    ${theme.media_screen_size.tablet} {
      &:hover {
        background-image: linear-gradient(to right, ${theme.colors.lightBlue}, ${theme.colors.lightGreen});
        color: ${theme.colors.white};
        border: none;
      }
    }

    ${theme.media_screen_size.lapTop} {
      &:hover {
      background-image: none;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: .1rem solid ${theme.colors.lightBlue};
    }
    }
  `}
`;
