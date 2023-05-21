import { vi } from 'vitest';
import { ConteinerTables } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { act, screen } from '@testing-library/react';

describe('<ConteinerTables />', () => {
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

  it('should a render cointeiner tables', async () => {
    await act(async () => renderTheme(<ConteinerTables />));

    const conteiner = screen.getByLabelText('Conteiner');

    expect(conteiner).toBeInTheDocument();
  });
});
