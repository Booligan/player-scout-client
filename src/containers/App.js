import React, { Component } from 'react';
import { Browser as Router, Route} from 'react-router-dom';
import './App.css';
import bootstrap from 'react-bootstrap';
import Navbar from '../components/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
