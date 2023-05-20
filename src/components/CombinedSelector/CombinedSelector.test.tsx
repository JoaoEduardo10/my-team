import { fireEvent, screen } from '@testing-library/react';
import { CombinedSelector } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { beforeEach, vi } from 'vitest';
import { act } from 'react-dom/test-utils';

describe('<CombinedSelector />', () => {

  beforeEach(() => {
    vi.clearAllMocks();

    global.fetch = vi.fn().mockReturnValue({
      ok: true,
      json: () =>
        Promise.resolve({
          errors: {
            token:
              'Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.',
          },
        }),
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should a render CombinedSelector', async () => {

    await act(async () => renderTheme(<CombinedSelector />, '/'));

    const conteiner = screen.getByLabelText('Conteiner');
    const selects = screen.getAllByRole('listbox');
    const headings = screen.getAllByRole('heading');

    expect(conteiner).toBeInTheDocument();
    expect(selects.length).toEqual(4);
    expect(headings.length).toEqual(4);
  });

  it('should get the value of the country', async () => {

    await act(async () => renderTheme(<CombinedSelector />, '/'));

    const selects = screen.getAllByRole('listbox');

    expect(selects.length).toEqual(4);

    fireEvent.change(selects[0]);
  });

  it('should get the value of the Season', async () => {

    await act(async () => renderTheme(<CombinedSelector />, '/'));

    const selects = screen.getAllByRole('listbox');

    expect(selects.length).toEqual(4);

    fireEvent.change(selects[1]);
  });

  it('should get the value of the League', async () => {

    await act(async () => renderTheme(<CombinedSelector />, '/'));

    const selects = screen.getAllByRole('listbox');

    expect(selects.length).toEqual(4);

    fireEvent.change(selects[2]);
  });

  it('should get the value of the Team', async () => {

    await act(async () => renderTheme(<CombinedSelector />, '/'));

    const selects = screen.getAllByRole('listbox');

    expect(selects.length).toEqual(4);

    fireEvent.change(selects[3]);
  });
});
