import { TPlayers } from '../../../types';
import * as Styled from './styles';

export type PlayersProps = {
  players: TPlayers['response']
}

export const Players = ({ players }: PlayersProps) => {
  return (
    <Styled.Conteiner>
      <Styled.Heading>Jogadores</Styled.Heading>
      {
        players && players?.length > 0 ? (
          <Styled.Table role='table'>
            <Styled.THead aria-label='Cabeçalho'>
              <Styled.Tr>
                <Styled.Th>Nome</Styled.Th>
                <Styled.Th>Idade</Styled.Th>
                <Styled.Th>Nacionalidade</Styled.Th>
              </Styled.Tr>
            </Styled.THead>
            <Styled.TBody>
              {
                players.map(({ player }) => (
                  <Styled.Tr aria-label='Dados dos jogadores' key={player.id}>
                    <Styled.Td>{player.name}</Styled.Td>
                    <Styled.Td>{player.age}</Styled.Td>
                    <Styled.Td>{player.nationality}</Styled.Td>
                  </Styled.Tr>
                ))
              }
            </Styled.TBody>
          </Styled.Table>
        ) : (
          <Styled.Loading aria-label='alert'>Selecione um Time</Styled.Loading>
        )
      }
    </Styled.Conteiner>
  );
};
