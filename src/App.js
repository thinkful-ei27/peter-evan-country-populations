import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';
import Output from './components/output';
import Image from './components/images';
import China from './assets/flags/china.png';
import UnitedStates from './assets/flags/united-states.png';
import India from './assets/flags/india.png';

class App extends Component {
  render() {
    return (
      <form className="App">
        <Input placeholder="Country" />
        <Input placeholder="Year" />
        <Button />
        <Image imgSrc={UnitedStates} />
        <Output country={'United States'} year={2000} />
      </form>
    );
  }
}

export default App;
