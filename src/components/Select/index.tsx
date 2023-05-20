import { TCountrys, TLeagues, TTeam } from '../../types';
import * as Styled from './styles';

export type SelectProps = {
  arrey: number[] | TCountrys['response'] | TLeagues['response'] | TTeam['response']
  type: 'country' | 'team' | 'league' | 'season'
  value: string
  onChange: (value: string) => void
  loading: boolean
}

export const Select = ({ arrey, type, value, onChange, loading }: SelectProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    onChange(value);
  };

  if(type === 'country') {
    const countries = arrey as TCountrys['response'];

    return (
      <Styled.Select role='listbox'  onChange={handleChange} value={value}>
        <Styled.Option disabled value="" role='alert'>
          {
            loading ? 'carregando...' : 'Selecione um Pais'
          }
        </Styled.Option>
        {
          countries.map((country, index) => (
            <Styled.Option aria-label='Lista De Paises' value={country.name} key={country.code + index}>
              { country.name }
            </Styled.Option>
          ))
        }
      </Styled.Select>
    );
  }

  if(type === 'league') {
    const countries = arrey as TLeagues['response'];

    return (
      <Styled.Select role='listbox'  onChange={handleChange} value={value}>
        <Styled.Option disabled value="" role='alert'>
          {
            loading ? 'carregando...' : 'Selecione uma liga'
          }
        </Styled.Option>
        {
          countries.map((league) => (
            <Styled.Option aria-label='Lista De Ligas' value={league.league.id} key={league.league.id}>
              { league.league.name}
            </Styled.Option>
          ))
        }
      </Styled.Select>
    );
  }

  if(type === 'season') {
    const countries = arrey as number[];

    return (
      <Styled.Select role='listbox' onChange={handleChange} value={value}>
        <Styled.Option disabled value="" role='alert'>
          {
            loading ? 'carregando...' : 'Selecione uma temporada'
          }
        </Styled.Option>
        {
          countries.map((season, index) => (
            <Styled.Option aria-label='Lista De Temporadas' value={season + index} key={season}>
              {season}
            </Styled.Option>
          ))
        }
      </Styled.Select>
    );
  }

  const teams = arrey as TTeam['response'];

  return (
    <Styled.Select role='listbox' onChange={handleChange} value={value}>
      <Styled.Option disabled value="" role='alert'>
        {
          loading ? 'carregando...' : 'Selecione um time'
        }
      </Styled.Option>
      {
        teams.map(({ team }) => (
          <Styled.Option aria-label='Lista De Times' value={team.id} key={team.id}>
            {team.name}
          </Styled.Option>
        ))
      }
    </Styled.Select>
  );
};
