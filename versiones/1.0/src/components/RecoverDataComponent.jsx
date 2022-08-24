import { useEffect, useState } from "react";
import { getPokemon } from "../api/apiCalls";

export const RecoverDataComponent = () =>{
    const [pokemon, setPokemon] = useState ({
        name: 'charmander',
        img: 'Default broke'
    });

    const [filter, setFilter] = useState('charmander')


    useEffect(()=>{
        getPokemon(pokemon.name).then((pokemon)=> setPokemon(pokemon));

    },[]);

    return (

    <>
    {console.log(pokemon)}
    <h1>{pokemon.name}</h1>
    <img src={pokemon.img} rel={pokemon.name}/>

    {/* <input type="text" value={filter} onChange={(e)=> setFilter(e.target.value)}/> */}
    </>
    
    )
 

}