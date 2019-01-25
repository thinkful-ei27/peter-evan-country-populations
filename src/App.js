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
    year: '',
    renderOutput: false
  };

  handleInput(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
      renderOutput: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      renderOutput: true
    });
  }

  getFlag() {
    switch(this.state.country) {
      case 'United States': return UnitedStates;
      case 'China': return China;
      case 'India': return India;
      default: return null;
    };
  }

  getPopulation () {
    return this.props.countryData.filter((country) => {
      if (
        this.state.year === country.date &&
        this.state.country === country.country.value
      ) {
        return country;
      }
      return null;
    }, this);
  }

  render() {
    // const population = this.props.countryData.reduce((acc, country) => {
    //   if (
    //     this.state.year === country.date &&
    //     this.state.country === country.country.value
    //   ) {
    //     return acc;
    //   }
    //   return null;
    // }, []);
    let population = [];
    if (this.state.renderOutput) {
      population = this.getPopulation();
    }
    
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <Input
            name="country"
            placeholder="Country"
            handleInput={e => this.handleInput(e)}
          />
          <Input
            name="year"
            placeholder="Year"
            handleInput={e => this.handleInput(e)}
          />
          <Button log={() => console.log('button')} />
        </form>
        {population.length > 0 ? (
          <div>
            <Image imgSrc={this.getFlag()} />
            <Output
              country={this.state.country}
              year={this.state.year}
              population={population[0].value}
            />
          </div>
        ) : 'Searching...'}
      </div>
    );
  }
}

export default App;
