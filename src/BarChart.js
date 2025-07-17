
import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {

    const barData = {
        labels: ['18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64'],
        datasets: [
          {
            label: 'Percentage of population % ',
            data: [8.9, 20.6, 22.4, 23.5, 24.6],
            backgroundColor: [ '', '', '', '', '#345162'],
            borderWidth: 2,
          },
        ],
      };


    return (

    <div className="chart-container1">
        <h2 style={{ textAlign: 'center' }}>Bar Chart Example</h2>
        <Bar
        data={barData}
        options={{
            scales: {
                x: {
                  grid: {
                    display: false, 
                  },
                  title: {
                    display: true,
                    text: 'Age',
                  },
                },
                y: {
                  grid: {
                    display: false, 
                  },
                },
              },
            plugins: {
                tooltip: {
                    enabled: true,
                    backgroundColor: '#6d7d5d',
                },
                title: {
                    display: true,
                    text: 'Data Visualization'
                },
                legend: {
                    display: false,
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutBounce'
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: (value) => `${value}%`,
                  },
            }
        }}
        />
        <p>The biggest group of coffee drinkers, when looking at ages between 18 and 64, are Canadians in the 55 to 64 age group. This group represents approximately 24.6% of coffee drinkers in Canada. </p>
    </div>
    );
};

export default BarChart;
