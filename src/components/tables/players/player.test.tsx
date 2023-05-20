import { screen } from '@testing-library/react';
import { Players } from '.';
import { TPlayers } from '../../../types';
import { renderTheme } from '../../../utils/renderTheme';
import { mockPlayers } from './mock';

const newMock: any = [];

describe('<Players />', () => {
  it('should a render Playres table compónent', () => {
    renderTheme(<Players players={mockPlayers as TPlayers['response']} />);

    const heading = screen.getByRole('heading', { name: 'Jogadores' });
    const table = screen.getByRole('table');
    const tHead = screen.getByLabelText('Cabeçalho');
    const data = screen.getAllByLabelText('Dados dos jogadores');
    const alert = screen.queryByLabelText('alert');

    expect(heading).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(tHead).toBeInTheDocument();
    expect(data.length).toEqual(4);
    expect(alert).not.toBeInTheDocument();
  });

  it('should a render Playres table compónent', () => {
    renderTheme(<Players players={newMock} />);

    const alert = screen.getByLabelText('alert');

    expect(alert).toBeInTheDocument();
  });

  it('should match snapshort', () => {
    const { container } = renderTheme(<Players players={mockPlayers as TPlayers['response']} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
