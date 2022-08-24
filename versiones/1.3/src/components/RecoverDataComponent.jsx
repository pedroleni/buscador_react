import { useEffect, useState } from "react";
import { getPokemon } from "../api/apiCalls";
import {useDebounce} from "use-debounce"

export const RecoverDataComponent = () =>{
    const [pokemon, setPokemon] = useState ({
        name: '',
        img: ''
    });

    const [filter, setFilter] = useState('')
    const [debounceFilter] = useDebounce (filter,0)


    useEffect(()=>{
        getPokemon(filter).then((pokemon)=> setPokemon(pokemon));
        


    },[debounceFilter]);

    const handleChangeFilter =(e)=>{
        const StringtoLower = e.target.value.toLowerCase().trim();
        setFilter(StringtoLower)
    }
    console.log(pokemon)
    return (
        
    <>
   
    {
    filter !== '' && filter== pokemon.name?(<><h1>{pokemon.name}</h1>
    <img src={pokemon.img} rel={pokemon.name}/></>) 
    :
    "Introduzca el nombre del pokemon"}
    

    <input type="text" value={filter} onChange={(e)=> handleChangeFilter(e)}/>
    </>
    
    )
 

}