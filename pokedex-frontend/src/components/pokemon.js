import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UpdatePokemonForm from './updatePokemonForm';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Pokemon( props ) {
    const [open, setOpen] = React.useState(false); 
    const [current_pokemon, setPokemon] = React.useState(); 
    const [state, updateState] = React.useState();
    const [list, setList] = React.useState([]);

    useEffect(() => {
        setList(props.pokemon);
    });

    useEffect(() => {
        updateState();
    });

    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function addLeadingZeros( num, totalLength ) {
        return String( num ).padStart(totalLength, '0');
    }

    function handleOpen( current_pokemon ) {
        setOpen(true);
        setPokemon(current_pokemon);
    }

    return(
        <div className='pokemon-grid'>
            <Modal
                current_pokemon={current_pokemon}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <UpdatePokemonForm current_pokemon={current_pokemon} updateState={updateState} />        
                </Box>
            </Modal>
            {list.map((item) => {
                const classes = `round-top center img-div ${item.types[0].name}`
                return (
                    <div className="pokemon-card" onClick={() => handleOpen(item)} key={item.id}>
                        <div className={classes}>
                            <img src={item.image_url} alt="Pokemon image"></img>
                        </div>
                        <div className="card-body">
                            <h2 className='card-title'>{item.name} {addLeadingZeros(item.id, 3)}</h2>
                            <ul className='card-type-list'>
                            {item.types.map(type => {
                                return <li className='card-type'>{type.name}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Pokemon