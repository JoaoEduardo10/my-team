/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { vi } from 'vitest';
import { ApexChart } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { mockResult } from '../tables/result/mock';
import { screen } from '@testing-library/react';

vi.mock('react-apexcharts');

describe('<ApexChart />', () => {
  it('should a render APexChart', () => {

    renderTheme(<ApexChart graphic={mockResult.goals.against.minute} />);

    const conteiner = screen.getByLabelText('conteiner');

    expect(conteiner).toBeInTheDocument();
  });

  it('should not render APexChart', () => {

    renderTheme(<ApexChart graphic={null!} />);

    const alert = screen.getByLabelText('alert');

    expect(alert).toBeInTheDocument();
  });
});
