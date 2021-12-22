// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <>
        {/* <News pagesize="6" country="in" category="technology" /> */}
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/technology" element={<News key="technology" pagesize="6" country="in" category="technology" />} />
            <Route exact path="/general" element={<News key="general" pagesize="6" country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pagesize="6" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize="6" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key="health" pagesize="6" country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pagesize="6" country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" pagesize="6" country="in" category="sports" />} />
          
          </Routes>
        </Router>
      </>
    )
  }
}
