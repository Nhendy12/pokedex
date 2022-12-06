import React from 'react';

function Pokemon(props) {

    function addLeadingZeros(num, totalLength) {
        return String(num).padStart(totalLength, '0');
    }

    return(
        <div className='pokemon-grid'>
            {props.pokemon.map((item) => {
                const classes = `round-top center ${item.types[0].name}`
                return (
                    <div className="pokemon-card" key={item.id}>
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