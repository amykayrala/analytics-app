import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);


function LineChart() {
    const lineData = {
        labels: ['2010/11', '2011/12', '2012/13', '2013/14', '2014/15', '2015/16', '2016/17', '2017/18', '2018/19', '2019/20', '2020/21', '2021/22','2022/23', '2023/24'],
        datasets: [
        {
            label: 'United States Consumption',
            data: [21.78, 22.04, 22.23, 23.42, 23.77, 24.44, 25.24, 26.18, 26.51, 26.87, 25.9, 27.64, 28.02, 28.4],
            tension: 0.3,
        },
        {
            label: 'Canada Consumption',
            data: [4.25, 4.17, 4.23, 4.61, 4.5, 4.55, 4.55, 4.75, 4.89, 4.83, 5, 5.33, 5.11, 4.98],
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
                    return index === 0 || index === 6 || index === 13;
                  },
                anchor: 'end',
                align: 'top',
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
                text: 'Consumption in Million 60-kg Bags',
              },
              beginAtZero: false
            },
            x: {
                ticks: {
                    callback: function(value, index) {
                      // Show label only if index is even (every 2nd label)
                      return index % 2 === 0 ? this.getLabelForValue(value) : '';
                    }
                },
            }
          },
      };    
    return (
      <div className="chart-container2">
        <h2>Line Chart Example</h2>
        <Line data={lineData} options={options}/>
      </div>
    );
  }

  export default LineChart;
