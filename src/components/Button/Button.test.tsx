import { fireEvent, screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { vi } from 'vitest';

describe('<Button />', () => {
  it('should a render button', () => {
    renderTheme(<Button text='test' />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();
  });

  it('should click the button', () => {
    const onClick = vi.fn();

    renderTheme(<Button text='test' onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const onClick = vi.fn();

    renderTheme(<Button text='test' onClick={onClick} />);

    const button = screen.getByRole('button', { name: 'test' });

    expect(button).toMatchInlineSnapshot(`
      <button
        class="gWAGfQ"
      >
        test
      </button>
    `);
  });
});
