import { screen } from '@testing-library/react';
import { ErrorMessage } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<ErrorMessage />', () => {
  it('should render the error message with message end popping animation', () => {
    renderTheme(<ErrorMessage message='test' />);

    const errorMessageConteiner = screen.getByRole('alert');
    const errorMessage = screen.getByRole('log');

    expect(errorMessageConteiner ).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('test');

    expect(errorMessageConteiner).toHaveStyle({
      animation: 'errorMessageAnimatio 1s ease-in-out'
    });
  });

  it('should render the error message without the message', () => {
    renderTheme(<ErrorMessage message={''} />);

    const errorMessageConteiner = screen.getByRole('alert');
    const errorMessage = screen.getByRole('log');

    expect(errorMessageConteiner ).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('');

  });

  it('should render the error message without the message', () => {
    renderTheme(<ErrorMessage message={'test'} />);

    const errorMessageConteiner = screen.getByRole('alert');


    expect(errorMessageConteiner).toMatchSnapshot();

  });
});
