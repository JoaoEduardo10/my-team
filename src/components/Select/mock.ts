/* eslint-disable @typescript-eslint/no-unused-vars */
import { TCountrys, TLeagues, TTeam } from '../../types';

const mockSeason: number[] = [2022, 2010, 2020];

const mockContrys:TCountrys['response'] = [
  {
    code: 'T1',
    flag: 'test',
    name:  'test 1'
  },
  {
    code: 'T2',
    flag: 'test 2',
    name:  'test 2'
  },
  {
    code: 'T3',
    flag: 'test3',
    name:  'test 3'
  },
];


const mockLeague: TLeagues['response'] = [
  {
    country: {
      code: 'T1',
      flag: 'test',
      name: 'Test 1'
    },
    league: {
      id: 1,
      logo: 'tes.png',
      name: 'test ligue',
      type: 'test'
    },
    seasons: [
      {
        current: 'test',
        end: '10/10/2022',
        start: '01/01/2022',
        year: 2022
      }
    ]
  }
];

const mockTeam: TTeam['response'] = [
  {
    team: {
      code: 'br',
      country: 'brazil',
      id: 1,
      logo: 'test.png',
      name: 'barça'
    }
  }
];

export { mockContrys, mockLeague, mockSeason, mockTeam };
