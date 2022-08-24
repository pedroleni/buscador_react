
export const Card = ({filter, pokemon}) =>{
return (
   
   filter !== '' && filter== pokemon.name?(
   <div className="info_pokemon">
      <h1>{pokemon.name}</h1>
      <div className="img_pokemon"><img src={pokemon.img} rel={pokemon.name}/></div>
   </div>) 
    :
    <p className="text_initial">"Introduzca el nombre del pokemon"</p>)}