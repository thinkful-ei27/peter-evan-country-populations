import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import Output from './components/output';
import Button from './components/button';
import Image from './components/images';
import China from './assets/flags/china.png';
import UnitedStates from './assets/flags/united-states.png';
// import India from './assets/flags/india.png';

class App extends Component {
  state = {
    country: '',
    year: '',
    renderOutput: false
  };

  handleInput(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      renderOutput: true
    });
  }

  render() {
    const population = this.props.countryData.reduce((acc, country) => {
      if (
        this.state.year === country.date &&
        this.state.country === country.country.value
      ) {
        return country.value;
      }
    }, []);
    console.log(population);
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
        <Image imgSrc={UnitedStates} />
        {this.state.renderOutput ? (
          <Output
            country={this.state.country}
            year={this.state.year}
            population={population}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
