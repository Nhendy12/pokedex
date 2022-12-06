import { useEffect, useState } from 'react';
import Types from './types';
import axios from 'axios';


const API_URL = 'http://localhost:3000/api/pokemon';

function NewPokemonForm() {
  const [typeChoice, setTypeChoice] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    console.log("event = ", event);

    data.append("pokemon[name]", event.target.name.value);
    data.append("pokemon[image]", event.target.image.files[0]);
    data.append("pokemon[types]", JSON.stringify(typeChoice))
    //console.log(typeChoice)

    submitToAPI(data);
  }

  function submitToAPI(data) {
    console.log("in submit, data = ", data);
    axios.post(API_URL, data)
        .then(response => (console.log("response = " , response)))
        .catch((error) => console.log(error))
  }

  return (
    <div>
      <p>form</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='image'>Image</label>
        <input type='file' name='image' id='image'/>

        <label htmlFor='name'>Name</label>
        <input type='text' name ="name" id="name"/>
        <label htmlFor='types'>Types</label>
        <Types setTypeChoice={setTypeChoice} />

        <br>
        </br>

        <button type='submit'>Add</button>

      </form>
    </div>
  );
}

export default NewPokemonForm