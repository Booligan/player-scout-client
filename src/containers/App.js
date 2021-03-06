import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Players from './Players'
import PlayerShow from './PlayerShow'
import PlayerForm from './PlayerForm'

class App extends Component {
  render() {
    return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/about' component = {About} />              
            <Route exact path = '/players' component = {Players} />
            <Route exact path = '/players/new' component = {PlayerForm} />
            <Route exact path = '/players/:id' component = {PlayerShow} />
          </Switch>
       </div>
    </Router>
    );
  }
}

export default App;
