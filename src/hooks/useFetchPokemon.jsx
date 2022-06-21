import { useEffect, useState } from 'react'

export const useFetchPokemon = (url) => {

    const [resultado, setResultado] = useState({
        isLoading:true,
        dataPokemons:null,
        btnActivo:false
    });

    useEffect(() =>{
        getDataPokemons(url);
    },[url])

    const getDataPokemons= async (url) =>{        
        
        setTimeout(async() => {
            setResultado({isLoading:true,dataPokemons:null});
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                return setResultado({isLoading:false,dataPokemons:data});

            } catch (e) {
                console.log(e);

            }
        }, 400);
        
    }
    
    return (resultado);
}
