import React from "react";
import Pagination from "./Pagination";
import PokeItem from "./PokeItem";

export default function PokeList(props) {
  const {
    pokemons,
    handleNextClick,
    handlePrevClick,
    handleNameClick,
    chosenPokemon,
    isListFetched,
  } = props;

  const pokemonsList = isListFetched
    ? pokemons.results.map((el, i) => (
        <PokeItem
          data={el}
          key={el.name}
          handleNameClick={handleNameClick}
          chosenPokemon={chosenPokemon}
        />
      ))
    : new Array(20).fill(0).map((el, i) => (
        <li className='item' key={i}>
          <p>...</p>
        </li>
      ));

  return (
    <>
      <>
        <ul className='list'>{pokemonsList}</ul>
        <Pagination
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
          next={pokemons.next}
          prev={pokemons.previous}
        />
      </>
    </>
  );
}
