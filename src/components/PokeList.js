import React from "react";
import Pokemon from "./Pokemon";

const renderList = pokemons => {
  return pokemons.map(pokemon => {
    return <Pokemon key={pokemon.id} pokemon={pokemon} />;
  });
};

const PokeList = props => {
  return <ul className="pokemon-list">{renderList(props.pokemons)}</ul>;
};

export default PokeList;
