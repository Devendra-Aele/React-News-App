// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state={
    progress:10
  }
  setprogress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        {/* <News pagesize="6" country="in" category="technology" /> */}
        <Router>
          <Navbar />
        <LoadingBar
        height={4}
        color='red'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/technology" element={<News setprogress={this.setprogress} key="technology" pagesize="6" country="in" category="technology" />} />
            <Route exact path="/" element={<News setprogress={this.setprogress} key="general" pagesize="6" country="in" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} key="business" pagesize="6" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" pagesize="6" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} key="health" pagesize="6" country="in" category="health" />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} key="science" pagesize="6" country="in" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} key="sports" pagesize="6" country="in" category="sports" />} />
          
          </Routes>
        </Router>
      </>
    )
  }
}
