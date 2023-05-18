import { fireEvent, screen } from '@testing-library/react';
import { Input } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { vi } from 'vitest';

describe('<Input />', () => {
  const fn = vi.fn();

  it('should render a input', () => {
    renderTheme(<Input handleGetValue={fn} name='Text' type='text' />);

    const input = screen.getByPlaceholderText('Text');

    expect(input).toBeInTheDocument();
  });

  it('should get the value from the input', () => {
    renderTheme(<Input handleGetValue={fn} name='Text' type='text' />);

    const input: any = screen.getByPlaceholderText('Text');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'oi' } });

    expect(fn).toHaveBeenCalled();
    expect(input.value).toEqual('oi');
  });
});
