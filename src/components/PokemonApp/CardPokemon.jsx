import React from 'react'
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import {Link} from 'react-router-dom';

import '../../styles.css'

export const CardPokemon = (props) => {
    const estado = useFetchPokemon(props.url);
    const {isLoading,dataPokemons} = estado;

    return (
        <div className="col">
            {
            !isLoading && dataPokemons
            ?
            <div className="card shadow  mb-5 bg-body rounded  animate__animated animate__zoomIn">
                <div className="card-header">
                    <h5 className="card-text text-capitalize">
                        {dataPokemons.forms[0].name} #{dataPokemons.id}
                    </h5>
                </div>
                
                <div className="card-body row">
                    <img className='card-img-top'src={dataPokemons.sprites.front_default} alt="pokemon"/>
                    <img className='card-img-top' src={dataPokemons.sprites.back_default} alt="pokemon"/>

                    <div className='col-8'>
                        <h6 >Types</h6>
                        <ul className="card-text text-capitalize">
                            {dataPokemons.types.map((type, key) => (
                                <div key={key}>
                                    <li>{type.type.name}</li>
                                </div>
                            ))}
                        </ul>

                    </div>
                            <div className='col-4 d-grid gap-2 d-md-block'>
                                <Link to={`/pokeinfo/${dataPokemons.forms[0].name}`}>
                                    <button className="btn btn-info " type="button">
                                        More data
                                    </button>
                                </Link>
                            </div>
                    
                </div>

            </div>   
            :<div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }

        </div>
    )
}
