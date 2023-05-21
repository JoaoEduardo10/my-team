import * as Styled from './styles';
import Chart from 'react-apexcharts';
import { TTeamStatistic } from '../../types';
import { useEffect, useState } from 'react';

export type ApexChartProps = {
  graphic: TTeamStatistic['response']['goals']['against']['minute']
}


export const ApexChart = ({ graphic }: ApexChartProps) => {
  const [arreyTotal, setArreyTotal] = useState<number[]>([]);
  const [arreyPercentage, setArreyPercentage] = useState<any[]>([]);

  useEffect(() => {
    if(!graphic) return;
    setArreyTotal(Object.values(graphic).map(obj => obj.total));
    setArreyPercentage(Object.values(graphic).map(obj => obj.percentage));
  }, [graphic]);

  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    stroke: {
      width: [4, 0, 0]
    },
    xaxis: {
      categories: ['0-15', '16-30', '31-45', '46-60', '61-75', '76-90', '91-105', '106-120']
    },
    markers: {
      size: 7,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 50
    }
  };

  const series = [
    {
      name: 'porcentagem de gols',
      type: 'line',
      data: arreyPercentage,
    },
    {
      name: 'total de gols',
      type: 'column',
      data: arreyTotal,
    },
  ];

  return (
    <Styled.Conteiner aria-label='conteiner'>
      {
        graphic ? (
          <Chart
            options={options}
            series={series}
            type="line"
            width={500}
            height={320}
          />
        ) : (
          <Styled.Div aria-label='alert'>Adicione um time</Styled.Div>
        )
      }
    </Styled.Conteiner>
  );
};
