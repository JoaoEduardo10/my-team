import { screen } from '@testing-library/react';
import { BackgroundConteiner } from '.';
import { renderTheme } from '../../utils/renderTheme';
import 'jest-styled-components';

describe('<BackgroundConteiner />', () => {
  it('should a render BackgroundConteiner conteiner with img', () => {
    renderTheme(<BackgroundConteiner img='test.png'>Children</BackgroundConteiner>);

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();
    expect(conteiner).toHaveStyle({
      'background-image': 'url(test.png)'
    });

    expect(conteiner).toMatchInlineSnapshot(`
      <main
        class="dYJXiq"
      >
        Children
      </main>
    `);
  });

  it('should a render BackgroundConteiner conteiner not img', () => {
    renderTheme(<BackgroundConteiner>Children</BackgroundConteiner>);

    const conteiner = screen.getByText('Children');

    expect(conteiner).toBeInTheDocument();

    expect(conteiner).toMatchInlineSnapshot(`
      <main
        class="irVJyd"
      >
        Children
      </main>
    `);
  });
});
