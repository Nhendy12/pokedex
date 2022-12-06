import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const API_URL = 'http://localhost:3000/api/types';

function getAPIData() {
    return axios.get(API_URL).then((response) => response.data)
}

function Types( { setTypeChoice, props } ) {
    const [types, setTypes] = useState([]);
    const [typeChoice, handleTypeChange] = useState([]);

    //console.log("prev type choice = ")

    useEffect(() => {    
        setTypeChoice(typeChoice)
    });

    const options = types.map(t => ({
        "value" : t.id,
        "label" : t.name
    }))

    const defaultValue = props.map(t => ({
        "value" : t.id,
        "label" : t.name
    }))

    useEffect(() => {
        let mounted = true;
        getAPIData().then((items) => {
          if(mounted) {
            setTypes(items);
          }
        });
        return () => (mounted = false);
      }, []);

    return (
        <div>
            <Select
                closeMenuOnSelect={false}
                defaultValue={defaultValue}
                isMulti
                //onChange={console.log(selectedOption)}
                options={options}
                onChange={(typeChoice) => handleTypeChange(typeChoice)}
                //styles={colourStyles}
            />
        </div>
    )
}

export default Types