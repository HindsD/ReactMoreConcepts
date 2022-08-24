import React, { Component } from 'react'
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = { 
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 3, bronze: 1 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 0 },
    ]
  }
  getTotalMedalCount = () => {
    const totGold = this.state.countries.reduce((a, b) => a + b.gold, 0);
    const totSilver = this.state.countries.reduce((a, b) => a + b.silver, 0);
    const totBronze = this.state.countries.reduce((a, b) => a + b.bronze, 0);
    return totGold + totSilver + totBronze;
  }
  getCountryMedalCount = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    return countriesMutable[idx].gold + countriesMutable[idx].silver + countriesMutable[idx].bronze;
  }
  handleIncrementGold = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].gold += 1;
    this.setState({gold: countriesMutable[idx].gold});
    
  }
  handleDecrementGold = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].gold > 0){
      countriesMutable[idx].gold -= 1;
      this.setState({gold: countriesMutable[idx].gold});
    }
  }

  handleIncrementSilver = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].silver += 1;
    this.setState({silver: countriesMutable[idx].silver});
    
  }
  handleDecrementSilver = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].silver > 0){
      countriesMutable[idx].silver -= 1;
      this.setState({silver: countriesMutable[idx].silver});
    }
  }

  handleIncrementBronze = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].bronze += 1;
    this.setState({bronze: countriesMutable[idx].bronze});
    
  }
  handleDecrementBronze = (countryId) => {
    const countriesMutable = [...this.state.countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].bronze > 0){
      countriesMutable[idx].bronze -= 1;
      this.setState({bronze: countriesMutable[idx].bronze});
    }
  }

  render() { 
    return (
      <div className="App">
        <div className='App-header'>Olympic Medals!</div>
        <h2>Total Medals: {this.getTotalMedalCount()}</h2>
        <div className='Country-items'>
          { this.state.countries.map(country => 
            <Country
              key={ country.id }
              country={ country }
              onIncrementGold={ this.handleIncrementGold }
              onDecrementGold={this.handleDecrementGold} 
              getCountryMedalCount={this.getCountryMedalCount}
              
              onIncrementSilver={ this.handleIncrementSilver }
              onDecrementSilver={this.handleDecrementSilver} 

              onIncrementBronze={ this.handleIncrementBronze }
              onDecrementBronze={this.handleDecrementBronze} 
              />
              
              )}
        </div>
          
      </div>
    );
  }
}
 
export default App;
