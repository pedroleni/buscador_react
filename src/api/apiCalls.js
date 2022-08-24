const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemon = async (name) =>{
    const data = await fetch(`${URL}${name}`);
    const dataJson = await data.json();
    return {
        name: dataJson.name,
        img: dataJson.sprites.other.dream_world.front_default

        
    }
}