import styled, { css } from 'styled-components';


export const Conteiner = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.padding.small};
    height: 20rem;
    width: 40rem;
    overflow: auto;
    border-radius: 0.5rem;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin-bottom: 1rem;
    text-align: center;
  `}
`;

export const Loading = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `}
`;

export const Table = styled.table`
  ${() => css`
    display: inline-block;
    width: 100%;
    border: 0.1rem solid #222;

  `}
`;

export const THead = styled.thead`
  ${() => css`
    display: inline-block;
    width: 100%;
    border-bottom: 0.1rem solid #222;
    padding: 0.5rem;


    tr {
      display: flex;
      width: 100%;
    }
  `}
`;

export const TBody = styled.tbody`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
    padding: 0.5rem;
    margin-top: ${theme.padding.small};

    tr {
      display: flex;
      width: 100%;
      align-items: center;
      margin-bottom: 1rem;
    }
  `}
`;

export const Tr = styled.tr`
  ${() => css`
    display: inline-block;
    text-align: center;
  `}
`;

export const Th = styled.th`
  ${() => css`
    display: flex;
    text-align: center;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-right: .5rem;
  `}
`;

export const Td = styled.td`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    font-size: 2rem;

  `}
`;
