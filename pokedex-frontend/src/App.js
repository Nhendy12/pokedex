import './App.css';
import logo from './logo.png'; 
import axios from 'axios';
import Pokemon from './components/pokemon';
import { useEffect, useState } from 'react';
import * as React from 'react';
import AddPokemon from "./components/addPokemon";
import ReactPaginate from 'react-paginate';

const API_URL = 'http://localhost:3000/api/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  function getAPIData() {
    return axios.get(API_URL, {
      params: {
        page: currentPage
      }}).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setPokemon(items.data);
        setPageCount(items.pagy.pages);
      }
    });
    return () => (mounted = false);
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

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
        <div className='paginate-div'>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
