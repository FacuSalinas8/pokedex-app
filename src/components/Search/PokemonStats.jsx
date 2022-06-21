import React from 'react';

export default function PokemonStats(props) { 
    return (
        <div className="container mt-2 animate__animated animate__slideInLeft">
            <div className="row">
                <div className="col col-md-6 col-xs-12">
                    <div className="card shadow  mb-5 bg-body rounded">
                        
                        <div className="card-header mt-">
                            <h5 className="card-text text-capitalize">{props.name}</h5>
                            <img src={props.sprite} alt={props.name} />
                        </div>

                        <div className="card-body">
                        <h5>Abilities</h5>
                            {props.abilities.map((ability, key) => (
                                <div key={key}>
                                <span>{ability.ability.name}</span>
                                </div>
                            ))}
                            <h5>Types</h5>
                            {props.types.map((type, key) => (
                                <div key={key}>
                                <span>{type.type.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col col-md-6 col-xs-12">
                    <div className="card shadow  mb-5 bg-body rounded">
                        <div className="card-body ">
                        <h4>Base Stats</h4>
                            {props.stats.map((stat, key) => (
                                <div key={key}>
                                <strong>{stat.stat.name}</strong>
                                <div className="progress">
                                    <div className="progress-bar" 
                                    role="progressbar" 
                                    style={{width:(stat.base_stat*2.5)}} 
                                    aria-valuenow="25" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                        {stat.base_stat}
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
    }