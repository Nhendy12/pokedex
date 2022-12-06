import { useEffect, useState } from 'react';
import Types from './types';
import axios from 'axios';


const API_URL = 'http://localhost:3000/api/pokemon';

function NewPokemonForm(setPokemon) {
  const [typeChoice, setTypeChoice] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [formFilled, setFormFilled] = useState(true);


  function handleSubmit( event ) {
    event.preventDefault();
    const data = new FormData();
    console.log("event = ", event);

    data.append("pokemon[name]", event.target.name.value);
    data.append("pokemon[image]", event.target.image.files[0]);
    data.append("pokemon[types]", JSON.stringify(typeChoice))

    submitToAPI(data);
  }

  function submitToAPI( data ) {
    console.log("in submit, data = ", data);
    axios.post(API_URL, data)
        .then(response => (setPokemon))
        .catch((error) => console.log(error))
  }

  function handleUserInput( e ) {
    console.log(e.target.name)
    if ( e.target.name == 'name' ) {
      //setName(e.target.value())
    } 
    if ( e.target.name == 'image' ) {
      console.log(e.target)
      //setImage(e.target.value())
    }

    console.log(name, image, typeChoice)
    if (name != '' && image.length > 0 && typeChoice.length > 0) {
      console.log("yes!")
    } else {
      console.log("no :(")
    }
  }

  return (
    <div>
      <h2 className='add-title'>Add Pokemon</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='form-label' htmlFor='image'>Photo</label>
        <input className='input' type='file' name='image' id='image' onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='name'>Name</label>
        <input className='input input-name' type='text' name ="name" id="name" placeholder='Write name here...' onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='types'>Types</label>
        <Types onChange={(event) => handleUserInput(event)} setTypeChoice={setTypeChoice} />

        <br>
        </br>
        <div className='center'>
          <button className='add-btn' type='submit' disabled={!formFilled}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewPokemonForm