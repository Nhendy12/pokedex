import { useEffect, useState } from 'react';
import Types from './types';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/pokemon';

function UpdatePokemonForm( current_pokemon, parentCallback ) {
  const [typeChoice, setTypeChoice] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [formFilled, setFormFilled] = useState(true);

  function handleSubmitForm( event ) {
    event.preventDefault();
    const data = new FormData();
    console.log("event = ", event);

    data.append("pokemon[name]", event.target.name.value);
    data.append("pokemon[image]", event.target.image.files[0]);
    data.append("pokemon[types]", JSON.stringify(typeChoice))

    submitToAPI(data);
  }

  function submitToAPI( data ) {
    const id = current_pokemon.current_pokemon.id
    console.log("in submit, data = ", data);
    axios.put(API_URL + '/' + id, data)
        .then(response => (successfulUpdate(response)))
        .catch((error) => console.log(error))
  }

  function handleUserInput( e ) {
  }

  function successfulUpdate ( response ) {
    window.location.reload();
  }
  
  return (
    <div className='formDiv'>
      <h2 className='add-title'>Edit Pokemon</h2>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <label className='form-label' htmlFor='image'>Photo</label>
        <input className='input' type='file' name='image' id='image' accept=".png" onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='name'>Name</label>
        <input className='input input-name' type='text' name="name" id="name" defaultValue={current_pokemon.current_pokemon.name.toString()} placeholder='Write name here...' onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='types'>Types</label>
        <Types onChange={(event) => handleUserInput(event)} setTypeChoice={setTypeChoice} props={ current_pokemon.current_pokemon.types }/>

        <br>
        </br>
        <div className='center'>
          <button className='add-btn' type='submit' disabled={!formFilled}>Edit</button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePokemonForm