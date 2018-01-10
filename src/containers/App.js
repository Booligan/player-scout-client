import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar'
import Players from './Players'
import PlayerShow from './PlayerShow'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
          <Navbar />
          <Route exact path = '/players' component = {Players} />
          <Route exact path = '/players/:id' component = {PlayerShow} />
       </div>
    </Router>
    );
  }
}

export default App;
