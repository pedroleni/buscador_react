import { useEffect, useState } from "react";
import { getPokemon } from "../api/apiCalls";
import {useDebounce} from "use-debounce"

export const RecoverDataComponent = () =>{
    const [pokemon, setPokemon] = useState ({
        name: 'charmander',
        img: 'Default broke'
    });

    const [filter, setFilter] = useState('charmander')
    const [debounceFilter] = useDebounce (filter,500)


    useEffect(()=>{
        getPokemon(filter).then((pokemon)=> setPokemon(pokemon));
        


    },[debounceFilter]);

    const handleChangeFilter =(e)=>{
        const StringtoLower = e.target.value.toLowerCase().trim();
        setFilter(StringtoLower)
    }

    return (

    <>
    {console.log(pokemon)}
    <h1>{pokemon.name}</h1>
    <img src={pokemon.img} rel={pokemon.name}/>

    <input type="text" value={filter} onChange={(e)=> handleChangeFilter(e)}/>
    </>
    
    )
 

}