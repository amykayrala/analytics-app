import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import  BarChart from './BarChart';
import LineChart from './LineChart';
import water from './media/water.jpeg';
import money from './media/money.jpg';
import brew from './media/brew.jpg';
import cold from './media/cold.jpg';
import coldcof from './media/coldcof.jpg';
import { FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);


function Home() {
    const { t } = useTranslation();

  return (
    <div className='home-page'>
        <section className='home-banner'>
            <div className='banner'>
                <h1 style={{ fontSize:'4rem'}}> <strong>Coffee Census</strong></h1>
                <h4>{t('slogan')}</h4>
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
                        <p dangerouslySetInnerHTML={{ __html: t('drinking stat') }} style={{margin: '0'}}/>
                        <img className='facts-img' src={water}  />
                    </div>
                    <div className='facts-div'>
                            <h3> 💸 {t('didYouKnow')} </h3>
                        <p dangerouslySetInnerHTML={{ __html: t('money stat') }} style={{margin: '0'}} />
                        <img className='facts-img' src={money}  />
                    </div>
                </Col>

            </Row>
        </section>
        <section className='middle'>
            <div className='mid-section'>
                <h2>{t('cold title')}</h2>
                <Row style={{width: '100%'}}>
                    <Col> 
                        <Row className='facts-row'>
                            <Col className='text-end'>
                                <img className='coffeepics' src={brew}/>
                            </Col>
                            <Col style={{padding:'0'}}>
                                <h3>21%</h3>
                                <p style={{margin: '0'}}>  {t('facts1')}</p>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col>
                        <Row className='facts-row'>
                            <Col className='text-end'>
                                <img className='coffeepics' src={cold}/>
                            </Col>
                            <Col style={{padding:'0'}}>
                                <h3>8%</h3>
                                <p style={{margin: '0'}}> {t('facts2')} </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='facts-row'>
                            <Col className='text-end'>
                                <img className='coffeepics' src={coldcof}/>
                            </Col>
                            <Col style={{padding:'0'}}>
                                <h3>17%</h3>
                                <p style={{margin: '0'}}> {t('facts3')} </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>

        </section>

        <section className='line-section'>
            <LineChart />
            <div className='clickDiv text-end'>
                <h5> 💡 {t('click')} <FaArrowUp /></h5>
            </div>

        </section>

        
    </div>
  );
}

export default Home;