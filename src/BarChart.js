import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

const barLabels = ['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64'];
const barData = [8.9, 20.6, 22.4, 23.5, 24.6];
const barColors = ['', '', '', '', '#345162'];

function BarChart() {
    const { t } = useTranslation();

    const [activeBars, setActiveBars] = useState(
        barLabels.reduce((acc, _, i) => {
          acc[i] = true; // all bars active initially
          return acc;
        }, {})
      );
    
      // Toggle a single bar on/off by index
      const toggleBar = (index) => {
        setActiveBars((prev) => ({
          ...prev,
          [index]: !prev[index],
        }));
      };
    
      // Get active bars data filtered by activeBars state
      const visibleData = barLabels
        .map((label, i) => ({
          label,
          value: barData[i],
          index: i,
          active: activeBars[i],
        }))
        .filter((point) => point.active);
    
      const chartData = {
        labels: visibleData.map((point) => point.label),
        datasets: [
          {
            label: t('percentage'),
            data: visibleData.map((point) => point.value),
            backgroundColor: visibleData.map((point) => barColors[point.index]),
            borderWidth: 2,
          },
        ],
      };


    return (

    <div className="chart-container1">
        <h2 style={{ textAlign: 'center' }}>{t('barTitle')}</h2>
        <div style={{ marginBottom: '1rem' }}>
            {barLabels.map((label, i) => (
            <label key={i} style={{ marginRight: '1rem', cursor: 'pointer' }}>
                <input
                type="checkbox"
                checked={activeBars[i]}
                onChange={() => toggleBar(i)}
                style={{ marginRight: '0.3rem' }}
                />
                {label}
            </label>
            ))}
        </div>
        <Bar
        data={chartData}
        options={{
            scales: {
                x: {
                  grid: {
                    display: false, 
                  },
                  title: {
                    display: true,
                    text: t('age'),
                  },
                },
                y: {
                max: 25,
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
        <p>{t('barExplain')}</p>
    </div>
    );
};

export default BarChart;
