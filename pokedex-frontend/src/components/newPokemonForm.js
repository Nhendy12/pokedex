import { useEffect, useState } from 'react';
import Types from './types';
import axios from 'axios';


const API_URL = 'http://localhost:3000/api/pokemon';

function NewPokemonForm(setPokemon) {
  const [typeChoice, setTypeChoice] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState([]);
  const [formFilled, setFormFilled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit( event ) {
    event.preventDefault();
    const data = new FormData();

    if ( (event.target.name.value).length == 0 || typeChoice.length == 0 || event.target.image.files[0] === 'undefined' ) {
      setErrorMessage('All inputs must be filled out!!');
    } else {
      data.append("pokemon[name]", event.target.name.value);
      data.append("pokemon[image]", event.target.image.files[0]);
      data.append("pokemon[types]", JSON.stringify(typeChoice))
  
      submitToAPI(data);
    }
  }

  function submitToAPI( data ) {
    axios.post(API_URL, data)
      .then(response => (successfulUpdate(response)))
      .catch((error) => console.log(error))
  }

  function successfulUpdate ( response ) {
    window.location.reload();
  }

  //needs finishing
  function handleUserInput( e ) {
    //console.log(e.target.name)
    if ( e.target.name == 'name' ) {
      //setName(e.target.value())
    } 
    if ( e.target.name == 'image' ) {
      //console.log(e.target)
      //setImage(e.target.value())
    }

    if (name != '' && image.length > 0 && typeChoice.length > 0) {
      //console.log("yes!")
    } else {
      //console.log("no :(")
    }
  }

  return (
    <div className='formDiv'>
      <h2 className='add-title'>Add Pokemon</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && (
          <p className="error"> {errorMessage} </p>
        )}
        <label className='form-label' htmlFor='image'>Photo</label>
        <input className='input' type='file' name='image' id='image' onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='name'>Name</label>
        <input className='input input-name' type='text' name ="name" id="name" placeholder='Write name here...' onChange={(event) => handleUserInput(event)}/>

        <label className='form-label' htmlFor='types'>Types</label>
        <Types onChange={(event) => handleUserInput(event)} setTypeChoice={setTypeChoice} props={[]} />

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