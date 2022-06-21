import React, { useEffect, useState } from 'react'
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { PokemonData } from './PokemonData';

export const PokemonApp = () => {
    
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${0*9}`);
    const estado = useFetchPokemon(url);
    const {isLoading,dataPokemons} = estado;

    return (
        <div className="container">
            <h1>Pokedex App</h1>
            <hr/>

            {
                !isLoading && dataPokemons
                ?
                <div>
                    <button disabled={dataPokemons.previous==null}
                        className="btn btn-primary m-2 " onClick={()=>setUrl(dataPokemons.previous)}>
                        Previous Page
                    </button>
                    <button className="btn btn-primary m-2" onClick={()=>setUrl(dataPokemons.next)}>
                        Next Page
                    </button>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <PokemonData pokemons={dataPokemons.results}/>
                    </div>
                </div>
                :null
                
            }

        </div>
    )
}
