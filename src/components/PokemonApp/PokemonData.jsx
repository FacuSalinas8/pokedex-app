import React from 'react'
import { CardPokemon } from './CardPokemon';

export const PokemonData = (props) => {

    const {pokemons} = props;

    return (
        <div className="container">
            <div className="row">
                {
                    pokemons.map((pokemon)=>(
                        <CardPokemon key={pokemon.name} url={pokemon.url} />
                    ))
                }
            </div>
        </div>
    )
}
