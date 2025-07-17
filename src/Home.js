import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import  BarChart from './BarChart';
import LineChart from './LineChart';
import water from './media/water.jpeg'
import money from './media/money.jpg'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);


function Home() {

  return (
    <div className='home-page'>
        <section className='home-banner'>
            <div className='banner'>
                <h1 style={{ fontSize:'4rem'}}> <strong>Coffee Census</strong></h1>
                <h4>Tracking Every Bean, Every Brew.</h4>
            </div>

        </section>
        <section className='bar-section'>
            <Row>
                <Col className="barchart" lg="7">
                    <BarChart />
                </Col>
                <Col className='facts'>
                    <div className='facts-div'>
                        <h3>☕️ 71% </h3>
                        <p style={{margin: '0'}}>
                             of Canadians drink <strong>coffee</strong> regularly, more than the <strong> 67% who drink tap water </strong>
                        </p>
                        <img className='facts-img' src={water}  />
                    </div>
                    <div className='facts-div'>
                        <h3> 💸 Did you know? </h3>
                        <p style={{margin: '0'}}> The average Canadian spends <strong>$35.21 </strong>every month on coffee </p>
                        <img className='facts-img' src={money}  />
                    </div>
                </Col>

            </Row>
        </section>

        <section className='line-section'>
            <LineChart />

        </section>

        
    </div>
  );
}

export default Home;