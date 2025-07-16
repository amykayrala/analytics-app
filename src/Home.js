import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import  BarChart from './BarChart';
import LineChart from './LineChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);





function Home() {

  return (
    <div className='home-page'>
         <BarChart />
         <LineChart />

        
    </div>
  );
}

export default Home;