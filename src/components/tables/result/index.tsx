import { TSubLineups, TTeamStatistic } from '../../../types';
import * as Styled from './styles';

export type ResultProps = {
  result: TTeamStatistic['response']
}

export const Result = ({ result }: ResultProps) => {

  const bestTraining = (lineups: TSubLineups[]) => {
    let bestTraining = '';
    let largestNumberOfGames = -1;

    for (const subLineup of lineups) {
      if (subLineup.played > largestNumberOfGames) {
        bestTraining = subLineup.formation;
        largestNumberOfGames = subLineup.played;
      }
    }

    return bestTraining;
  };

  return (
    <Styled.Conteiner>
      <Styled.Heading>Infomações De Partidas</Styled.Heading>
      {
        result && result.lineups.length > 0 ? (<Styled.Table role='table'>
          <Styled.THead aria-label='Titulos da tabela'>
            <Styled.Tr>
              <Styled.Th>Formação mais utilizada</Styled.Th>
              <Styled.Th>Vitórias</Styled.Th>
              <Styled.Th>Derrotas</Styled.Th>
              <Styled.Th>Empates</Styled.Th>
              <Styled.Th>Total</Styled.Th>
            </Styled.Tr>
          </Styled.THead>


          <Styled.TBody aria-label='Textos da tabela'>
            <Styled.Tr>
              <Styled.Td>{ bestTraining(result?.lineups) }</Styled.Td>
              <Styled.Td>{ result?.fixtures?.wins.total }</Styled.Td>
              <Styled.Td>{ result?.fixtures?.loses.total }</Styled.Td>
              <Styled.Td>{ result?.fixtures?.draws.total }</Styled.Td>
              <Styled.Td>{ result?.fixtures?.played.total }</Styled.Td>
            </Styled.Tr>
          </Styled.TBody>



        </Styled.Table>) : ( <Styled.Loading aria-label='alert'>Selecione um Time</Styled.Loading>)
      }


    </Styled.Conteiner>
  );
};
