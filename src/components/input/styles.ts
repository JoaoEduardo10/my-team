import styled, { css } from 'styled-components';

export const ConteinerInput = styled.div`
  ${() => css`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  `}

`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 2.8rem;
    color: ${theme.colors.gray};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: .2rem solid ${theme.colors.gray};
  outline: 0;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  padding: .7rem 0;
  padding-left: 0.3rem;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.6rem;
    cursor: text;
    top: 2rem;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1.6rem;
      color: ${theme.colors.lightBlue};
      font-weight: 700;
    }
    padding-bottom: .6rem;
    font-weight: 700;
    border-width: .3rem;
    border-image: linear-gradient(to right, ${theme.colors.lightBlue}, ${theme.colors.lightGreen});
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }

  `}
`;
