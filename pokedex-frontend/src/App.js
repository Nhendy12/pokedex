import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Pokemon from './components/pokemon';
import NewPokemonForm from './components/newPokemonForm';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/pokemon';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setPokemon(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <header className="">
        <NewPokemonForm/>
      </header>
      <div className='pokemon-list'>
        <Pokemon pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
