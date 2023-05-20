import { screen } from '@testing-library/react';
import { Result } from '.';
import { renderTheme } from '../../../utils/renderTheme';
import { mockResult } from './mock';
import { TTeamStatistic } from '../../../types';

const newMock: TTeamStatistic = {
  response: {
    fixtures: {
      draws: {
        away: 0,
        home: 0,
        total: 0
      },
      loses: {
        away: 0,
        home: 0,
        total: 0
      },
      played: {
        away: 0,
        home: 0,
        total: 0
      },
      wins: {
        away: 0,
        home: 0,
        total: 0
      },
    },
    goals: {
      against: {
        minute: {
          '0-15': {
            percentage: '',
            total: 0
          },
          '106-120':{
            percentage: '',
            total: 0
          },
          '16-30': {
            percentage: '',
            total: 0
          },
          '31-45': {
            percentage: '',
            total: 0
          },
          '46-60': {
            percentage: '',
            total: 0
          },
          '61-75': {
            percentage: '',
            total: 0
          },
          '76-90': {
            percentage: '',
            total: 0
          },
          '91-105': {
            percentage: '',
            total: 0
          },
        },
      },
    },
    lineups: [],
    team: {
      id: 0,
      logo: '',
      name: ''
    }
  }
};

describe('<Result />', () => {
  it('should a render Result component', () => {
    renderTheme(<Result result={mockResult} />);

    const table = screen.getByRole('table');
    const heading = screen.getByRole('heading');
    const headerTable = screen.getByLabelText('Titulos da tabela');
    const bodyTable = screen.getByLabelText('Textos da tabela');

    expect(table).toBeInTheDocument();
    expect(headerTable).toBeInTheDocument();
    expect(bodyTable).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it('should not render Result component', () => {
    renderTheme(<Result result={newMock['response']} />);

    const alert = screen.getByLabelText('alert');

    expect(alert).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Result result={mockResult} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
