import React from 'react';

function Pokemon(props) {
    return(
        <div>
            API Pokemon
            {props.pokemon.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.image_url}></img>
                        <h2>{item.name}</h2>
                        {item.types.map(type => {
                            return <li>{type.name}</li>
                        })}
                        {console.log(item.image)}
                    </div>
                );
            })}
        </div>
    )
}

export default Pokemon