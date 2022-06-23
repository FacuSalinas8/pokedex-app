import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import PokemonStats from '../Search/PokemonStats';

export const PokemonScreen = () => {
    
    //sirve para seleccionar el nombre de la url
    const{pokeid} = useParams();
    const navigate = useNavigate();

    // console.log(pokeid);

    const estado = useFetchPokemon(`http://pokeapi.co/api/v2/pokemon/${pokeid}`);
    const {isLoading,dataPokemons} = estado;

    const handleReturn = ()=> {
        navigate(-1);//-1 sirve para volver una pag atrás
    }

    return (
        <div>
            <h1>Poke Info</h1>
            <hr/>

            {
            !isLoading && dataPokemons
            ? 
            (<PokemonStats
                name={dataPokemons.name}
                sprite={dataPokemons.sprites.front_default}
                abilities={dataPokemons.abilities}
                stats={dataPokemons.stats}
                types={dataPokemons.types} />
            )
            : 
            <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>}

            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-warning" 
                            onClick={handleReturn} 
                    >
                        Back
                    </button>
                </div>

        </div>
    )
}
