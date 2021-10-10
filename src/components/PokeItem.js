import React from "react";

export default function PokeItem(props) {
  const { data, handleNameClick, chosenPokemon } = props;
  const url = data.url;

  return (
    <li
      className={`item${chosenPokemon?.name === data.name ? ' active' : ''}`}
      onClick={() => handleNameClick(url)}
    >
      <p>{data.name}</p>
    </li>
  );
}
