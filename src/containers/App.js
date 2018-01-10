import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar'
import Players from './Players'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path = '/players' component = {Players} />
        </div>
      </Router>
    );
  }
}

export default App;
