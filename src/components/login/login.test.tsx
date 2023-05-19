/* eslint-disable semi */
import { act, fireEvent, screen } from '@testing-library/react';
import { Login } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { afterEach, beforeEach, vi } from 'vitest';

global.fetch = vi.fn()

describe('<Login />', () => {

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();

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

  it('should a render Login compomnent', async () => {

    await act(async () => renderTheme(<Login />))

    const form = screen.getByRole('form');
    const heading = screen.getByRole('heading', { name: 'Login De Usuario'});
    const input = screen.getByPlaceholderText('Api Key');
    const button = screen.getByRole('button', { name: 'Entrar' });
    const link = screen.getByRole('link', { name: 'Adiquira a sua chave Key aque!' });
    const errorMessage = screen.queryByRole('alert');
    const loading = screen.queryByLabelText('Loading');

    expect(form).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(errorMessage).not.toBeInTheDocument();
    expect(loading).not.toBeInTheDocument();
  });

  it('should show an error message for not adding a key', async () => {

    await act(async () => renderTheme(<Login />))

    const button = screen.getByRole('button', { name: 'Entrar' });

    expect(button).toBeInTheDocument()

    fireEvent.click(button);

    const errorMessageConteiner = screen.getByRole('alert');
    const message = screen.getByRole('log');

    expect(errorMessageConteiner).toBeInTheDocument();
    expect(message).toHaveTextContent('adicione uma Api-Key');

    act(() => {
      vi.advanceTimersByTime(5500)
    })

  });

  it('should return an error for sending an invalid key', async () => {

    await act( async() => renderTheme(<Login />))

    const input = screen.getByPlaceholderText('Api Key');

    fireEvent.change(input, { target: { value: 'test' } });

    await act(async () => {
      fireEvent.submit(screen.getByRole('form'));
    });

    const errorMessage = screen.getByRole('alert')

    expect(errorMessage).toBeInTheDocument()
    expect(screen.getByRole('log')).toHaveTextContent('Api-Key invalido!')

  });

  it('should login', async () => {
    global.fetch = vi.fn().mockReturnValue({
      ok: true,
      json: () =>
        Promise.resolve({ errors: { token: 'passou' } }),
    });

    await act( async() => renderTheme(<Login />))

    const input = screen.getByPlaceholderText('Api Key');

    fireEvent.change(input, { target: { value: 'test' } });

    await act(async () => {
      fireEvent.submit(screen.getByRole('form'))
    });
  });
});
