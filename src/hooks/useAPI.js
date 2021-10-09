import { useState, useEffect } from "react";
import { fetchData } from "../utils/functions";

export default function useAPI(props) {
  const [pokemons, setPokemons] = useState([]);
  const [isListFetched, setIsListFetched] = useState(false);

  useEffect(() => {
    fetchData(
      "https://pokeapi.co/api/v2/pokemon",
      setPokemons,
      setIsListFetched
    );
  }, []);

  const handleNextClick = () => {
    if (pokemons.next) {
      fetchData(pokemons.next, setPokemons, setIsListFetched);
    }
  };
  
  const handlePrevClick = () => {
    if (pokemons.previous) {

      fetchData(pokemons.previous, setPokemons, setIsListFetched);
    }
  };

  return { pokemons, handleNextClick, handlePrevClick, isListFetched };
}
