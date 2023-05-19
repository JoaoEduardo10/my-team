import { fireEvent, screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Header />', () => {
  it('should a render Header', () => {
    renderTheme(<Header />);

    const logo = screen.getByRole('img', { name: 'logo' });
    const heading = screen.getByRole('heading');
    const button = screen.getByRole('button');

    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Meu Time');
  });

  it('should slow down the user', () => {
    renderTheme(<Header />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sair');

    fireEvent.click(button);

  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Header />);

    expect(container.firstChild).toMatchSnapshot();

  });
});
