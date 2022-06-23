import React, { useState } from 'react'
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import PokemonStats from './PokemonStats';

export const Search = () => {
    
    const [searchPokemon, setSearchPokemon] = useState('');
    const [searchUrl, setSearchUrl] = useState('')

    const handleChange = (e) =>{
        setSearchPokemon(e.target.value.toLowerCase());
    }

    const handleSearch = (e)=>{
        e.preventDefault();

        setSearchUrl(`http://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
        setSearchPokemon('');
    }

    const estado = useFetchPokemon(searchUrl);
    const {isLoading,dataPokemons} = estado;


    return (
        <div className="search-container">
            <h1>Search with FullName</h1>
            <hr/>
            <form onSubmit={handleSearch}>
                <div className="form-floating mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="search"
                    name="searchPokemon"
                    value={searchPokemon}
                    onChange={handleChange}/>

                    <label className="text-secondary" 
                    style={{opacity: 0.8}}
                    htmlFor="floatingInput">Search your favorite Pokemon</label>

                    <h6 className="text-sm-start mt-3">For example</h6>
                    <button className="btn btn-link"
                        onClick={()=>setSearchPokemon('pikachu')}>
                        Pikachu
                    </button>
                    <button className="btn btn-link"
                        onClick={()=>setSearchPokemon('charmander')}>
                        Charmander
                    </button>
                    <button className="btn btn-link"
                        onClick={()=>setSearchPokemon('squirtle')}>
                        Squirtle
                    </button>
                    <button className="btn btn-link"
                        onClick={()=>setSearchPokemon('bulbasaur')}>
                        Bulbasaur
                    </button>

                </div>
            </form>

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
            :null}  

        </div>
    )
}
