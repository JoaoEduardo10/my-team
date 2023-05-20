import { TTeamStatistic } from '../../../types';

export const mockResult: TTeamStatistic['response'] = {
  fixtures: {
    draws: {
      away: 4,
      home: 4,
      total: 8
    },
    loses:{
      away: 1,
      home: 4,
      total: 5
    },
    played: {
      away: 1,
      home: 10,
      total: 29
    },
    wins:{
      away: 1,
      home: 5,
      total: 6
    }
  },
  goals: {
    against: {
      minute: {
        '0-15': { percentage: '32.5', total: 2 },
        '106-120': { percentage: '32.5', total: 2 },
        '16-30': { percentage: '32.5', total: 2 },
        '31-45': { percentage: '32.5', total: 2 },
        '46-60': { percentage: '32.5', total: 2 },
        '61-75': { percentage: '32.5', total: 2 },
        '76-90': { percentage: '32.5', total: 2 },
        '91-105': { percentage: '32.5', total: 2 },
      }
    }
  },
  lineups: [
    {
      formation: '4-3-3',
      played: 7
    },
    {
      formation: '4-4-3',
      played: 10
    },
    {
      formation: '4-5-2',
      played: 13
    },
  ],
  team: {
    id: 12,
    logo: 'Saopaulo.png',
    name: 'São Paulo'
  }
};
