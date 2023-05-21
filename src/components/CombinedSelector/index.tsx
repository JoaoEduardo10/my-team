/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { getCountry, getLeague, getSeason, getTeam } from '../../utils/fetch';
import { TCountrys, TLeagues, TTeam } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setTeam } from '../../app/features/team/teamSlice';
import { Select } from '../Select';

export const CombinedSelector = () => {
  const token = localStorage.getItem('@Auth:token') as string;
  const dispatch = useAppDispatch();
  const { country, season, league, team } = useAppSelector(store => store.team);
  const [countrys, setCountrys] = useState<TCountrys['response']>([{ code: '', flag: '', name: '' }]);
  const [leagues, setLeagues] = useState<TLeagues['response']>();
  const [seasons, setSeasons] = useState<number[]>([]);
  const [teams, setTeams] = useState<TTeam['response']>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resquet = async  () => {
      setLoading(true);
      const dataCountry = await getCountry(token);
      const dataSeason = await getSeason(token);
      setLoading(false);

      setCountrys(dataCountry.response);
      setSeasons(dataSeason.response);
    };

    resquet();
  }, []);

  useEffect(() => {
    if(country && season) {
      const resquet = async  () => {
        setLoading(true);
        const data = await getLeague(token, country, Number(season));
        setLoading(false);

        setLeagues(data.response);
      };

      resquet();
    }
  }, [country, season]);

  useEffect(() => {
    if(league && season && country) {
      const resquet = async  () => {
        setLoading(true);
        const data = await getTeam(token, Number(season), Number(league));
        setLoading(false);

        setTeams(data.response);
      };

      resquet();
    }
  }, [league, season, country]);

  const handleChangeCountry = (value: string) => {
    dispatch(setTeam({team: value, type: 'country' }));
  };

  const handleChangeSeason = (value: string) => {
    dispatch(setTeam({team: value, type: 'season' }));
  };

  const handleChangeLeague = (value: string) => {
    dispatch(setTeam({team: value, type: 'league' }));
  };

  const handleChangeTeam = (value: string) => {
    dispatch(setTeam({team: value, type: 'team' }));
  };

  return (
    <Styled.Conteiner aria-label='Conteiner'>
      <Styled.ConteinerSelect>
        <Styled.Heading>Paises</Styled.Heading>
        <Select loading={loading && countrys.length <= 0 ? true : false} arrey={countrys ?? []} type='country' value={country} onChange={handleChangeCountry} />
      </Styled.ConteinerSelect>
      <Styled.ConteinerSelect>
        <Styled.Heading>Temporadas</Styled.Heading>
        <Select loading={loading && seasons.length <= 0 ? true : false} arrey={seasons ?? []} type='season' value={season} onChange={handleChangeSeason} />
      </Styled.ConteinerSelect>
      <Styled.ConteinerSelect>
        <Styled.Heading>Ligas</Styled.Heading>
        <Select loading={loading &&  leagues && leagues?.length <=0 ? true : false} arrey={leagues?? []} type='league' value={league} onChange={handleChangeLeague} />
      </Styled.ConteinerSelect>
      <Styled.ConteinerSelect>
        <Styled.Heading>Times</Styled.Heading>
        <Select loading={loading && teams && teams?.length <= 0 ? true : false} arrey={teams?? []} type='team' value={team} onChange={handleChangeTeam} />
      </Styled.ConteinerSelect>
    </Styled.Conteiner>
  );
};
