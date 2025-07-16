import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';


function App() {
  return (
    <Router basename="/analytics-app">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/#" element={<Home />} /> */}
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
