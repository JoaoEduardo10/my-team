import styled, { css } from 'styled-components';


export const Conteiner = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.padding.small};
    height: 40rem;
    width: 50rem;
    overflow: auto;
    border-radius: 0.5rem;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 2rem;
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
    height: 15%;
    border: 0.1rem solid #222;
  `}
`;

export const THead = styled.thead`
  ${() => css`
    display: inline-block;
    width: 100%;
    height: 100%;
    border-bottom: 0.1rem solid #222;
    padding: 0.5rem;


    tr {
      display: flex;
      width: 100%;
      height: 100%;
    }
  `}
`;

export const TBody = styled.tbody`
  ${() => css`
    display: inline-block;
    width: 100%;
    height: 100%;


    tr {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;

      td {
        padding: .5rem;
      }
    }

    tr:not(:last-child) {
      border-bottom: 0.1rem solid #222;
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
  display: inline-block;
    text-align: center;
    flex: 1;
  `}
`;

export const Td = styled.td`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;

  `}
`;
