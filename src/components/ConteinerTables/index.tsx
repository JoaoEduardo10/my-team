import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { TPlayers } from '../../types';
import { ApexChart } from '../ApexChart';
import { Players } from '../tables/players';
import { Result } from '../tables/result';
import { useAppSelector } from '../../app/hooks';
import { getPlayers, getTeamStatistic } from '../../utils/fetch';
import { Loading } from '../Loading';

export const ConteinerTables = () => {
  const token = localStorage.getItem('@Auth:token') as string;
  const { country, league, season, team } = useAppSelector(store => store.team);
  const [players, setPlayers] = useState<any>();
  const [results, setResults] = useState<any>();
  const [graphic, setGraphic] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(league && season && country && team) {
      const resquet = async  () => {
        setLoading(true);
        const dataStatistic = await getTeamStatistic(token, Number(season), Number(league), Number(team));
        const dataPlayers = await getPlayers(token, Number(season), Number(league), Number(team));
        setLoading(false);

        setPlayers(dataPlayers.response);
        setResults(dataStatistic.response);
        setGraphic(dataStatistic.response?.goals?.against?.minute);
      };

      resquet();
    }
  }, [league, season, country, team]);


  return (
    <Styled.Conteiner aria-label='Conteiner'>
      {
        loading && <Loading />
      }
      <Players players={players} />
      <Result result={results} />
      {
        graphic && <ApexChart graphic={graphic} />
      }
    </Styled.Conteiner>
  );
};
