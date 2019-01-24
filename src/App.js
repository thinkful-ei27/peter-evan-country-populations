import React, { Component } from 'react';
import './App.css';
import Input from './components/input'
import Button from './components/button'

class App extends Component {
  render() {
    return (
      <form className="App">
        <Input placeholder="Country"/>
        <Input placeholder="Year"/>
        <Button />
      </form>
    );
  }
}

export default App;
