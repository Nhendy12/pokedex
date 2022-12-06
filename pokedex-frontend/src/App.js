import './App.css';
import logo from './logo.png'; 
import axios from 'axios';
import Pokemon from './components/pokemon';
import { useEffect, useState } from 'react';
import * as React from 'react';
import AddPokemon from "./components/addPokemon";

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
      <header>
        <div className='header'>
          <div className="header-left">
            <img src={logo} alt="pokedex-logo"/>
          </div>
        <AddPokemon/>
        </div>
      </header>
      <div className='container'>
        <Pokemon pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
