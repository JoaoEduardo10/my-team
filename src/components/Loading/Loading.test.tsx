import { screen } from '@testing-library/react';
import { Loading } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Loading />', () => {
  it('should a render Loading', () => {
    renderTheme(<Loading />);

    const loading = screen.getByLabelText('Loading');

    expect(loading).toBeInTheDocument();
    expect(loading).toMatchSnapshot();
  });
});
