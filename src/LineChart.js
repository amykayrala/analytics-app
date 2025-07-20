import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { useTranslation } from 'react-i18next';

ChartJS.register(...registerables);


function LineChart() {
  const { t } = useTranslation();

  const lineData = {
      labels: [ '2014/15', '2015/16', '2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22','2022/23', '2023/24'],
      datasets: [
      {
          label: t('UsConsumption'),
          data: [23.77, 24.44, 25.24, 26.18, 26.51, 26.87, 25.9, 27.64, 28.02, 28.4],
          tension: 0.3,
      },
      {
          label: t('CanadaConsumption'),
          data: [ 4.5, 4.55, 4.55, 4.75, 4.89, 4.83, 5, 5.33, 5.11, 4.98],
          borderColor: '#6d7d5d',
          tension: 0.3,
      },
      ],
    };
  
    const options = {
      plugins: {
          datalabels: {
              display: function(context) {
                  const index = context.dataIndex;
                  // For example, show label only on points at index 0 and 5
                  return index === 0 || index === 4 || index === 9;
                },
              anchor: 'end',
              align: 'bottom',
            },
          tooltip: {
            enabled: true,
            backgroundColor: '#345162',
          },
          legend: {
              display: true,
              position: 'right'
          },
        },
        responsive: true,
        animation: {
          duration: 1500,
          easing: 'easeInOutQuart', 
        },
        scales: {
          y: {
            title: {
              display: true,
              text: t('million'),
            },
            beginAtZero: false,
          },
          x: {
              grid: {
                display: false, 
              },
          }
        },
    };    
    return (
      <div className="chart-container2">
        <h2>{t('lineTitle')}</h2>
        <Line data={lineData} options={options}/>
      </div>
    );
  }

  export default LineChart;
