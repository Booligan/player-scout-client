import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import bootstrap from 'react-bootstrap';
import Navbar from '../components/Navbar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/about' component = {About} /> 
          <Route exact path = '/players' component = {PlayersIndex} />
          <Route exact path = '/players/:id' component = {PlayerShow} />      
        </div>
      </Router>
    );
  }
}

export default App;
