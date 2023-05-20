import { vi } from 'vitest';
import { Select } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { mockContrys, mockLeague, mockSeason, mockTeam } from './mock';
import { fireEvent, screen } from '@testing-library/react';

describe('<Select />', () => {
  const onChange = vi.fn();

  it('should return the country select', () => {
    renderTheme(<Select loading={false} arrey={mockContrys} type='country' onChange={onChange} value='test' />);

    const allCountry = screen.getAllByLabelText('Lista De Paises');

    expect(allCountry.length).toEqual(3);
  });

  it('should return the League select', () => {
    renderTheme(<Select loading={false} arrey={mockLeague} type='league' onChange={onChange} value='test' />);

    const allCountry = screen.getAllByLabelText('Lista De Ligas');

    expect(allCountry.length).toEqual(1);
  });

  it('should return the Season select', () => {
    renderTheme(<Select loading={false} arrey={mockSeason} type='season' onChange={onChange} value='test' />);

    const allCountry = screen.getAllByLabelText('Lista De Temporadas');

    expect(allCountry.length).toEqual(3);
  });

  it('should return the Team select', () => {
    renderTheme(<Select loading={false} arrey={mockTeam} type='team' onChange={onChange} value='test' />);

    const allCountry = screen.getAllByLabelText('Lista De Times');
    const message = screen.getByRole('alert');

    expect(message).toHaveTextContent('Selecione um time');
    expect(allCountry.length).toEqual(1);
  });

  it('should show the team loading message', () => {
    renderTheme(<Select loading={true} arrey={mockTeam} type='team' onChange={onChange} value='test' />);

    const message = screen.getByRole('alert');
    expect(message).toHaveTextContent('carregando...');
  });

  it('should show the Season loading message', () => {
    renderTheme(<Select loading={true} arrey={mockSeason} type='season' onChange={onChange} value='test' />);

    const message = screen.getByRole('alert');
    expect(message).toHaveTextContent('carregando...');
  });

  it('should show the League loading message', () => {
    renderTheme(<Select loading={true} arrey={mockLeague} type='league' onChange={onChange} value='test' />);

    const message = screen.getByRole('alert');
    expect(message).toHaveTextContent('carregando...');
  });

  it('should show the country loading message', () => {
    renderTheme(<Select loading={true} arrey={mockContrys} type='country' onChange={onChange} value='test' />);

    const message = screen.getByRole('alert');
    expect(message).toHaveTextContent('carregando...');
  });

  it('should get the select value', () => {
    renderTheme(<Select loading={false} arrey={mockTeam} type='team' onChange={onChange} value='test' />);

    const allCountry = screen.getAllByLabelText('Lista De Times');

    expect(allCountry.length).toEqual(1);

    const select = screen.getByRole('listbox');

    fireEvent.change(select);

  });

  it('should to match snapshort', () => {
    const {container } =  renderTheme(<Select loading={false} arrey={mockTeam} type='team' onChange={onChange} value='test' />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
