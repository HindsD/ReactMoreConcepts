import React, { useState, useEffect} from 'react'
import './App.css';
import Country from './components/Country';
import NewCountry2 from './components/NewCountry2'

const App = () => {
  const [ countries, setCountries ] = useState([]);
  useEffect(() => {
    let fetchedCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 2, bronze: 3 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 2 },
    ]
    setCountries(fetchedCountries);
  }, []);

  const getTotalMedalCount = () => {
    const totGold = countries.reduce((a, b) => a + b.gold, 0);
    const totSilver = countries.reduce((a, b) => a + b.silver, 0);
    const totBronze = countries.reduce((a, b) => a + b.bronze, 0);
    return totGold + totSilver + totBronze;
  }
  const getCountryMedalCount = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    return countriesMutable[idx].gold + countriesMutable[idx].silver + countriesMutable[idx].bronze;
  }
  const handleIncrementGold = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].gold += 1;
    setCountries(countriesMutable);
  }
  const handleDecrementGold = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].gold > 0){
      countriesMutable[idx].gold -= 1;
      setCountries(countriesMutable);
    }
  }

  const handleIncrementSilver = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].silver += 1;
    setCountries(countriesMutable);
  }
  const handleDecrementSilver = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].silver > 0){
      countriesMutable[idx].silver -= 1;
      setCountries(countriesMutable);
    }
  }

  const handleIncrementBronze = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx].bronze += 1;
    setCountries(countriesMutable);
  }
  const handleDecrementBronze = (countryId) => {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx].bronze > 0){
      countriesMutable[idx].bronze -= 1;
      setCountries(countriesMutable);
    }
  }

  const handleDelete = (countryId) => {
    setCountries(countries.filter((c) => c.id !== countryId));
  };
  const handleAdd = (name) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    setCountries(countries.concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 }));
  };

    return (
      <div className="App">
        <div className='App-header'>Olympic Medals!</div>
        <h2>Total Medals: {getTotalMedalCount()}</h2>
        <div className='Country-items'>
          { countries.map(country => 
            <Country
              key={ country.id }
              country={ country }
              onIncrementGold={ handleIncrementGold }
              onDecrementGold={handleDecrementGold} 
              getCountryMedalCount={getCountryMedalCount}
              
              onIncrementSilver={ handleIncrementSilver }
              onDecrementSilver={handleDecrementSilver} 

              onIncrementBronze={ handleIncrementBronze }
              onDecrementBronze={handleDecrementBronze} 

              onDelete={handleDelete}
              />
              
              )}
            
        </div>
          <NewCountry2 onAdd={handleAdd}/>  
      </div>
    );
  }

 
export default App;
