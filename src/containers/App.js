import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
       App Container
       <hr />
       <Button bsStyle='success'>CLICK</Button>
      </div>
    );
  }
}

export default App;
