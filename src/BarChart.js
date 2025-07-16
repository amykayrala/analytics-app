
import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };


    return (

    <div className="chart-container">
        <h2 style={{ textAlign: 'center' }}>Bar Chart Example</h2>
        <Bar
        data={barData}
        options={{
            plugins: {
            title: {
                display: true,
                text: 'Data Visualization'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
            }
        }}
        />
    </div>
    );
};

export default BarChart;
