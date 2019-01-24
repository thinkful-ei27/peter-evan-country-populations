import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Output from './components/output';
import Button from './components/button';
import Image from './components/images';
import China from './assets/flags/china.png';
import UnitedStates from './assets/flags/united-states.png';
import India from './assets/flags/india.png';

class App extends Component {
  state = {
    country: '',
    year: ''
  }

  handleInput (e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  render() {

    return (
      <div className="App">
      <form onSubmit={(e) => e.preventDefault()}className="App">
        <Input name="country" placeholder="Country" handleInput={(e) => this.handleInput(e)}/>
        <Input name="year" placeholder="Year" handleInput={(e) => this.handleInput(e)}/>
        <Button />
      </form>
        <Image imgSrc={UnitedStates} />
        <Output country={this.props.countryData} year={2000} />
      </div>
    );
  }
}

export default App;
