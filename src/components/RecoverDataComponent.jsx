
import { useEffect, useState } from "react";
import { getPokemon } from "../api/apiCalls";
import {useDebounce} from "use-debounce"
import { Card } from "./card";
import "./RecoverDataComponent.css";


export const RecoverDataComponent = () =>{
    const [pokemon, setPokemon] = useState ({
        name: '',
        img: ''
    });

    const [filter, setFilter] = useState('')
    const [debounceFilter] = useDebounce (filter, 900)


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
   
    {<Card  filter={filter} pokemon= {pokemon} />}
    <input type="text" placeholder="pikachu" value={filter} onChange={(e)=> handleChangeFilter(e)}/>
    </>
    
    )
 

}